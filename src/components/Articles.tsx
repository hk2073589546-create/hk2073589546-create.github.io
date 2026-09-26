import FadeUp from './FadeUp';
// 暂无文章链接，仅显示简历中的阅读成绩及获准公开的 PDF；不启用同步任务。
export default function Articles(){return <section id="articles" className="section" style={{borderTop:'1px solid var(--border-light)',paddingBottom:80}}>
 <div className="section-label">文章与资料</div>
 <FadeUp><p style={{fontSize:14,color:'var(--text-2)',marginBottom:12}}>小黑盒攻略与测评累计阅读 11 万+。</p>
 <p style={{fontSize:12,color:'var(--text-3)',marginBottom:24}}>文章链接与公开资料整理中。</p>
 <a className="contact-link" href="/resume.pdf" download="许晗_战斗策划.pdf">许晗 · 战斗策划简历 PDF ↓</a></FadeUp>
 </section>}
