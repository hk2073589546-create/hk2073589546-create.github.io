// 静态导出使个人站可部署至免费的 GitHub Pages，无需常驻服务器。
import { fileURLToPath } from 'node:url';
export default { output: 'export', outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)), trailingSlash: true, images: { unoptimized: true } };
