import {linoxaTemplate} from '../features/linoxa/template'
export default async function NotFound(){
  const page=linoxaTemplate.surfaces[0].pages.find(item=>item.slug==='404')
  if(!page)throw new Error('模板必须注册 404 页面')
  const {default:Component}=await page.load()
  return <Component locale="zh" basePath=""/>
}
