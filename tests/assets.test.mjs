import test from 'node:test'
import assert from 'node:assert/strict'
import {readdir,readFile,access} from 'node:fs/promises'
import {join,basename} from 'node:path'
import {projects,articles,collectionHref} from '../src/features/linoxa/content/collections.ts'
const root=new URL('..',import.meta.url).pathname.replace(/^\/([A-Z]:)/,'$1')
async function files(path){const result=[];for(const entry of await readdir(path,{withFileTypes:true})){const target=join(path,entry.name);if(entry.isDirectory())result.push(...await files(target));else result.push(target)}return result}
test('页面源码引用的图片与视频必须真实存在，避免仅验证下载清单遗漏背景图',async()=>{
 const missing=[]
 for(const file of await files(join(root,'src/features/linoxa'))){if(!/\.(tsx?|css|json)$/.test(file))continue;const source=await readFile(file,'utf8');for(const match of source.matchAll(/['"/](\w[\w .()%-]*\.(?:webp|jpg|png|avif|svg|mp4|webm))['")]/g)){const name=basename(match[1]);try{await access(join(root,'public/templates/linoxa',name))}catch{try{await access(join(root,'.tpl/assets',name))}catch{missing.push(name)}}}}
 assert.deepEqual([...new Set(missing)],[])
})
test('全部项目与文章应有唯一双语标题，并保持当前页面语言路径',()=>{
 for(const collection of [projects,articles]){assert.equal(new Set(collection.map(item=>item.slug)).size,collection.length);for(const locale of ['zh','en']){assert.equal(new Set(collection.map(item=>item.title[locale])).size,collection.length);assert.ok(collection.every(item=>item.title[locale].trim()&&item.summary[locale].trim()))}}
 assert.equal(projects.length,12);assert.equal(articles.length,9)
 assert.equal(collectionHref('/en','en','blog-one'),'/en/blog-one')
 assert.equal(collectionHref('/en','zh','blog-one'),'/blog-one')
})
