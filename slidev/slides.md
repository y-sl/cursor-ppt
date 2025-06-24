---
theme: apple-basic
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## 驾驭AI，重塑开发
  分享一个来自社区的Cursor高效编程理念与我的实践
  
  演讲者: ysl
drawings:
  persist: false
transition: slide-left
title: '驾驭AI，重塑开发'
mdc: true
---

# 驾驭AI，重塑开发 🚀

### 我的Cursor高效编程最佳实践

<div class="pt-16">
  <div class="mb-8">
    <Badge type="info" text="AI编程协作" />
    <Badge type="tip" text="RIPER-5协议" />
    <Badge type="warning" text="最佳实践" />
  </div>
  
  <div class="text-lg opacity-75">
    分享人：ysl &nbsp;|&nbsp; 技术分享会
  </div>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="在编辑器中打开" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="在 GitHub 上打开"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: intro
class: text-center
---

# 当AI成为伙伴 🤝

<div class="leading-8 opacity-80">
非常感谢前面同事的精彩分享，让我们领略了AI编程工具的强大威力。
</div>

<div v-click class="mt-8 text-lg leading-relaxed">
我的分享将聚焦于一个更具体的问题：<br/>
当我们拥有了如此强大的AI伙伴后，<br/>
作为开发者，我们应该如何<br/>
<span class="text-green-500 font-bold">升级自己的工作模式</span>，<br/>
来最大化它的潜力，同时<br/>
<span class="text-blue-500 font-bold">保证最终的工程质量</span>？
</div>

<div v-click class="mt-8">
    🤔
</div>


---
layout: image-right
image: https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80
class: my-cool-content-on-the-right
---

# AI编程的"蜜月期" ✨

<div class="text-lg leading-relaxed opacity-90">
就像我们刚刚感受到的，AI带来的体验近乎<span class="text-purple-400 font-bold">魔法</span>。
</div>

<div v-clicks class="mt-8 space-y-4">

<div class="flex items-center gap-3">
  <span class="text-xl">🪄</span>
  <span>一句话重构一个模块...</span>
</div>

<div class="flex items-center gap-3">
  <span class="text-xl">🔧</span>
  <span>一个指令修复所有lint错误...</span>
</div>

<div class="flex items-center gap-3">
  <span class="text-xl">🦸</span>
  <span>我们仿佛一夜之间拥有了超能力。</span>
</div>

<div class="flex items-center gap-3">
  <span class="text-xl">⌨️</span>
  <span>我们写<code class="px-2 py-1 bg-gray-800 text-green-400 rounded">Tab</code>键的次数，甚至超过了写分号。</span>
</div>

</div>

<div v-after class="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-300/30">
  <span class="text-xl inline mr-2">🎉</span>
  我们正享受着<span class="font-bold">前所未有的创造力释放</span>。
</div>


---
layout: two-cols
---

# 蜜月期后的新问题 ⚠️

但"蜜月期"过后，新的问题浮出水面：

<div v-clicks class="mt-6 space-y-4">

<div class="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
  <span class="text-xl mt-1">😵‍💫</span>
  <span>当AI的修改横跨十几个文件时，我们是在 <span class="text-green-600 font-bold">主导</span>，还是在 <span class="text-red-600 font-bold">祈祷</span>？</span>
</div>

<div class="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
  <span class="text-xl mt-1">👻</span>
  <span>当AI悄无声息地'优化'了一段我们没注意到的逻辑时，谁来保证系统的稳定性？</span>
</div>

<div class="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
  <span class="text-xl mt-1">🐴</span>
  <span>我们如何确保，这位天才的结对程序员，不会变成一匹失控的野马？</span>
</div>

</div>

::right::

<div v-after class="mt-10">
  <div class="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-300/30">
    <div class="text-center mb-4">
      <span class="text-3xl">💡</span>
    </div>
    <div class="text-lg font-bold text-center text-blue-700">
      真正的挑战
    </div>
    <div class="text-center mt-3 text-gray-700">
      已从<span class="line-through">'如何写代码'</span><br/>
      转变为<br/>
      <span class="text-blue-600 font-bold">'如何确保AI写的代码，永远符合我们的意图'</span>
    </div>
  </div>
</div>


---
layout: section
class: text-center
---

# 问题的提出 🎯

