---
theme: default
class: text-center text-white
highlighter: shiki
lineNumbers: false
info: |
  ## Cursor Rules 实践：为项目配置 6A 工作流
  分享一个关于如何通过“6A工作流”规则，让AI像专业项目经理一样工作的实践。
  
  演讲者: (Your Name/Team)
drawings:
  persist: false
transition: slide-left
title: 'Cursor Rules 实践：为项目配置 6A 工作流'
mdc: true
---

<style>
@keyframes blink {
  50% { opacity: 0; }
}
.blinking-cursor {
  animation: blink 1s step-end infinite;
}
.slidev-layout, .slidev-page {
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2563eb 75%, #7c3aed 100%) !important;
  color: white !important;
}

html, body, #app {
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2563eb 75%, #7c3aed 100%) !important;
}

.slidev-layout::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.slidev-layout > * {
  position: relative;
  z-index: 1;
}
</style>

<!-- Slide 1: Title Page -->
<div class="h-full flex flex-col justify-center items-center px-8">
  <!-- Main Title -->
  <h1 class="text-7xl font-bold mb-8">
    <span class="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
      Cursor Rules 实践
    </span>
  </h1>

  <!-- Decorative Line and Icon -->
  <div class="flex items-center gap-4 mb-8">
    <div class="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg"></div>
    <span class="text-4xl animate-bounce drop-shadow-lg filter brightness-110">🚀</span>
    <div class="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg"></div>
  </div>

  <!-- Subtitle -->
  <p class="text-3xl text-gray-100 mb-16 font-light tracking-wide drop-shadow-md">
    为项目配置 <strong>6A 工作流</strong>
  </p>

  <!-- Presenter Info -->
  <div class="flex items-center justify-center text-xl text-gray-100">
    <div class="flex items-center gap-3">
      <div class="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
      <span class="drop-shadow-md">分享人: 袁帅林</span>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 2: The Pain Points -->
# 我们在项目开发中的痛点

<div v-clicks class="mt-8 space-y-4 max-w-2xl mx-auto">
  <div class="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-red-400/30">
    <span class="text-3xl mt-1">❓</span>
    <span class="text-lg text-left text-gray-100">
      <span class="border border-white/50 px-2 py-1 rounded-md">需求反复澄清</span>，开发与预期总是不符？
    </span>
  </div>
  <div class="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-yellow-400/30">
    <span class="text-3xl mt-1">🤯</span>
    <span class="text-lg text-left text-gray-100">
      <span class="border border-white/50 px-2 py-1 rounded-md">AI 理解能力有限</span>，交付物"惨不忍睹"？
    </span>
  </div>
  <div class="flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-orange-400/30">
    <span class="text-3xl mt-1">🛑</span>
    <span class="text-lg text-left text-gray-100">
      <span class="border border-white/50 px-2 py-1 rounded-md">复杂任务</span>让 AI 直接"罢工"或"胡言乱语"？
    </span>
  </div>
</div>

<div v-after class="mt-8 p-4 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-2xl border border-green-400/40 backdrop-blur-sm max-w-3xl mx-auto">
  <p class="text-xl text-white font-semibold">
    引入 <span class="border border-white/50 px-2 py-1 rounded-md">"6A 工作流"</span>，从根本上解决 AI 协作难题。
  </p>
</div>

---
layout: default
---

