import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
const root=new URL('../',import.meta.url)
const json=async path=>JSON.parse(await readFile(new URL(path,root),'utf8'))

test('每个响应式业务端的中英文页面路径唯一且包含首页',async()=>{
  const metadata=await json('.tpl/template.json')
  for(const surface of metadata.surfaces){
    assert.deepEqual([...surface.locales].sort(),['en','zh'])
    assert.ok(surface.pages.some(page=>page.slug===''))
    assert.equal(new Set(surface.pages.map(page=>page.slug)).size,surface.pages.length)
    for(const page of surface.pages){
      assert.ok(page.title.trim())
      assert.ok(page.localizedTitles?.en?.trim(),`页面 ${page.slug} 缺少英文标题`)
      assert.ok(!page.slug.startsWith('/')&&!page.slug.endsWith('/')||page.slug==='')
      assert.ok(!page.slug.split('/').includes('en'),'语言前缀由路由生成，禁止重复注册')
    }
  }
})

test('运行环境变量不含秘密，所有声明都必须明确可见范围',async()=>{
  const schema=await json('.tpl/contracts/env.schema.json')
  for(const [name,property] of Object.entries(schema.properties)){
    assert.equal(property.type,'string',name)
    assert.equal(typeof property['x-secret'],'boolean',name)
    assert.ok(['server','public'].includes(property['x-exposure']),name)
    if(property['x-secret']){
      assert.equal(property['x-exposure'],'server',name)
      assert.ok(!Object.hasOwn(property,'default'),name)
    }
  }
})

test('未获素材商业授权时不能声明允许公开市场分发',async()=>{
  const metadata=await json('.tpl/template.json')
  if(['restricted','unlicensed'].includes(metadata.license.type)){
    assert.equal(metadata.listed,false)
    assert.equal(metadata.license.redistributionAllowed,false)
  }
  assert.equal(metadata.gitUrl,'https://github.com/weelume/linoxa-template')
  assert.ok(metadata.license.file.startsWith('docs/'))
})
