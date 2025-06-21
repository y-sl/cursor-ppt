---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
title: '驾驭AI，重塑开发'
info: |
  我的Cursor高效编程最佳实践
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
layout: image-right
image: https://source.unsplash.com/random/800x600?technology,code
---

# 故事开篇 - 开发者的新纪元

我们正处在一个怎样的时代？

<br>

> AI is the most profound technology we are working on today.
> <br>
> -- Sundar Pichai

<br>

从Copilot到Cursor，AI正在从"辅助工具"变为"编程伙伴"。

这带来了前所未有的机遇，也带来了新的挑战。

---
layout: two-cols
---

# 主角登场 - 什么是Cursor?

为AI协作而生的IDE

<br>

一个将AI能力深度集成到开发流程中的IDE。

它不是VS Code + 插件: 它是从底层设计就为了实现AI原生的编程体验。

::right::

### 三大核心特性:

- **代码库上下文感知**: AI能"阅读"并理解你的整个项目。
- **@精准指令**: 通过@符号，可以精确地让AI聚焦于特定文件、函数或文档。
- **一键生成与重构**: 根据自然语言指令，自动生成代码、编写测试、进行重构。

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

# 我的解决方案 - RIPER-5协议

给AI套上"缰绳": 我的RIPER-5工作流

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

# 模式一 [Research]
## 纯粹的观察者

- **目标**: 只看不做，收集信息，同步认知。
- **AI行为**: 分析代码、提问、识别依赖。
- **禁止**: 提建议、做修改。
- **产出**: 一份关于现状的客观分析报告。

---

# 模式二 [Innovate]
## 疯狂的创意家

- **目标**: 头脑风暴，探索所有可能性。
- **AI行为**: 提出多种方案、评估优缺点。
- **禁止**: 深入细节、编写代码。
- **产出**: 一份包含多种备选方案及其利弊分析的列表。

---

# 模式三 [Plan]
## 精密的建筑师

- **目标**: 将选定方案转化为施工蓝图。
- **AI行为**: 输出精确的文件路径、函数签名、数据结构。
- **核心产出**: 一份原子级的、可顺序执行的Checklist。
- **禁止**: 任何模糊不清的描述。

---

# 模式四 [Execute]
## 忠实的执行者

- **目标**: 100%按图施工。
- **AI行为**: 严格按照Checklist逐项实现代码。
- **黄金法则**: 禁止任何计划外的创造，微小偏差必须先报告再修改。
- **互动**: 每完成一项，都需开发者确认。

---

# 模式五 [Review]
## 苛刻的质检员

- **目标**: 成果验收，确保与计划完全一致。
- **AI行为**: 逐行比对实现与计划，验证合规性。
- **产出**: 一份明确的审查报告："完全符合"或"存在偏差"。

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
</div> 