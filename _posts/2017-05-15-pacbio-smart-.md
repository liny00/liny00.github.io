---
layout: page
title: "三代测序之PacBio SMRT技术全解析"
date: 2017-05-15 21:29:40 +0800
thumbnail: ../image/field/2017-PacBio-SMRT/1.png
description: "测序技术在近几年中又有里程碑的发展，Pacific Biosciences公司成功推出商业化的第三代测序仪平台，让三代测序正式走入我们的视线。与前两代相比，第三代测序有什么不同呢？我们就来详细了解测序界新宠-PacBio SMRT测序平台。"
categories: field
sidebar: true
news: true
---

<img style="float: left; margin-right: 2em;" src="/image/news/2017/BS-seq研发.png">

测序技术在近几年中又有里程碑的发展，Pacific Biosciences公司成功推出商业化的第三代测序仪平台，让三代测序正式走入我们的视线。与前两代相比，第三代测序有什么不同呢？我们就来详细了解测序界新宠-PacBio SMRT测序平台。

PacBio SMRT测序原理
Pacific Biosciences公司研发的单分子实时测序系统（Single Molecule Real Time，SMRT）应用了边合成边测序的原理，并以SMRT芯片为测序载体。
基本原理如下：
1）	聚合酶捕获文库DNA序列，锚定在零模波导孔底部
2）	4种不同荧光标记的dNTP随机进入零模波导孔底部
3）	荧光dNTP被激光照射，发出荧光，检测荧光
4）	荧光dNTP与DNA模板的碱基匹配，在酶的作用下合成一个碱基
5）	统计荧光信号存在时间长短，区分匹配碱基与游离碱基，获得DNA序列
6）	酶反应过程中，一方面使链延伸，另一方面使dNTP上的荧光基团脱落
7）	聚合反应持续进行，测序同时持续进行

PacBio SMRT测序原理
<p style="text-align: center;"><img src="/image/field/2017-PacBio-SMRT/1.png"></p>

PacBio SMRT的单分子测序和超长读长是如何实现的？我们重点看一下该技术的两点关键创新：分别是零模波导孔（zero-mode waveguides, ZMWs）和荧光标记在核苷酸焦磷酸链上（Phospholinked nucleotides）。
SMRT Cell含有纳米级的零模波导孔，每个ZMW都能够包含一个DNA聚合酶及一条DNA样品链进行单分子测序，并实时检测插入碱基的荧光信号。ZMW是一个直径只有10~50 nm的孔，当激光打在ZMW底部时，只能照亮很小的区域，DNA聚合酶就被固定在这个区域。只有在这个区域内，碱基携带的荧光基团被激活从而被检测到，大幅地降低了背景荧光干扰。

<p style="text-align: center;"><img src="/image/field/2017-PacBio-SMRT/2.png"></p>
<p style="text-align: center;">SMRT Cell和ZMWs</p>

将荧光染料标记在核苷酸的磷酸链而不是碱基上，当核苷酸掺入到新生的链中，标记基团就会自动脱落，减少了DNA合成的空间位阻，维持DNA链连续合成，延长了测序读长。SMRT测序最大限度地保持了聚合酶的活性，是最接近天然状态的聚合酶反应体系。

<p style="text-align: center;"><img src="/image/field/2017-PacBio-SMRT/3.png"></p>
<p style="text-align: center;">荧光标记在焦磷酸链上的核苷酸</p>

PacBio SMRT测序建库流程
DNA打断之后，经过末端修复、接头连接、片段筛选、杂交测序引物和聚合酶绑定，即可出库准备上机测序，建库过程无PCR反应。
<p style="text-align: center;"><img src="/image/field/2017-PacBio-SMRT/4.png"></p>
<p style="text-align: center;">PacBio SMRT建库流程</p>


PacBio SMRT技术特点
<p style="text-align: center;"><img src="/image/field/2017-PacBio-SMRT/5.png"></p>

<div style="float: right;"><a href="/{{ page.categories }}">Go Back</a></div>
