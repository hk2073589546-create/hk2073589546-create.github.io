import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '许晗 · 战斗策划', description: '角色技能设计、战斗规则、配置实装与项目记录。' };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
