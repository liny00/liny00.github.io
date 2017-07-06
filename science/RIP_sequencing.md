---
layout: page
title: "RIP测序（RNA-immunoprecipitation and high-throughput sequencing）"
permalink: /science/RIP_sequencing/
sidebar: true
science: true
---

## 简介

RIP-seq（RNA-immunoprecipitation and high-throughput sequencing）是RNA免疫共沉淀与高通量测序结合的技术，它通过免疫沉淀目标蛋白来捕获蛋白体内结合的RNA。将捕获的RNA进行高通量测序，可获得RNA结合蛋白（RBP)在体内与众多RNA靶标的结合模式，并对齐结合强度进行精确定量，最终通过分析目的蛋白在体内结合RNA的动态变化，阐述出目的蛋白对基因表达调控的分子机制。这是一项在全基因组水平揭示RNA分子与RBP相互作用的革命性技术。
RIP-seq 与CLIP-seq即紫外交联免疫沉淀结合高通量测序相比，CLIP-seq需要先紫外交联，再进行免疫共沉淀，对操作要求高，成本也更高。而RIP-seq省略了紫外交联步骤，操作更加简单，成功率更高。
RIP-seq技术并不局限于miRNA与RBP的传统研究，近期有许多研究发现了lncRNA和蛋白的互作，而lncRNA通过多种的分子机制参与到广泛的生物学过程中，RBP与lncRNA的互作网络为lncRNA的细胞机制和疾病的发生、发展提供新的研究线索和方向。

<div><strong>RIP-seq的应用范围：</strong></div>

* 研究细胞内RNA与蛋白的结合情况；
* 绘制全基因组范围的 RNA 和RBP相互作用图谱，解析“Argonaute（Ago）—miRNA—mRNA”三者的相互作用；
* 发现 RBP 与miRNA、lncRNA等非编码RNA的相互作用网络与功能。

---

## 建库方法

<img src="/image/RIP_sequencing/new建库原理图-RIP测序.jpg">

---

## 技术流程

<img class="fig70" src="/image/RIP_sequencing/workflow.png">

---

## 部分结果展示

<img src="/image/RIP_sequencing/RIP1Peak.png">
<p style="text-align: center; ">Peak在基因组各功能区的分布</p>                    

<img src="/image/RIP_sequencing/RIP2Peak.png">
<p style="text-align: center; ">Peak在TSS上下游的分布</p>

<img src="/image/RIP_sequencing/RIP3.png">
<p style="text-align: center; ">样品聚类分析</p>           

<!-- <p style="text-align: center; "><img src="/image/RIP_sequencing/workflow.png"></p>
<p style="text-align: center; ">差异结合分析</p>
             -->

<img src="/image/RIP_sequencing/RIP-go.png">
<p style="text-align: center; ">Peak相关基因的GO分析</p>


<img src="/image/RIP_sequencing/RIP5kegg.jpg">
<p style="text-align: center; ">Peak相关基因的KEGG信号通路富集分析</p>


<img src="/image/RIP_sequencing/RIP7.motif.png">
<p style="text-align: center; ">Peak的motif分析</p>

---

## 康测技术优势

* 优化的RIP实验体系，RIP建库起始量低至30~50ng RNA
* 专攻IP（ChIP、RIP、CLIP）的博硕团队，拥有十年丰富的经验积累
* 为客户选择抗体提供辅助指导，并对抗体进行质检、效价分析，提供文章发表质量的IP报告
* 特有的Peak calling技术
* 提供个性化的分析报告，可根据客户需要提供关联分析、解析目的蛋白调控机制

---

## 案例解析

<p style="text-align: center; "><img src="/image/RIP_sequencing/rip文献.png"></p>

Sm蛋白是在真核、原核、无细胞生物中均存在的一类高度保守的RNA结合蛋白家族。在真核生物中，多聚体Sm蛋白与其相关的RNA共同组成核糖核蛋白（RNP）复合物，在多方面对基因的表达调控产生重要影响。文章作者通过RIP-seq技术对果蝇卵巢细胞和人体细胞中与Sm蛋白相互作用的RNA进行了分析鉴定。发现了3类Sm蛋白相关的转录本，即小核RNA（snRNA），小Cajal体RNA（scaRNA）以及mRNA。它们之间的相互作用既广泛存在又具有组织特异性，其中Sm蛋白与mRNA的互作是由小核核糖核蛋白（snRNP）介导的，介导机制之一为碱基配对。作者还发现，Sm蛋白相关的mRNA为成熟mRNA，证明SmRNP具有独立的RNA剪接功能。

<p style="text-align: center; "><img src="/image/RIP_sequencing/rip-2.png"></p>

RIP-seq鉴定了在果蝇和人类中，与 sm相关的三类RNA

<p style="text-align: center; "><img src="/image/RIP_sequencing/rip-3.png"></p>

不同类型的细胞中，与Sm蛋白结合的RNA的量具有组织特异性

---

<div><strong>参考文献:</strong><div>

Zhipeng Lu, Xiaojun Guan et al. RIP-seq analysis of eukaryotic Sm proteins identifies three major categories of Sm-containing ribonucleoproteins[J]. Genome Biology 2014, 15:R7.
