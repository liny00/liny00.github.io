---
layout: page
title: "高通量测序中的Duplication"
date: 2017-09-30 21:29:40 +0800
thumbnail: ../image/news/2017/paper published/1.png
description: "Duplication过多会对测序、比对、表达量分析等产生干扰，如果一个片段通过PCR扩增、测序，产生了重复reads，在比对参考基因组时，这些重复的reads均会被比对到参考基因组，影响reads在全基因组的分布。而在分析表达量时，重复reads则直接造成表达量高于实际表达量，同时duplication过高通常伴随着文库复杂度低、一些序列片段信息丢失，这些片段信息的丢失则导致测序获得的表达量低于实际表达量。因此，duplication过高意味着表达量的分析不够准确。"
categories: support
sidebar: true
news: true
---

高通量测序时,读出每一个片段的序列信息，就是一个read。基因的序列信息就是通过许多reads通过片段序列重叠和拼接获得的。我们评估高通量测序质量，通常会接触到duplication。

###### 1.Duplicated是如何产生的？
文库构建过程中，通常会进行10轮左右的PCR扩增循环。10轮扩增次数能控制文库处于刚刚进入指数期扩增的程度，不至于产生过多的重复分子。而在上机测序过程中，并不是所有的文库分子（即文库构建过程的PCR产物）都会被测序，被测序的只是文库分子当中很少的一小部分。所以测序数据会有duplication，但是很少量的duplication。

如果建库起始量太低，或接头连接效率不高，建库时就需要增加PCR扩增循环次数，以提高文库的片段数量，但文库的复杂度仍然是较低的。这种情况下，文库中存在过多的扩增重复片段，上机测序就会产生过高的duplication。

另一方面PCR bias也是duplication产生的重要原因，如果A和B两个片段在文库构建中经PCR扩增得到了100个A和150个B片段，这50个多的B片段就被认是duplication。

模板分子的碱基偏好会影响PCR的效率，容易PCR扩增的模板分子会得到更多的扩增片段，即更高的duplication。

下图展示了两个duplication程度不同的文库，上半部分的文库复杂度低，有较多的重复片段，这些片段经测序就会产生重复reads。而下半部分的文库有较高的复杂度，几乎每一个片段对应着基因组上不同的位置。
  <p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-30/1.png"></p>

此外duplication还与测序深度有关，duplication会随着测序深度的增加而上升。

###### 2.Duplication的影响
Duplication过多会对测序、比对、表达量分析等产生干扰，如果一个片段通过PCR扩增、测序，产生了重复reads，在比对参考基因组时，这些重复的reads均会被比对到参考基因组，影响reads在全基因组的分布。而在分析表达量时，重复reads则直接造成表达量高于实际表达量，同时duplication过高通常伴随着文库复杂度低、一些序列片段信息丢失，这些片段信息的丢失则导致测序获得的表达量低于实际表达量。因此，duplication过高意味着表达量的分析不够准确。

###### 3.康测产品优势
我们将同一样本，分别使用康测链特异性转录组建库试剂盒和常规商品化试剂盒分别进行建库，并比较两组测序数据的duplication，和去除重复（deduplication）后的水平。

下图左侧为康测转录组建库试剂盒建库效果，unique reads约为60%，通过去重复，unique reads达到85%以上；右侧为常规商品化试剂盒建库效果，去重复前后，unique reads分别低于20%和低于60%。

可以看出，同一样本，使用康测转录组建库试剂盒进行建库，产生的duplication更低，对表达量的分析更为准确。
   <p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-30/2.png"></p>
注：横坐标为reads重复的次数，纵坐标为重复次数对应的reads占total reads的比例，以reads的总数作为100%。



<div style="float: right;"><a href="/{{ page.categories }}">Go Back</a></div>
