# Seqhealth.github.io

## The Seqhealth Tech official website source code

公司网站使用文档

### 1.架构说明

公司的网站本来部署在阿里云，但是为了方便销售写作的需求和未来的版本控制，决定配合CDN加速，将网站部署到Github上，但是缺点是速度会稍微慢一点。

本网站使用的是Jekyll作为静态网站生成引擎，需要知道生成机制可以查询[Jekyll官网](http://jekyllrb.com)

本地运行环境搭建，查看[Jekyll on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

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

### 团队风采内容修改

团队风采内容更改：
1. 将新的同事图片添加到`/image/team/`文件夹下
2. 在`_data/`文件夹下寻找`team.yml`文件，添加如下内容。

```
- name: "新同事的名字"
- link: "图片文件名称"
- pos: "新同事所在的部门"
```
3. 保存后，按照更新操作推送，网站即可更新。

### 建库技术供应商

1. 新建立一个文件，文件命名方式是`建库技术名称.md`(英文)
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
4. 然后按照Markdown格式，对内容进行编写。
>注：可以参考科技服务部分的文件对内容进行填写。**Markdown格式必须要学习**!!!

### 科技服务与建库技术图片更新

举例：`<img class="fig70" src="/image/exon_sequencing/workflow.png">`

1. 在`image`文件夹下，找到对应科技服务部分名字的图片文件夹
2. 添加，删除，修改里面的图片。如果添加新图片插入`举例`部分的代码，如果调整图片大小，`fig70`表示70%原图大小，`fig60`表示60%原图大小，以此类推。`src`部分填入当前图片的路径，保存后即可添加成功。


### 公司网页导航栏更新

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
