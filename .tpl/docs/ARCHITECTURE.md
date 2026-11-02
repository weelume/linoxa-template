# 架构与边界

使用 Next.js App Router、React、strict TypeScript 和现有 framer-motion。39 页共用一个响应式 `site` 业务端，默认中文与 `/en` 英文，不按设备复制实现。站内导航使用 Next Link；语言切换保留当前页、查询参数和锚点。

## 实际模块职责

| 入口 | 职责 |
| --- | --- |
| `src/app/[[...slug]]/page.tsx` | 从语言前缀和 slug 选择注册页 |
| `src/app/not-found.tsx` | 未知路径加载已注册 404 |
| `src/app/layout.tsx`、`globals.css` | 独立文档外壳与最小全局样式 |
| `src/features/linoxa/template.tsx` | 共享模板元数据、39 页异步注册 |
| `src/features/linoxa/types.ts` | 页面属性、语言、素材和路径工具 |
| `src/features/linoxa/host.tsx` | 显式消费方配置 Context，不依赖消费方源码 |
| `src/features/linoxa/config/brand.ts` | 品牌、Logo、联系信息与版权 |
| `src/features/linoxa/content/studio.ts` | 工作室、服务、轮播及 FAQ 双语内容 |
| `src/features/linoxa/content/collections.ts` | 12 项目、9 文章、分类、日期和路径工具 |
| `src/features/linoxa/content/screenshots.json` | 运行时展示截图注册 |
| `src/features/linoxa/components/Layout.tsx` | 导航、菜单、语言、页脚和文档主题生命周期 |
| `src/features/linoxa/components/Motion.tsx` | 入场、分字、视差、计数、按钮和滚动文字 |
| `src/features/linoxa/components/Interactions.tsx` | 轮播、视频、FAQ 与服务切换 |
| `src/features/linoxa/pages/` | 首页、工作室、作品、期刊、方案、联系与详情组合 |
| `src/features/linoxa/theme.css`、`pages/collections.css` | 主题令牌、排版、明暗区块、三端布局及局部样式 |
| `public/templates/linoxa/` | 本地运行图片、字体与视频 |
| `.tpl/assets/` | 实际展示截图，独立于运行素材 |
| `docs/ASSETS.md`、`docs/MOTION.md` | 素材来源、权利和动效边界 |

方案名称、演示报价、功能对比及表单字段目前保留在 `PricingPage.tsx`、`ContactPage.tsx` 内，修改时应同时维护两种语言。跨页面交互已经提取为公共组件；新增复杂用例应沿既有职责继续拆分，不复制实现。

## 数据流与错误

本地配置进入页面组合；内容集合驱动列表、筛选、加载更多、详情和相关推荐。未知详情 slug 明确报错，不展示另一条内容。表单只本地校验，成功提示明确未发送或保存。视频记录本地加载失败并提供错误语义，浏览器自动播放限制不能被误报为已经播放。

滚动条以模板主题限定作用域；菜单打开时锁定背景并在关闭时恢复。系统减少动态设置被公共动效与局部样式使用，具体覆盖与限制见 `docs/MOTION.md`。

## 交付边界

`package.json` 的 `template` 与 `host` 导出面向消费方，包只携带通用源码、运行素材与声明的展示资料。独立工程不保存消费方专属品牌、路径或接入历史。

`project.json` 的操作采用参数数组。安装可以访问包注册表；应用没有数据库、业务持久化或外部发送。构建与 bundle 检查本地 WSL Linux 文件系统；包清单排除 `.git`、依赖和构建缓存。`ready` 与报告通过、素材授权、发布状态分开判断。
