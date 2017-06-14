# Seqhealth.github.io

## The Seqhealth Tech official website source code

公司网站使用文档

### 1.架构说明

公司的网站本来部署在阿里云，但是为了方便销售写作的需求和未来的版本控制，决定配合CDN加速，将网站部署到Github上，但是缺点是速度会稍微慢一点。

本网站使用的是Jekyll作为静态网站生成引擎，需要知道生成机制可以查询[Jekyll官网](http://jekyllrb.com)

本地运行环境搭建，查看[Jekyll on Windows](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide)

### 2.更新操作

每次修改网站本地内容后，需要将内容推送到云端进行更新。更新工具是git-cola

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
3.保存后，按照更新操作推送，网站即可更新。

### 建库技术供应商

#### 新建文件

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
3. 然后按照Markdown格式，对内容进行编写。
>注：可以参考科技服务部分的文件对内容进行填写。


