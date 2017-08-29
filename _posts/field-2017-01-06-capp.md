---
layout: page
title: "CAPP-Seq：ctDNA检测利器"
date: 2017-01-06 21:29:40 +0800
thumbnail: ../image/field/2017-capp/capp-封面.png
description: "循环肿瘤DNA（ctDNA）对于评估癌症符合来说是一个很有前景的非侵入性方法，但是目前检测ctDNA的方法存在敏感性受限或病人覆盖率的不足，作者通过深度测序癌症个性化图谱cancerpersonalized profiling by deep sequencing (CAPP-Seq)，量化ctDNA，对非小细胞肺癌（NSCLC）进行CAPP-Seq，设计的突变点覆盖超过了95%的NSCLC。 "
categories: field
sidebar: true
news: true
---

CAPP-Seq：ctDNA检测利器
循环肿瘤DNA（ctDNA）对于评估癌症符合来说是一个很有前景的非侵入性方法，但是目前检测ctDNA的方法存在敏感性受限或病人覆盖率的不足，作者通过深度测序癌症个性化图谱cancerpersonalized profiling by deep sequencing (CAPP-Seq)，量化ctDNA，对非小细胞肺癌（NSCLC）进行CAPP-Seq，设计的突变点覆盖超过了95%的NSCLC。
为了设计这个NSCLC“筛选器”，作者从COSMIC和其他数据库中挑选了潜在驱动基因的覆盖复发突变的外显子，在TCGA中407个NSCLC行全外显子测序，并运用迭代算法，以选择最少的位点涵盖最多的错义突变病人数。

<p style="text-align: center;">Fig1 CAPP-Seq设计方案：</p>
<p style="text-align: center;"><img src="/image/field/2017-capp/capp-1.png">

六步设计了这个NSCLC筛选器：1.检测非小细胞肺癌中捕获的已知和可疑的驱动突变，2-4.增加了含有复发性单核苷酸变异SNVs的外显子，5-6.增加了内含子和在基因重排断裂位点外显子（ALK、ROS1、RET），最后检测的长度达到125kb，靶向设计了521外显子，13个内含子，中位检测SNVs是4个，覆盖96%的NSCLC。在训练集及验证集中达到高度一致性。

<p style="text-align: center;">Fig2概括了CAPP-Seq的数据特征：</p>
<p style="text-align: center;"><img src="/image/field/2017-capp/capp-2.png">

血浆中循环DNA片段的长度分布，大部分落在170bp（fig2a），所有基因组（b）及4个病人（c）血浆DNA测序深度的范围，可见大多在10000×，有很好一致性。

<p style="text-align: center;"><img src="/image/field/2017-capp/capp-3.png">

 CAPP中非参等位基因分布，发现本底中位值和均值分别是0.0003%、0.006%，这远远低于ctDNA比例，说明并不会影响ctDNA检出（fig2d）。多种非肿瘤组织（如一些癌前细胞）可以释放出非生殖系ctDNA，这样的生物学本底（或背景）同样影响CAPP-Seq的敏感性，因此分析40份血浆中（35份NSCLC，5份正常）107个癌症相关SNVs，发现大部分都在底下，＜0.01%（其实还有相当一部分是在这个值以上的）（e），并检测了一些热点突变发现TP53 R175H频率特别高 ~0.18%，其他的都在0.01%以下，故需要排除TP53 R175H，以免影响真实的生物学克隆异质性（f）。

 <p style="text-align: center;"><img src="/image/field/2017-capp/capp-4.png">

 下一步作者就是开始以经验为基准的检测了CAPP-Seq的检测极限和检测结果的线性相关，说明在不同稀释程度下实际检测和理论检测有较高的一致性。

虽然本底较低，但CAPP-Seq要基于充足的血量，对于获取有限血量的标本来说（如贫血、并发症、身体机能差等）这样的本底还是大大限制了ctDNA的检出率，而影响ctDNA量主要是1、文库中cfDNA重新获取的量，2、肿瘤特异性ctDNA量。

 <p style="text-align: center;"><img src="/image/field/2017-capp/capp-5.png">

左图可见ctDNA等位基因频率在0.2%本底误差开始逐渐明显，而达到CAPP-Seq检测极限0.02%时人工误差达到50%，因此降低误差是尤为重要。故作者今年对CAPP-seq进行了优化，引进了集成数字误差抑制(integrated digital error suppression，iDES)，结合肿瘤中消除原本较高的本底噪音和分子条码技术策略，从而获得有效的cfDNA，大大降低了本底噪音。这两种方案能分别使CAPP-seq敏感性提升3倍，而结合后提升15倍，右图所见。

