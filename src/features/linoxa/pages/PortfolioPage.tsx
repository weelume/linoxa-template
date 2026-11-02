'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Reveal, SplitTitle, CTA } from '../components/Motion'
import { projects, projectCategories, collectionHref, collectionDate, type Project, type CollectionLocale } from '../content/collections'
import './collections.css'

interface PortfolioProps { locale?: CollectionLocale; basePath: string; variant?: 1 | 2 | 3 }

export function ProjectCard({ project, locale, basePath, index = 0 }: { project: Project; locale: CollectionLocale; basePath: string; index?: number }) {
  return <Reveal className="lx-project-reveal" delay={(index % 3) * 0.07}>
    <article className="lx-project-card">
      <Link href={collectionHref(basePath, locale, `projects/${project.slug}`)} className="lx-project-image-link" aria-label={project.title[locale]}>
        <img src={`/templates/linoxa/${project.image}`} alt={project.title[locale]} loading="lazy" />
        <div className="lx-project-image-overlay"><p>{project.summary[locale]}</p><span>{locale === 'zh' ? '查看项目' : 'View project'}</span></div>
        <span className="lx-project-category">{project.categoryLabel[locale]}</span>
      </Link>
      <div className="lx-project-caption"><div><time dateTime={project.date}>{collectionDate(project.date, locale)}</time><h2><Link href={collectionHref(basePath, locale, `projects/${project.slug}`)}>{project.title[locale]}</Link></h2></div><span className="lx-project-number">{String(index + 1).padStart(2, '0')}</span></div>
    </article>
  </Reveal>
}

export function PortfolioPage({ locale = 'zh', basePath, variant = 1 }: PortfolioProps) {
  const [category, setCategory] = useState<Project['category'] | 'all'>('all')
  const [limit, setLimit] = useState(variant === 3 ? 3 : 6)
  const filtered = projects.filter(project => category === 'all' || project.category === category)
  const chooseCategory = (value: Project['category'] | 'all') => { setCategory(value); setLimit(variant === 3 ? 3 : 6) }
  const title = variant === 3
    ? (locale === 'zh' ? '专注每一处真实的改变' : 'Focused on measurable results')
    : (locale === 'zh' ? '作品集' : 'Portfolio')
  return <Layout locale={locale} basePath={basePath} dark={variant !== 2}>
    <div className={`lx-collection-scope lx-portfolio-page lx-portfolio-${variant}`}>
      <header className={`lx-collection-heading ${variant !== 2 ? 'lx-collection-heading-image' : ''}`}>
        {variant !== 2 && <img className="lx-collection-heading-background" src={`/templates/linoxa/${variant === 3 ? 'iFFetACpjQ2hNIpsyUf5xCTL1M.webp' : '77jWTeNBpLJ1sdqjqOkqb3NKA14.webp'}`} alt="" />}
        <div className="lx-collection-container">
          <Reveal><p className="lx-collection-eyebrow">{locale === 'zh' ? '以设计回应生活' : 'Built for visionary design'}</p></Reveal>
          <SplitTitle as="h1">{title}</SplitTitle>
          <Reveal delay={0.15}><p className="lx-collection-intro">{variant === 2 ? (locale === 'zh' ? '这些年的建筑探索与空间实践。用结构、光线和细节，为每一种生活寻找恰当的表达。' : 'Architectural explorations and design projects developed over the years.') : (locale === 'zh' ? '一份关于概念、场所与人的作品记录。我们把清晰的愿景转化为可以体验的空间。' : 'A curated showcase of conceptual designs and architectural explorations.')}</p></Reveal>
          {variant === 3 && <CTA href={collectionHref(basePath, locale, 'contact-one')}>{locale === 'zh' ? '开始你的项目' : 'Get started'}</CTA>}
        </div>
      </header>
      <section className="lx-collection-container lx-collection-section" aria-label={locale === 'zh' ? '建筑作品' : 'Architecture projects'}>
        <div className="lx-collection-toolbar">
          <div className="lx-collection-filters" role="group" aria-label={locale === 'zh' ? '筛选作品分类' : 'Filter projects by category'}>
            <button type="button" aria-pressed={category === 'all'} onClick={() => chooseCategory('all')}>{locale === 'zh' ? '全部作品' : 'All projects'} <span>{projects.length}</span></button>
            {(Object.keys(projectCategories) as Project['category'][]).map(key => <button type="button" key={key} aria-pressed={category === key} onClick={() => chooseCategory(key)}>{projectCategories[key][locale]}</button>)}
          </div>
          <p className="lx-collection-result" role="status">{locale === 'zh' ? `${filtered.length} 个项目` : `${filtered.length} projects`}</p>
        </div>
        <div className="lx-project-grid" key={category}>
          {filtered.slice(0, limit).map((project, index) => <ProjectCard key={project.slug} project={project} locale={locale} basePath={basePath} index={index} />)}
        </div>
        {limit < filtered.length && <div className="lx-collection-load"><button type="button" className="lx-collection-load-button" onClick={() => setLimit(value => value + (variant === 3 ? 3 : 6))}>{locale === 'zh' ? '加载更多作品' : 'Load more projects'}</button><p>{locale === 'zh' ? `已展示 ${Math.min(limit, filtered.length)} / ${filtered.length}` : `Showing ${Math.min(limit, filtered.length)} of ${filtered.length}`}</p></div>}
      </section>
      <section className="lx-collection-bridge">
        <div className="lx-collection-container"><Reveal><p className="lx-collection-eyebrow">{locale === 'zh' ? '从想法开始' : 'A new perspective'}</p><SplitTitle>{locale === 'zh' ? '设计让生活更有可能' : 'Designing spaces that inspire living'}</SplitTitle><p>{locale === 'zh' ? '从功能、可持续性与细节出发，为你的下一个空间建立清晰的方向。' : 'We craft architectural solutions that blend functionality, sustainability and timeless design.'}</p><CTA href={collectionHref(basePath, locale, 'contact-one')}>{locale === 'zh' ? '聊聊你的想法' : 'Get in touch'}</CTA></Reveal></div>
      </section>
    </div>
  </Layout>
}
export default PortfolioPage
