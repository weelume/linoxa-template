'use client'

import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Reveal, SplitTitle, ParallaxImage, CTA } from '../components/Motion'
import { projects, articles, collectionHref, collectionDate, type Project, type Article, type CollectionLocale } from '../content/collections'
import { ProjectCard } from './PortfolioPage'
import { ArticleCard } from './BlogPage'
import './collections.css'

interface DetailProps { locale?: CollectionLocale; basePath: string; kind: 'project' | 'article'; slug: string }

function ProjectDetail({ project, locale, basePath }: { project: Project; locale: CollectionLocale; basePath: string }) {
  const related = projects.filter(item => item.slug !== project.slug).sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category)).slice(0, 2)
  return <Layout locale={locale} basePath={basePath} dark={false}>
    <div className="lx-collection-scope lx-project-detail">
      <header className="lx-collection-container lx-detail-heading"><Reveal><p className="lx-collection-eyebrow">{locale === 'zh' ? '项目作品' : 'Projects'}</p></Reveal><SplitTitle as="h1">{project.title[locale]}</SplitTitle><Reveal delay={0.1}><dl className="lx-project-facts"><div><dt>{locale === 'zh' ? '服务' : 'Services'}</dt><dd>{project.service[locale]}</dd></div><div><dt>{locale === 'zh' ? '类型' : 'Type'}</dt><dd>{project.categoryLabel[locale]}</dd></div><div><dt>{locale === 'zh' ? '项目日期' : 'Project date'}</dt><dd>{collectionDate(project.date, locale)}</dd></div><div><dt>{locale === 'zh' ? '客户' : 'Client'}</dt><dd>{project.client}</dd></div></dl></Reveal></header>
      <div className="lx-detail-main-image"><ParallaxImage src={project.gallery[0] ?? project.image} alt={project.title[locale]} /></div>
      <section className="lx-collection-container lx-project-story">
        <aside className="lx-project-sidebar"><Reveal><p className="lx-collection-eyebrow">{locale === 'zh' ? '为生活精选的设计' : 'Our best work, curated for you'}</p><h2>{project.concept[locale]}</h2><p>{project.summary[locale]}</p><p className="lx-project-location">{project.location[locale]}</p><h3>{locale === 'zh' ? '项目内容' : 'Project files'}</h3><ul className="lx-project-files">{project.files.map(file => <li key={file.en}>{file[locale]}</li>)}</ul></Reveal></aside>
        <div className="lx-project-overview"><Reveal><p className="lx-collection-eyebrow">{locale === 'zh' ? '项目概述' : 'Project overview'}</p><SplitTitle>{locale === 'zh' ? '用建筑、细节与创造力构成有意义的空间' : 'Creating meaningful spaces through architecture, detail and creativity'}</SplitTitle>{project.overview.map((paragraph, index) => <p key={index}>{paragraph[locale]}</p>)}</Reveal></div>
      </section>
      <section className="lx-collection-container lx-project-gallery" aria-label={locale === 'zh' ? '项目空间图片' : 'Project gallery'}>{project.gallery.slice(1).map((image, index) => <Reveal key={image} delay={(index % 2) * 0.08}><figure><img src={`/templates/linoxa/${image}`} alt={`${project.title[locale]} · ${locale === 'zh' ? '空间细节' : 'Spatial detail'} ${index + 1}`} loading="lazy" /><figcaption>{String(index + 1).padStart(2, '0')} / {project.title[locale]}</figcaption></figure></Reveal>)}</section>
      <section className="lx-collection-container lx-related-section"><div className="lx-related-heading"><SplitTitle>{locale === 'zh' ? '继续探索我们的作品' : 'Our latest projects'}</SplitTitle><CTA href={collectionHref(basePath, locale, 'portfolio-one')}>{locale === 'zh' ? '全部作品' : 'All projects'}</CTA></div><div className="lx-project-grid">{related.map((item, index) => <ProjectCard key={item.slug} project={item} locale={locale} basePath={basePath} index={index} />)}</div></section>
    </div>
  </Layout>
}

