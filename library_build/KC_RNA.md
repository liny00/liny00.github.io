---
layout: page
title: "KC-RNA靶向建库技术"
permalink: /library_build/KC_RNA/
sidebar: true
medicine: true
---

## 背景介绍

转录组测序能够全面快速地获取待检测样本在某一状态下的所有转录本信息，包括碱基序列和基因表达量，是一种非常热门的的科研手段。

目前，转录组建库的常规方法是以RNA为模板合成第一条cDNA链，随后以cDNA为模板合成其互补链，在获得的cDNA双链两端加上二代测序所需的接头，进行N轮PCR扩增，最终获得RNA文库。这种建库方法需要逆转录，合成第二条cDNA互补链，末端补平加A尾，加建库接头，PCR反应等多个步骤，建库过程相当繁琐，同时添加建库接头的成本也相对昂贵，从时间和经济成本上来看都有一定的提升空间。

---

## KC-RNA靶向建库技术

康测科技公司发明了一种经济，快速的RNA二代测序文库构建方法。KC-RNA建库技术仅需一步逆转录，一步接头连接和一步PCR反应3个步骤就能完成建库。本技术相对常规RNA建库方法而言，建库效率高，建库步骤少，所需RNA起始量低，
建库成本低，是一种高效的RNA建库方法。其主要建库步骤如下：
* 将样本RNA进行片段化处理，加入带有通用建库接头（或靶向建库接头）的引物池进行RNA逆转录，获得包含所有RNA（或靶向区域RNA）信息的cDNA；
* 在cDNA片段5’端利用splint ligation方法加上通用建库接头；
* 以获得的cDNA为模板，加入上、下游通用引物进行PCR扩增获得RNA文库。

---

## RNA建库技术原理
<img class="fig30" src="/image/library_build/KC_RNA/rna建库原理.png">

---

## 技术优势
<img  src="/image/library_build/KC_RNA/1.png">

---

## 数据质量

### 1.测序质量汇总比较

<img src="/image/library_build/KC_RNA/0.png">

上表为KC-RNA建库技术2.5ug RNA和200ng RNA起始量进行建库的测序质量汇总比较。（raw_reads：原始序列总数；Q30(%)：计算过滤后序列中碱基质量大于0的碱基所占的比例；clean_reads：过滤后序列总数；total mapped：比对到参考基因组上的序列总数；unique mapped：在参考序列上有唯一比对位置的序列数目；unmapped Reads：未能比对到参考序列上的序列数目。）</p>         



### 2.reads在全基因组的分布情况比较
<img class="fig30" src="/image/library_build/KC_RNA/2.png">

上图为KC-RNA建库技术2.5ug RNA和200ng RNA起始量进行建库测序reads在全基因组的分布情况比较。（横轴代表各样品，纵轴表示对应区域序列比例，正常情况下，CDS（编码区）的序列百分比含量最高。）

### 3.Reads在基因上的分布均一性比较
<img class="fig70" src="/image/library_build/KC_RNA/3.png">

上图为KC-RNA建库技术2.5ug RNA和200ng RNA起始量进行建库的测序reads在基因body的分布情况比较。（横轴为单个基因的碱基长度的百分比，0表示基因的5’端，100表示基因的3’端；纵轴为覆盖深度。测序所得序列在基因上均匀分布，无明显的5’端或3’端偏向性。）

### 4.RPKM值的比较

<img class="fig40" src="/image/library_build/KC_RNA/4.png">

上图为KC-RNA建库技术2.5ug RNA和200ng RNA起始量进行建库测序的PRKM值比较。（RPKM指每百万reads中来自于某基因每千碱基长度的reads数，用于衡量基因表达量。）

### 5.样本相关性分析
 <img class="fig40" src="/image/library_build/KC_RNA/5.png">

上图为KC-RNA建库技术2.5ug RNA和200ng RNA起始量进行建库测序的相关性分析。（两组样品的生物学重复的皮尔逊相关系数R达到0.99。R越接近1，表明样品表达模式相似度越高。）

---

## 产品服务

### RNA建库服务
* 客户提供样品，公司利用专利建库技术构建RNA测序文库；
* 客户可以直接从公司购买RNA建库试剂盒，自行按照操作流程来完成建库任务。