<!-- Slide 3: What is 6A? -->
<div class="h-full flex flex-col justify-center text-left px-6">
  <h1 class="text-4xl font-bold mb-2">什么是 6A 工作流？</h1>
  <p class="text-lg opacity-80 mb-8">一个让 AI 不敢偷懒的管理框架</p>

  <div class="grid grid-cols-2 gap-4">
    <!-- Left Card -->
    <div v-click class="bg-slate-900/40 p-6 rounded-xl border border-white/10 transition-all hover:border-red-300/50 hover:bg-slate-900/60">
      <div class="flex items-center gap-3 mb-5">
        <span class="text-2xl">🎯</span>
        <h3 class="text-2xl font-bold text-red-300">6 个阶段, 层层把关</h3>
      </div>
      <div class="space-y-3 text-base text-gray-200">
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-red-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-red-400/50"></div><span><span class="font-semibold text-red-300">Align (对齐):</span> 需求澄清, 绝不允许"我觉得你想要..."</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-red-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-red-400/50"></div><span><span class="font-semibold text-red-300">Architect (架构):</span> 先设计后编码, 告别"边写边想"</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-red-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-red-400/50"></div><span><span class="font-semibold text-red-300">Atomize (原子化):</span> 大任务拆小, AI 再笨也能做对</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-red-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-red-400/50"></div><span><span class="font-semibold text-red-300">Approve (审批):</span> 人工检查, AI 想偷懒? 门都没有</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-red-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-red-400/50"></div><span><span class="font-semibold text-red-300">Automate (执行):</span> 按文档执行, 有据可查</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-red-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-red-400/50"></div><span><span class="font-semibold text-red-300">Assess (评估):</span> 质量验收, 不合格就重来</span></div>
      </div>
    </div>
    <!-- Right Card -->
    <div v-click class="bg-slate-900/40 p-6 rounded-xl border border-white/10 transition-all hover:border-yellow-300/50 hover:bg-slate-900/60">
      <div class="flex items-center gap-3 mb-5">
        <span class="text-2xl">🔥</span>
        <h3 class="text-2xl font-bold text-yellow-300">核心理念</h3>
      </div>
      <p class="mb-5 text-base text-gray-300">文档先行, 任务递归, 范围收敛</p>
      <div class="space-y-3 text-base text-gray-200">
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-yellow-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-yellow-400/50"></div><span><span class="font-semibold text-yellow-300">文档先行:</span> 不写文档不准写代码</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-yellow-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-yellow-400/50"></div><span><span class="font-semibold text-yellow-300">任务递归:</span> 复杂任务层层分解</span></div>
        <div class="flex items-start gap-3"><div class="w-2.5 h-2.5 bg-yellow-400 rounded-full mt-1.5 shrink-0 shadow-lg shadow-yellow-400/50"></div><span><span class="font-semibold text-yellow-300">范围收敛:</span> 明确边界, 防止 AI 发散</span></div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 4: Configuration in 3 Steps -->
# 如何配置？三步让你的 AI 脱胎换骨

<div class="mt-12 flex justify-center items-start gap-12 text-center">

  <!-- Step 1 -->
  <div  class="w-80">
    <div class="relative mb-4">
      <div class="w-16 h-16 mx-auto bg-cyan-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-cyan-500/50">1</div>
    </div>
    <h3 class="text-2xl font-bold mb-3">创建项目规则</h3>
    <p class="text-lg opacity-80 leading-loose lh-2.5rem!">
      在 <span class="px-2 py-1 rounded-md bg-slate-700/50 border border-cyan-400/30 text-cyan-300">.cursor/rules</span> 目录下<br>创建 <span class="px-2 py-1 rounded-md bg-slate-700/50 border border-cyan-400/30 text-cyan-300">6a.mdc</span>
    </p>
  </div>

  <!-- Divider -->
  <div  class="w-px h-40 bg-white/20 self-center"></div>

  <!-- Step 2 -->
  <div  class="w-80">
    <div class="relative mb-4">
      <div class="w-16 h-16 mx-auto bg-blue-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-blue-500/50">2</div>
    </div>
    <h3 class="text-2xl font-bold mb-3">调用 @6a 规则</h3>
    <div class="p-1 rounded-lg bg-slate-800/50 border border-white/20 shadow-lg">
      <div class="px-4 py-2 rounded-md bg-#1d1f1a text-left">
        <code class="text-lg text-cyan-300 bg-#1d1f1a!">@6a.mdc 开发一个用户管理系统...</code>
        <span class="blinking-cursor ml-1 w-px h-5 bg-cyan-300"></span>
      </div>
    </div>
  </div>

  <!-- Divider -->
  <div  class="w-px h-40 bg-white/20 self-center"></div>

  <!-- Step 3 -->
  <div  class="w-80">
    <div class="relative mb-4">
      <div class="w-16 h-16 mx-auto bg-purple-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-purple-500/50">3</div>
    </div>
    <h3 class="text-2xl font-bold mb-3">见证奇迹</h3>
    <p class="text-lg opacity-80">
      坐下来，看 AI 变身<br>项目经理
    </p>
  </div>

