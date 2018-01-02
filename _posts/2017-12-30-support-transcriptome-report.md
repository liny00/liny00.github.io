---
layout: page
title: "转录组测序报告都说了些啥？"
date: 2017-12-30 21:29:40 +0800
thumbnail: ../image/news/2017/transcriptome_report/2.png
description: "RPKM值用于衡量基因的表达量，在转录组测序结题报告中的表达量比较分析均以RPKM值为基础。RPKM是Reads Per Kilobase per Million mapped reads的缩写，代表每百万reads中来自于某基因每千碱基长度的reads数。RPKM是将map到基因的read数除以map到基因组上的所有read数(以million为单位)与RNA的长度(以KB为单位)。"
categories: support
sidebar: true
news: true
---

#### 1. 什么是RPKM值？
RPKM值用于衡量基因的表达量，在转录组测序结题报告中的表达量比较分析均以RPKM值为基础。
RPKM的定义：
RPKM是Reads Per Kilobase per Million mapped reads的缩写，代表每百万reads中来自于某基因每千碱基长度的reads数。RPKM是将map到基因的read数除以map到基因组上的所有read数(以million为单位)与RNA的长度(以KB为单位)。
其公式为：
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/1.png">

为什么选择RPKM？
在衡量基因表达量时，若是单纯以map到的read数来计算基因的表达量，在统计上是不合理的。因为在随机抽样的情况下，序列较长的基因被抽到的机率本来就会比序列短的基因较高，如此一来，序列长的基因永远会被认为表达量较高，而错估基因真正的表现量，所以Ali Mortazavi等人在2008年提出以RPKM在估计基因的表达量。
RPKM法能消除基因长度和测序量差异对计算基因表达的影响，计算得到的基因表达量可直接用于比较不同样品间的基因表达差异。
当然，RPKM值只是量化基因表达的方式之一，除此之外还有FPKM、TPM等方式。

#### 2. 如何看懂火山图？
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/2.png">

转录组测序最重要的目的就是寻找差异表达基因。标准的火山图（volcano plot）常用于展示显著差异表达的基因。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/3.png">

