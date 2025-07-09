---
theme: default
class: text-center text-white
highlighter: shiki
lineNumbers: false
info: |
  ## 驾驭AI：高效编程新范式
  分享一个来自社区的Cursor高效编程理念与实践
  
  演讲者: ysl
drawings:
  persist: false
transition: slide-left
title: '驾驭AI：高效编程新范式'
mdc: true
---

<style>
.slidev-layout, .slidev-page {
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2563eb 75%, #7c3aed 100%) !important;
  color: white !important;
}

html, body, #app {
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2563eb 75%, #7c3aed 100%) !important;
}

/* 添加一些动态光效 */
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

<div class="h-full flex flex-col justify-center items-center px-8">

<!-- 主标题 -->
<h1 class="text-7xl font-bold mb-8">
  <span class="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
    驾驭AI：高效编程新范式
  </span>
</h1>

<!-- 装饰线和火箭 -->
<div class="flex items-center gap-4 mb-8">
  <div class="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg"></div>
  <span class="text-4xl animate-bounce drop-shadow-lg filter brightness-110">🚀</span>
  <div class="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg"></div>
</div>

<!-- 副标题 -->
<p class="text-2xl text-gray-100 mb-16 font-light tracking-wide drop-shadow-md">
  和AI做搭档的正确姿势
</p>

<!-- 特色标签 -->
<div class="flex flex-wrap justify-center gap-6 mb-16">
 
  

  <div class="group">
    <div class="px-8 py-4 ">
      <span class="text-white font-bold text-lg drop-shadow-sm"></span>
    </div>
  </div>
</div>

<!-- 演讲者信息 -->
<div class="flex items-center justify-center text-xl text-gray-100">
  <div class="flex items-center gap-3">
    <div class="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
    <span class="drop-shadow-md">分享人：袁帅林</span>
  </div>
</div>

</div>

<!-- 装饰代码 -->
<div class="absolute bottom-2 left-2 opacity-50">
  <div class="font-mono text-xs text-cyan-300 leading-relaxed drop-shadow-md">
    <div>const ai = new Partner();</div>
    <div>ai.setMode('collaborative');</div>
    <div>await ai.execute(plan);</div>
  </div>
</div>

<div class="absolute top--13 right--2 opacity-50">
  <div class="font-mono text-xs text-purple-300 text-right leading-relaxed drop-shadow-md">
    <div>// RIPER-5 Protocol</div>
    <div>Research → Innovate</div>
    <div>Plan → Execute → Review</div>
  </div>
</div>

---
layout: default
class: text-center
---

<style>
.slidev-layout, .slidev-page {
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2563eb 75%, #7c3aed 100%) !important;
  color: white !important;
}
</style>

<div class="h-full flex flex-col justify-center px-16 py-8">

# AI编程的"蜜月期" ✨ ...爽！

<div class="mt-6 text-xl text-gray-200 leading-relaxed text-center">
刚开始用AI编程，感觉就像开了挂。
</div>

<div v-clicks class="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-6xl mx-auto">

<div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-cyan-400/20">
  <span class="text-3xl">🪄</span>
  <span class="text-lg text-gray-100">一句话重构一个模块...</span>
</div>

<div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-blue-400/20">
  <span class="text-3xl">🔧</span>
  <span class="text-lg text-gray-100">一个指令修复所有lint错误...</span>
</div>

<div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-purple-400/20">
  <span class="text-3xl">🦸</span>
  <span class="text-lg text-gray-100">我们仿佛一夜之间拥有了超能力。</span>
</div>

<div class="flex items-center gap-4 p-4 bg-slate-800/40 rounded-xl border border-green-400/20">
  <span class="text-3xl">⌨️</span>
  <span class="text-lg text-gray-100">我们按<code class="px-2 py-1 bg-emerald-600/30 text-emerald-300 rounded">Tab</code>键的次数，甚至超过了写分号。</span>
</div>

</div>

