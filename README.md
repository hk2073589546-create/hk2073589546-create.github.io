# 许晗的个人网站

根据用户明确要求，以 LandingW/LandingW.github.io 的页面组件和样式为基础替换个人资料。保留原版布局及动效，未带入原作者履历、企业图片、背景图片或知乎同步脚本。

来源：https://github.com/LandingW/LandingW.github.io 。源仓库未声明开源许可证，本项目不对来源代码另行宣称开源授权。

本地运行：`npm install`，然后 `npm run dev`，打开 http://localhost:3100。
生产构建：`npm run build`；静态产物在 `out/`，可部署 GitHub Pages。

正文依据用户提供的《许晗_战斗策划.pdf》整理，编辑 `src/lib/resume.ts` 可更新。`src/app/globals.css` 管理视觉，`src/components` 保留原版页面与动效组件。
用户已明确授权公开邮箱、电话与 PDF 下载，简历在 `public/resume.pdf`。文章及资料暂不编造链接。

公开发布前检查真实经历是否可公开；联系方式、原始简历下载应另行确认。
旧 Mizuki 仍在父目录，退出当前新工程即可继续使用旧博客。