上图中，每个点代表一个基因，横轴代表基因在不同样本中表达倍数的变化，横坐标是log2（Fold Change），纵轴代表基因表达量变化差异的统计学显著性，纵坐标是-log10（P value）。
通常将基因表达变化2倍作为差异表达的阈值，在图中就是平行于Y轴的两条线X=1和X=-1，在X=-1左侧的点是下调超过2倍的基因，在X=1右侧的点是上调超过2倍的基因。此外，平行于X轴有一条虚线Y=1.30，即-log10(0.05），在虚线上方的点表示有显著性，因此在X=1右侧、Y=1.30上方的点（红色的点）就是表达量显著上调的基因，在X=1左侧、Y=1.30上方的点（绿色的点）就是表达量显著下调的基因，此外，一些关注的基因还会标出基因名称。

#### 3. MA plot 和火山图有什么区别？
MA plot看起来有点像躺着的火山图。MA plot中，纵坐标logFC（在火山图的介绍中已经说过）是log2 Fold Change，用于衡量基因表达上下调；横坐标则是logCPM 即log2-counts-per-million，用于衡量基因的表达量。
CPM即Counts per million，计算公式为CPM=C/N*1000000，设C为比对到 某个基因的 reads 数（read count），N 为比对到所有基因的总reads数。在某些情况下，我们只想了解每个基因被覆盖到的相对reads数，而不希望对其做长度校正，就会使用这个指标。
MA plot目前貌似还没有一个中文译名，但简而言之，它的X轴是基因在两个样本中的丰度平均值，Y轴表示基因表达差异。比之下，MA plot充分展示了基因丰度和表达变化之间的关系。我们可以看到，蓝色两条线的上方和下方，分别代表上下调差异表达基因；越靠左下或者右上的点，就是丰度越高而且变化幅度越大的基因。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/4.png">

#### 4. 为什么要做主成分分析？
我们通过测序获得了大量的测量数据，用于分析基因表达规律。多变量大样本无疑会为我们的研究提供丰富的信息，但也在一定程度上增加了问题分析的复杂性，对分析带来不便。因此需要找到一个合理的方法，在减少需要分析变量的同时，避免原有信息的损失，以达到对所收集数据进行全面分析的目的。
主成分分析便是一种降维的方法，它将多个变量简化为少数、具有代表性的综合变量，以便于对整体基因表达情况进行描述、分析。通过主成分分析可以更直观的看到不同样本的整体差异。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/5.png">

在上图中，3种细胞（HCT116、MKN45、SGC7901，各3个重复）通过主成分分析，可以很明显的聚成3类。

#### 5. 热图
热图（heatmap）是对实验数据分布情况进行分析的直观可视化方法，可以用来进行基因表达差异的全局展示，还可以对数据和样品进行聚类。
热图中X轴表示不同样本，Y轴表示不同基因，每一个小方格表示某个样本的某个基因，方格的颜色表示基因的表达量的高低，如下图所示，红色表示上调，绿色表示下调，表达量上下调幅度越大，颜色越红或越绿。
热图同时还给出了样本和基因的聚类关系，如果关心样本（或基因）在检测到的表达量水平如何分类，相关关系如何，可以选择相应的条件聚类，也可以两者都选择。
由于完整的热图通常较大，不利于查找感兴趣的基因，也不利于展示研究关注的基因。可以进一步将基因上下调差异较显著的部分截取放大。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/6.png">

#### 6. GO富集分析的作用
通过表达量分析，我们可以找到许多差异表达的基因，接下来想要找到这些差异基因的功能，可以对基因进行GO富集分析。
GO即Gene Ontology， http://www.geneontology.org ，是一个将全世界所有与基因有关的研究结果进行分类汇总的综合数据库，利用GO数据库，可以对于一个或一组基因按照其参与的BP(Biological Process, 生物过程)、MF(Molecular Function, 分子功能) 及CC(Cellular Component, 细胞组分) 三个方面进行分类注释。
GO注释有助于理解基因背后的生物学意义，即差异表达基因与哪些生物学功能相关。通过寻找哪些差异表达基因属于一个共同的GO功能分支，并用统计学方法检验结果是否具有统计学意义，从而得出差异表达基因主要参与了哪些生物功能或途径。

#### 7. KEGG Pathway富集分析
KEGG（Kyoto Encyclopedia of Genes and Genomes）是系统分析基因功能、基因组信息的数据库，它有助于研究者把基因及表达信息作为一个整体网络进行研究。
与GO分析法（应用单个基因的GO分类信息）不同，通路分析法利用的资源是许多已经研究清楚的基因之间的相互作用，即生物学通路。
通过KEGG Pathway显著性富集能确定差异表达的基因参与了哪些生化代谢途径和信号转导途径，并通过统计学方法计算哪些通路与基因表达的变化最为相关。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/7.png">

在上面这张KEGG pathway富集图中，X轴表示富集的显著性（用-log10（P value）表示，该值越大富集得越显著），Y轴表示富集的KEGG Terms（在GO富集图中则为GO Term），圆点大小表示该KEGG pathway包含的差异基因数目，圆点深浅表示Rich factor（富集因子），也就是富集的程度（Rich factor=输入的差异基因列表中富集到该pathway的基因数/该pathway的所有基因数）。
通俗的说就是，横轴越往右表示富集越显著，纵轴代表不同的信号通路，点越大表示富集到该通路的基因越多。该图表示与对照组相比，实验组中多数差异表达基因以高显著性富集到矿质元素吸收这条通路，说明实验组中某种处理主要影响了矿质元素的吸收。

#### 8. KEGG代谢通路图
知道了差异表达基因主要富集到哪个通路之后，若想了解这些差异表达基因是如何影响这些通路所代表的代谢功能，我们可以对某一个代谢通路图进行分析。
如下图方框表示KEGG数据库中对于该通路的所有基因，红色标注为差异基因列表中富集到该特定生物学途径的基因，绿色框的基因产物都属于本次转录组所测物种含有的背景基因，白色框的基因产物表示不属于本次所测物种的基因。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/8.png">

图中小圆圈表示分子化合物（非蛋白），箭头表示化学反应，虚线箭头表示间接反应，+p、+u表示磷酸化、泛素化等修饰，具体如下图所示。这样就可以直接的看出差异表达基因是如何影响代谢功能了。
<p style="text-align: center;"><img src="/image/news/2017/transcriptome_report/9.png">

#### 9 我们能通过转录组测序获得哪些信息？
1．	不同样品中差异表达的基因

2．	不同样品的差异表达背后是哪些生物学功能或途径发生了变化

3．	不同样品的生物学功能是怎样发生变化的（通过哪些通路调控）

<div style="float: right;"><a href="/{{ page.categories }}">Go Back</a></div>

