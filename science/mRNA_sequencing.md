---
layout: page
title: "mRNA测序（mRNA sequencing）"
permalink: /science/mRNA_sequencing/
sidebar: true
science: true
---


## 简介

mRNA由DNA转录而来，携带相应的遗传讯息，为下一步翻译成蛋白质提供所需的讯息。mRNA测序不仅可提供极为准确且高灵敏度的量化基因表达，还可识别已知的和新的转录异构体、基因融合和其他特征及等位基因特异性表达。（它可以提供编码转录组的完整视图，而并不受限于先验知识。）mRNA测序已迅速成为分析疾病状况、生物过程及广泛研究设计中的转录组的首选方法。真核生物mRNA测序是通过mRNA 3’的polyA尾富集和建库，而原核生物mRNA测序是先去除rRNA，后建库。康测科技采用特有的rRNA除去法构建高质量的高通量测序文库，实现Clean Data超高比对率，保证测序数据的质量以及数据得到充分利用。

---

## 建库方法

<img src="/image/mRNA_sequencing/new建库原理图-rna测序.jpg">

---

## 技术流程

<img class="fig70" src="/image/mRNA_sequencing/workflow.png">

---

## 分析结果展示

<img class="fig50" src="/image/mRNA_sequencing/alt_splicing_stat.png">
<p style="text-align: center; ">可变剪接事件统计</p>

---

<img class="fig50" src="/image/mRNA_sequencing/表达量分布箱型图.png">
<p style="text-align: center; ">表达量分布箱型图</p>

---

<img  class="fig50" src="/image/mRNA_sequencing/diff_expression_gene.png">
<p style="text-align: center; ">差异表达基因筛选</p>

---

<img src="/image/mRNA_sequencing/diff_gene_kegg.png">
<p style="text-align: center; ">差异基因KEGG 代谢通路图</p>

---

<img src="/image/mRNA_sequencing/diff_exp_gene_kegg_patyway.png">
<p style="text-align: center; ">差异表达基因 KEGG pathway富集分析</p>

---

## 康测技术优势

* 低至200 ng总RNA起始量建库
* 可对LncRNA的PolyA进行鉴定和差异表达分析
* 可对GSEA，可变剪接，RNA编辑，可变PolyA位点等进行个性化分析

---

## 案例解析

<img src="/image/mRNA_sequencing/mran文献.png">

高血压性心室重构是导致心脏衰竭的最主要原因，但是心室重构的分子机制仍不甚清楚。在该项研究中，作者首先通过RNA-seq发现：在高血压小鼠心脏和人肥大心脏中，ATF3呈高表达，高血压刺激条件下，心脏成纤维细胞是主要过表达ATF3的细胞，而敲除ATF3（ATF3KO）则明显促进了高血压性心室重构。通过转基因使心脏成纤维细胞过表达ATF3，能有效改善心室重构和心脏衰竭。
作者进一步通过ChIP-seq分析发现：Map2K3是ATF3的调控靶标，ATF3结合在Map2K3的启动子上并招募HDAC1，引起与Map2K3基因结合的组蛋白发生去乙酰化，从而抑制Map2K3的表达。而Map2K3又可以激活p38，引起p38的磷酸化，导致TGF-β信号通路激活，最终引起心室重构。若抑制ATF3KO 细胞的p38信号，降低TGF-β信号相关的纤维化和肥厚相关基因表达，阻止过度的心室重构。
这些研究表明高血压胁迫状态下，心脏成纤维细胞中ATF3的上调能抑制Map2K3表达和p38-TGF-β信号通路。因此ATF3的阳性调节可能作为一种新的治疗高血压性心室重构的方法。

<img src="/image/mRNA_sequencing/mRNA-seq-2.png">

通过RNA-seq找到高表达的转录因子ATF3： 在三组差异表达基因和重复的转录因子相关基因中，发现ATF3是一致性的高表达，且与ATF3 mRNA表达水平一致。

<img class="fig80" src="/image/mRNA_sequencing/mRNA-seq-3.png">

angiotensin II 灌注的野生型小鼠心脏和angiotensin II 灌注的ATF3KO型小鼠心脏进行RNA-seq，发现701个上调基因和468个下调基因，差异表达基因的通路分析揭示上调的信号通路与高血压型心室重构密切相关。

对KEGG信号通路进行Path-net分析发现，与心室重构相关Mapk信号通路在ATF3敲除细胞的所有上调信号通路中表现出最大程度的富集。

<img src="/image/mRNA_sequencing/mRNA-seq-4.png">

---

<div><strong>参考文献：</strong></div>
Li Y, Li Z, Zhang C, et al. Cardiac Fibroblast-Specific Activating Transcription Factor 3 Protects Against Heart Failure by Suppressing MAP2K3-p38 Signaling[J]. Circulation, 2017.
