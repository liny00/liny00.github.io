---
layout: page
title: "RNA专利建库技术"
permalink: /library_build/
sidebar: true
medicine: true
---

## 背景介绍

转录组测序能够全面快速地获取待检测样本在某一状态下的所有转录本信息，包括碱基序列和基因表达量，是一种非常热门的的科研手段。

目前，转录组建库的常规方法是以RNA为模板合成第一条cDNA链，随后以cDNA为模板合成其互补链，在获得的cDNA双链两端加上二代测序所需的接头，进行N轮PCR扩增，最终获得RNA文库。这种建库方法需要逆转录，合成第二条cDNA互补链，末端补平加A尾，加建库接头，PCR反应等多个步骤，建库过程相当繁琐，同时添加建库接头的成本也相对昂贵，从时间和经济成本上来看都有一定的提升空间。

---

## KC-RNA建库

康测科技公司发明了一种经济，快速的RNA二代测序文库构建方法。KC-RNA建库技术仅需一步逆转录，一步接头连接和一步PCR反应3个步骤就能完成建库。本技术相对常规RNA建库方法而言，建库效率高，建库步骤少，所需RNA起始量低，建库成本低，是一种高效的RNA建库方法。其主要建库步骤如下：

* 将样本RNA进行片段化处理，加入带有通用建库接头的引物池进行RNA逆转录，获得包含所有RNA信息的cDNA；
* 在cDNA片段5’端利用splint ligation方法加上通用建库接头；
* 以获得的cDNA为模板，加入上、下游通用引物进行PCR扩增获得RNA文库。

---

## 技术优势

* 建库步骤更少，实验操作更简单，建库时间更短
* 建库效率高，所需RNA起始量低，仅需要600ng RNA起始量就能实现与常规建库方法使用2.5ug RNA起始量同样的建库效果

---

## 技术路线

<img class="fig70" src="/image/library_build/RNA_library_build/RNA专利建库技术技术路线.jpg">
<p style="text-align: center;">RNA建库技术原理图</p>

---

普通商品化建库试剂盒起始量2.5ug和KC-RNA建库技术起始量600ng RNA的建库效率比较：（1）数据产出统计结果比较

<img src="/image/library_build/RNA_library_build/RNA专利建库技术技术比较1.jpg">

普通商品化建库试剂盒起始量2.5ug和KC-RNA建库技术起始量600ng RNA的建库效率比较：（2）reads在全基因组分布情况比较

<img src="/image/library_build/RNA_library_build/RNA专利建库技术技术比较2.png">

普通商品化建库试剂盒起始量2.5ug和KC-RNA建库技术起始量600ng RNA的建库效率比较：（3）样品相关性分析，两组的生物学重复的皮尔逊相关系数R=0.99。

<img src="/image/library_build/RNA_library_build/RNA专利建库技术技术比较3.png">

普通商品化建库试剂盒起始量2.5ug和KC-RNA建库技术起始量600ng RNA的建库效率比较：（4）RPKM值的比较log10（RPKM）

<img src="/image/library_build/RNA_library_build/RNA专利建库技术技术比较4.png">

普通商品化建库试剂盒起始量2.5ug和KC-RNA建库技术起始量600ng RNA的建库效率比较：（5）差异表达基因（两种建库方法分别作为试验组和对照组）

<img src="/image/library_build/RNA_library_build/RNA专利建库技术技术比较5.png">

普通商品化建库试剂盒起始量2.5ug和KC-RNA建库技术起始量600ng RNA的建库效率比较：（6）reads在gene body上的分布比较。

<img src="/image/library_build/RNA_library_build/RNA专利建库技术技术比较6.png">

---

## 案例解析

**Walker R A, Sharman P A, Miller C M, et al. RNA Seq analysis of the Eimeria tenella gametocyte transcriptome reveals clues about the molecular basis for sexual reproduction and oocyst biogenesis**

通过对羊肉孢子虫配子体和两个无性繁殖阶段裂殖子和子孢子的转录组序列进行分析，揭示了863个配子体转录上调基因，其中，很多基因是编码与球虫性生物学相关的蛋白，例如卵囊细胞壁的生物合成和繁殖相关的蛋白。

<img src="/image/library_build/RNA_library_build/RNA专利建库案例1.png">
<p style="text-align: center; ">图1 利用表达差异分析来确定配子体的上调转录本</p>

---

**Petropoulos S, Edsgärd D, Reinius B, et al. Single-Cell RNA-Seq Reveals Lineage and X Chromosome Dynamics in Human Preimplantation Embryos**

本研究呈现出一个完整的人类胚胎发育的转录图谱(来自88个人类植入前胚胎1529个单细胞测序转录本)。数据表明这些细胞有一个适中的谱系特异性基因共表达，伴随着滋养外胚层、外胚层和原始内胚层的同时形成，这个胚泡的形成一致

<img src="/image/library_build/RNA_library_build/RNA专利建库案例2.png">
<p style="text-align: center; ">图2 人类植入前胚胎单细胞的RNA-seq转录组分析</p>