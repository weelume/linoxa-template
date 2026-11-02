import type {ComponentType} from 'react'
import type {PageProps} from './types'
import screenshots from './content/screenshots.json'
import './theme.css'
import {projects,articles} from './content/collections'
interface Page {slug:string;title:string;localizedTitles:{en:string};load:()=>Promise<{default:ComponentType<PageProps>}>}
const pages:Page[]=[
 ...(['','home-two','home-three'] as const).map((slug,i):Page=>({slug,title:['首页 01','首页 02','首页 03'][i],localizedTitles:{en:'Home 0'+(i+1)},load:async()=>{const {default:Page}=await import('./pages/HomePage');return {default:props=><Page {...props} variant={(i+1) as 1|2|3}/>}}})),
 ...(['about','service'] as const).map((slug):Page=>({slug,title:slug==='about'?'关于我们':'设计服务',localizedTitles:{en:slug==='about'?'About':'Service'},load:async()=>{const {default:Page}=await import('./pages/StudioPage');return {default:props=><Page {...props} kind={slug}/>}}})),
 ...(['one','two','three'] as const).flatMap((suffix,i):Page[]=>[
 {slug:'portfolio-'+suffix,title:'精选作品 0'+(i+1),localizedTitles:{en:'Portfolio 0'+(i+1)},load:async()=>{const {default:Page}=await import('./pages/PortfolioPage');return {default:props=><Page {...props} variant={(i+1) as 1|2|3}/>}}},
 {slug:'blog-'+suffix,title:'设计期刊 0'+(i+1),localizedTitles:{en:'Blog 0'+(i+1)},load:async()=>{const {default:Page}=await import('./pages/BlogPage');return {default:props=><Page {...props} variant={(i+1) as 1|2|3}/>}}},
 {slug:'pricing-'+suffix,title:'设计方案 0'+(i+1),localizedTitles:{en:'Pricing 0'+(i+1)},load:async()=>{const {default:Page}=await import('./pages/PricingPage');return {default:props=><Page {...props} variant={(i+1) as 1|2|3}/>}}},
 {slug:'contact-'+suffix,title:'联系我们 0'+(i+1),localizedTitles:{en:'Contact 0'+(i+1)},load:async()=>{const {default:Page}=await import('./pages/ContactPage');return {default:props=><Page {...props} variant={(i+1) as 1|2|3}/>}}},
 ]),
 ...projects.map((project):Page=>({slug:'projects/'+project.slug,title:project.title.zh,localizedTitles:{en:project.title.en},load:async()=>{const {default:Page}=await import('./pages/DetailPage');return {default:props=><Page {...props} kind="project" slug={project.slug}/>}}})),
 ...articles.map((article):Page=>({slug:'blog/'+article.slug,title:article.title.zh,localizedTitles:{en:article.title.en},load:async()=>{const {default:Page}=await import('./pages/DetailPage');return {default:props=><Page {...props} kind="article" slug={article.slug}/>}}})),
 {slug:'404',title:'未找到页面',localizedTitles:{en:'Page not found'},load:()=>import('./pages/NotFoundPage')},
]
export const linoxaTemplate={id:'linoxa',gitUrl:'https://github.com/weelume/linoxa-template',name:'Linoxa · 建筑与空间',localizedNames:{en:'Linoxa · Architecture & Interior Design'},sceneId:'corporate-site',listed:false,tags:['建筑设计','室内空间','中英文','沉浸动效'],summary:'以深蓝网格、建筑影像和动态空间叙事呈现的建筑与室内设计模板，包含三套首页与作品、期刊、价格、联系布局及完整项目详情',accentColor:'#0f1e36',cover:'/templates/linoxa/screenshots/desktop-home.webp',screenshots,surfaces:[{id:'site',name:'官网',platform:'pc' as const,locales:['zh','en'] as const,pages}]}
