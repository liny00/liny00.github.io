---
layout: page
title: "ctDNA建库技术"
permalink: /library_build/ctDNA/
sidebar: true
medicine: true
---

## 背景介绍

液体活检是对肿瘤患者外周血中的cfDNA进行检测，从而判断患者体内是否有肿瘤基因突变的一种新型检测技术。肿瘤患者外周血中的cfDNA含有多种与肿瘤相关的突变基因，称之为ctDNA。ctDNA作为一种新的肿瘤标志物，在用药指导、疗效监测和复发监控等癌症诊疗过程中表现出很大的潜力。
目前，ctDNA检测的常规方法有ARMS-PCR，BEAMing和ddPCR等，但是这些方法存在检测敏感性不足或者检测位点过少等缺陷，导致在科研和临床上的使用受到了一定的限制。NGS技术能够一次性的对多个靶向基因和位点进行平行检测，可准确检出突变丰度在0.01-0.1%以上的突变，是一种检测ctDNA更为有效的方法。

---

## KC-SSMP技术

<img src="/image/library_build/ctDNA_target_library_build/ctDNA建库原理图.jpg">
<p style="text-align: center; ">康测靶向测序技术原理图</p>

---

## 技术优势

KC-SSMP技术同时具备CAPP-seq和多重PCR的技术优势，同时避开了上述两种技术的缺陷。其主要优势如下：

* **超高灵敏度**: KC-SSMP的检测灵敏度下限为0.01%，达到与基于捕获的技术相同水平，这是第一项利用多重PCR原理达到该检测灵敏度的技术。
* **建库时间短**: KC-SSMP基于多重PCR原理，避开了耗时的捕获步骤，整个文库构建可以在6h内完成，较CAPP-seq 2-3天的建库时间有了大幅度缩短。
* **流程简单**: KC-SSMP的流程只有1步连接反应和2步PCR扩增反应，真正hands on的时间不超过2h，流程非常简单。
* **节约样本**: 由于是基于PCR的扩增技术，避开了损失很大的捕获步骤，因此KC-SSMP对模板起始量的要求很低，更利于检测珍贵的临床样本。

KC-SSMP与CAPP-seq和多重PCR的技术对比如下：

<img class="fig60" src="/image/library_build/ctDNA_target_library_build/tech_comparison.png">

---

## 技术路线

<img src="/image/library_build/ctDNA_target_library_build/tech_path.png">

---

## 产品服务

**ctDNA检测服务**

* 客户提供外周血/血浆和待检测的目标区域信息，公司据此设计多重PCR引物；
* 使用客户提供的样本，进行建库、测序和分析，返回客户原始的测序结果，并形成结题报告，鉴定客户样本中的基因变异；
* 本产品检测灵敏度0.01%，起始DNA量低至10ng。

**ctDNA定制服务**

* 提供专利保护的建库试剂盒以及根据客户提供目的区域定制的多重PCR引物，客户可自行进行实验操作；
* 本试剂盒在Life/illumina平台均适用；
* 本产品检测灵敏度0.01%，起始DNA量低至10ng。 

---

## 案例解析

**Monitoring gastric cancer progression with circulating tumour DNA**

本文设计了一个46基因肿瘤相关的panel，通过NGS技术检测739个热点变异来对胃癌患者病情进行动态监测。研究发现，胃癌中发生得最多的基因突变是TP53，有24%（10/42）的患者检测到TP53突变。结果表明ctDNA浓度与胃癌疾病病情有非常好的关联性，TP53可以作为胃癌预后的biomarker，对患者病情进行动态监测。

<img src="/image/library_build/ctDNA_target_library_build/example.png">