<div class="mt-8 text-2xl opacity-80">
"天才"与"野马"
</div>

<div class="mt-12 flex justify-center items-center gap-8">
  <div class="text-center">
    <span class="text-6xl mb-4">🧠</span>
    <div class="text-lg font-bold text-green-600">天才AI</div>
  </div>
  
  <div class="text-4xl opacity-50">vs</div>
  
  <div class="text-center">
    <span class="text-6xl mb-4">🐴</span>
    <div class="text-lg font-bold text-red-600">失控野马</div>
  </div>
</div>

---

# 强大AI带来的"甜蜜的烦恼" 🍯

<div class="grid grid-cols-2 gap-8">
<div>

<div class="mb-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
  <span class="text-xl inline mr-2">🔥</span>
  AI过于"热情": 在没有明确指令时，它会基于自己的理解进行修改。
</div>

<div class="space-y-3">
  <div class="text-lg font-bold text-red-600 mb-3">
    <span class="inline mr-2">⚠️</span>
    潜在风险:
  </div>
  
  <div v-click class="flex items-center gap-3 p-2 bg-red-50 rounded">
    <span class="text-lg">💔</span>
    <span>破坏现有代码逻辑</span>
  </div>
  
  <div v-click class="flex items-center gap-3 p-2 bg-red-50 rounded">
    <span class="text-lg">🐛</span>
    <span>引入难以察觉的Bug</span>
  </div>
  
  <div v-click class="flex items-center gap-3 p-2 bg-red-50 rounded">
    <span class="text-lg">😵</span>
    <span>开发者失去控制感，从"创造者"变成"审查者"</span>
  </div>
</div>

</div>
<div class="flex items-center justify-center">
  <div class="text-center">
    <div class="text-8xl mb-4">⚡</div>
    <div class="text-2xl font-bold text-yellow-600">危险区域</div>
    <div class="text-sm opacity-60 mt-2">Danger Zone</div>
  </div>
</div>
</div>

<div v-click class="mt-8 text-center">
  <div class="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-300/30">
    <span class="text-2xl inline mr-3">🎯</span>
    <span class="text-xl font-bold">核心挑战</span>: 如何释放AI的全部潜力，同时保证过程的<span class="text-blue-600 font-bold">100%可控</span>？
  </div>
</div>


---
layout: default
---

# 社区的智慧：RIPER-5协议 🧠

<div class="text-center mb-8">
  <Badge type="tip" text="Community Wisdom" />
  <div class="mt-4 text-lg opacity-80">
    学习并实践一位社区专家的成熟工作流
  </div>
</div>

<div class="flex items-center justify-center space-x-3 mt-10">
  <div v-click class="text-center p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-lg transition-all">
    <span class="text-2xl mb-2">🔍</span>
    <div class="font-bold text-blue-600">Research</div>
    <div class="text-sm text-gray-600">研究</div>
  </div>
  
  <div v-click class="text-blue-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-green-50 rounded-lg border border-green-200 hover:shadow-lg transition-all">
    <span class="text-2xl mb-2">💡</span>
    <div class="font-bold text-green-600">Innovate</div>
    <div class="text-sm text-gray-600">创新</div>
  </div>
  
  <div v-click class="text-green-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-purple-50 rounded-lg border border-purple-200 hover:shadow-lg transition-all">
    <span class="text-2xl mb-2">📋</span>
    <div class="font-bold text-purple-600">Plan</div>
    <div class="text-sm text-gray-600">规划</div>
  </div>
  
  <div v-click class="text-purple-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-orange-50 rounded-lg border border-orange-200 hover:shadow-lg transition-all">
    <span class="text-2xl mb-2">🔨</span>
    <div class="font-bold text-orange-600">Execute</div>
    <div class="text-sm text-gray-600">执行</div>
  </div>
  
  <div v-click class="text-orange-400 text-2xl">→</div>
  
  <div v-click class="text-center p-4 bg-red-50 rounded-lg border border-red-200 hover:shadow-lg transition-all">
    <span class="text-2xl mb-2">✅</span>
    <div class="font-bold text-red-600">Review</div>
    <div class="text-sm text-gray-600">审查</div>
  </div>
</div>

