# Linoxa 模板使用入口

独立 Git 模板，协议 `git-template` 0.2.0，模板版本 1.0.0。`template.json` 登记 39 页双语内容、页面结构与展示截图；`project.json` 登记工具链、环境、操作与服务合同。`ready` 表示交付合同和应用实现已具备，不等于全部动效、授权或部署已经通过。

固定首读本文件、`template.json`、`project.json`，再按需求查阅：

- `docs/ARCHITECTURE.md`：实际模块入口、数据流和共享包边界。
- `docs/CUSTOMIZATION.md`：品牌、双语内容、主题、素材、动效与页面修改。
- `docs/VERIFICATION.md`：命令、三端交互、动效验收方式及真实限制。
- `docs/LICENSE.md`：源码、参考素材、字体和协议工具的许可边界。
- 根 `docs/MOTION.md`：原站观察与当前动效实现，明确未量化和未验证项。

运行准备、地址、停止和打包见根 `README.md`。默认中文，英文以 `/en` 为基础路径；安装、构建与打包在本地 WSL Linux 文件系统执行。表单只作本地校验，无数据库、真实凭据、支付或外部发送。

阅读资料不会自动安装、运行、发送、上传或发布。当前验收以摘要匹配的 `.tpl/reports/verification.json` 为准；没有该报告时不得把 `ready` 或格式检查当成完整功能通过。
