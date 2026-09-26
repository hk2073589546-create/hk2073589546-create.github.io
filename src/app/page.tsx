'use client';
import { useEffect, useRef, useState } from 'react';

const sections = [['home','关于我'],['experience','工作经历'],['projects','设计案例'],['skills','专业技能'],['writing','文章与资料']];
const cases = [
  { id:'01', title:'角色机制与成长选择', subtitle:'角色定位 / 技能设计', description:'让不同成长方向改变角色的战斗方式。', details:['近战角色：围绕护盾对抗与生存反击，细化护盾判断、连续冲刺、承伤记录与复活限制。','远程角色：重击溅射与连击回蓝形成两类成长选择，调整单次伤害、攻击间隔和回蓝次数。','后排打击：针对远程、治疗与辅助集中站位设计索敌和范围伤害，补充目标死亡、无目标与范围重叠规则。'] },
  { id:'02', title:'目标选择与战斗规则', subtitle:'状态拆分 / 异常边界', description:'把规则中的例外情况，提前写进方案。', details:['将索敌拆分为无目标、已有目标、技能结束三种状态。','规定目标合法性、不可达重选、强控清空及技能结束后的目标继承。','围绕准备与战斗阶段整理策略卡校验、资源恢复和表现需求。'] },
  { id:'03', title:'战斗配置与资源接入', subtitle:'Unity / 配置实装', description:'从表格中的设计，走到实机里的反馈。', details:['配置角色属性、技能、Buff、弹道及效果表，串联引用、目标规则与伤害和状态效果。','接入待机、移动、攻击、技能和死亡动作，配置动画状态与切换关系。','配置模型材质、技能特效的引用、挂点、偏移与跟随方式，核对动作及命中反馈。'] },
  { id:'04', title:'实机问题跟进', subtitle:'问题复现 / 回归验证', description:'让每一次修改都有可核对的结果。', details:['复现目标选择、目标死亡后伤害丢失、重复命中及控制表现问题。','记录对接与处理状态，参与修复后的回归验证。'] }
];

// 首页只呈现简历明确记载的事实；联系方式与 PDF 已获用户明确公开授权。
export default function Home() {
  const [active,setActive] = useState('home');
  const spotlight = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // 滚动监听统一管理，在页面卸载时清理，避免重复注册与导航状态残留。
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if(entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-10% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(el=>observer.observe(el));
    const move = (e:PointerEvent) => { if(spotlight.current) spotlight.current.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`; };
    const media = matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if(media.matches) window.addEventListener('pointermove',move);
    return ()=> { observer.disconnect(); window.removeEventListener('pointermove',move); };
  },[]);
  return <>
    <a className="skip" href="#main">跳转到正文</a>
    <div className="spotlight" ref={spotlight} aria-hidden="true"/>
    <aside className="sidebar">
      <a href="#home" className="wordmark">许晗<span> /</span></a>
      <p className="side-caption">战斗策划 · 个人档案</p>
      <nav aria-label="页面目录">{sections.map(([id,label],i)=><a key={id} href={`#${id}`} className={active===id?'active':''} aria-current={active===id?'location':undefined}><span>0{i+1}</span>{label}<i>↗</i></a>)}</nav>
      <div className="side-bottom"><span className="status-dot"/> 合肥 · 持续记录<br/><small>角色 / 规则 / 体验</small></div>
    </aside>
    <main id="main">
      <section id="home" className="intro">
        <p className="eyebrow">个人主页 <span>— 01</span></p>
        <p className="status"><span className="status-dot"/> 战斗策划 · 在职</p>
        <h1>你好，我是<span>许晗。</span></h1>
        <p className="role">角色技能设计与实装</p>
        <p className="lead">从角色的战斗定位开始，<br/>把技能规则落实到配置与实机体验。</p>
        <p className="intro-note">参与多人 PVP 自走棋战斗内容制作，对接程序、动作、特效、UI 与音频，跟进设计、联调与验收。</p>
        <div className="hero-links"><a href="#projects">查看设计案例 <span>↘</span></a><a href="/resume.pdf" download="许晗_战斗策划.pdf">下载简历 <span>↓</span></a></div>
        <div className="contact-links" style={{display:'flex',flexWrap:'wrap',gap:'12px 24px',fontSize:13,color:'var(--muted)',marginBottom:28}}><a href="mailto:2073589546@qq.com">邮箱 · 2073589546@qq.com ↗</a><a href="tel:19565161565">电话 · 19565161565</a><a href="https://github.com/hk2073589546-create" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <div className="education"><span>教育背景</span><div><strong>安徽农业大学</strong><p>计算机科学与技术 · 本科</p></div><time>2022.06 — 2026.06</time></div>
      </section>
      <section id="experience">
        <p className="eyebrow">工作经历 <span>— 02</span></p>
        <div className="experience"><div className="timeline-label"><time>2025.12 — 至今</time><span>战斗策划</span></div><div><h2>合肥瑞麟互娱网络科技有限公司</h2><p className="muted">多人 PVP 自走棋 · 研发中</p><ul><li>编写 <strong>9 名角色</strong>技能方案，完成 <strong>13 名角色</strong>配置与实装，覆盖输出、治疗、控制和召唤。</li><li>承担角色、技能、Buff 与弹道配置及实机验证，推进跨职能制作联调与验收。</li><li>编写策略卡、目标选择与法力回复规则，明确触发时机和异常边界。</li><li>根据制作人玩法雏形细化大赛流程、结算规则，以及训练中心、战斗结算的规则与交互。</li></ul></div></div>
      </section>
      <section id="projects">
        <p className="eyebrow">设计案例 <span>— 03</span></p><h2 className="section-title">从设计到实装。</h2><p className="muted section-note">以下内容整理自简历，展示承担的工作与方法。</p>
        <div className="case-grid">{cases.map(item=><details className="case" key={item.id}><summary><div className="case-top"><span>{item.id}</span><span>{item.subtitle}</span></div><h3>{item.title}</h3><p>{item.description}</p><span className="expand">展开记录 <b>＋</b></span></summary><ul>{item.details.map(line=><li key={line}>{line}</li>)}</ul></details>)}</div>
      </section>
      <section id="skills"><p className="eyebrow">专业技能 <span>— 04</span></p><div className="skill-rows"><div><h3>制作与实装</h3><p>Excel 战斗配置 / Unity 动画状态机 / 动作与特效配置 / 模型与材质配置</p></div><div><h3>规则与交互</h3><p>技能方案 / 战斗规则 / 边界条件 / Pixso 交互原型</p></div><div><h3>协作与表达</h3><p>动作特效需求 / 问题复现与记录 / 联调验收 / 游戏攻略与测评</p></div></div></section>
      <section id="writing"><p className="eyebrow">文章与资料 <span>— 05</span></p><div className="writing"><span className="writing-mark">↗</span><div><h2>把体验记下来。</h2><p>小黑盒攻略与测评，累计阅读 <strong>11 万+</strong>。</p><p className="muted">文章链接与可公开资料整理中。</p></div></div></section>
      <footer><span>许晗 · 战斗策划</span><span>每一个细节，回到体验本身。</span><a href="#home">回到顶部 ↑</a></footer>
    </main>
  </>;
}