<div v-after class="mt-8 text-center">
  <div class="p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-300/30">
    <span class="text-2xl inline mr-3">⚙️</span>
    <span class="text-lg font-bold">核心思想</span>: 将复杂的开发任务，拆解为五个<br/>
    <span class="text-indigo-600 font-bold">清晰、独立、自动流转</span>的阶段。
  </div>
</div>

---

# 指导思想 - 多维思考 🧭

<div class="text-center mb-8">
  <Badge type="warning" text="Core Philosophy" />
  <div class="mt-4 text-lg opacity-80">
    协议的灵魂: 贯穿始终的<span class="text-purple-600 font-bold">多维思考</span>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8">
  <div v-click class="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-2xl">🌐</span>
      <h3 class="font-bold text-blue-700 text-lg">系统思考</h3>
    </div>
    <p class="text-blue-600">鸟瞰全局，理解模块间的联系。</p>
  </div>
  
  <div v-click class="group p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-2xl">⚖️</span>
      <h3 class="font-bold text-green-700 text-lg">辩证思考</h3>
    </div>
    <p class="text-green-600">正反合，比较不同方案的利弊。</p>
  </div>
  
  <div v-click class="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-2xl">🚀</span>
      <h3 class="font-bold text-purple-700 text-lg">创新思考</h3>
    </div>
    <p class="text-purple-600">打破常规，寻找非标准答案。</p>
  </div>
  
  <div v-click class="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all hover:scale-105">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-2xl">🔬</span>
      <h3 class="font-bold text-orange-700 text-lg">批判思考</h3>
    </div>
    <p class="text-orange-600">压力测试，预演所有可能的失败。</p>
  </div>
</div>

<div v-after class="mt-8 text-center">
  <div class="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-300/30">
    <span class="text-2xl inline mr-3">🎯</span>
    <span class="text-lg font-bold">目标</span>: 确保我们的产出，不仅是<span class="text-gray-500 line-through">能用(Working)</span>的代码，<br/>
    更是<span class="text-emerald-600 font-bold">优质(Quality)</span>的代码。
  </div>
</div>

---
layout: section
class: text-center
---

# RIPER-5 协议详解 📋

<div class="mt-8 text-xl opacity-80">
深入了解每个阶段的具体实践
</div>

<div class="mt-12 flex justify-center">
  <div class="grid grid-cols-5 gap-4">
    <div class="text-center">
      <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">R</div>
      <div class="text-sm mt-2">Research</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">I</div>
      <div class="text-sm mt-2">Innovate</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">P</div>
      <div class="text-sm mt-2">Plan</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">E</div>
      <div class="text-sm mt-2">Execute</div>
    </div>
    <div class="text-center">
      <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mx-auto">R</div>
      <div class="text-sm mt-2">Review</div>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 模式一 [Research] 🔍
## 纯粹的观察者

::left::

<div class="space-y-4">

<div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🎯</span>
    <span class="font-bold text-blue-700">目标</span>
  </div>
  <p class="text-blue-600">只看不做，收集信息，同步认知。</p>
</div>

<div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🤖</span>
    <span class="font-bold text-green-700">AI行为</span>
  </div>
  <p class="text-green-600">分析代码、提问、识别依赖。</p>
</div>

<div class="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🚫</span>
    <span class="font-bold text-red-700">禁止</span>
  </div>
  <p class="text-red-600">提建议、做修改。</p>
</div>

<div class="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">📝</span>
    <span class="font-bold text-purple-700">产出</span>
  </div>
  <p class="text-purple-600">一份关于现状的客观分析报告。</p>
</div>

</div>

::right::

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <div class="text-8xl mb-4">🔍</div>
    <div class="text-2xl font-bold text-blue-600 mb-2">Research Phase</div>
    <div class="text-lg text-gray-600">观察与分析</div>
    <div class="mt-4 p-4 bg-blue-100 rounded-lg">
      <code class="text-sm text-blue-800">"只看不做，先理解现状"</code>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 模式二 [Innovate] 💡
## 疯狂的创意家

::left::

<div class="space-y-4">

<div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🎯</span>
    <span class="font-bold text-green-700">目标</span>
  </div>
  <p class="text-green-600">头脑风暴，探索所有可能性，并推演关键方案的深远影响。</p>
</div>

<div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🤖</span>
    <span class="font-bold text-blue-700">AI行为</span>
  </div>
  <p class="text-blue-600">提出多种方案、<span class="font-bold">对优选方案进行影响推演</span>(如性能、可维护性)。</p>
