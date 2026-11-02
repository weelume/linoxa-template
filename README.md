# Linoxa · 建筑与空间

建筑与室内设计工作室的响应式网站模板。实现 39 个页面：3 套首页、关于、服务、各 3 套作品/期刊/方案/联系页、12 个项目详情、9 篇文章详情及 404。默认中文，英文使用 `/en` 前缀；同一 `site` 业务端适配桌面、平板与手机。

## 能力与边界

深蓝网格、建筑影像、玻璃卡片、本地 MiSans/Poppins 字体与主题滚动条；首屏文字、滚动入场、图片视差、数字增长、轮播切换、视频播放、服务标签、FAQ、菜单和悬浮反馈。作品提供双列、瀑布流与宽幅布局，期刊提供网格、精选加列表与编辑式列表；两者均含分类筛选、加载更多与详情相关推荐。英文切换保留当前页面、查询参数和锚点。

联系表单仅在浏览器本地校验，不发送、不保存、不建立真实咨询。演示报价不会收款或建立订阅；客户、地点、统计和文章均为演示信息。没有数据库、真实后端、支付或邮件服务。参考站全部项目详情与文章详情存在错误内容复用，本实现按 slug 校正标题并提供各自独有的双语演示内容，保留详情结构；不是逐字复制原站正文。

动效类型和实现位置见 `docs/MOTION.md`。尚无全部 39 页原站动画时长、轨迹和缓动的逐帧量化证据，不声明像素或动效 1:1。实际检查与限制以 `.tpl/reports/verification.json` 和当前源码摘要为准。

## 准备、运行与停止

固定 Node 24.16.0（`.nvmrc`）与 pnpm 9.15.4。依赖见 `pnpm-lock.yaml`；执行 `corepack pnpm install --frozen-lockfile`。安装、编译和打包必须在本地 WSL 的 Linux 文件系统完成，不能在 Windows 挂载目录或远端服务器构建。

开发：`pnpm dev`，默认 http://127.0.0.1:43652 。生产：`pnpm build` 后 `pnpm start`。通过进程环境 `PORT` 与 `BIND_HOST` 调整监听，非秘密示例见 `.env.example`；脚本不会自动加载 `.env`。不需要真实凭据。Ctrl+C 只停止本次启动的服务，不关闭其他进程。

## 检查与修改

执行 `pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。`pnpm tpl:check` 只检查协议、Git 索引和资料一致性，不代替页面或动效验收。`project.json` 中各操作使用明确参数数组并声明副作用。

品牌入口 `src/features/linoxa/config/brand.ts`；工作室/服务/FAQ 内容在 `content/studio.ts`，作品与文章在 `content/collections.ts`；报价与表单配置目前在对应页面。主题在 `theme.css` 及 `pages/collections.css`，复用交互在 `components/`，页面组合在 `pages/`，路由在 `template.tsx` 与 `src/app/`。修改前读 `.tpl/docs/CUSTOMIZATION.md`，按影响范围验证。包的 `template` 与 `host` 入口允许消费方显式注入品牌和附加内容，默认独立站不依赖消费方工程。

## 交付与许可

Git 提交源码、锁、`.tpl`、本地运行素材与来源记录，排除依赖、构建产物、缓存、日志和私密配置。`pnpm bundle` 要求干净的已提交源码，仅在本地 WSL Linux 文件系统生成版本化运行包。源码打包不等于部署、上架或素材商业许可。

参考站：https://linoxa.framer.website/ 。参考图片、视频和英文内容的商业再分发许可尚未确认，保持 `listed=false`、`redistributionAllowed=false`；字体分别遵循随附许可。详见 `.tpl/docs/LICENSE.md`、`docs/ASSETS.md`。
