# Seqhealth.github.io

## The Seqhealth Tech official website source code

公司网站使用文档

### 1.架构说明

公司的网站本来部署在阿里云，但是为了方便销售写作的需求和未来的版本控制，决定配合CDN加速，将网站部署到Github上，但是缺点是速度会稍微慢一点。

本网站使用的是Jekyll作为静态网站生成引擎，需要知道生成机制可以查询[Jekyll官网](http://jekyllrb.com)

本地运行环境搭建，查看[Jekyll on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

```
.
├── about 	#关于公司
├── contact	#联系方式
├── css		#CSS代码
├── _data	#导航栏，侧栏自动生成数据
├── image	#公司图片（文件夹名称和内容部分一一对应）
│   ├── ChIP_sequencing
│   ├── circRNA_sequencing
│   ├── exon_sequencing
│   ├── home
│   ├── library_build
│   │   ├── KC-AMP
│   │   ├── KC-BS
│   │   ├── KC_RNA
│   │   └── SSMP
│   ├── methy_sequencing
│   ├── mRNA_sequencing
│   ├── news	#公司新闻
│   │   ├── 2016
│   │   └── 2017
│   ├── resequencing
│   ├── RIP_sequencing
│   ├── small_RNA_sequencing
│   ├── target_sequencing
│   ├── team
│   └── transcriptome_sequencing
├── _includes	#每个部分的插入代码
├── js		#javascript代码
├── _layouts	#布局分类
├── library_build	#建库技术部分
├── _posts	#咨询部分
└── science	#科技服务部分

```

### 2.更新操作

每次修改网站本地内容后，需要将内容推送到云端进行更新。更新工具是git-cola，公司网站在本地文件夹`liny00.github.io`，所有下文提到的内容在里面都可以找到。

#### 修改网站前：

1. 首先打开`git-cola`，选择`liny00.github.io`；
2. 点击`pull`按钮，更新本地内容；
3. 然后再开始修改网站内容；

#### 修改完成后：

1. 修改完成后，选取需要推送的文件；
2. 然后点击`stage`标记好需要推送的文件；
3. 输入在输入框`commit summary`里写入一些内容，你修改，删除，添加了什么；
4. 写入完成，点击`commit`；
5. 然后点击`push`, 输入用户名和密码；
6. 网站更新完成；

### 3. 团队风采内容修改

团队风采内容更改：
1. 将新的同事图片添加到`/image/team/`文件夹下
2. 在`_data/`文件夹下寻找`team.yml`文件，添加如下内容。

```
- name: "新同事的名字"
- link: "图片文件名称"
- pos: "新同事所在的部门"
```
3. 保存后，按照更新操作推送，网站即可更新。

### 4. 建库技术供应商

1. 在`library_build`文件夹下，新建立一个文件，文件命名方式是`建库技术名称.md`(英文)
2. 填写内容如下
```
---
layout: page
title: "建库技术名称"
permalink: /library_build/建库技术名字.md
sidebar: true
medicine: true
--- 

```
3. 在`_data`文件夹下，修改`medicine.yml`文件内的的建库技术名称和路径对应信息（格式如下）。添加或修改的路径信息就是`建库技术名字.md`所在文件夹的路径信息。

```
main: "建库技术供应商"

subtitle:
  - name: "KC-AMP建库"
    link: "/library_build/"

  - name: "KC-SSMP建库"
    link: "/library_build/KC_SSMP/"

  - name: "KC-BS-seq建库"
    link: "/library_build/KC_BS_seq/"

  - name: "KC-RNA靶向建库"
    link: "/library_build/KC_RNA/"

``` 
4. 然后按照Markdown格式，对内容进行编写（参照其他已有的建库技术文件编写）。

>注：可以参考科技服务部分的文件对内容进行填写。**Markdown格式必须要学习**!!!

### 4. 科技服务与建库技术图片更新

举例：`<img class="fig70" src="/image/exon_sequencing/workflow.png">`

1. 在`image`文件夹下，找到对应科技服务部分名字的图片文件夹
2. 在`science`文件夹内找到与内容对应的Markdown格式文件(`.md`)，对应的添加，删除，修改里面的图片。如果添加新图片插入`举例`部分的代码，如果调整图片大小，`fig70`表示70%原图大小，`fig60`表示60%原图大小，以此类推。`src`部分填入当前图片的路径，保存后即可添加成功。


### 5. 公司网页导航栏更新

1. 在`_data/`文件夹下寻找`menu.yml`文件，添加如下内容。

```
- name: "首页"
  link: "/"

- name: "关于康测"
  link: "/about/"

- name: "科研服务"
  link: "/science/"

- name: "建库技术供应商"
  link: "/library_build/"

- name: "资讯中心"
  link: "/news/"

- name: "联系我们"
  link: "/contact/"
```
2. 按照上述格式加入导航栏的名称与网页链接，保存即可。

### 6. 公司新闻更新

1. 在`_post`文件夹内新建一个文件，严格按照`年-月-日-公司大概内容(英文).md`命名，比如`2016-4-06-company-move.md`。然后在`image/news/`路径下新建一个文件夹，将公司新闻部分的图片存入在内，命名和路径自己决定。
2. 打开新建立的文件，写入

```
---
layout: page
title: "武汉康测科技乔迁新址"
date: 2016-04-06 21:29:40 +0800
thumbnail: ../image/news/2016/公司搬迁新址.png
description: "武汉的春天，风清气爽。2016年4月6日，经过将近36天的施工与装修，公司总部终于装修落成了。在这个值得纪念的日子里，武汉康测科技有限公司迎来了发展史上的又一里程碑——公司整体搬迁至新办公大楼，地址位于光谷生物城C1栋凯瑞百谷二楼，占地面积800㎡，300万的实验仪器和设备均调试完毕并正式投产，公司整体快速高效地运转。 "
categories: company
sidebar: true
news: true
---
```
下面是每一个部分的意思：

* `title`:后面接`新闻标题`
* `date`: 后面接新闻的发布日期。三个部分，用空格隔开。第一部分是`年-月-日`，比如`2016-04-06`；第二部分是发布时间`时-分-秒`，比如`21:29:40`; 第三部分是时区，默认为东八区，`+0800`加在最后。
* `thumbnail`: 是新闻预览部分的图片的路径，注意图片大小固定为`400px乘300px`。
* `description`: 是新闻预览部分的简要说明，后面接文字，注意文字要加在英文引号中`""`，比如:`"武汉的春天，清风气爽。"`
* `categories`: 接`company`或者`field`，如果是`公司新闻`就接`company`，如果是`行业动态`就接`field`。

其他没有说的是默认值，不需要解释和更改，但是不能少。

3. 然后按照Markdown格式，对内容进行编写（参照其他已有的建库技术文件编写和添加图片）。
4. 保存，预览，上传云端。

