import json
import os
import html
import urllib.request
import urllib.parse
from datetime import datetime, timezone, timedelta


def handler(event: dict, context) -> dict:
    """Принимает заявку с формы сайта и отправляет уведомление в Telegram.
    Args: event с httpMethod, body (name, phone, message, source, page)
    Returns: HTTP-ответ с результатом отправки
    """
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }

    raw_body = event.get('body') or '{}'
    body_data = json.loads(raw_body)
    name = str(body_data.get('name', '')).strip()[:200]
    phone = str(body_data.get('phone', '')).strip()[:50]
    message = str(body_data.get('message', '')).strip()[:1500]
    source = str(body_data.get('source', 'Сайт')).strip()[:200]
    page = str(body_data.get('page', '')).strip()[:300]

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Укажите имя и телефон'})
        }

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': 'Telegram не настроен'})
        }

    esc = html.escape
    msk = datetime.now(timezone(timedelta(hours=3))).strftime('%d.%m.%Y %H:%M')

    text_lines = [
        '🔔 <b>Новая заявка с сайта</b>',
        '',
        f'👤 Имя: {esc(name)}',
        f'📞 Телефон: {esc(phone)}',
    ]
    if message:
        text_lines.append(f'💬 Сообщение: {esc(message)}')
    text_lines.append(f'📍 Источник: {esc(source)}')
    if page:
        text_lines.append(f'🔗 Страница: {esc(page)}')
    text_lines.append(f'🕒 Время (МСК): {msk}')

    text = '\n'.join(text_lines)

    tg_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = urllib.parse.urlencode({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML',
        'disable_web_page_preview': 'true'
    }).encode()

    req = urllib.request.Request(tg_url, data=payload, method='POST')

    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            resp.read()
    except Exception as e:
        print(f'Telegram error: {type(e).__name__}')
        return {
            'statusCode': 502,
            'headers': headers,
            'body': json.dumps({'error': 'Не удалось отправить в Telegram'})
        }

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True})
    }
