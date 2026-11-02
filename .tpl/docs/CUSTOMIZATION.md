# 修改指南

先读取实际源码与现有行为，保留使用者已有修改。`.tpl/customization.json` 提供 6 类真实修改入口；它不是文件白名单，也不要求把所有内容改为一张配置表。

| 目标 | 实际入口 | 检查重点 |
| --- | --- | --- |
| 品牌 | `config/brand.ts`、`host.tsx`、`components/Layout.tsx` | 品牌集中维护；默认独立站不依赖消费方 |
| 工作室、服务、FAQ、轮播 | `content/studio.ts` | 中英文、无障碍标签与图片含义一致 |
| 项目、文章、分类、详情 | `content/collections.ts` | slug 唯一、正文独立、列表和详情标题一致 |
| 报价与表单 | `pages/PricingPage.tsx`、`pages/ContactPage.tsx` | 演示信息明确；本地校验不发送、不保存 |
| 主题与排版 | `theme.css`、`pages/collections.css` | 使用令牌，检查明暗对比、字体、三端、滚动条作用域 |
| 公共动效和交互 | `components/Motion.tsx`、`Interactions.tsx`、`Layout.tsx` | 对照 `docs/MOTION.md` 检查初始、运行、结束、暂停与减动 |
| 页面组合 | `pages/` | 复用公共组件，不把所有内页合成单文件 |
| 页面与语言路由 | `template.tsx`、`types.ts`、`src/app/` | 中文默认、英文 `/en`，未知路径真实 404 |
| 本地素材 | `public/templates/linoxa/`、`docs/ASSETS.md` | 图片加载、视频实际播放、逐项来源及权利 |
| 展示截图 | `.tpl/assets/`、`content/screenshots.json`、`.tpl/template.json` | 真实页面、对应页 slug、实际解码尺寸 |
| 工具链与环境 | `package.json`、锁、`.env.example`、`project.json`、环境 Schema | 固定版本、冻结安装、变量曝光范围、服务就绪和停止 |

上表未带前缀的应用入口均在 `src/features/linoxa/` 内。品牌和文案变更同时更新相关市场描述。新增页面需同步运行注册、`.tpl/template.json` 与必要截图；同一响应式站点不要按设备重复注册业务端。语言切换应保持查询参数与锚点，不能产生重复 `/en`。

先运行适用的 `pnpm typecheck`、`pnpm lint`、`pnpm test`。影响路由、资源、样式整体或包出口时，在本地 WSL Linux 文件系统执行 `pnpm build`，再检查受影响页面。按影响范围验证，不把每次小改动都扩大为全站截图或打包。

动效改动不能只看静态截图。循环检查暂停与恢复，视频检查时间推进，横向区域检查触控和键盘，菜单检查背景锁定恢复。未对照原站或未测试的项目明确保留未验证状态。

新增或升级依赖须获得明确授权，锁文件由 pnpm 生成；不得引入私密配置、真实业务数据、静默兜底或消费方专属接入资料。
