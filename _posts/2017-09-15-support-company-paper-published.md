---
layout: page
title: "案例解析：旁斑参与pri-miRNA的加工成熟"
date: 2017-09-15 21:29:40 +0800
thumbnail: ../image/news/2017/paper published/1.png
description: "miRNA 是一类长度 21~22nt 的非编码 RNA，在转录后调控中发挥重要的作用。约 80%的 已 注 释 的 miRNA 由 来 自 于 不 同 的 编 码 或 非 编 码 起 始 转 录 本 —pri-miRNA 经DROSHA-DGCR8 微加工体加工成 pre-miRNA，再经 Exportin5 运输到细胞质并被 DICER 酶进一步加工形成成熟的 miRNA。之前的研究表明某些 pri-mRNA 的加工是与转录是同时发生的，但基因组层面上的大多数 pri-mRNA 的加工是否是与转录同时发生，这种所谓的“共转录”加工或可能的转录后加工是通过何种机制发生的，对于进一步理解 miRNA 的生物合成和特定组织细胞内的调控机制至关重要。"
categories: support
sidebar: true
news: true
---

miRNA 是一类长度 21~22nt 的非编码 RNA，在转录后调控中发挥重要的作用。约 80%的 已 注 释 的 miRNA 由 来 自 于 不 同 的 编 码 或 非 编 码 起 始 转 录 本 —pri-miRNA 经DROSHA-DGCR8 微加工体加工成 pre-miRNA，再经 Exportin5 运输到细胞质并被 DICER 酶进一步加工形成成熟的 miRNA。之前的研究表明某些 pri-mRNA 的加工是与转录是同时发生的，但基因组层面上的大多数 pri-mRNA 的加工是否是与转录同时发生，这种所谓的“共转录”加工或可能的转录后加工是通过何种机制发生的，对于进一步理解 miRNA 的生物合成和特定组织细胞内的调控机制至关重要。

##### miRNA 的加工过程：

1.基因组中某个基因座位转录生成具有 5’端帽子结构和多聚腺苷酸尾巴的 pri-miRNA。pri-miRNA 通常由 RNA Pol II 转录,长度可达几千个碱基。

2.在哺乳动物细胞内，pri-miRNA 在核内由“微加工器(microprocessor)”复合物进行处理，复合物由一个 RNase III DROSHA、两个 DGCR8 (DiGeorge critical region-8)蛋白及一个双链RNA 结合蛋白组成。微处理器可以从发夹结构上“量出”11 个核苷酸，在单链 RNA 与发夹结构结合处将 11 个核苷酸组成的片段切下，切割后的 65 至 75 个核苷酸长度的茎环结构就叫做 miRNA 前体（pre-miRNA）。pre-miRNA 借助 Exportin-5 从核内转运至细胞质

3.pre-miRNA 经过 Dicer 的进一步剪切形成成熟的、大约 21 至 23 个核苷酸的 miRNA，
Dicer 是一种 RNase III 家族的酶。最终形成的成熟 miRNA和 RNA诱导沉默复合物(RNA induced silencing complex, RISC)，与细胞质中的信使 RNA(mRNA)相互作用引起靶 mRNA 的降解或抑制翻译过程，阻止蛋白质合成。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/paper published/mirna-pathways-large.jpg"></p>

##### 作者关注的旁斑是什么？
旁斑是一种独立的核糖核蛋白小体，主要存在于细胞核中，其功能并没有完全被阐释清楚，但是目前已经证实这种结构在 mRNA 剪切、储留以及加工中都具有极其重要的作用。NONO 连同 PSPC1、PSF 和一个 lncRNA——NEAT1，共同形成旁斑结构。

###### 1. 旁斑参与 pri-miRNA 的加工
为了研究哪些因子参与了 pri-miRNA 的加工过程，作者使用 T7 RNA 聚合酶体外合成了来源于 miR-17-92a 位点的生物素标记的 6 条 pri-miRNA 序列用于 RNA-pull down 实验，经 western blotting 和 MS 验证，获得多个旁斑的核心蛋白，包括 NONO、PSPC1、PSF 等。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/1.png"></p>