function ArticleDetail({ article, locale, basePath }: { article: Article; locale: CollectionLocale; basePath: string }) {
  const related = articles.filter(item => item.slug !== article.slug).sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).slice(0, 2)
  return <Layout locale={locale} basePath={basePath} dark>
    <div className="lx-collection-scope lx-article-detail">
      <header className="lx-collection-heading lx-collection-heading-image lx-article-detail-heading"><img className="lx-collection-heading-background" src={`/templates/linoxa/${article.coverImage}`} alt="" /><div className="lx-collection-container"><Reveal><p className="lx-collection-eyebrow">{article.categoryLabel[locale]}</p></Reveal><SplitTitle as="h1">{article.title[locale]}</SplitTitle><Reveal delay={0.15}><div className="lx-detail-author"><img src={`/templates/linoxa/${article.authorImage}`} alt="" /><div><span>{locale === 'zh' ? '作者：' : 'Author: '}{article.author}</span><p>{locale === 'zh' ? '建筑与设计撰稿人' : 'Architecture & design contributor'}</p></div><time dateTime={article.date}>{collectionDate(article.date, locale)}</time></div></Reveal></div></header>
      <div className="lx-collection-container lx-article-body-layout">
        <aside className="lx-article-toc"><p>{locale === 'zh' ? '文章目录' : 'In this article'}</p><nav aria-label={locale === 'zh' ? '文章章节' : 'Article sections'}>{article.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.heading.en}>{String(index + 1).padStart(2, '0')} <span>{section.heading[locale]}</span></a>)}</nav><span>{locale === 'zh' ? `${article.readingMinutes} 分钟阅读` : `${article.readingMinutes} min read`}</span></aside>
        <article className="lx-article-prose"><Reveal><p className="lx-article-lead">{article.intro[locale]}</p></Reveal>{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading.en}><Reveal><h2>{section.heading[locale]}</h2><p>{section.body[locale]}</p></Reveal>{index === 0 && <Reveal><figure><img src={`/templates/linoxa/${article.image}`} alt={article.title[locale]} loading="lazy" /><figcaption>{article.summary[locale]}</figcaption></figure></Reveal>}{index === 1 && <Reveal><blockquote><p>{article.quote[locale]}</p></blockquote></Reveal>}</section>)}<Reveal><ul className="lx-article-takeaways">{article.bullets.map(bullet => <li key={bullet.en}>{bullet[locale]}</li>)}</ul><div className="lx-article-end"><span>{article.categoryLabel[locale]}</span><Link href={collectionHref(basePath, locale, 'blog-one')}>{locale === 'zh' ? '返回全部文章' : 'Back to all articles'}</Link></div></Reveal></article>
      </div>
      <section className="lx-collection-container lx-related-section"><div className="lx-related-heading"><SplitTitle>{locale === 'zh' ? '更多关于空间的思考' : 'More perspectives on space'}</SplitTitle><CTA href={collectionHref(basePath, locale, 'blog-one')}>{locale === 'zh' ? '全部文章' : 'All articles'}</CTA></div><div className="lx-related-articles">{related.map((item, index) => <ArticleCard key={item.slug} article={item} locale={locale} basePath={basePath} index={index} />)}</div></section>
    </div>
  </Layout>
}

export function DetailPage({ locale = 'zh', basePath, kind, slug }: DetailProps) {
  // 注册表只应传入已存在的 slug；未知内容显式失败，不能展示另一个条目的详情。
  if (kind === 'project') {
    const project = projects.find(item => item.slug === slug.replace(/^projects\//, ''))
    if (!project) throw new Error(`Unknown project: ${slug}`)
    return <ProjectDetail project={project} locale={locale} basePath={basePath} />
  }
  const article = articles.find(item => item.slug === slug.replace(/^blog\//, ''))
  if (!article) throw new Error(`Unknown article: ${slug}`)
  return <ArticleDetail article={article} locale={locale} basePath={basePath} />
}
export default DetailPage
