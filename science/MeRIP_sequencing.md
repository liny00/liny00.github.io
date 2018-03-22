---
layout: page
title: "MeRIP测序（m6A甲基化测序）"
permalink: /science/MeRIP_sequencing/
sidebar: true
science: true
---

## 简介

m6A甲基化修饰在基因表达调控、mRNA剪接、RNA编辑、RNA稳定性、控制mRNA寿命和降解、介导环状RNA翻译等方面扮演重要角色。
甲基化RNA免疫共沉淀结合高通量测序（Methylated RNA Immunoprecipitation with Next Generation Sequencing，MeRIP-Seq）是研究细胞内转录组表观修饰的最新技术。这项技术通过使用N6-甲基腺嘌呤抗体富集高甲基化的RNA片段，然后结合高通量测序，在全转录组范围内研究发生甲基化的RNA区域，从而比较不同细胞、组织、样本间的RNA甲基化修饰模式的差异，可帮助解决细胞分化、生物发育、疾病发生发展、热休克反应等生物学问题。 

---

## 建库方法

<img class="fig60" src="/image/MeRIP_sequencing/宣传册MeRIP测序.png">

---

## 技术流程

<img class="fig50" src="/image/MeRIP_sequencing/merIP测序.png">

---

## 部分结果展示

<img class="fig40" src="/image/MeRIP_sequencing/MeRIP结果1.png">
<p style="text-align: center; ">Peak在UTR和CDS区的分布</p>                    
<br />

<img class="fig50" src="/image/MeRIP_sequencing/MeRIP结果2.png">
<p style="text-align: center; ">peak相关基因的KEGG Pathway富集图</p>
<br />

<img class="fig60" src="/image/MeRIP_sequencing/MeRIP结果3.png">
<p style="text-align: center; ">Peak的motif分析</p>

---

## 康测技术优势

* 对抗体进行严格质检、效价分析，提供文章发表质量的IP报告；
* 对MeRIP实验体系进行精心优化
* 特有的Peak calling技术
* 提供个性化分析报告，可根据客户需要提供关联分析、解析m6A调控机制

---

## 案例解析

<p style="text-align: center; "><img src="/image/MeRIP_sequencing/MeRIP文献0.png"></p>

脊椎动物中，造血干/祖细胞（HSPC）来源于生血内皮，通过内皮-造血转换（EHT）方式在主动脉血管底部产生。Mettl3是RNA甲基转移酶，敲除Mettl3造成胚胎造血功能发育受损，EHT受到抑制，内皮细胞不能分化为HSPC， HSPC相关marker表达量显著减少。
Mettl3敲除后，Mettl3蛋白表达量和全基因组的m6A水平均下降（MeRIP-seq结果显示，m6A修饰水平上调的基因478个，下调的基因多达4593个），这些m6A修饰水平下调的基因可能为Mettl3的调控靶标，且GO富集到RNA处理、胚胎发育相关term，说明m6A修饰与发育有关。

<p style="text-align: center; "><img src="/image/MeRIP_sequencing/MeRIP文献1.png"></p>

选取受精后28小时的正常胚胎和敲除Mettl3的胚胎的内皮细胞进行RNA-seq，检测到Mettl3敲除胚胎中2393个基因上调，1386个基因下调，上调基因显著富集到Notch和血管发育term。关联分析RNA-seq和MeRIP-seq结果，在4593个Mettl3潜在靶标中，462个基因显著下调，680个显著上调，且上调基因与生血内皮发育显著相关。在上调基因中，作者筛选到Notch1a表达量显著上调，而m6A修饰几乎没有，很有可能是受到m6A修饰调控的HSPC分化关键基因。作者还发现Mettl3敲除胚胎中Notch1活性显著上升。
调控途径：RNA甲基转移酶Mettl3催化→ Notch1a的m6A修饰→ Notch1活性→造血发育、EHT。

<p style="text-align: center; "><img class="fig90" src="/image/MeRIP_sequencing/MeRIP文献2.png"></p>

<div><strong>参考文献:</strong><div>

Cui Q, Shi H, Ye P, et al. m6A RNA Methylation Regulates the Self-Renewal and Tumorigenesis of Glioblastoma Stem Cells.[J].Cell Reports, 2017, 18(11):2622.
