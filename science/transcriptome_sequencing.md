---
layout: page
title: "转录组测序（Transcriptome Sequencing）"
permalink: /science/transcriptome_sequencing/
sidebar: true
science: true
---

## 简介

全转录组是指某个物种或特定的细胞在某一功能状态下转录产生的所有RNA的总和，包括mRNA和非编码RNA（non-coding RNA）。针对非编码RNA的研究主要集中在具有调控作用的长非编码RNA（long non-coding RNA, lncRNA）和环形RNA（circle RNA, circRNA)。全转录组测序研究，可同时分析同一样本中的mRNA、lncRNA、circRNA，是研究细胞表型和功能的一个重要手段，可深入挖掘生命现象背后的转录调控问题。 LncRNA不编码蛋白，但可通过其保守的二级结构与蛋白、DNA和RNA相互作用，参与调控多种生物学过程，如指导染色质修饰、调控转录、转录后调控等。绝大多数lncRNA的生物学功能还不清楚，因此这是一片广阔的未知领域，具有极大的研究价值和意义。康测科技使用rRNA去除的方法来富集lncRNA和mRNA，之后进行建库测序，可分析lncRNA和mRNA的表达情况，并发现大量新的lncRNA。

---

## 建库方法

<img src="/image/transcriptome_sequencing/400new建库原理图-转录组测序.png">

---

## 技术流程

<img class="fig70" src="/image/transcriptome_sequencing/全转录组测序技术路线.png">

---

## 分析结果展示

<img src="/image/transcriptome_sequencing/b.png">
<p style="text-align: center; ">蛋白互作网络分析</p>

---

<img src="/image/transcriptome_sequencing/c.png">
<p style="text-align: center; ">表达量密度图</p>

---

<img src="/image/transcriptome_sequencing/d.png">
<p style="text-align: center; ">差异基因表达聚类分析</p>

---

<img src="/image/transcriptome_sequencing/IncRNA_chromosome.png">
<p style="text-align: center; ">lncRNA在染色体上的分布情况</p>

---

<img src="/image/transcriptome_sequencing/lncRNA_diff_exp.png">
<p style="text-align: center; ">lncRNA差异表达分析火山图</p>

---

## 康测技术优势

* 微量RNA建库技术
* 可预测新的LncRNA
* 可结合miRNA-seq、mRNA-seq数据，构建LncRNA-mRNA共表达网络、LncRNA-miRNA- mRNA的共表达网络

## 案例解析

<img src="/image/transcriptome_sequencing/转录组测序文献.png">

作者对人乳腺癌细胞MCF-7进行了全转录组和GRO测序，确定了约1900种lncRNA，其中700多种是未被注释的全新的lncRNA。通过表达模式和功能筛选，找到在乳腺癌中表达上调的lncRNA ，lncRNA152和lncRNA67。通过基因敲除、siRNA干扰和RNA-seq，发现lncRNA152和lncRNA67对于细胞周期相关基因的表达是必须的，它们调控细胞周期相关的基因表达，使大部分被调控基因表达量上调，影响细胞增殖。
它们调控一个E2F依赖的细胞周期基因的表达、影响雌激素依赖的信号通路，对基本的细胞增殖而言，lncRNA152更重要，而对于雌激素刺激的细胞增殖，lncRNA67则更重要。
作者综合利用GRO-seq、RNA-seq、ChIP-seq这三种技术分析研究lncRNA 的基因结构、转录本稳定性、调控模式和功能。

<img src="/image/transcriptome_sequencing/ts-2.png">

<p style="text-align: center; ">通过全RNA-seq和GRO-seq分析MCF-7细胞，确定了1888种lncRNA，其中726多种是未被注释的全新的lncRNA。</p>

<img src="/image/transcriptome_sequencing/ts-3.png">

<p style="text-align: center; ">关联性分析确定lncRNA152和lncRNA67与癌症分子通路相关。</p>

<img src="/image/transcriptome_sequencing/转录组-4.png">

<p style="text-align: center; ">siRNA干扰降低lncRNA152和lncRNA67的表达后，MCF-7的增殖受到抑制。</p>


<div><strong>参考文献</strong></div>

Sun M, Gadad S, Kim D S, et al. Discovery, Annotation, and Functional Analysis of Long Noncoding RNAs Controlling Cell-Cycle Gene Expression and Proliferation in Breast Cancer Cells[J]. 2015, 59(4):698.