<p style="text-align: center;">iDES设计</p>
 <p style="text-align: center;"><img src="/image/field/2017-capp/capp-6.png">

 利用两个插入条码、两个索引条码及适配器组装双链DNA，分别扩增，最后得到相对较纯反义链，再重新组装成-无PCR扩增产生的随机突变-无探针富集时由氧化导致的单链突变-拥有真实突变的双链DNA（a），结合条码技术及背景抛光协同使无错误位点从90%升至98%，全误差率低至0.0015%（b），b中还可见G＞T的颠换发生错误最大。

 <p style="text-align: center;">17个患者基本信息及治疗前CAPP-Seq检测的结果</p>
  <p style="text-align: center;"><img src="/image/field/2017-capp/capp-7.png">


可见有两例I期患者（p12、p17）没有检测出ctDNA，而其余II~IV期都有检测出，且IV期的看似ctDNA量要多点，但是也有例外如p4患者，虽然是IV期，但是ctDNA量反而没III期的多，是否其肿瘤活性较低引起有待思考，有融合基因的几乎都是没有抽烟及抽烟较轻的患者，这些患者SNVs也较少。

  <p style="text-align: center;"><img src="/image/field/2017-capp/capp-8.png">

对Table1中13个NSCLC患者和5个健康人进行CAPP-Seq后分析其敏感性及特异性发现II~IV期患者敏感性和特异性达到了100%和96%（fig3a），且肿瘤大小与ctDNA量成正相关（c）。

<p style="text-align: center;">iDES-enhancedCAPP-Seq特征</p>
<p style="text-align: center;"><img src="/image/field/2017-capp/capp-9.png">


采用iDES可使假阳性基本消失，敏感性、特异性、阳性预测值、阴性预测值都达到最大，并且与ddPCR对比，等位基因频率有较高的一致性。

 <p style="text-align: center;"><img src="/image/field/2017-capp/capp-10.png">

检测肿瘤热点突变中iDES能使阳性预测值PPV提升至70%，并且能使肿瘤配对样本中没有检测的cfDNA达到最低（d）。在检测EGFR突变中发现敏感性和特异性同时达到100%，而针对不同突变L858R、Exon 19 del、T790M时特异性和PPV达到100%，敏感性也有91%~96%（e、f）。

<p style="text-align: center;">CAPP-Seq临床应用</p>
<p style="text-align: center;"><img src="/image/field/2017-capp/capp-11.png">

（fig4）基于CAPP-seq检测NSCLC患者ctDNA监测肿瘤负荷，可见ctDNA不仅能很好的反应肿瘤大小，还能反应出肿瘤的活性（e），且比影像学更加灵敏。也有例外如（f）治疗后肿瘤体积缩小了，但ctDNA反而上升了，这里不好解释了。

<p style="text-align: center;">iDES-enhanced CAPP-Seq临床应用</p>
<p style="text-align: center;"><img src="/image/field/2017-capp/capp-12.png">

 iDES的检测极限达到0.0025%，这里的c只有用iDES在肺癌治疗1个月肿瘤负荷相对较低的时候才能检测出，而其他方法都检测不出。真因为iDES检测的阳性预测值更高了，这也可以解释上图中f，可能是由于假阳性的结果。

总结
用CAPP-seq可检测100%的II~IV期NSCLC，I期检测是50%。该方法特异性高达96%，能检测突变等位基因频率低至0.02%。ctDNA水平与肿瘤大小高度一致性，能反应残余病灶及治疗相关的影像学反应，并且比影像学更加灵敏。而在此基础上的iDES能是从血中检测EGFR激酶区域突变谱敏感性达到92%，特异性达到99.99%，在患者水平其敏感性和特异性分别是90%和96%，此外iDES能监测NSCLC患者105cfDNA中4个ctDNA。我们可以预测iDES-enhanced CAPP-Seq将辅助非侵入性基因分型及在临床中发挥其优势。

参考文献：
Nat Med. 2014May;20(5):548-54. An ultrasensitivemethod for quantitating circulating tumor DNA with broad patient coverage.

Nat Biotechnol. 2016May;34(5):547-55. Integrated digital error suppression forimproved detection of circulating tumor DNA.

来源：生物在线

<div style="float: right;"><a href="/{{ page.categories }}">Go Back</a></div>
