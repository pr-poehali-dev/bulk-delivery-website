export const SEND_LEAD_URL = "https://functions.poehali.dev/8437489c-8768-4490-a0ea-b6f90f82f5a2";

interface LeadPayload {
  name: string;
  phone: string;
  message?: string;
  source: string;
}

export async function sendLead(payload: LeadPayload): Promise<void> {
  const res = await fetch(SEND_LEAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, page: window.location.href }),
  });
  if (!res.ok) throw new Error("lead_failed");
}
