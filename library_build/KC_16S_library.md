---
layout: page
title: "KC-Digit-16S建库技术"
permalink: /library_build/KC_16S_library/
sidebar: true
medicine: true
---

## 背景介绍

16S rDNA是编码细菌16S rRNA（核糖体RNA）的基因。16S rDNA序列包含10个保守区域和9个可变区域，保守区在细菌间差异不大，高变区具有属或种的特异性。对16S rDNA的V4可变区进行测序，可对环境（如土壤、水源、皮肤、肠道等）的微生物多样性进行分析，一次性获得样本中所有微生物组成信息、全面鉴定样本中的物种。

但是目前16S rDNA测序通常不能准确还原样本的物种组成，这是由于测序过程中PCR的偏好性、PCR扩增错误、无法区分PCR重复等多因素造成的。16s测序的结果与实际的菌群结果可能存在较大的差异。
另一方面，16S rDNA测序分析是基于OTU（可操作分类单元），由于无法过来PCR扩增和测序中引入的错误，一般将97%的序列一致性作为OTU分类的阈值。因此，目前的16S分析，只能达到种/属水平的分辨率。这无疑限制了微生物研究的水平：只能观察到物种丰度变化，但无法对其机制做更进一步的研究。

---

## KC-Digit-16S建库技术

康测科技研发的KC-Digit-16S建库技术，在扩增前对体系中存在的每一个DNA分子添加唯一的UID标签进行标记，在扩增、测序后对数字标签进行计数，可以完全去除PCR扩增的偏好性。
同时UID标签的唯一性还可用于完全、准确过滤扩增、测序过程产生的错误。从而区分序列高度类似的不同的菌株，大大提高OTU分类的分辨率，实现对细菌株系的鉴定，帮助对细菌突变频率、菌群组成的变化机制等进行更深入的研究。

---

## KC-Digit-16S建库技术原理
A:准确纠错原理；B：精确定量原理。
<img src="/image/library_build/16S/16S_library.png">

---


## 技术优势

* UID标签避免PCR扩增偏好性，准确还原菌群结构组成
* UID标签准确过滤扩增、测序过程产生的错误
* OTU分辨率提高至99%以上，可对细菌株系进行区分鉴定
* 帮助解析细菌突变频率、菌群组成的变化机制