</div>

<div class="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🚫</span>
    <span class="font-bold text-red-700">禁止</span>
  </div>
  <p class="text-red-600">深入细节、编写代码。</p>
</div>

<div class="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">📝</span>
    <span class="font-bold text-purple-700">产出</span>
  </div>
  <p class="text-purple-600">一份包含多种备选方案及其<span class="font-bold">深度利弊与影响分析</span>的报告。</p>
</div>

</div>

::right::

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <div class="text-8xl mb-4">💡</div>
    <div class="text-2xl font-bold text-green-600 mb-2">Innovate Phase</div>
    <div class="text-lg text-gray-600">创意与方案</div>
    <div class="mt-4 p-4 bg-green-100 rounded-lg">
      <code class="text-sm text-green-800">"探索无限可能，深度推演影响"</code>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 模式三 [Plan] 📋
## 精密的建筑师

::left::

<div class="space-y-4">

<div class="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🎯</span>
    <span class="font-bold text-purple-700">目标</span>
  </div>
  <p class="text-purple-600">将选定方案转化为施工蓝图。</p>
</div>

<div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🤖</span>
    <span class="font-bold text-blue-700">AI行为</span>
  </div>
  <p class="text-blue-600">输出精确的文件路径、函数签名、数据结构。</p>
</div>

<div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">⭐</span>
    <span class="font-bold text-green-700">核心产出</span>
  </div>
  <p class="text-green-600">一份<span class="font-bold">原子级的、可顺序执行</span>的Checklist。</p>
</div>

<div class="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🚫</span>
    <span class="font-bold text-red-700">禁止</span>
  </div>
  <p class="text-red-600">任何模糊不清的描述。</p>
</div>

</div>

::right::

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <div class="text-8xl mb-4">📋</div>
    <div class="text-2xl font-bold text-purple-600 mb-2">Plan Phase</div>
    <div class="text-lg text-gray-600">精确规划</div>
    <div class="mt-4 p-4 bg-purple-100 rounded-lg">
      <code class="text-sm text-purple-800">"原子级清单，零模糊描述"</code>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 模式四 [Execute] ⚡
## 忠实的执行者

::left::

<div class="space-y-4">

<div class="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🎯</span>
    <span class="font-bold text-orange-700">目标</span>
  </div>
  <p class="text-orange-600">100%按图施工。</p>
</div>

<div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🤖</span>
    <span class="font-bold text-blue-700">AI行为</span>
  </div>
  <p class="text-blue-600">严格按照Checklist逐项实现代码。</p>
</div>

<div class="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">👑</span>
    <span class="font-bold text-yellow-700">黄金法则</span>
  </div>
  <p class="text-yellow-600">禁止任何计划外的创造，微小偏差必须先报告再修改。</p>
</div>

<div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🤝</span>
    <span class="font-bold text-green-700">互动</span>
  </div>
  <p class="text-green-600">每完成一项，都需开发者确认。</p>
</div>

</div>

::right::

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <div class="text-8xl mb-4">⚡</div>
    <div class="text-2xl font-bold text-orange-600 mb-2">Execute Phase</div>
    <div class="text-lg text-gray-600">严格执行</div>
    <div class="mt-4 p-4 bg-orange-100 rounded-lg">
      <code class="text-sm text-orange-800">"按图施工，绝无自由发挥"</code>
    </div>
  </div>
</div>

---
layout: two-cols-header
---

# 模式五 [Review] ✅
## 苛刻的质检员

::left::

<div class="space-y-4">

<div class="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🎯</span>
    <span class="font-bold text-red-700">目标</span>
  </div>
  <p class="text-red-600">成果验收，并利用AI<span class="font-bold">提升代码质量保障</span>。</p>
</div>

<div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">🤖</span>
    <span class="font-bold text-blue-700">AI行为</span>
  </div>
  <p class="text-blue-600">逐行比对实现与计划，验证合规性，<span class="font-bold">并为核心改动生成单元测试</span>。</p>
</div>

<div class="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-lg">📝</span>
    <span class="font-bold text-purple-700">产出</span>
  </div>
  <p class="text-purple-600">一份明确的审查报告，甚至<span class="font-bold">包含自动化测试用例</span>。</p>
</div>

