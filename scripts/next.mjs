import {createRequire} from 'node:module'
import {readFile} from 'node:fs/promises'
import {pathToFileURL} from 'node:url'
const command=process.argv[2]
if(!['dev','build','start'].includes(command))throw new Error('使用 dev、build 或 start')
// 构建必须在本地 WSL 的 Linux 文件系统完成，避免在远端或挂载的 Windows 目录编译。
if(command==='build'){
  if(process.platform!=='linux'||!(await readFile('/proc/version','utf8')).toLowerCase().includes('microsoft'))throw new Error('请在本地 WSL Linux 文件系统构建')
  if(process.cwd().startsWith('/mnt/'))throw new Error('构建目录必须位于 WSL Linux 文件系统')
}
process.env.NEXT_TELEMETRY_DISABLED='1'
const cli=createRequire(import.meta.url).resolve('next/dist/bin/next')
process.argv=[process.execPath,cli,command,...(command==='build'?[]:['--hostname',process.env.BIND_HOST||'127.0.0.1','--port',process.env.PORT||'43652']),...process.argv.slice(3)]
await import(pathToFileURL(cli).href)