对以上这些蛋白进行功能研究发现，利用 siRNA 敲低 Hela 细胞中的 NONO 和 PSF 的编码基因，miR-17-92a 位点产生的所有 miRNA 的表达量均下降，而对应的 pri-miRNA 含量升高，说明这些蛋白参与了 pri-miRNA 的加工，被敲除后，miRNA 的加工停留在 pri-miRNA阶段。从结果可以看出，敲除微加工器的组成蛋白之一 DROSHA 对 pri-miRNA 起到决定性的作用，NONO 和 PSF 起到一定作用。同时，作者利用 CRISPR-Cas 技术进行 NONO，PSF和 PSPC1 的敲除，发现 NONO 和 PSF 的敲除可引发细胞致死，PSPC1 的敲除不影响细胞的存活率，还导致了检测的 miRNA 的表达量上调。由于 PSPC1 对旁斑的结构完整性并不是必需的，因此作者首先关注了 NONO 和 PSF。由于 lncRNA NEAT1 对于构建和维持旁斑结构的重要性，作者将 NEAT1 进行敲低，同时使用另一种核斑（nuclear speckle）相关的 lncRNAMALAT1 的敲除组作为对照（以上这些敲除都没有影响到 DROSHA-DGCR8 以及其他旁斑相关 RNA 结合蛋白编码基因的表达量），发现敲低 NEAT1 对 pri-miRNA 的加工产生上述一致的效果，而敲低 MALAT1 并没有影响 pri-miRNA 的加工。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/2.png"></p>

###### 2. NONO–PSF 二聚体、NEAT1 在 pri-miRNA 加工中发挥广泛的作用
为了进一步研究 NONO、PSF 和 PSPC1 等在所有 pri-miRNA 加工中的作用，作者将NONO、PSF 及 lncRNA NEAT1（包括 NEAT1 基因的两个转录本 isoform：NEAT1_V1 和NEAT1_V2）分别敲低后做小 RNA 测序，发现 64~80%的 miRNA 发生了下调，而 PSPC1的敲低导致这些 miRNA 的上调，说明旁斑组成蛋白 NONO 和 PSF 以及 lncRNA NEAT1 广泛地参与了 pri-miRNA 的加工。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/3.png"></p>

这个结论也被荧光素酶实验和过表达恢复实验所证实：作者构建了特殊的双荧光素酶报告单载体，将 pri-miRNA（pri-miR-17-92a）的序列插入，当 pri-miRNA 加工过程受限制时，荧光素酶活性增加，荧光增强；反之，荧光减弱。敲低 NONO–PSF 和 NEAT1,引起荧光增强，而敲低 Dicer 以及 PSPC1 则不影响荧光强度，进一步确定旁斑参与的是 pri-miRNA的加工而非 pre-miRNA。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/4.png"></p>

###### 3. NONO–PSF 二聚体如何参与 pri-miRNA 加工
为了进一步确定 NONO-PSF 具体如何参与 pri-miRNA 的加工，作者首先使用了 CLIP测序（紫外交联免疫共沉淀测序）分别鉴定 NONO 和 PSF 直接结合的靶标 RNA。单独使用NONO 抗体亦或 PSF 抗体都能将两个蛋白形成的异二聚体沉淀下来。CLIP 测序结果显示：在 Hela 细胞中表达的 pri-miRNA 中，约 2/3 都被 NONO–PSF 结合，且 NONO 和 PSF 的结合峰分布非常吻合，在产生 6 种成熟 miRNA 的 pri-miRNA 序列位置的结合峰尤其明显。作者发现同已知数据库的 HepG2 细胞中，PSF 结合的表达的 pri-miRNA 数量相比，Hela 细胞中 PSF 结合的 pri-miRNA 数目较少，说明：NONO-PSF 结合 pri-miRNA 的细胞特异性。同时，miRNA-seq 中显示差异下调的 miRNA 的数量要远超于 NONO-PSF 结合的 pri-miRNA的数量。说明，除 NONO-PSF 外，其他一些旁斑相关的 RNA 结合蛋白可能也参与了pri-miRNA 的加工。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/5.png"></p>

