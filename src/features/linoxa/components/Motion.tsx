'use client'
import Link from 'next/link'
import {motion,useScroll,useTransform,useReducedMotion,useInView,animate} from 'framer-motion'
import {useEffect,useRef,useState,type ReactNode} from 'react'
import {asset,type Locale} from '../types'
const ease=[0.22,1,0.36,1] as const
export function Reveal({children,className='',delay=0,direction='up'}:{children:ReactNode;className?:string;delay?:number;direction?:'up'|'left'|'right'}){
 const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,x:direction==='left'?-60:direction==='right'?60:0,y:direction==='up'?40:0}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:0.12}} transition={{duration:.85,delay,ease}}>{children}</motion.div>
}
export function SplitTitle({children,as='h2',className=''}:{children:string;as?:'h1'|'h2';className?:string}){
 const reduced=useReducedMotion(),Tag=as==='h1'?motion.h1:motion.h2;
 return <Tag className={'lx-split '+className} aria-label={children} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} transition={{staggerChildren:reduced?0:.018}}>{children.split(' ').map((word,i)=><span className="lx-word" aria-hidden="true" key={i}>{Array.from(word).map((letter,j)=><motion.span key={j} variants={{hidden:{opacity:reduced?1:0,y:reduced?0:'105%',rotateX:reduced?0:-35},show:{opacity:1,y:0,rotateX:0}}} transition={{duration:.65,ease}}>{letter}</motion.span>)}{'\u00a0'}</span>)}</Tag>
}
export function CTA({children,href,className=''}:{children:ReactNode;href:string;className?:string}){return <Link className={'lx-button '+className} href={href}><span className="lx-button-label"><span>{children}</span><span aria-hidden="true">{children}</span></span><span className="lx-button-dot" aria-hidden="true"/></Link>}
export function ParallaxImage({src,alt,className=''}:{src:string;alt:string;className?:string}){const ref=useRef<HTMLDivElement>(null),reduced=useReducedMotion(),{scrollYProgress}=useScroll({target:ref,offset:['start end','end start']}),y=useTransform(scrollYProgress,[0,1],['-7%','7%']);return <div ref={ref} className={'lx-parallax '+className}><motion.img src={src.startsWith('/')?src:asset(src)} alt={alt} style={{y:reduced?0:y}} loading="lazy"/></div>}
export function Counter({value,suffix='',label}:{value:number;suffix?:string;label:string}){const ref=useRef<HTMLDivElement>(null),inView=useInView(ref,{once:true}),reduced=useReducedMotion(),[count,setCount]=useState(0);useEffect(()=>{if(!inView)return;const controls=animate(0,value,{duration:reduced?0:1.8,ease:'easeOut',onUpdate:v=>setCount(Math.round(v))});return ()=>controls.stop()},[inView,value,reduced]);return <div className="lx-stat" ref={ref}><strong>{count}{suffix}</strong><p>{label}</p></div>}
export function Marquee({locale}:{locale:Locale}){const reduced=useReducedMotion();return <div className={'lx-marquee '+(reduced?'lx-still':'')} tabIndex={0} aria-label={locale==='zh'?'塑造更有意义的空间':'Shaping smarter spaces'}><div>{Array.from({length:6},(_,i)=><span key={i} aria-hidden={i>0}>{locale==='zh'?'塑造更有意义的空间':'Shaping smarter spaces'} <b>✳</b> </span>)}</div></div>}
