import type {ReactNode} from 'react'
export type Locale='zh'|'en'
export interface PageProps {locale?:Locale;basePath:string}
export interface HostConfig {brandName?:Record<Locale,string>;email?:string;logo?:string;marketplaceHref?:string;marketplaceAriaLabel?:Record<Locale,string>;footerExtra?:ReactNode}
export type Copy=readonly [string,string]
export const text=(value:Copy,locale:Locale)=>value[locale==='zh'?0:1]
export const asset=(file:string)=>'/templates/linoxa/'+file
export const href=(base:string,locale:Locale,path='')=>`${base.replace(/\/$/,'')}${locale==='en'?'/en':''}${path?'/'+path:''}`||'/'
