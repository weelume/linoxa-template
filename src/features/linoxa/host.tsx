'use client'
import {createContext,useContext,type ReactNode} from 'react'
import type {HostConfig} from './types'
const Host=createContext<HostConfig>({})
export function LinoxaHostProvider({children,...config}:HostConfig&{children:ReactNode}){return <Host.Provider value={config}>{children}</Host.Provider>}
export const useHost=()=>useContext(Host)
