---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
title: '驾驭AI，重塑开发'
info: |
  分享一个来自社区的Cursor高效编程理念与我的实践
  分享人: ysl
---

# 驾驭AI，重塑开发

### 我的Cursor高效编程最佳实践

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# 当AI成为伙伴

<br>

<p class="text-xl">
非常感谢前面同事的精彩分享，让我们领略了AI编程工具的强大威力。
</p>
<br>
<p class="text-xl" v-click>
我的分享将聚焦于一个更具体的问题：当我们拥有了如此强大的AI伙伴后，作为开发者，我们应该如何升级自己的工作模式，来最大化它的潜力，同时保证最终的工程质量？
</p>


---
layout: image-right
image: https://source.unsplash.com/random/800x600?honeymoon,magic
---

# AI编程的"蜜月期"

就像我们刚刚感受到的，AI带来的体验近乎魔法。

<div v-clicks>

- 一句话重构一个模块...
- 一个指令修复所有lint错误...
- 我们仿佛一夜之间拥有了超能力。
- 我们写`Tab`键的次数，甚至超过了写分号。

</div>

<p v-after>我们正享受着前所未有的创造力释放。</p>


---
layout: two-cols
---

# 蜜月期后的新问题

但"蜜月期"过后，新的问题浮出水面：

<div v-clicks class="mt-8">

- 当AI的修改横跨十几个文件时，我们是在 **主导**，还是在 **祈祷**？
- 当AI悄无声息地'优化'了一段我们没注意到的逻辑时，谁来保证系统的稳定性？
- 我们如何确保，这位天才的结对程序员，不会变成一匹失控的野马？

</div>

<p v-after class="mt-10 text-xl p-4 bg-gray-100 rounded-lg">
  **真正的挑战，已从'如何写代码'，转变为'如何确保AI写的代码，永远符合我们的意图'。**
</p>


---
layout: section
---

# 问题的提出

### "天才"与"野马"

---

# 强大AI带来的"甜蜜的烦恼"

<div class="grid grid-cols-2 gap-8">
<div>

AI过于"热情": 在没有明确指令时，它会基于自己的理解进行修改。

**潜在风险:**
<ul class="mt-4">
  <li v-click>破坏现有代码逻辑。</li>
  <li v-click>引入难以察觉的Bug。</li>
  <li v-click>开发者失去控制感，从"创造者"变成"审查者"。</li>
</ul>

</div>
<div>
<img src="https://source.unsplash.com/random/800x600?chaos,mess" class="rounded-lg shadow-lg" alt="Chaos" />
</div>
</div>

<div v-click class="mt-8 text-center text-xl p-4 bg-gray-100 rounded-lg">
核心挑战: 如何释放AI的全部潜力，同时保证过程的100%可控？
</div>


---
layout: default
---

# 社区的智慧：RIPER-5协议

学习并实践一位社区专家的成熟工作流

<div class="flex items-center justify-center space-x-4 mt-10 text-2xl">
  <div v-click>
    <p>Research</p>
    <p class="text-sm text-gray-500">研究</p>
  </div>
  <div v-click class="text-gray-400 mx-2">→</div>
  <div v-click>
    <p>Innovate</p>
    <p class="text-sm text-gray-500">创新</p>
  </div>
  <div v-click class="text-gray-400 mx-2">→</div>
  <div v-click>
    <p>Plan</p>
    <p class="text-sm text-gray-500">规划</p>
  </div>
  <div v-click class="text-gray-400 mx-2">→</div>
  <div v-click>
    <p>Execute</p>
    <p class="text-sm text-gray-500">执行</p>
  </div>
  <div v-click class="text-gray-400 mx-2">→</div>
  <div v-click>
    <p>Review</p>
    <p class="text-sm text-gray-500">审查</p>
  </div>
</div>

<p v-after class="mt-6">核心思想: 将复杂的开发任务，拆解为五个清晰、独立、自动流转的阶段。</p>

---

# 指导思想 - 多维思考

协议的灵魂: 贯穿始终的多维思考

<div class="grid grid-cols-2 gap-4 mt-8">
  <div v-click class="p-4 border rounded-lg hover:bg-gray-50">
    <h3 class="font-bold">系统思考</h3>
    <p>鸟瞰全局，理解模块间的联系。</p>
  </div>
  <div v-click class="p-4 border rounded-lg hover:bg-gray-50">
    <h3 class="font-bold">辩证思考</h3>
    <p>正反合，比较不同方案的利弊。</p>
  </div>
  <div v-click class="p-4 border rounded-lg hover:bg-gray-50">
    <h3 class="font-bold">创新思考</h3>
    <p>打破常规，寻找非标准答案。</p>
  </div>
  <div v-click class="p-4 border rounded-lg hover:bg-gray-50">
    <h3 class="font-bold">批判思考</h3>
    <p>压力测试，预演所有可能的失败。</p>
  </div>
</div>

<p v-after class="mt-4">目标: 确保我们的产出，不仅是能用(Working)的代码，更是优质(Quality)的代码。</p>

---
layout: section
---

# RIPER-5 协议详解

---
layout: two-cols-header
---

# 模式一 [Research]
## 纯粹的观察者