有趣的是，作者发现，NONO-PSF 同时也与 NEAT1 结合，但是 NONO-PSF 与 NEAT1的结合模式和其与 pri-miRNA 的结合模式存在较大的差异，Reads 分布显示：NONO-PSF 在NEAT1 的 5’和 3’两端区域结合是连续的，这个结果与之前报道的旁斑结构的两端暴露在亚核区的外围是一致的。而与 pri-miRNA 的结合是分离的。
根据之前报道的 DGCR8 的 CLIP-seq 结果，DGCR8 虽然也结合 NEAT1，但结合模式不同于 NONO-PSF 的密集连续性，DGCR8 的结合峰较分散，且主要结合在 NEAT1 的 5’端和 3’端编码 pri-miR-612 的序列，有意思的是 pri-miR-612 在作者的 miRNA-seq 和实时定量PCR 中几乎是检测不到的，因此在随后的分析中，作者认为 miR-612 是一个假定的 miRNA，而它的作用可能将微加工器锚定到 NEAT1 上，这里为文章最后提出的模型图奠定了一定的基础，即 NEAT1 可能作为骨架，不仅锚定大量的 RNA 结合蛋白，同时锚定微加工器，共同参与 pri-miRNA 的加工。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/6.png"></p>

###### 4. NEAT1 介导旁斑与微处理器互作
为证明 NEAT1 介导 NONO-PSF与微加工器的互作，进行 Co-IP 实验，结果证明：NONO、DGCR8、PSF 之间的互作，分别使用 RNase A 处理 NEAT1 和敲低 NEAT1 均能大幅度降低NONO 和 DGCR8 之间的相互作用而不影响 NONO 与 PSF 的结合，说明 NONO 和 PSF 之间是直接相互作用，NONO-PSF 二聚体与微加工器之间的作用是通过 NEAT1 介导的。敲低MALAT1 不影响以上所有的互作。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/7.png"></p>

###### 5. NEAT1_V1 能促进 pri-miRNA 加工，但必须以 NEAT1_V2 为前提
过表达 NEAT1_V1 或 NEAT1_V2 的 3’端片段（pri-miR-612 茎环结构）能促进 pri-miRNA加工。并且用这两个片段进行 RNA pull down，都能将 NONO–PSF and DGCR8 结合下来。此外，NEAT1_V1 促进 pri-miRNA 的作用必须在 NEAT1_V2 完整的基础上，如果NEAT1_V2 被敲除，NEAT1_V1 不能发挥促进作用，说明 NEAT1 的全长结构对于 pri-miRNA加工是必须的。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/8.png"></p>

###### 6. 旁斑参与 pri-miRNA 加工机制模型的提出
哺乳动物细胞中，NEAT1 与多个 RNA 结合蛋白形成核蛋白小颗粒，主要存在有两种形式：一种是形成小的亚单元，另一种是多个亚单元聚集成旁斑等较大的结构。在 C2Cl2 细胞分化过程中，pri-miR-1 的表达上调特别明显。通过荧光原位杂交实验（FISH）结果可以看到组成旁斑的 NONO、组成微加工器的 DGCR8 更多的出现在分化的细胞中，且与 pri-miR-1 共定位。同 FISH 相比，即使在分化的 C2Cl2 细胞中，使用免疫染色的方法也很难观察到 DGCR8 的定位，可能暗示 DGCR8 可能涉及到在核质中的其他 RNA代谢通路，这可能和 DGCR8 具有比较宽泛的 RNA 结合谱有关。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/2017-09-15/9.png"></p>

最后，该研究进一步提出一种新型的“鸟巢”模型：在这个模型中，lncRNA NEAT1_V2起到关键的支架作用，能募集微处理器、NONO 等多种 RBP 以及更多的 NEAT1_V1 和NEAT1_V2，形成小的亚单元，NEAT1 的 3’端的 pri-miR612 锚定在微处理器上；并且许多个这样的亚单元会聚集形成旁斑，共同协调细胞核内 miRNA 的加工成熟。

<p style="text-align: center;"><img class="fig50" src="/image/news/2017/paper published/2.png"></p>

这项研究利用 RIP-PCR、RNA pull down、CLIP 测序、小 RNA 测序及生物信息学分析等多种实验和分析方法，多角度充分论证 NEAT1 以及 NONO-PSF 异二聚体在 miRNA 加工成熟中的关键作用并提出加工机制模型。


参考文献：NEAT1 scaffolds RNA-binding proteins and the microprocessor to globally enhance pri-miRNA processing.Nat Struct Mol Biol. 2017 Aug 28. doi: 10.1038/nsmb.3455. （IF：12.595）

<div style="float: right;"><a href="/{{ page.categories }}">Go Back</a></div>
