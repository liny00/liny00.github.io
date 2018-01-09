---
layout: page
title: "circRNA测序（circle RNA sequencing）"
permalink: /science/circRNA_sequencing/
sidebar: true
science: true
---


## 简介

环状RNA（circular RNA，circRNA）是最近发现的一类特殊的非编码RNA，它大量存在于真核细胞胞质内，主要由pre-mRNA在可变剪接的过程中，将上游exon的5’端与下游exon的3’端剪接到一起，从而形成的首尾相接的环状RNA分子通过可变剪切加工产生。
近年研究发现，circRNA具有很多重要的调控功能，例如，circRNA可以作为竞争性内源RNA（competing endogenous RNA，ceRNA）结合胞内miRNA，阻断miRNA对其靶基因的抑制作用。除此以外，circRNA也具有调控其他类型RNA、调节蛋白质活性等功能。

---

## 建库方法

<img class="fig30" src="/image/circRNA_sequencing/400new建库原理图-circRNA 测序.jpg">

---

## 技术流程

<img class="fig60" src="/image/circRNA_sequencing/workflow.png">

---

## 分析结果展示

<img class="fig40" src="/image/circRNA_sequencing/a.png">
<p style="text-align: center; ">circRNA 表达分布图</p>
<br />

<img class="fig40" src="/image/circRNA_sequencing/b.png">
<p style="text-align: center; ">差异表达基因GO分析</p>
<br />

<img class="fig50" src="/image/circRNA_sequencing/c.png">
<p style="text-align: center; ">差异表达基因 Pathway 富集分析散点图</p>

---

## 康测技术优势
* 低至10ug RNA的建库起始量
* 采用链特异性建库方法，能更好鉴定circRNA的正反链来源
* 联合miRNA测序数据，研究ceRNA调控机制

---

## 案例解析

<img src="/image/circRNA_sequencing/circRNA-seq-0.png" >

环状RNA（circRNA）是一类广泛存在于真核生物中的内源性RNA，可能在基因表达调控方面起到一定作用。但是，环状RNA在人体中如何发挥调控作用仍未阐明。
该研究中，作者对六种正常组织和七种癌变组织样本通过去除核糖体的方式进行了RNA测序，并发现了27000种circRNA，其中大多数的circRNA在正常组织和癌变组织中差异表达。作者进一步研究了来源于HIPK3基因Exon2的circRNA，并将其命名为circHIPK3。circHIPK3的沉默，而非HIPK3 mRNA的沉默能够明显抑制人细胞的生长。荧光素酶筛选实验显示，circHIPK3能像海绵一样吸收9种miRNA至18个潜在结合位点。而且，circHIPK3直接结合miR-124并抑制miR-124的活性。这项研究证明来自mRNA前体的circRNA具有调控人细胞的作用。


<p style="text-align: center; "><img src="/image/circRNA_sequencing/circRNA-seq-2.png">

人的circRNA在基因组的来源统计图：80%以上的circRNA来自外显子，小部分来自内含子、lncRNA和反义区（a）；不同正常组织中的circRNA聚类分析热力图（b）；进一步研究发现circHIPK3是基因HIPK3产生的主要circRNA，基因HIPK3产生五种circRNA，其中circHIPK3包含基因HIPK3的第二外显子（c）。

<div><strong>参考文献:</strong><div>
Zheng Q, Bao C, Guo W, et al. Circular RNA profiling reveals an abundant circHIPK3 that regulates cell growth by sponging multiple miRNAs[J]. Nature Communications, 2016, 7(11215).
