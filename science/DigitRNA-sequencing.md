---
layout: page
title: "绝对定量转录组测序"
permalink: /science/DigitRNA_sequencing/
sidebar: true
science: true
---

## 简介

转录组为特定细胞在某一功能状态下转录出来的所有RNA，主要包括mRNA，某些情况下也包括非编码RNA。转录组测序利用高通量测序技术，快速且全面地揭示某一物种特定细胞或组织在某一状态下的几乎所有转录本信息，包括转录本表达量、可变剪接体、可变polyA位点等。

Duplication指测序数据中的重复reads。测序文库构建过程中，通常会进行10轮左右的PCR扩增循环。如果建库起始量太低，或接头连接效率不高，建库时就需要增加PCR扩增循环次数，以提高文库的片段数量，这种情况就会产生较高的duplication。此外，PCR偏好性也是duplication产生的重要原因。另一方面，建库时的RNA随机打断也能产生长度和序列完全一致的片段，这部分重复片段可称为天然重复（真重复），这与PCR扩增重复（假重复）存在本质区别。

对于Duplication，如果不做去重处理，扩增重复就会对表达量分析造成干扰。而如果去除所有的重复reads，留下完全不重复的reads，则天然重复也被剔除，还会造成有效测序数据量减少。因此如何区分真假重复是表达量准确定量的关键。

绝对定量转录组测序，在文库扩增之前为每一条RNA片段加上唯一的身份标签（Unique Identifier，UID）。那么同一个片段扩增出来的产物均带有相同的标签，而天然重复片段则带有不同的标签。测序完成后利用UID过滤数据，将相同标记的扩增产物进行合并，就能准确去除PCR扩增重复、同时保留样本的天然重复，一比一准确还原样本扩增前的原始状态。在此过程中，PCR扩增和测序错误同样可以被纠正：扩增和测序的错误会使得相同UID标签对应多个不同的序列，那么只需比较这些序列的相似性，即可纠正这些错误。

<img class="fig30" src="/image/DigitRNA_sequencing/UID-1.png">
<p style="text-align: center; ">UID去重和纠错原理</p>       
---

## 建库方法

<img class="fig40" src="/image/DigitRNA_sequencing/UID-2.png">

---

## 技术流程

<img class="fig40" src="/image/DigitRNA_sequencing/UID-3.png">

---

## 部分结果展示

<img class="fig60" src="/image/DigitRNA_sequencing/UID结果.png">

---

## 康测技术优势

* 创新UID技术，让转录组进入数字化时代
* 无惧扩增偏好，精确还原样本初始状态
* 测序结果可靠，与qPCR结果完美印证
* 视角更广阔，低丰度转录本准确定量
* 多种分析全搞定：差异表达分析、可变剪接剪接分析、RNA编辑、共表达网络……

