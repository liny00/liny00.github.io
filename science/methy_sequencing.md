---
layout: page
title: "全基因组甲基化测序（Whole Genome Bisulfite Sequencing）"
permalink: /science/methy_sequencing/
sidebar: true
science: true
---


## 简介

全基因组甲基化测序（Whole Genome Bisulfite Sequencing，BS-Seq）是将重亚硫酸盐（Bisulfite）处理方法和Illumina高通量测序平台相结合，对有参考基因组信息的物种进行全基因组范围内的甲基化水平的测序。Bisulfite处理能够将基因组中未甲基化的C碱基与甲基化的C碱基区分开来，因此成为表观遗传学研究的经典实验方法。BS-Seq能够绘制单碱基分辨率的DNA甲基化图谱，可用于研究物种特定DNA区域甲基化与特定表型之间的关联，并进一步研究环境、营养以及其他因素对特定基因甲基化的影响，为人类疾病的发生、治疗，以及动植物分子育种等提供研究基础。康测使用自主开发的单链DNA建库方法，规避了亚硫氢酸盐降解DNA的影响，建库起始量只需原来的百分之一。

---

## 建库方法

<img src="/image/methy_sequencing/400new建库原理图-bs测序.jpg">

---

## 技术流程

<img class="fig70" src="/image/methy_sequencing/workflow.png">

---

## 分析结果展示

<img src="/image/methy_sequencing/a.png">
<p style="text-align: center; ">基因上下游甲基化分布情况</p>

<img src="/image/methy_sequencing/b.png">
<p style="text-align: center; ">Motif分析</p>

<img src="/image/methy_sequencing/c.png">
<p style="text-align: center; ">差异甲基化基因的GO分类</p>

<img src="/image/methy_sequencing/d.png">
<p style="text-align: center; ">甲基化在不同基因区域中的分布情况</p>

## 康测技术优势

* 超低建库起始量技术：基于单链DNA建库方法，避免了亚硫氢酸盐降解DNA的影响，建库起始量只需常规方法的百分之一
* 优化的核心DMR鉴定和注释流程

---

## 案例解析

<img src="/image/methy_sequencing/bs测序文献.png">

众所周知，DNA甲基化在胚胎发育过程中起到重要的作用，但在滋养层发育为胎盘的过程中，DNA甲基化的作用仍不甚清楚。该文章中，作者对DNA甲基转移酶Dnmt3a/3b进行突变，改变DNA的甲基化模式，对滋养层发育过程中DNA甲基化的作用进行研究，发现卵母细胞的甲基化在此过程中发挥着至关重要的调控作用。作者利用RNA-seq和BS-seq技术分析鉴定了甲基化调控的相关基因，这些基因调控细胞黏附和迁移，从而影响滋养层浸润。其中，滋养层细胞的DNA甲基化参与调控梳状抑制复合物PRC1中的Scml2的基因沉默、抑制Scml2表达，是滋养层细胞黏附、滋养层正常发育所必须的。

<img src="/image/methy_sequencing/bs-seq-2.png">
<p style="text-align: center; "><img src="/image/methy_sequencing/bs-seq-3.png"></p>

敲除Dnmt3a/3b的卵母细胞形成的四种胚胎（杂合子、Dnmt3a敲除、Dnmt3b敲除、Dnmt3a和Dnmt3b双敲除），在发育过程均发生滋养层缺失，母体的DNA甲基化在滋养层巨细胞的黏附和合体滋养层形成中发挥重要作用。

<img src="/image/methy_sequencing/bs-seq-4.png">

对照组、杂合子组、双敲除组通过全基因组甲基化测序（BS-seq）发现，双敲除组在全基因组水平，及基因启动子区、基因body区均为低甲基化；杂合子组甲基化水平轻微下降。

<img src="/image/methy_sequencing/bs-seq-5.png">

进一步对杂合子组和对照组的差异甲基化区域进行分析，寻找到35个差异甲基化区域与差异表达基因如Scml2、Dst、Plcb4、Stk10密切相关，其中Scml2是上调最明显的基因，在Scml2的转录起始位点（TSS）、CpG岛（CGI）处发生明显的去甲基化。图中绿色区域为差异甲基化区域。

---

<div><strong>参考文献：</strong></div>

Branco M R, King M, Perez-Garcia V, et al. Maternal DNA Methylation Regulates Early Trophoblast Development[J]. Developmental Cell, 2016, 36(2):152.
