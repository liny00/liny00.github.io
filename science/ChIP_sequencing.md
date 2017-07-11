---
layout: page
title: "ChIP测序（Chromatin immunoprecipitation and high-throughput sequencing）"
permalink: /science/ChIP_sequencing/
sidebar: true
science: true
---

## 简介

真核生物的基因组以染色质的形式存在，染色质是由DNA和蛋白质组成的复合物，研究蛋白质与染色质形式的DNA之间的相互作用，对于阐明真核生物的基因表达调控机制具有重要意义。
ChIP-seq是将染色质免疫共沉淀与高通量测序相结合的技术，通过蛋白免疫相互作用，用抗体把和染色质相互作用的蛋白（如组蛋白、转录因子等）沉淀下来，捕捉到细胞内动态的、瞬时的蛋白质与DNA之间的相互作用，从而所获取与其相结合的DNA序列，确定各种转录影响因子以及非组蛋白染色体结合蛋白在染色质上的具体位置。可以一次性得到目的蛋白在整个基因组上的结合分布，得到目的蛋白精确的结合位点以及结合基序等信息，若同时辅以转录组测序，则可以得到目的蛋白对全细胞基因表达的调控模式，大幅提高对目的蛋白的功能认识。这种在 DNA－蛋白质相互作用研究方法上的重大突破，极大的推进了表观遗传学的发展。

---

## 建库方法

<img class="fig30" src="/image/ChIP_sequencing/new建库原理图-ChIP测序.jpg">

---

## 技术流程

<img class="fig70" src="/image/ChIP_sequencing/workflow.png">

---

## 部分结果展示

<img class="fig60" src="/image/ChIP_sequencing/ChIP1Peak.jpg">
<p style="text-align: center; ">Peak在基因组各功能区的分布</p>         
<br />

<img class="fig50" src="/image/ChIP_sequencing/c.png">              
<p style="text-align: center; ">差异结合分析</p>
<br />

<img class="fig50" src="/image/ChIP_sequencing/ChIPgo.jpg">
<p style="text-align: center; ">Peak相关基因的GO分析</p>
<br />

<img class="fig50" src="/image/ChIP_sequencing/kegg.png">
<p style="text-align: center; ">peak 关联基因的KEGG 富集分析</p>
<br />

<img class="fig50" src="/image/ChIP_sequencing/b.png">
<p style="text-align: center; ">Peak相关基因的KEGG信号通路富集分析</p>
<br />

<img class="fig50" src="/image/ChIP_sequencing/a.png">
<p style="text-align: center; ">Peak的Motif分析</p>

---

## 康测技术优势

* 优化的ChIP实验体系，ChIP建库起始量低至1~30ng DNA；
* 武汉康测科技专攻IP（ChIP、RIP、CLIP）的博硕团队，拥有十年丰富的项目经验积累；
* 为客户选择抗体提供辅助指导，并对抗体进行质检、效价分析，提供文章发表质量的IP报告；
* 特有的Peak calling技术；
* 提供个性化的分析报告，可根据客户需要提供关联分析、解析目的蛋白调控机制。

---

## 案例解析

<img src="/image/ChIP_sequencing/ChIP文献.png">

转录因子Opaque2(O2)在玉米胚乳的发育过程中扮演者重要的角色，它可作用于基因的启动区，调控基因的转录 (O2)发生突变可大幅提高玉米中赖氨酸含量，从而提高其营养价值，但也带来一些不利的影响。本研究采用RNA-seq技术从转录水平分析O2突变前后，玉米基因表达的变化，发现了1065个与营养存储、氮元素新陈代谢、非生物胁迫抗性相关的差异表达基因，和383个差异表达的长非编码RNA；同时采用ChIP-seq技术从全基因组水平研究O2的DNA结合情况，发现了1143个基因上的1686个O2结合位点。综合RNA-seq和ChIP-seq的结果，作者鉴定出了35个由O2直接调控的基因和4种结合基序，其中TGACGTGG是最为保守、结合最强的基序；O2直接调控除了16kD和18kD以外的所有玉米醇溶蛋白（Zein）的表达。作者构建了O2的层级调控模型，进一步揭示了O2的多种生物功能。

<img class="fig70" src="/image/ChIP_sequencing/ChIP-2.png">

<p style="text-align: center; ">（A）在玉米基因组中O2结合位点的分布情况，（B）外显子区域O2的结合峰分布，（C）基因转录起始位点（TSS）上下游区域O2的结合峰分布：O2的结合位点集中于TSS上游300bp以内，（D）RNA-seq和ChIP-seq结果的维恩图：O2调控35个基因表达上调、4个基因表达下调。</p>

---

<img class="fig50" src="/image/ChIP_sequencing/ChIP-3.png">
<p style="text-align: center; ">O2的motif分析</p>

---

<div><strong>参考文献:</strong></div>

Li C, Qiao Z, Qi W, et al. Genome-wide characterization of cis-acting DNA targets reveals the transcriptional regulatory framework of opaque2 in maize.[J]. Plant Cell, 2015, 27(3):532.
