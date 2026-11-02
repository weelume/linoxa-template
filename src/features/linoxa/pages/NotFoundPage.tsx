'use client'
import {Layout} from '../components/Layout'
import {CTA,SplitTitle} from '../components/Motion'
import {href,type PageProps} from '../types'
export default function NotFoundPage({locale='zh',basePath=''}:PageProps){return <Layout locale={locale} basePath={basePath}><section className="lx-not-found"><div className="lx-error-number" aria-hidden="true">404</div><SplitTitle as="h1">{locale==='zh'?'这个空间 还没有被找到':'Oops! page not found'}</SplitTitle><CTA href={href(basePath,locale)}>{locale==='zh'?'回到首页':'Back to home'}</CTA></section></Layout>}
