import { Link, useParams, Navigate } from "@/lib/router-compat";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import QuickLeadForm from "@/components/QuickLeadForm";
import { blogPosts, getPostBySlug } from "@/data/blog";
import type { BlogBlock } from "@/data/blog";

function renderBlock(b: BlogBlock, i: number) {
  switch (b.type) {
    case "h2":
      return <h2 key={i} className="font-oswald text-3xl text-brand-black uppercase mt-12 mb-4 orange-line pb-3">{b.text}</h2>;
    case "h3":
      return <h3 key={i} className="font-oswald text-xl text-brand-black uppercase mt-8 mb-3">{b.text}</h3>;
    case "p":
      return <p key={i} className="text-brand-gray-mid font-golos leading-relaxed text-lg mb-5">{b.text}</p>;
    case "ul":
      return (
        <ul key={i} className="space-y-2 mb-6">
          {b.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-brand-gray-mid font-golos text-lg">
              <span className="w-2 h-2 bg-brand-orange mt-2.5 shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-3 mb-6">
          {b.items.map((it, n) => (
            <li key={it} className="flex items-start gap-4 text-brand-gray-mid font-golos text-lg">
              <span className="w-8 h-8 bg-brand-orange text-white font-oswald flex items-center justify-center shrink-0">{n + 1}</span>
              <span className="pt-0.5">{it}</span>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <div key={i} className="bg-brand-cream border-l-4 border-brand-orange p-6 mb-6 flex gap-4">
          <Icon name="Info" size={22} className="text-brand-orange shrink-0 mt-0.5" />
          <p className="text-brand-black font-golos leading-relaxed">{b.text}</p>
        </div>
      );
    case "table":
      return (
        <div key={i} className="overflow-x-auto mb-8">
          <table className="w-full text-left border border-brand-black/10">
            <thead className="bg-brand-black">
              <tr>
                {b.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-oswald text-sm tracking-wider uppercase text-white">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri} className={ri % 2 ? "bg-brand-cream/60" : "bg-white"}>
                  {r.map((c, ci) => (
                    <td key={ci} className={`px-4 py-3 font-golos text-sm border-t border-brand-black/10 ${ci === 0 ? "text-brand-black font-semibold" : "text-brand-gray-mid"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const more = blogPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);
  const moreFill = more.length < 3 ? [...more, ...blogPosts.filter((p) => p.slug !== post.slug && !more.includes(p)).slice(0, 3 - more.length)] : more;

  return (
    <Layout>
      <section className="bg-brand-black py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link to="/" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <Link to="/blog" className="text-brand-gray-light text-sm hover:text-brand-orange transition-colors">Блог</Link>
            <Icon name="ChevronRight" size={14} className="text-brand-gray-light" />
            <span className="text-brand-orange text-sm">{post.tag}</span>
          </div>
          <h1 className="font-oswald text-3xl md:text-5xl text-white uppercase leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-brand-gray-light text-sm">
            <span className="flex items-center gap-1.5"><Icon name="Calendar" size={14} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Icon name="Clock" size={14} />{post.readTime}</span>
            <span className="bg-brand-orange text-white font-oswald text-xs tracking-widest px-3 py-1 uppercase">{post.tag}</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-brand-black font-golos text-xl leading-relaxed mb-8 pb-8 border-b border-brand-black/10">{post.excerpt}</p>
          {post.blocks.map(renderBlock)}

          <div className="mt-14">
            <h2 className="font-oswald text-3xl text-brand-black uppercase mb-6 orange-line pb-3">Частые вопросы</h2>
            <div className="space-y-4">
              {post.faq.map((f) => (
                <div key={f.q} className="bg-brand-cream p-6 border border-brand-black/10">
                  <h3 className="font-oswald text-lg text-brand-black uppercase mb-2">{f.q}</h3>
                  <p className="text-brand-gray-mid font-golos leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 bg-brand-black p-8">
            <h2 className="font-oswald text-2xl text-white uppercase mb-5">Услуги по теме</h2>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {post.related.map((r) => (
                <Link key={r.href} to={r.href} className="inline-flex items-center justify-between gap-3 border border-white/30 text-white px-5 py-3 font-oswald text-sm tracking-wider uppercase hover:bg-brand-orange hover:border-brand-orange transition-colors">
                  {r.label}
                  <Icon name="ArrowRight" size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <QuickLeadForm source={`Блог: ${post.title}`} />

      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-oswald text-3xl text-brand-black uppercase mb-8 orange-line pb-3">Читайте также</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreFill.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white border border-transparent hover:border-brand-orange hover:shadow-xl transition-all">
                <div className="h-2 bg-brand-orange" />
                <div className="p-6">
                  <span className="bg-brand-orange text-white font-oswald text-xs tracking-widest px-3 py-1 uppercase">{p.tag}</span>
                  <h3 className="font-oswald text-lg text-brand-black uppercase leading-tight mt-4 mb-2 group-hover:text-brand-orange transition-colors">{p.title}</h3>
                  <p className="text-brand-gray-mid text-sm leading-relaxed">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase mb-4">Нужна консультация?</h2>
          <p className="text-brand-gray-light mb-8">Расскажите о задаче, и мы подберём материал, технику или машину для вывоза</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-brand-orange-dark transition-colors">
              <Icon name="Calculator" size={20} />
              Рассчитать стоимость
            </Link>
            <a href="tel:+79953985420" className="inline-flex items-center justify-center gap-3 border border-white text-white px-8 py-4 font-oswald text-lg tracking-wider uppercase hover:bg-white hover:text-brand-black transition-all">
              <Icon name="Phone" size={20} />
              +7 (995) 398-54-20
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}