<div v-after class="mt-8 flex justify-center">
  <div class="p-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl border border-purple-400/40 backdrop-blur-sm max-w-4xl">
    <span class="text-2xl inline mr-3">🎉</span>
    <span class="text-xl text-white font-semibold">效率爆棚，写代码超开心！</span>
  </div>
</div>

</div>

---
layout: two-cols
---

<style>
.slidev-layout, .slidev-page {
  background: linear-gradient(135deg, #0a0a23 0%, #1a1a3a 25%, #2563eb 75%, #7c3aed 100%) !important;
  color: white !important;
}

/* 优化两列布局，防止重叠 */
.slidev-layout .col-left {
  width: 90% !important;
  padding-right: 1.5rem !important;
}

.slidev-layout .col-right {
  width: 90% !important;
  padding-left: 1rem !important;
}
</style>

# 蜜月期后的烦恼 😥


<div v-clicks class="mt-4 space-y-3">

<div class="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border-l-4 border-red-400">
  <span class="text-xl mt-1">😵‍💫</span>
  <span class="text-base text-gray-100">AI改十几个文件，心里发慌？我们是在 <span class="text-green-400 font-bold">主导</span>，还是在 <span class="text-red-400 font-bold">祈祷</span>？</span>
</div>

<div class="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border-l-4 border-yellow-400">
  <span class="text-xl mt-1">👻</span>
  <span class="text-base text-gray-100">AI悄悄"优化"的代码，出了Bug谁来背锅？</span>
</div>

<div class="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border-l-4 border-orange-400">
  <span class="text-xl mt-1">🤔</span>
  <span class="text-base text-gray-100">AI奋笔疾书上百行，看着超棒，结果完美解决了另一个不相干的问题？</span>
</div>

</div>

---

# 从"主导"到"祈祷"：揭示 AI 失控的三大根源

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <div class="space-y-4">
      <div v-click class="p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/40 hover:shadow-lg transition-all">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">🧠</span>
          <span class="font-bold text-blue-300 text-base">认知偏差：跳过"理解对齐"，直接"生成方案"</span>
        </div>
        <div class="text-sm text-blue-200 ml-8 leading-relaxed">
          它把"听懂"当"理解"，在错误的方向上狂奔。
        </div>
      </div>
      <div v-click class="p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-400/40 hover:shadow-lg transition-all">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">📋</span>
          <span class="font-bold text-orange-300 text-base">过程黑箱：缺乏"行动蓝图"，导致"野蛮生长"</span>
        </div>
        <div class="text-sm text-orange-200 ml-8 leading-relaxed">
          行动前缺少方案共识，导致改动范围彻底失控。
        </div>
      </div>
      <div v-click class="p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-400/40 hover:shadow-lg transition-all">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">⚡</span>
          <span class="font-bold text-purple-300 text-base">角色混乱：职责边界模糊，AI"越权"行事</span>
        </div>
        <div class="text-sm text-purple-200 ml-8 leading-relaxed">
          模糊的职责边界，是"好心办坏事"和责任混乱的开始。
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center">
    <div class="text-center">
      <div class="text-8xl mb-4">⚡</div>
      <div class="text-2xl font-bold text-yellow-400">危险区域</div>
      <div class="text-sm opacity-60 mt-2">Danger Zone</div>
    </div>
  </div>
</div>

---
layout: section
class: text-center
---

# 我们的目标 🎯

<div class="mt-8 text-2xl opacity-80">
给AI套上缰绳，人来主导
</div>

<div class="mt-12 flex justify-center items-center gap-8">
  <div class="text-center">
    <span class="text-6xl mb-4">🧠</span>
    <div class="text-lg font-bold text-green-300">天才AI</div>
  </div>
  
  <div class="text-4xl opacity-50">+</div>
  
  <div class="text-center">
    <span class="text-6xl mb-4">🧑‍💻</span>
    <div class="text-lg font-bold text-blue-300">掌控全局的你</div>
  </div>
</div>



---
layout: default
---

# 社区的智慧：RIPER-5协议 🧠

<div class="text-center mb-8">
  <Badge type="tip" text="Community Wisdom" />
  <div class="mt-4 text-lg opacity-80">
    一个来自社区高手的成熟方案 (我只是课代表)
  </div>
</div>

<div class="flex items-center justify-center space-x-3 mt-10">
  <div v-click class="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-400/40 hover:shadow-lg transition-all w-15%">
    <span class="text-2xl mb-2">🔍</span>
    <div class="font-bold text-blue-300">Research</div>
    <div class="text-sm text-blue-200">研究</div>
  </div>
  
  <div v-click class="text-blue-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-green-500/20 rounded-lg border border-green-400/40 hover:shadow-lg transition-all w-15%">
    <span class="text-2xl mb-2">💡</span>
    <div class="font-bold text-green-300">Innovate</div>
    <div class="text-sm text-green-200">创新</div>
  </div>
  
  <div v-click class="text-green-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-400/40 hover:shadow-lg transition-all w-15%">
    <span class="text-2xl mb-2">📋</span>
    <div class="font-bold text-purple-300">Plan</div>
    <div class="text-sm text-purple-200">规划</div>
  </div>
  
  <div v-click class="text-purple-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-orange-500/20 rounded-lg border border-orange-400/40 hover:shadow-lg transition-all w-15%">
    <span class="text-2xl mb-2">🔨</span>
    <div class="font-bold text-orange-300">Execute</div>
    <div class="text-sm text-orange-200">执行</div>
  </div>
  
  <div v-click class="text-orange-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-red-500/20 rounded-lg border border-red-400/40 hover:shadow-lg transition-all w-15%">
    <span class="text-2xl mb-2">✅</span>
    <div class="font-bold text-red-300">Review</div>
    <div class="text-sm text-red-200">审查</div>
  </div>
</div>

<div v-after class="mt-8 text-center">
  <div class="p-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-400/40 backdrop-blur-sm">
    <span class="text-2xl inline mr-3">⚙️</span>
    <span class="text-lg font-bold text-white">核心思想</span>: 把任务拆解成五个<br/>
    <span class="text-green-400 font-bold">自动流转</span>的阶段。
  </div>
</div>

---

# 协议的灵魂 - 多维思考 🧭


<div class="grid grid-cols-2 gap-4 mt-6">
  <div v-click class="group p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-400/40 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-xl">🌐</span>
      <h3 class="font-bold text-blue-300 text-base">系统思考</h3>
    </div>
    <p class="text-blue-200 text-sm">会影响到其它地方吗？</p>
  </div>
  
  <div v-click class="group p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-400/40 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-xl">⚖️</span>
      <h3 class="font-bold text-green-300 text-base">辩证思考</h3>
    </div>
    <p class="text-green-200 text-sm">有没有更好的办法？</p>
  </div>
  
  <div v-click class="group p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-400/40 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-xl">🚀</span>
      <h3 class="font-bold text-purple-300 text-base">创新思考</h3>
    </div>
    <p class="text-purple-200 text-sm">能不能跳出常规思路？</p>
  </div>
  
  <div v-click class="group p-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl border border-orange-400/40 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-xl">🔬</span>
      <h3 class="font-bold text-orange-300 text-base">批判思考</h3>
    </div>
    <p class="text-orange-200 text-sm">最坏的情况会怎样？</p>
  </div>
</div>

<div v-after class="mt-5 text-center">
  <div class="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-400/40 backdrop-blur-sm">
    <span class="text-xl inline mr-2">🎯</span>
    <span class="font-bold text-white">目标</span>: 不仅是<span class="text-gray-400 line-through">能用</span>的代码，
    更是<span class="text-emerald-300 font-bold">高质量</span>的代码。
  </div>
</div>

---
layout: section
class: text-center
---

# RIPER-5 自动化流程详解 📋

<div class="mt-8 text-xl opacity-80">
指令发出后，AI会自动完成这五步
</div>

<div class="mt-12 flex justify-center">
  <div class="grid grid-cols-5 gap-4">
    <div class="text-center">
      <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">R</div>
      <div class="text-sm mt-2">看情况</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">I</div>
      <div class="text-sm mt-2">出主意</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">P</div>
      <div class="text-sm mt-2">定计划</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">E</div>
      <div class="text-sm mt-2">动手干</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">R</div>
      <div class="text-sm mt-2">再检查</div>
    </div>
  </div>
</div>

---
layout: default
class: text-white
---

# 1. [Research] 🔍 第一步: 看懂现状

<div class="flex items-center mb-1">
  <div class="text-3xl mr-2">🧐</div>
  <div class="text-xl font-bold text-blue-300">AI的首要任务：同步信息</div>
</div>

<div class="grid grid-cols-3 gap-1">
  <!-- 左侧卡片，占2列 -->
  <div class="col-span-2 space-y-2">
    <div class="px-2 py-1 bg-blue-500/20 rounded-lg border-l-4 border-blue-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🎯</span>
        <span class="font-bold text-blue-300">阶段目标</span>
      </div>
      <p class="text-blue-200 text-sm">搞清楚代码现状和依赖关系。</p>
    </div>
    
   <div class="px-2 py-1 bg-blue-500/20 rounded-lg border-l-4 border-blue-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🤖</span>
        <span class="font-bold text-blue-300">AI职责</span>
      </div>
      <p class="text-blue-200 text-sm">分析代码、识别依赖，只看不做。</p>
    </div>
        <div class="px-2 py-1 bg-red-500/20 rounded-lg border-l-4 border-red-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🚫</span>
        <span class="font-bold text-red-300">禁止</span>
      </div>
      <p class="text-red-200 text-sm">提任何建议、做任何修改。</p>
    </div>
      <div class="px-2 py-1 bg-purple-500/20 rounded-lg border-l-4 border-purple-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">📝</span>
        <span class="font-bold text-purple-300">产出</span>
      </div>
      <p class="text-purple-200 text-sm">一份关于代码现状的客观分析。</p>
    </div>
  </div>
  
  <!-- 右侧图标区域，占1列 -->
  <div class="col-span-1 flex items-center justify-center">
    <div class="text-center">
      <div class="text-5xl mb-2">🔍</div>
      <div class="text-lg font-bold text-blue-300">Research Phase</div>
      <div class="text-base text-blue-200">看情况</div>
      <div class="mt-2 px-2 py-1 bg-blue-500/20 rounded-lg border border-blue-400/40">
        <span class="text-sm text-blue-300">"只看不做，先同步认知"</span>
      </div>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 2. [Innovate] 💡 第二步: 头脑风暴

<div class="flex items-center mb-1">
  <div class="text-xl font-bold text-green-300">AI变身创意顾问</div>
</div>

<div class="grid grid-cols-3 gap-1">
  <!-- 左侧卡片，占2列 -->
  <div class="col-span-2 space-y-2">
    <div class="px-2 py-1 bg-green-500/20 rounded-lg border-l-4 border-green-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🎯</span>
        <span class="font-bold text-green-300">阶段目标</span>
      </div>
      <p class="text-green-200 text-sm">探索所有可能性，为决策提供依据。</p>
    </div>
    <div class="px-2 py-1 bg-blue-500/20 rounded-lg border-l-4 border-blue-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🤖</span>
        <span class="font-bold text-blue-300">AI职责</span>
      </div>
      <p class="text-blue-200 text-sm">提出多种方案、并对比分析优缺点。</p>
    </div>
    <div class="px-2 py-1 bg-red-500/20 rounded-lg border-l-4 border-red-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🚫</span>
        <span class="font-bold text-red-300">禁止</span>
      </div>
      <p class="text-red-200 text-sm">深入细节、直接写代码。</p>
    </div>
    <div class="px-2 py-1 bg-purple-500/20 rounded-lg border-l-4 border-purple-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">📝</span>
        <span class="font-bold text-purple-300">产出</span>
      </div>
      <p class="text-purple-200 text-sm">一份包含多种方案和利弊分析的报告，并且自动决策出最适合的方案</p>
    </div>
  </div>
  
  <!-- 右侧图标区域，占1列 -->
  <div class="col-span-1 flex items-center justify-center">
    <div class="text-center">
      <div class="text-5xl mb-2">💡</div>
      <div class="text-2xl font-bold text-green-300 mb-2">Innovate Phase</div>
      <div class="text-lg text-gray-300">出主意</div>
      <div class="mt-1 px-2 py-1 bg-green-500/20 rounded-lg border border-green-400/40">
        <span class="text-sm text-green-200">"探索多种可能，对比优劣"</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

# 3. [Plan] 📋 第三步: 生成施工图

<div class="flex items-center mb-1">
  <div class="text-xl font-bold text-purple-300">最最最关键的一步！</div>
</div>

<div class="grid grid-cols-3 gap-1">
  <!-- 左侧卡片，占2列 -->
  <div class="col-span-2 space-y-2">
    <div class="px-2 py-1 bg-purple-500/20 rounded-lg border-l-4 border-purple-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🎯</span>
        <span class="font-bold text-purple-300">阶段目标</span>
      </div>
      <p class="text-purple-200 text-sm">把选定方案变成超级详细的执行清单。</p>
    </div>
    <div class="px-2 py-1 bg-blue-500/20 rounded-lg border-l-4 border-blue-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🤖</span>
        <span class="font-bold text-blue-300">AI职责</span>
      </div>
      <p class="text-blue-200 text-sm">输出精确的文件路径、函数、数据结构等。</p>
    </div>
    <div class="px-2 py-1 bg-green-500/20 rounded-lg border-l-4 border-green-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">⭐</span>
        <span class="font-bold text-green-300">核心产出</span>
      </div>
      <p class="text-green-200 text-sm">一份<span class="font-bold">原子级的、可顺序执行</span>的Checklist。</p>
    </div>
    <div class="px-2 py-1 bg-red-500/20 rounded-lg border-l-4 border-red-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🚫</span>
        <span class="font-bold text-red-300">禁止</span>
      </div>
      <p class="text-red-200 text-sm">任何模糊不清的描述。</p>
    </div>
  </div>
  
  <!-- 右侧图标区域，占1列 -->
  <div class="col-span-1 flex items-center justify-center">
    <div class="text-center">
      <div class="text-5xl mb-2">📋</div>
      <div class="text-2xl font-bold text-purple-300 mb-2">Plan Phase</div>
      <div class="text-lg text-gray-300">定计划</div>
      <div class="mt-1 px-2 py-1 bg-purple-500/20 rounded-lg border border-purple-400/40">
        <span class="text-sm text-purple-200">"施工之前，先画好图纸"</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

# 4. [Execute] 🔨 第四步: 照图施工

<div class="flex items-center mb-1">
  <div class="text-xl font-bold text-orange-300">让AI变成你的手</div>
</div>

<div class="grid grid-cols-3 gap-1">
  <!-- 左侧卡片，占2列 -->
  <div class="col-span-2 space-y-2">
    <div class="px-2 py-1 bg-orange-500/20 rounded-lg border-l-4 border-orange-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🎯</span>
        <span class="font-bold text-orange-300">阶段目标</span>
      </div>
      <p class="text-orange-200 text-sm">100%按图施工。</p>
    </div>
    <div class="px-2 py-1 bg-blue-500/20 rounded-lg border-l-4 border-blue-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🤖</span>
        <span class="font-bold text-blue-300">AI职责</span>
      </div>
      <p class="text-blue-200 text-sm">严格按照Checklist逐项实现代码。</p>
    </div>
    <div class="px-2 py-1 bg-yellow-500/20 rounded-lg border-l-4 border-yellow-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">👑</span>
        <span class="font-bold text-yellow-300">黄金法则</span>
      </div>
      <p class="text-yellow-200 text-sm">不准乱加戏！任何计划外的修改都要先报告。</p>
    </div>
    <div class="px-2 py-1 bg-green-500/20 rounded-lg border-l-4 border-green-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🤝</span>
        <span class="font-bold text-green-300">互动</span>
      </div>
      <p class="text-green-200 text-sm">开发者确认后，AI才会继续。</p>
    </div>
  </div>
  
  <!-- 右侧图标区域，占1列 -->
  <div class="col-span-1 flex items-center justify-center">
    <div class="text-center">
      <div class="text-5xl mb-2">🔨</div>
      <div class="text-2xl font-bold text-orange-300 mb-2">Execute Phase</div>
      <div class="text-lg text-gray-300">动手干</div>
      <div class="mt-1 px-2 py-1 bg-orange-500/20 rounded-lg border border-orange-400/40">
        <span class="text-sm text-orange-200">"按图施工，不多做一步"</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

# 5. [Review] 🔍 第五步: 自我审查

<div class="flex items-center mb-1">
  <div class="text-xl font-bold text-red-300">自动化的Code Review</div>
</div>

<div class="grid grid-cols-3 gap-1">
  <!-- 左侧卡片，占2列 -->
  <div class="col-span-2 space-y-2">
    <div class="px-2 py-1 bg-red-500/20 rounded-lg border-l-4 border-red-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🎯</span>
        <span class="font-bold text-red-300">阶段目标</span>
      </div>
      <p class="text-red-200 text-sm">最后一道质量关，确保万无一失。</p>
    </div>
    <div class="px-2 py-1 bg-blue-500/20 rounded-lg border-l-4 border-blue-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">🤖</span>
        <span class="font-bold text-blue-300">AI职责</span>
      </div>
      <p class="text-blue-200 text-sm">逐行比对实现与计划，检查有没有引入新风险。</p>
    </div>
    <div class="px-2 py-1 bg-purple-500/20 rounded-lg border-l-4 border-purple-400">
      <div class="flex items-center gap-2">
        <span class="text-lg">📝</span>
        <span class="font-bold text-purple-300">产出</span>
      </div>
      <p class="text-purple-200 text-sm">一份详尽的审查报告，确认无副作用。</p>
    </div>
  </div>
  
  <!-- 右侧图标区域，占1列 -->
  <div class="col-span-1 flex items-center justify-center">
    <div class="text-center">
      <div class="text-5xl mb-2">🔍</div>
      <div class="text-2xl font-bold text-red-300 mb-2">Review Phase</div>
      <div class="text-lg text-gray-300">再检查</div>
      <div class="mt-1 px-2 py-1 bg-red-500/20 rounded-lg border border-red-400/40">
        <span class="text-sm text-red-200">"对照计划，评估风险"</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

# 案例：一次重构任务 (自动化流程) 📚

<div class="text-center mb-4">
  <Badge type="info" text="Real Case Study" />
  <div class="mt-3 p-3 bg-slate-800/50 rounded-lg border border-gray-400/30 max-w-3xl mx-auto">
    <span class="text-lg inline mr-2">💻</span>
    <span class="font-bold text-white">任务</span>: 把一个旧代码模块，改成<code class="px-2 py-1 bg-blue-500/30 text-blue-300 rounded">async/await</code>新语法。
  </div>
</div>

<div class="grid grid-cols-5 gap-3 mt-6">

<div v-click class="bg-blue-500/20 rounded-lg border border-blue-400/40 p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
    <div class="font-bold text-blue-300 text-sm">Research</div>
  </div>
  <div class="text-blue-200 text-xs mb-2">自动产出:</div>
  <div class="text-xs bg-slate-800/50 p-2 rounded border-l-2 border-blue-400">
    <span class="font-bold text-blue-300">分析报告:</span> <span class="text-blue-200">发现3个组件依赖</span>
  </div>
</div>

<div v-click class="bg-green-500/20 rounded-lg border border-green-400/40 p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
    <div class="font-bold text-green-300 text-sm">Innovate</div>
  </div>
  <div class="text-green-200 text-xs mb-2">自动产出:</div>
  <div class="text-xs bg-slate-800/50 p-2 rounded border-l-2 border-green-400">
    <span class="font-bold text-green-300">方案对比:</span> <span class="text-green-200">提供2种方案供选择</span>
  </div>
</div>

<div v-click class="bg-purple-500/20 rounded-lg border border-purple-400/40 p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
    <div class="font-bold text-purple-300 text-sm">Plan</div>
  </div>
  <div class="text-purple-200 text-xs mb-2">自动产出:</div>
  <div class="text-xs bg-slate-800/50 p-2 rounded border-l-2 border-purple-400">
    <span class="font-bold text-purple-300">施工图:</span> <span class="text-purple-200">生成5步Checklist</span>
  </div>
</div>

<div v-click class="bg-orange-500/20 rounded-lg border border-orange-400/40 p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
    <div class="font-bold text-orange-300 text-sm">Execute</div>
  </div>
  <div class="text-orange-200 text-xs mb-2">自动执行:</div>
  <div class="text-xs bg-slate-800/50 p-2 rounded border-l-2 border-orange-400">
    <span class="font-bold text-orange-300">代码:</span> <span class="text-orange-200">按计划逐步实施</span>
  </div>
</div>

<div v-click class="bg-red-500/20 rounded-lg border border-red-400/40 p-3">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
    <div class="font-bold text-red-300 text-sm">Review</div>
  </div>
  <div class="text-red-200 text-xs mb-2">自动产出:</div>
  <div class="text-xs bg-slate-800/50 p-2 rounded border-l-2 border-red-400">
    <span class="font-bold text-red-300">审查报告:</span> <span class="text-red-200">确认无副作用</span>
  </div>
</div>

</div>

<!-- 流程亮点 -->
<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-after class="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-lg border border-cyan-400/40 p-4">
    <div class="flex items-center gap-2 mb-3">
      <span class="text-xl">✨</span>
      <span class="font-bold text-cyan-300">流程亮点</span>
    </div>
    <div class="text-sm text-cyan-200 space-y-2">
      <div>• <span class="font-bold">模糊→清晰</span>：原本含糊的任务被精确分解</div>
      <div>• <span class="font-bold">随机→可控</span>：五个阶段流转，每步可预测</div>
      <div>• <span class="font-bold">黑箱→透明</span>：所有决策过程全程可审查</div>
    </div>
  </div>
  
  <div v-after class="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/40 p-4 flex items-center justify-center">
    <div class="text-center">
      <span class="text-3xl inline mr-3">🎯</span>
      <div class="text-lg font-bold text-white mb-2">核心价值</div>
      <div class="text-sm text-gray-200">一个原本模糊的重构任务</div>
      <div class="text-sm text-gray-200">被<span class="text-blue-300 font-bold">清晰地分解为五个自动化阶段</span></div>
    </div>
  </div>
</div>

---
layout: default
---

### 实践成效 - 我得到了什么？ 📈

<div class="text-center mb-4">
  <Badge type="success" text="Before vs After" />
  <div class="mt-3 text-lg text-gray-200">
    从"带实习生"到"带神队友"
  </div>
</div>

<!-- 核心指标展示 -->
<div class="grid grid-cols-3 gap-6 mb-4">
  <div v-click class="text-center p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/40">
    <div class="text-4xl font-bold text-green-300 mb-2">更高</div>
    <div class="text-sm text-green-200">效率</div>
  </div>
  
  <div v-click class="text-center p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/40">
    <div class="text-4xl font-bold text-blue-300 mb-2">更强</div>
    <div class="text-sm text-blue-200">掌控感</div>
  </div>
  
  <div v-click class="text-center p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/40">
    <div class="text-4xl font-bold text-purple-300 mb-2">更好</div>
    <div class="text-sm text-purple-200">代码质量</div>
  </div>
</div>

<!-- 对比分析 -->
<div class="grid grid-cols-2 gap-6">
  <!-- Before 列 -->
  <div class="space-y-3">
    <div class="text-center p-2 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg border border-red-400/40">
      <span class="text-xl mb-1 block">😵‍💫</span>
      <div class="text-base font-bold text-red-300">Before (之前)</div>
      <div class="text-xs text-red-200">像在带实习生，心累</div>
    </div>
    <div class="space-y-1.5">
      <div v-click class="flex items-center gap-2 p-2 bg-red-500/10 rounded border-l-3 border-red-400">
        <span class="text-sm">💔</span>
        <div>
          <div class="font-bold text-red-300 text-xs">沟通靠猜</div>
          <div class="text-red-200 text-xs">经常误解，结果跑偏</div>
        </div>
      </div>
      <div v-click class="flex items-center gap-2 p-2 bg-red-500/10 rounded border-l-3 border-red-400">
        <span class="text-sm">🛠️</span>
        <div>
          <div class="font-bold text-red-300 text-xs">频繁返工</div>
          <div class="text-red-200 text-xs">总在修复AI的"即兴创作"</div>
        </div>
      </div>
      <div v-click class="flex items-center gap-2 p-2 bg-red-500/10 rounded border-l-3 border-red-400">
        <span class="text-sm">😰</span>
        <div>
          <div class="font-bold text-red-300 text-xs">质量焦虑</div>
          <div class="text-red-200 text-xs">对最终代码不放心，怕有坑</div>
        </div>
      </div>
    </div>
  </div>

  <!-- After 列 -->
  <div class="space-y-3">
    <div class="text-center p-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/40">
      <span class="text-xl mb-1 block">🚀</span>
      <div class="text-base font-bold text-green-300">After (之后)</div>
      <div class="text-xs text-green-200">带神队友，高效又省心</div>
    </div>
    <div class="space-y-1.5">
      <div v-click class="flex items-center gap-2 p-2 bg-green-500/10 rounded border-l-3 border-green-400">
        <span class="text-sm">🎯</span>
        <div>
          <div class="font-bold text-green-300 text-xs">沟通精准</div>
          <div class="text-green-200 text-xs">每个阶段目标清晰，指哪打哪</div>
        </div>
      </div>
      <div v-click class="flex items-center gap-2 p-2 bg-green-500/10 rounded border-l-3 border-green-400">
        <span class="text-sm">⚡</span>
        <div>
          <div class="font-bold text-green-300 text-xs">执行高效</div>
          <div class="text-green-200 text-xs">流程顺畅，直达目标</div>
        </div>
      </div>
      <div v-click class="flex items-center gap-2 p-2 bg-green-500/10 rounded border-l-3 border-green-400">
        <span class="text-sm">🛡️</span>
        <div>
          <div class="font-bold text-green-300 text-xs">质量有保障</div>
          <div class="text-green-200 text-xs">流程确保了最终代码质量</div>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

# 总结：把控过程，重塑结果 🌟

<div class="grid grid-cols-2 gap-12 mt-20 px-0">

  <!-- 左侧 - 核心行动 -->
  <div v-click class="text-center">
    <div class="mb-6">
      <span class="text-6xl">🗺️</span>
    </div>
    <div class="mb-4">
      <div class="text-2xl font-bold text-blue-300 mb-4">我们的第一步：从"Plan"开始</div>
      <div class="text-lg text-gray-200">先审阅"行动蓝图"，再授权AI执行。</div>
    </div>
  </div>

  <!-- 右侧 - 最终目标 -->
  <div v-click class="text-center">
    <div class="mb-6">
      <span class="text-6xl">🚀</span>
    </div>
    <div class="mb-4">
      <div class="text-2xl font-bold text-purple-300 mb-4">最终的目标：释放我们真正的"创造力"</div>
      <div class="text-lg text-gray-200">让AI负责"体力活"，我们聚焦于架构与创新。</div>
    </div>
  </div>

</div>

---
layout: end
class: text-center
---

# Thanks!

<div class="mt-12 space-y-8">
  <div class="flex justify-center items-center gap-8">
    <div class="text-center">
      <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
      <img src='./images/qrcode_github.com.png' />
      </div>
      <div class="text-sm text-#fff max-w-40">
        扫码获取<br/>完整协作协议&PPT
      </div>
    </div>
  </div>
  <div class="text-#fff text-sm">
    <span class="inline mr-1">❤️</span>
    让AI成为最好的编程伙伴
  </div>
  
</div>