</div>

---
layout: default
---

<!-- Slide 5: Old vs. New -->
# 实战演示 - 从混乱到有序

<div class="grid grid-cols-2 gap-x-8 mt-8">

<div>
### 传统方式 (混乱模式) <span class="text-red-500">❌</span>

<div class="mt-2 p-4 rounded-lg bg-slate-900/50 border border-red-500/30 text-left text-sm font-mono">
  <div class="flex items-start gap-2">
    <span class="text-red-400 opacity-80">&gt;</span>
    <div class="text-gray-300"><span class="text-yellow-400">用户：</span>帮我做个用户管理系统</div>
  </div>
  <div class="flex items-start gap-2 mt-4">
    <span class="text-red-400 opacity-80">&gt;</span>
    <div><span class="text-cyan-400">AI：</span>好的，我来写代码... <br>
    <span class="text-gray-500 italic">[直接开始码代码]</span></div>
  </div>
  <div class="flex items-start gap-2 mt-4">
    <span class="text-red-400 opacity-80">&gt;</span>
    <div><span class="text-yellow-400">用户：</span><span class="text-red-400 font-bold">这不是我要的！</span></div>
  </div>
  <div class="flex items-start gap-2 mt-4">
    <span class="text-red-400 opacity-80">&gt;</span>
    <div><span class="text-cyan-400">AI：</span>那你要什么？</div>
  </div>
  <div class="flex items-start gap-2 mt-4">
    <span class="text-red-400 opacity-80">&gt;</span>
    <div><span class="text-yellow-400">用户：</span>我要... <br>
    <span class="text-gray-500 italic">[重新解释需求]</span></div>
  </div>
  <div class="flex items-start gap-2 mt-4">
    <span class="text-red-400 opacity-80">&gt;</span>
    <div><span class="text-cyan-400">AI：</span>明白了！<br>
    <span class="text-gray-500 italic">[又开始瞎写]</span></div>
  </div>
</div>
</div>

<div>
### 6A 工作流 (专业模式) <span class="text-green-400">✅</span>

<div class="mt-2 p-4 rounded-lg bg-slate-900/70 border border-green-400/50 text-left text-sm font-mono shadow-lg shadow-green-500/10 backdrop-blur-sm">
  <div class="flex items-start gap-2">
    <span class="text-green-400 opacity-80">&gt;</span>
    <div class="text-gray-300"><span class="text-yellow-400">用户：</span>@6a 开发一个用户管理系统...</div>
  </div>
  <div class="flex items-start gap-2 mt-4">
    <span class="text-green-400 opacity-80">&gt;</span>
    <div>
      <div class="text-gray-300"><span class="text-cyan-400">AI：</span>收到！开始6A工作流...</div>
      <div class="space-y-1 mt-2">
        <div class="text-blue-300/80">📋 阶段1 - 需求对齐中...</div>
        <div class="text-blue-300/80">📄 创建了 ALIGNMENT_用户管理系统.md</div>
        <div class="text-blue-300/80">分析了你的需求，生成了澄清问题...</div>
      </div>
      <div class="text-gray-200 mt-2">请确认以下几点：</div>
      <div class="pl-4 text-gray-300 space-y-1 mt-1">
        <div><span class="text-yellow-400/80 mr-1">1.</span> 用户角色有哪些？</div>
        <div><span class="text-yellow-400/80 mr-1">2.</span> 需要哪些权限管理？</div>
        <div><span class="text-yellow-400/80 mr-1">3.</span> 数据库用什么？</div>
        <div>...</div>
      </div>
    </div>
  </div>
