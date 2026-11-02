import {notFound} from 'next/navigation'
import {linoxaTemplate} from '../../features/linoxa/template'
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
  const path=(await params).slug??[]
  const locale=path[0]==='en'?'en':'zh'
  const slug=(locale==='en'?path.slice(1):path).join('/')
  const page=linoxaTemplate.surfaces[0].pages.find(item=>item.slug===slug)
  if(!page)notFound()
  const {default:Component}=await page.load()
  return <Component locale={locale} basePath=""/>
}
