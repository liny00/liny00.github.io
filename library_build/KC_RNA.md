---
layout: page
title: "绝对定量转录组（KC-DigitRNA）建库技术"
permalink: /library_build/KC_RNA/
sidebar: true
medicine: true
---

## 背景介绍

转录组为特定细胞在某一功能状态下转录出来的所有RNA，主要包括mRNA，某些情况下也包括非编码RNA。转录组测序利用高通量测序技术，快速且全面地揭示某一物种特定细胞或组织在某一状态下的几乎所有转录本信息，包括转录本表达量、可变剪接体、可变polyA位点等。

Duplication指测序数据中的重复reads。测序文库构建过程中，通常会进行10轮左右的PCR扩增循环。如果建库起始量太低，或接头连接效率不高，建库时就需要增加PCR扩增循环次数，以提高文库的片段数量，这种情况就会产生较高的duplication。此外，PCR偏好性也是duplication产生的重要原因。另一方面，建库时的RNA随机打断也能产生长度和序列完全一致的片段，这部分重复片段可称为天然重复（真重复），这与PCR扩增重复（假重复）存在本质区别。

对于Duplication，如果不做去重处理，扩增重复就会对表达量分析造成干扰。而如果去除所有的重复reads，留下完全不重复的reads，则天然重复也被剔除，还会造成有效测序数据量减少。因此如何区分真假重复是表达量准确定量的关键。

---

## 绝对定量转录组建库技术

康测科技公司自主创新的绝对定量转录组测序（KC-DigitRNA测序），在文库扩增之前为每一条RNA片段加上唯一的身份标签（Unique Identifier，UID）。那么同一个片段扩增出来的产物均带有相同的标签，而天然重复片段则带有不同的标签。

测序完成后利用UID过滤数据，将相同标记的扩增产物进行合并，就能准确去除PCR扩增重复、同时保留样本的天然重复，一比一准确还原样本扩增前的原始状态。

在此过程中，PCR扩增和测序错误同样可以被纠正：扩增和测序的错误会使得相同UID标签对应多个不同的序列，那么只需比较这些序列的相似性，即可纠正这些错误。

<img class="fig40" src="/image/DigitRNA_sequencing/UID-1.png">
<p style="text-align: center; ">UID去重和纠错原理</p>       
---
---

## RNA建库技术原理
<img class="fig40" src="/image/DigitRNA_sequencing/UID-2.png">

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