</div>
</div>

</div>
---
layout: default
---

<!-- Slide 6: The "Managed" AI -->
# 实战案例：AI 是如何"被管理"的

<div class="grid grid-cols-3 gap-4 mt-6 text-left text-sm">

  <!-- Card 1: Clarify -->
  <div class="rounded-lg bg-slate-900/70 border border-cyan-400/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm overflow-hidden flex flex-col">
    <div class="p-2 bg-black/20 flex items-center gap-1.5 border-b border-cyan-400/10">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
    </div>
    <div class="p-3">
      <h4 class="font-bold text-cyan-300">阶段1: 需求对齐</h4>
      <p class="text-xs font-bold mb-0!">让 AI 不敢"想当然"</p>
    </div>
    <div class="p-3 pt-0 font-mono text-xs text-gray-200 !leading-relaxed flex-1 bg-black/10">
      <span class="text-gray-400">## 边界确认</span>
      <ul class="list-disc list-inside pl-1 space-y-1 mt-1">
        <li>只做用户管理, 不涉及业务逻辑</li>
        <li>Web端管理界面, 不做移动端</li>
      </ul>
      <span class="text-gray-400 mt-2 block">## 需求理解</span>
      <ul class="list-disc list-inside pl-1 space-y-1 mt-1">
        <li>用户注册、登录、权限管理</li>
        <li>管理员可以增删改查用户</li>
      </ul>
      <span class="text-gray-400 mt-2 block">## 疑问澄清</span>
      <ol class="list-decimal list-inside pl-1 space-y-1 mt-1">
        <li>用户角色分几级?</li>
        <li>认证方式: 用户名密码还是支持第三方登录?</li>
        <li>数据库选择: MySQL、PostgreSQL还是其他?</li>
      </ol>
    </div>
  </div>

  <!-- Card 2: Design -->
  <div class="rounded-lg bg-slate-900/70 border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm overflow-hidden flex flex-col">
    <div class="p-2 bg-black/20 flex items-center gap-1.5 border-b border-blue-400/10">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
    </div>
    <div class="p-3">
      <h4 class="font-bold text-blue-300">阶段2: 架构设计</h4>
      <p class="text-xs font-bold mb-0!">强制 AI 先思考后动手</p>
    </div>
    <div class="p-3 pt-0 flex-1 bg-black/10">
      <div class="mt-1">
        <pre v-pre class="bg-black/30 border border-slate-500/30 rounded-lg p-4 text-[12px] leading-6 font-mono text-slate-200 overflow-auto whitespace-pre"># DESIGN_用户管理系统.md
## 系统架构
graph TB
  A[前端Vue] --> B[后端API]
  B --> C[业务逻辑层]
  C --> D[数据访问层]
  D --> E[MySQL数据库]
</pre>
      </div>
    </div>
  </div>

  <!-- Card 3: Atomize -->
  <div class="rounded-lg bg-slate-900/70 border border-purple-400/30 shadow-lg shadow-purple-500/20 backdrop-blur-sm overflow-hidden flex flex-col">
    <div class="p-2 bg-black/20 flex items-center gap-1.5 border-b border-purple-400/10">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
      <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
    </div>
    <div class="p-3">
      <h4 class="font-bold text-purple-300">阶段3: 任务拆分</h4>
      <p class="text-xs font-bold mb-0!">让 AI 无法偷懒</p>
    </div>
    <div class="p-3 pt-0 font-mono text-xs text-gray-200 !leading-relaxed flex-1 bg-black/10">
        <span class="text-gray-400">## 任务1: 数据库设计</span>
        <div class="pl-1 mt-1 space-y-1">
            <div><span class="text-amber-400 font-semibold">输入契约:</span> 需求文档</div>
            <div><span class="text-amber-400 font-semibold">输出契约:</span> SQL建表语句, ER图</div>
            <div><span class="text-amber-400 font-semibold">验收标准:</span> 能正常创建表, 字段类型合理</div>
        </div>
        <span class="text-gray-400 mt-2 block">## 任务2: 用户认证API</span>
        <div class="pl-1 mt-1 space-y-1">
            <div><span class="text-amber-400 font-semibold">输入契约:</span> 数据库表结构</div>
            <div><span class="text-amber-400 font-semibold">输出契约:</span> 登录接口, JWT生成</div>
            <div><span class="text-amber-400 font-semibold">验收标准:</span> 能正常登录, token有效</div>
        </div>
    </div>
  </div>

