'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Reveal, SplitTitle } from '../components/Motion'
import { articles, articleCategories, collectionHref, collectionDate, type Article, type CollectionLocale } from '../content/collections'
import './collections.css'

interface BlogProps { locale?: CollectionLocale; basePath: string; variant?: 1 | 2 | 3 }

export function ArticleCard({ article, locale, basePath, index = 0, featured = false }: { article: Article; locale: CollectionLocale; basePath: string; index?: number; featured?: boolean }) {
  const href = collectionHref(basePath, locale, `blog/${article.slug}`)
  return <Reveal delay={(index % 3) * 0.07} className={`lx-article-reveal ${featured ? 'lx-article-featured' : ''}`}>
    <article className="lx-article-card">
      <Link href={href} className="lx-article-image-link" aria-label={article.title[locale]}><img src={`/templates/linoxa/${article.image}`} alt={article.title[locale]} loading="lazy" /><span className="lx-article-category">{article.categoryLabel[locale]}</span></Link>
      <div className="lx-article-copy"><div className="lx-article-meta"><time dateTime={article.date}>{collectionDate(article.date, locale)}</time><span>{locale === 'zh' ? `${article.readingMinutes} 分钟阅读` : `${article.readingMinutes} min read`}</span></div><h2><Link href={href}>{article.title[locale]}</Link></h2><p className="lx-article-summary">{article.summary[locale]}</p><div className="lx-article-author"><img src={`/templates/linoxa/${article.authorImage}`} alt="" loading="lazy" /><span>{article.author}</span></div><Link href={href} className="lx-article-read">{locale === 'zh' ? '阅读文章' : 'Discover more'}</Link></div>
    </article>
  </Reveal>
}

export function BlogPage({ locale = 'zh', basePath, variant = 1 }: BlogProps) {
  const [category, setCategory] = useState<Article['category'] | 'all'>('all')
  const [limit, setLimit] = useState(variant === 3 ? 5 : 6)
  const filtered = articles.filter(article => category === 'all' || article.category === category)
  const title = variant === 1 ? (locale === 'zh' ? '与建筑师一起构想独特空间' : 'Collaborating with architects for custom designs') : (locale === 'zh' ? '阅读我们最新的设计札记' : 'Checkout our latest blog posts')
  return <Layout locale={locale} basePath={basePath} dark={variant === 1}>
    <div className={`lx-collection-scope lx-blog-page lx-blog-${variant}`}>
      <header className={`lx-collection-heading ${variant === 1 ? 'lx-collection-heading-image' : ''}`}>
        {variant === 1 && <img className="lx-collection-heading-background" src="/templates/linoxa/Gaxdl4ApsywmhxdIjrUjNe9sE.webp" alt="" />}
        <div className="lx-collection-container"><Reveal><p className="lx-collection-eyebrow">{locale === 'zh' ? '观点、灵感与空间故事' : 'Notes, ideas and longer reads'}</p></Reveal><SplitTitle as="h1">{title}</SplitTitle><Reveal delay={0.14}><p className="lx-collection-intro">{locale === 'zh' ? '关于建筑如何回应生活的持续观察。从材料细节到城市尺度，每一次阅读都带来新的视角。' : 'Perspectives on architecture, material and the everyday experience of space.'}</p></Reveal></div>
      </header>
      <section className="lx-collection-container lx-collection-section" aria-label={locale === 'zh' ? '设计文章' : 'Design articles'}>
        <div className="lx-collection-toolbar"><div className="lx-collection-filters" role="group" aria-label={locale === 'zh' ? '筛选文章分类' : 'Filter articles by category'}>
          <button type="button" aria-pressed={category === 'all'} onClick={() => { setCategory('all'); setLimit(variant === 3 ? 5 : 6) }}>{locale === 'zh' ? '全部文章' : 'All articles'} <span>{articles.length}</span></button>
          {(Object.keys(articleCategories) as Article['category'][]).map(key => <button type="button" key={key} aria-pressed={category === key} onClick={() => { setCategory(key); setLimit(variant === 3 ? 5 : 6) }}>{articleCategories[key][locale]}</button>)}
        </div><p className="lx-collection-result" role="status">{locale === 'zh' ? `${filtered.length} 篇文章` : `${filtered.length} articles`}</p></div>
        <div className="lx-article-grid" key={category}>{filtered.slice(0, limit).map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} basePath={basePath} index={index} featured={variant === 2 && index === 0} />)}</div>
        {limit < filtered.length && <div className="lx-collection-load"><button type="button" className="lx-collection-load-button" onClick={() => setLimit(value => value + 3)}>{locale === 'zh' ? '加载更多文章' : 'Load more articles'}</button><p>{locale === 'zh' ? `已展示 ${Math.min(limit, filtered.length)} / ${filtered.length}` : `Showing ${Math.min(limit, filtered.length)} of ${filtered.length}`}</p></div>}
      </section>
    </div>
  </Layout>
}
export default BlogPage