</div>

::right::

<div class="flex items-center justify-center h-full">
  <div class="text-center">
    <div class="text-8xl mb-4">✅</div>
    <div class="text-2xl font-bold text-red-600 mb-2">Review Phase</div>
    <div class="text-lg text-gray-600">质量验收</div>
    <div class="mt-4 p-4 bg-red-100 rounded-lg">
      <code class="text-sm text-red-800">"严格验收，自动化测试保障"</code>
    </div>
  </div>
</div>

---
layout: default
---

# 案例研究：一次重构任务 📚

<div class="text-center mb-8">
  <Badge type="info" text="Real Case Study" />
  <div class="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
    <span class="text-xl inline mr-2">💻</span>
    <span class="font-bold">任务</span>: 将一个旧的 callback-based 的JS模块重构为 <code class="px-2 py-1 bg-blue-100 text-blue-700 rounded">async/await</code> 语法。
  </div>
</div>

<div v-clicks class="space-y-4">

<div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
  <div>
    <div class="font-bold text-blue-700 mb-1">Research (我)</div>
    <div class="text-blue-600 mb-2">"分析这个旧模块的依赖关系。"</div>
    <div class="text-sm bg-white p-2 rounded border-l-4 border-blue-400">
      <span class="font-bold">AI报告:</span> 指出 <code>fetchData(cb)</code> 函数被三个组件依赖。
    </div>
  </div>
</div>

<div class="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
  <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
  <div>
    <div class="font-bold text-green-700 mb-1">Innovate (我)</div>
    <div class="text-green-600 mb-2">"提出重构方案并推演其影响。"</div>
    <div class="text-sm bg-white p-2 rounded border-l-4 border-green-400">
      <span class="font-bold">AI分析:</span> 提供'完全重构'与'兼容旧版'方案，并指出'完全重构'能极大提升未来可维护性。
    </div>
  </div>
</div>

<div class="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
  <div>
    <div class="font-bold text-purple-700 mb-1">Plan (我)</div>
    <div class="text-purple-600 mb-2">"为'完全重构'方案制定一份原子级的执行清单。"</div>
    <div class="text-sm bg-white p-2 rounded border-l-4 border-purple-400">
      <span class="font-bold">AI蓝图:</span> 生成包含5个精确步骤的Checklist。
    </div>
  </div>
</div>

<div class="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
  <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
  <div>
    <div class="font-bold text-orange-700 mb-1">Execute (我)</div>
    <div class="text-orange-600 mb-2">"按清单逐项执行，每步完成后向我报告。"</div>
    <div class="text-sm bg-white p-2 rounded border-l-4 border-orange-400">
      <span class="font-bold">AI执行:</span> 严格按计划施工，每次修改都由我确认后才继续。
    </div>
  </div>
</div>

<div class="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
  <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
  <div>
    <div class="font-bold text-red-700 mb-1">Review (我)</div>
    <div class="text-red-600 mb-2">"审查结果，并为新函数生成单元测试。"</div>
    <div class="text-sm bg-white p-2 rounded border-l-4 border-red-400">
      <span class="font-bold">AI质检:</span> 验证代码与计划一致，并成功生成了单元测试。
    </div>
  </div>
</div>

</div>

<div v-after class="mt-8 text-center">
  <div class="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-300/30">
    <span class="text-2xl inline mr-3">📈</span>
    <span class="text-xl font-bold">成果</span>: 整个过程耗时仅为手动重构的<span class="text-green-600 font-bold">20%</span>，且<span class="text-blue-600 font-bold">掌控感十足</span>。
  </div>
</div>

---
layout: two-cols
---

# 实践成效 - 我得到了什么？ 📈

<div class="text-center mb-8">
  <Badge type="success" text="Transformation Results" />
  <div class="mt-4 text-lg opacity-80">
    引入协议后的根本性改变
  </div>
</div>

<div class="grid grid-cols-2 gap-8">

<div class="space-y-4">
  <div class="text-center p-4 bg-red-50 rounded-lg border border-red-200">
    <span class="text-3xl mb-2">😵‍💫</span>
    <div class="text-xl font-bold text-red-600 mb-4">Before (之前)</div>
  </div>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-red-50 rounded border border-red-200">
      <span class="text-lg">💔</span>
      <span>与AI的沟通充满不确定性</span>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-red-50 rounded border border-red-200">
      <span class="text-lg">🛠️</span>
      <span>经常需要返工，修复AI的"即兴创作"</span>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-red-50 rounded border border-red-200">
      <span class="text-lg">😰</span>
      <span>对最终代码质量感到焦虑</span>
    </div>
  </div>