</div>

---
layout: default
---

<!-- Slide 7: Benefits Table -->
# 收益总结 - 痛点与解决方案

<div class="mt-8 max-w-5xl mx-auto text-left">
  <div class="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl shadow-black/30 max-h-[56vh]">
    <!-- Header -->
    <div class="grid grid-cols-3 text-[13px] leading-snug bg-gradient-to-r from-cyan-500/15 via-transparent to-purple-500/15">
      <div class="px-4 py-2 font-bold text-cyan-300 flex items-center gap-2"><span>📌</span><span>传统痛点</span></div>
      <div class="px-4 py-2 font-bold text-blue-300 flex items-center gap-2"><span>🧭</span><span>6A 解决方案</span></div>
      <div class="px-4 py-2 font-bold text-emerald-300 flex items-center gap-2 justify-start"><span>🏁</span><span>效果</span></div>
    </div>
    <!-- Rows -->
    <div class="divide-y divide-white/10 text-[13px] leading-snug overflow-auto">
      <div class="grid grid-cols-3 items-center px-4 py-2.5 hover:bg-white/5 transition-colors">
        <div class="pr-4 text-gray-100">AI偷懒不认真</div>
        <div class="pr-4 text-gray-200">强制按流程走，每步都要文档</div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">质量提升</span>
          <span class="text-emerald-300 font-bold text-base tracking-wide">80%</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center px-4 py-2.5 hover:bg-white/5 transition-colors">
        <div class="pr-4 text-gray-100">需求理解偏差</div>
        <div class="pr-4 text-gray-200">多轮澄清，形成共识文档</div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">返工率降低</span>
          <span class="text-emerald-300 font-bold text-base tracking-wide">90%</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center px-4 py-2.5 hover:bg-white/5 transition-colors">
        <div class="pr-4 text-gray-100">复杂任务崩溃</div>
        <div class="pr-4 text-gray-200">任务原子化拆分</div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">成功率提升</span>
          <span class="text-emerald-300 font-bold text-base tracking-wide">95%</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center px-4 py-2.5 hover:bg-white/5 transition-colors">
        <div class="pr-4 text-gray-100">没有设计文档</div>
        <div class="pr-4 text-gray-200">架构阶段必须输出设计</div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">维护成本降低</span>
          <span class="text-emerald-300 font-bold text-base tracking-wide">70%</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center px-4 py-2.5 hover:bg-white/5 transition-colors">
        <div class="pr-4 text-gray-100">修改困难</div>
        <div class="pr-4 text-gray-200">模块化设计，影响面可控</div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">迭代效率提升</span>
          <span class="text-emerald-300 font-bold text-base tracking-wide">3倍</span>
        </div>
      </div>
      <div class="grid grid-cols-3 items-center px-4 py-2.5 hover:bg-white/5 transition-colors">
        <div class="pr-4 text-gray-100">团队协作混乱</div>
        <div class="pr-4 text-gray-200">完整文档体系，可追溯</div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">交接时间减少</span>
          <span class="text-emerald-300 font-bold text-base tracking-wide">80%</span>
        </div>
      </div>
    </div>
  </div>
  <div class="text-xs mt-3 flex items-center gap-2">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400/80"></span>
    <span>数据为示例效果，实际表现依赖团队执行强度与基线。</span>
  </div>
  
</div>

---
layout: default
---

<!-- Slide 8: Q&A -->
# Q&A - 常见问题

