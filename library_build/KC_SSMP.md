---
layout: page
title: "KC-SMP建库技术"
permalink: /library_build/KC_SSMP/
sidebar: true
medicine: true
---

## 背景介绍

液体活检是对肿瘤患者外周血中的cfDNA进行检测，从而判断患者体内是否有肿瘤基因突变的一种新型检测技术。肿瘤患者外周血中的cfDNA含有多种与肿瘤相关的突变基因，称之为ctDNA。ctDNA作为一种新的肿瘤标志物，在用药指导、疗效监测和复发监控等癌症诊疗过程中表现出很大的潜力。

目前，ctDNA检测的常规方法主要基于多重PCR技术（如Anhored Multiplex PCR、safe-seqS）或基于靶向捕获技术（如CAPP-seq、duplex-sequencing）。基于捕获的技术灵敏度高，但操作流程复杂、成本也高；基于多重PCR的方法简便快捷、特异性好，但灵敏度受限。

---

## KC-SMP技术

KC-SMP技术主要是利用NGS对ctDNA进行检测的高精准度检测分析技术，通过高精准度靶向富集方案及UID分子标签、duplex barcoding双重纠错方法，有效实现超高测序深度（>10000X）下低频变检的精准检出（灵敏度0.05%）。

KC-SMP建库技术结合了多重PCR和靶向捕获技术的优势，同时避免这两种技术的缺陷，具有超高灵敏度、建库时间短、操作步骤简单、所需样本量少等优势。


---

## KC-SMP技术原理图
<img class="fig30" src="/image/library_build/SSMP/SMP_library.png">

---

## 技术优势


* 超高灵敏度。KC-SMP的检测灵敏度下限为0.01%，达到与基于捕获的技术相同水平，这是第一项利用多重PCR原理达到该检测灵敏度的技术。
* 建库时间短。KC-SMP基于多重PCR原理，避开了耗时的捕获步骤，整个文库构建可以在6h内完成，较CAPP-seq 2-3天的建库时间有了大幅度缩短。
* 流程简单。KC-SMP的流程只有1步连接反应和2步PCR扩增反应，真正hands on的时间不超过2h，流程非常简单。
* 节约样本。由于是基于PCR的扩增技术，避开了损失很大的捕获步骤，因此KC-SMP对模板起始量的要求很低，更利于检测珍贵的临床样本。

KC-SMP与CAPP-seq和多重PCR的技术对比如下：

<img src="/image/library_build/SSMP/SMP2.png">
---

## 建库质量

### 1.测序数据统计

Horizon HD780 cfDNA标准品（0.1%、1%、5%、100%）建库测序，靶向检测207个位点，上靶率80%以上，双链比例接近30%，均一性好。
<img src="/image/library_build/SSMP/SMP1.png">

### 2.靶点测序深度分布

靶点覆盖稳定，可以进行CNV检测。
<img src="/image/library_build/SSMP/SMP3.png">
### 3.靶点测序深度分布

<img src="/image/library_build/SSMP/SMP4.png">
### 4.突变检测结果
A：Horizon HD780标准品包含6个SNV和2个InDel（含量分别为0.1%、1%、5%），所有变异在3次重复实验中全部被检测到，且AF和标称值差异很小。
B：样本包含大量突变（含量从 0.01%至75%），这些突变都被稳定检测到。
<img src="/image/library_build/SSMP/SMP5.png">
---