</div>

<div class="space-y-4">
  <div class="text-center p-4 bg-green-50 rounded-lg border border-green-200">
    <span class="text-3xl mb-2">😁</span>
    <div class="text-xl font-bold text-green-600 mb-4">After (之后)</div>
  </div>
  
  <div class="space-y-3">
    <div class="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-200">
      <span class="text-lg">🚀</span>
      <span><span class="font-bold">开发效率提升:</span> 沟通成本降低</span>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-200">
      <span class="text-lg">💎</span>
      <span><span class="font-bold">代码质量更高:</span> 结构化思考带来更优设计</span>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-200">
      <span class="text-lg">👑</span>
      <span><span class="font-bold">掌控力回归:</span> 我是主导者，AI是超级执行者</span>
    </div>
    
    <div class="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-200">
      <span class="text-lg">🌊</span>
      <span><span class="font-bold">心流体验:</span> 更专注于创造性工作</span>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# 总结与展望 🌟

<div class="text-center mb-8">
  <Badge type="warning" text="Key Takeaways" />
  <div class="mt-4 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    拥抱未来，从建立规则开始
  </div>
</div>

<div v-clicks class="space-y-6">

<div class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl">💡</span>
    <span class="text-xl font-bold text-blue-700">核心观点</span>
  </div>
  <p class="text-blue-600 text-lg">与AI协作的关键，不在于AI有多智能，而在于我们如何<span class="font-bold">引导和规范</span>它的智能。</p>
</div>

<div class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
  <div class="flex items-center gap-3 mb-4">
    <span class="text-2xl">👉</span>
    <span class="text-xl font-bold text-green-700">给你的建议</span>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <div class="text-center p-3 bg-white rounded-lg border border-green-100">
      <span class="text-2xl mb-2">📜</span>
      <div class="font-bold text-green-700">建立协议</div>
      <div class="text-sm text-green-600">制定你自己的规则</div>
    </div>
    <div class="text-center p-3 bg-white rounded-lg border border-green-100">
      <span class="text-2xl mb-2">👨‍💼</span>
      <div class="font-bold text-green-700">管理AI</div>
      <div class="text-sm text-green-600">像管理员工一样</div>
    </div>
    <div class="text-center p-3 bg-white rounded-lg border border-green-100">
      <span class="text-2xl mb-2">📚</span>
      <div class="font-bold text-green-700">持续学习</div>
      <div class="text-sm text-green-600">保持探索精神</div>
    </div>
  </div>
</div>

<div class="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-2xl">🔮</span>
    <span class="text-xl font-bold text-purple-700">未来展望</span>
  </div>
  <p class="text-purple-600 text-lg">AI将承担更多开发任务，而人类开发者将更聚焦于<span class="font-bold">创造力、架构设计和产品价值</span>。</p>
</div>

</div>

---
layout: end
class: text-center
---

# Thanks! Q&A 🙏

<div class="mt-12 space-y-8">
  
  <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    感谢聆听，期待交流！
  </div>
  
  <div class="flex justify-center items-center gap-8">
    <div class="text-center">
      <span class="text-6xl mb-4">👨‍💻</span>
      <div class="text-xl font-bold text-gray-800">ysl</div>
      <div class="text-gray-600">ysl@example.com</div>
    </div>
    
    <div class="h-24 w-px bg-gray-300"></div>
    
    <div class="text-center">
      <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
        <span class="text-4xl text-white">📱</span>
      </div>
      <div class="text-sm text-gray-600 max-w-40">
        扫描二维码<br/>获取完整协作协议
      </div>
    </div>
  </div>
  
  <div class="mt-8 flex justify-center gap-4">
    <Badge type="info" text="AI协作专家" />
    <Badge type="tip" text="RIPER-5协议" />
    <Badge type="success" text="开源分享" />
  </div>
  
  <div class="text-gray-500 text-sm">
    <span class="inline mr-1">❤️</span>
    让AI成为最好的编程伙伴
  </div>
  
</div> 