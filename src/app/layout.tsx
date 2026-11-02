import type {ReactNode} from 'react'
import '../features/linoxa/theme.css'
import './globals.css'
export const metadata={title:'Linoxa · 建筑与空间',description:'以设计连接空间与生活 / Architecture for modern living'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh"><body>{children}</body></html>}
