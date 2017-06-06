---
layout: default
---

<div style="margin-top: 3.1rem;">
<style>
* {box-sizing:border-box}
body {font-family: Verdana,sans-serif;}
.mySlides {display:none}

/* Slideshow container */
.slideshow-container {
  max-width: 1200px;
  padding: 0 1rem;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 10s;
  animation-name: fade;
  animation-duration: 10s;
}

@-webkit-keyframes fade {
  from {opacity: .7} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .7} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>
<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="/image/tooopen_09325741.jpg" style="width:100%">
  <!-- <div class="text">Caption Text</div> -->
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="/image/rip头图.jpg" style="width:100%">
  <!-- <div class="text">Caption Two</div> -->
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="/image/1摄图网-正在写文档的医生.jpg" style="width:100%">
  <!-- <div class="text">Caption Three</div> -->
</div>

</div>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}
</script>
<br>
<div class="row home-panel-container" style="padding: 0 1rem;">
    <div class="home-panel col-sm-4">
      <h2><i class="fa fa-user" style="color: green;" aria-hidden="true"></i> 科技服务</h2>
      <hr style="margin: 0.5em 0.5em; border: 1px solid green;">
      <div style="float: right;"><a href="/science/">more</a></div>
      <div><a href="/science/">全基因组重测序</a></div>
      <div style="float: right;"><a href="/science/exon_sequencing/">more</a></div>
      <div><a href="/science/exon_sequencing/">外显子组测序</a></div>
      <div style="float: right;"><a href="/science/target_sequencing/">more</a></div>
      <div><a href="/science/target_sequencing/">靶向测序</a></div>
      <div style="float: right;"><a href="/science/methy_sequencing">more</a></div>
      <div><a href="/science/methy_sequencing">全基因组甲基化测序</a></div>
    </div>
    <div class="home-panel col-sm-4">
      <h2><i class="fa fa-graduation-cap" style="color: green;" aria-hidden="true"></i> 建库技术</h2>
      <hr style="margin: 0.5em 0.5em; border: 1px solid green;">
      <div style="float: right;"><a href="/science/ChIP_sequencing">more</a></div>
      <div><a href="/science/ChIP_sequencing">ChIP测序</a></div>
      <div style="float: right;"><a href="/science/RIP_sequencing/">more</a></div>
      <div><a href="/science/RIP_sequencing/">RIP测序</a></div>
      <div style="float: right;"><a href="/library_build/">more</a></div>
      <div><a href="/library_build/">RNA专利建库技术</a></div>
      <div style="float: right;"><a href="/library_build/DNA_target/">more</a></div>
      <div><a href="/library_build/DNA_target/">DNA靶向建库技术</a></div>
    </div>
    <div class="home-panel col-sm-4">
      <h2><i class="fa fa-file-text" style="color: green;" aria-hidden="true"></i> 资讯中心</h2>
      <hr style="margin: 0.5em 0.5em; border: 1px solid green;">
      <div style="float: right;"><a href="/company/2017/03/15/BS-seq-success.html">more</a></div>
      <div><a href="/company/2017/03/15/BS-seq-success.html">ctDNA甲基化测序技术研发完成</a></div>
      <div style="float: right;"><a href="/company/2016/11/15/SSMP-success.html">more</a></div>
      <div><a href="/company/2016/11/15/SSMP-success.html">SSMP技术研发成功</a></div>
      <div style="float: right;"><a href="/company/2016/07/26/aguriculture.html">more</a></div>
      <div><a href="/company/2016/07/26/aguriculture.html">农业部领导莅临康测调研指导</a></div>
      <div style="float: right;"><a href="/company/2016/07/15/AMP-tech-success.html">more</a></div>
      <div><a href="/company/2016/07/15/AMP-tech-success.html">AMP技术研发成功</a></div>
    </div>
</div>
