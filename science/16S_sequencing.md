---
layout: page
title: "16S rDNA测序"
permalink: /science/16S_sequencing/
sidebar: true
science: true
---

## 简介

细菌rRNA（核糖体RNA）按沉降系数可分为3种，分别为5S、16S以及23S rRNA。16S rRNA为核糖体RNA的一个亚基， 16S rDNA即编码该亚基的基因。16S rDNA 序列包含10个保守区域和9个可变区域，保守区在细菌间差异不大，高变区具有属或种的特异性。对V4可变区进行测序，可对环境（如土壤、水源、皮肤、肠道等）的微生物多样性进行分析。获得的物种分类、物种丰度、种群结构、系统进化、群落比较等信息对环境中微生物组成及进化、微生态研究有重要指导作用。
16S rDNA测序无需对微生物进行分离培养，直接提取样本DNA进行扩增和测序，能够高效、高通量，一次性获得样本中所有微生物组成信息、全面鉴定样本中的物种。

---

## 建库方法

<img class="fig30" src="/image/16s/建库原理图-16s测序.jpg">

---

## 技术流程

<img class="fig50" src="/image/16s/16S流程.png">

---

## 分析结果展示

<img class="fig40" src="/image/16s/结果1.jpg">
<p style="text-align: center; ">样品相关性heatmap</p>
<br />


<img class="fig40" src="/image/16s/结果3.png">
<p style="text-align: center; ">基于分类等级树的组间差异分类单元展示</p>
<br />


<img class="fig40" src="/image/16s/结果2.png">
<p style="text-align: center; ">Krona的分类学组成信息交互展示图</p>
<br />

---

## 康测技术优势

* 结合自主研发UID技术，实现准确纠错和精确定量，精确还原物种丰度和菌群结构
* 提高OTU分类阈值，达到不仅是种属、甚至株系的高分辨率
* 帮助对细菌突变频率、菌群组成的变化机制等进行更深入的研究

---

## 案例解析

<img style="width: 100%;" src="/image/16s/文献.jpg">

作者发现肠道寄生虫（多形螺旋线虫）感染能缓解宿主小鼠的过敏性哮喘，猜测该免疫反应的变化是由于多形螺旋线虫（Hpb）感染引起肠道内菌群变化导致。作者因此取感染Hpb和未感染的小鼠的粪便样本，对16S rDNA的V4高变区进行测序。
未感染的新生小鼠肠道菌群中，典型菌类有拟杆菌（Bacteroidales）和乳酸杆菌（Lactobacillales），而感染Hpb小鼠肠道中出现了梭菌（Clostridiales）（图A）。梭菌可产生短链脂肪酸（short chain fatty acid，SCFA)，作者在感染Hpb的小鼠盲肠样本中检测到SCFA含量升高。
在 16S rDNA 测序分析中，首先对相似性序列进行聚类，分成数量较少的分类单元，再基于分类单元进行物种注释。通过对不同样本 OTU（操作分类单元，Operational Taxonomic Unit）进行PCoA分析（主坐标轴分析，Principal Coordinates Analysis），可获得样本间的差异和距离信息。测序结果显示：Hpb感染对盲肠菌群结构组成产生影响，但对肠道内菌群数量和菌类多样性影响甚微，PCoA分析可以区分感染和未感染小鼠（图B、C）。

<img class="fig50" src="/image/16s/文献2.jpg">


<div><strong>参考文献:</strong></div>

Zaiss M M, Rapin A, Lebon L, et al. The Intestinal Microbiota Contributes to the Ability of Helminths to Modulate Allergic Inflammation[J]. Immunity, 2015, 43(5):998.