<div class="mt-6 text-left max-w-3xl mx-auto space-y-4">
  <div class="p-3 bg-slate-800/40 rounded-lg">
    <p class="font-bold text-cyan-300">Q: 6A 工作流会不会太复杂？</p>
    <p class="opacity-90">A: 初期可能感觉步骤多，但相比后期的返工和维护成本，绝对值得！而且 AI 会自动执行，你只需要确认关键节点。</p>
  </div>
  <div class="p-3 bg-slate-800/40 rounded-lg">
    <p class="font-bold text-cyan-300">Q: 适合什么规模的项目？</p>
    <p class="opacity-90">A: 从小功能到大项目都适用。小项目可以简化某些阶段，大项目则能充分发挥威力。</p>
  </div>
  <div class="p-3 bg-slate-800/40 rounded-lg">
    <p class="font-bold text-cyan-300">Q: 如何说服团队使用？</p>
    <p class="opacity-90">A: 先在一个小项目上试用，效果立竿见影，自然就能说服大家。</p>
  </div>
</div>

---
layout: section
---

<!-- Slide 9: Summary -->
# 总结：告别 AI 偷懒时代

<div class="mt-6 max-w-5xl mx-auto">
  <div class="mb-4">
    <p class="text-2xl font-bold tracking-wide">
      6A 工作流的核心思想：
      <span class="px-2 py-0.5 rounded-md bg-gradient-to-r from-yellow-400/20 to-amber-400/10 border border-yellow-300/30 text-yellow-200 shadow-yellow-400/20 shadow">不给 AI 偷懒的机会</span>
    </p>
    <p class="text-base opacity-90 mt-2">通过系统化的流程管理，我们可以：</p>
  </div>

  <div class="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl shadow-black/30 p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10">
        <span class="text-emerald-300 text-xl">✅</span>
        <span class="text-gray-100">让 AI 按照专业流程工作</span>
      </div>
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-white/10">
        <span class="text-sky-300 text-xl">✅</span>
        <span class="text-gray-100">确保需求理解准确无误</span>
      </div>
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
        <span class="text-purple-300 text-xl">✅</span>
        <span class="text-gray-100">保证代码质量和可维护性</span>
      </div>
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-white/10">
        <span class="text-amber-300 text-xl">✅</span>
        <span class="text-gray-100">建立完善的文档体系</span>
      </div>
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-white/10 md:col-span-2">
        <span class="text-teal-300 text-xl">✅</span>
        <span class="text-gray-100">实现高效的团队协作</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 10: Call to Action -->
# 立即行动建议

<div class="mt-12 grid grid-cols-1 gap-12 max-w-2xl mx-auto">
  <div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-cyan-400/30">
    <span class="text-3xl">🚀</span>
    <span class="text-lg text-gray-100 text-left"><span class="font-bold text-cyan-300">今天就试试：</span> 找个小项目体验一下 6A 工作流</span>
  </div>
  <div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-blue-400/30">
    <span class="text-3xl">🔧</span>
    <span class="text-lg text-gray-100 text-left"><span class="font-bold text-blue-300">持续优化：</span> 根据团队特点调整流程</span>
  </div>
  <div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-purple-400/30">
    <span class="text-3xl">🏆</span>
    <span class="text-lg text-gray-100 text-left"><span class="font-bold text-purple-300">建立标准：</span> 形成团队的项目管理规范</span>
  </div>
</div>

---
layout: end
---

<!-- Slide 11: Thanks -->
# Thanks!

<div class="mt-12 space-y-8">
  <div class="flex justify-center items-center gap-8">
    <div class="text-center">
      <div class="w-40 h-40 bg-white rounded-lg flex items-center justify-center mb-4">
        <img src='./images/6a.png' class="w-full h-full object-contain"/>
      </div>
      <div class="text-sm text-white max-w-40">
        扫码获取完整Rules
      </div>
    </div>
  </div>
  <div class="text-white text-sm">
    <span class="inline mr-1">❤️</span>
    让AI成为最好的编程伙伴
  </div>
</div>