::left::

- **目标**: 只看不做，收集信息，同步认知。
- **AI行为**: 分析代码、提问、识别依赖。
- **禁止**: 提建议、做修改。
- **产出**: 一份关于现状的客观分析报告。

::right::

<img src="https://source.unsplash.com/random/400x400?magnifying-glass" class="rounded-lg shadow-lg" alt="Research" />

---
layout: two-cols-header
---

# 模式二 [Innovate]
## 疯狂的创意家

::left::

- **目标**: 头脑风暴，探索所有可能性，并推演关键方案的深远影响。
- **AI行为**: 提出多种方案、**对优选方案进行影响推演**(如性能、可维护性)。
- **禁止**: 深入细节、编写代码。
- **产出**: 一份包含多种备选方案及其**深度利弊与影响分析**的报告。

::right::

<img src="https://source.unsplash.com/random/400x400?idea,lightbulb" class="rounded-lg shadow-lg" alt="Innovate" />

---
layout: two-cols-header
---

# 模式三 [Plan]
## 精密的建筑师

::left::

- **目标**: 将选定方案转化为施工蓝图。
- **AI行为**: 输出精确的文件路径、函数签名、数据结构。
- **核心产出**: 一份原子级的、可顺序执行的Checklist。
- **禁止**: 任何模糊不清的描述。

::right::

<img src="https://source.unsplash.com/random/400x400?blueprint,architecture" class="rounded-lg shadow-lg" alt="Plan" />

---
layout: two-cols-header
---

# 模式四 [Execute]
## 忠实的执行者

::left::

- **目标**: 100%按图施工。
- **AI行为**: 严格按照Checklist逐项实现代码。
- **黄金法则**: 禁止任何计划外的创造，微小偏差必须先报告再修改。
- **互动**: 每完成一项，都需开发者确认。

::right::

<img src="https://source.unsplash.com/random/400x400?tools,hammer" class="rounded-lg shadow-lg" alt="Execute" />

---
layout: two-cols-header
---

# 模式五 [Review]
## 苛刻的质检员

::left::

- **目标**: 成果验收，并利用AI**提升代码质量保障**。
- **AI行为**: 逐行比对实现与计划，验证合规性，**并为核心改动生成单元测试**。
- **产出**: 一份明确的审查报告，甚至**包含自动化测试用例**。

::right::

<img src="https://source.unsplash.com/random/400x400?checklist,clipboard" class="rounded-lg shadow-lg" alt="Review" />

---
layout: default
---

# 案例研究：一次重构任务

**任务**: 将一个旧的 callback-based 的JS模块重构为 `async/await` 语法。

<div v-clicks>

- **1. Research (我)**: "分析这个旧模块的依赖关系。" <br/> **(AI)**: 报告指出 `fetchData(cb)` 函数被三个组件依赖。
- **2. Innovate (我)**: "提出重构方案并推演其影响。" <br/> **(AI)**: 提供'完全重构'与'兼容旧版'方案，并指出'完全重构'能极大提升未来可维护性。
- **3. Plan (我)**: "为'完全重构'方案制定一份原子级的执行清单。" <br/> **(AI)**: 生成包含5个精确步骤的Checklist。
- **4. Execute (我)**: "按清单逐项执行，每步完成后向我报告。" <br/> **(AI)**: 严格按计划施工，每次修改都由我确认后才继续。
- **5. Review (我)**: "审查结果，并为新函数生成单元测试。" <br/> **(AI)**: 验证代码与计划一致，并成功生成了单元测试。

</div>

<p v-after class="mt-4 text-center">整个过程耗时仅为手动重构的20%，且掌控感十足。</p>

---
layout: two-cols
---

# 实践成效 - 我得到了什么？

### 引入协议后的改变

### Before (之前)
<ul class="mt-4">
  <li>与AI的沟通充满不确定性。</li>
  <li>经常需要返工，修复AI的"即兴创作"。</li>
  <li>对最终代码质量感到焦虑。</li>
</ul>

::right::

### After (之后)
<ul class="mt-4">
  <li>开发效率提升: 沟通成本降低。</li>
  <li>代码质量更高: 结构化思考带来更优设计。</li>
  <li>掌控力回归: 我是主导者，AI是超级执行者。</li>
  <li>心流体验: 更专注于创造性工作。</li>
</ul>

---
layout: default
---

# 总结与展望

## 拥抱未来，从建立规则开始

<div v-clicks>

- **核心观点**: 与AI协作的关键，不在于AI有多智能，而在于我们如何引导和规范它的智能。

- **给你的建议**:
  - 建立你自己的协议
  - 像管理"员工"一样管理AI
  - 保持学习

- **未来**: AI将承担更多开发任务，而人类开发者将更聚焦于创造力、架构设计和产品价值。

</div>

---
layout: center
class: text-center
---

# Thanks! Q&A

<div class="mt-8">
  <p>yslf</p>
  <p>ysl@example.com</p>
  <div class="mt-4">
    <img src="https://source.unsplash.com/random/200x200?qrcode" class="mx-auto" alt="QR Code" />
    <p class="text-sm mt-2">扫描二维码，获取我的完整协作协议</p>
  </div>
</div> 