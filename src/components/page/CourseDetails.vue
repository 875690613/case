<template>
  <div class="case">
    <div class="header">
      <span><i class="iconfont icon-xiangzuo1"></i>返回</span>
      <h2>家测职业圈</h2>
      <span><i></i><i></i><i></i></span>
    </div>
    <div class="title">
      <span class="fl"><i class="iconfont icon-xiangzuo1"></i></span>
      <span>母婴护理员【上岗】</span>
      <span class="hb"><img src="../../assets/image/hb.png" alt=""><i>邀请红包</i></span>
    </div>
    <div class="banner">
      <img src="../../assets/image/banner.png" alt="">
    </div>

    <ul class="detailsNav">
      <li v-for="(navList,index) in detailsNav" :key="index" @click="tabs(index)" :class="{active:index == num}">{{navList}}</li>
    </ul>
    <div class="main">
      <!-- 在线视频 -->
      <div class="details" v-show="num == 0">
        <div class="detailsList" v-for="(item,index) in detailsList" :key="index">
          <h2 class="bgTitle" @click="open(index)">{{item.detailsTitle}}</h2>
          <ul v-show="item.subShow">
            <li v-for="(subitem,subindex) in item.titleList" :key="subindex"><a href="">{{index +1}}-{{subindex +1}}、{{subitem.smalltitle}}<span v-if="index==0 && subindex < 2">试看</span><span v-else class="iconfont icon-bofang"></span></a></li>
          </ul>
        </div>
        <div class="button">
      <a href="###" class="btn button brd3 brd1 cgreen">邀请好友赢红包</a>
      <a href="###" class="btn button brd3 bggreen">购买：￥59/永久</a>
    </div>
      </div>
      <!-- 答题练习 -->
      <div class="details" v-show="num == 1">
        <ul class="practice brd6">
          <li>
            <h2>小练习 <span>进入<span class="iconfont icon-more"></span></span></h2>
            <span>随时开启，灵活练习，答疑解惑</span>
          </li>
          <li>
            <h2>模拟考试 <span>进入<span class="iconfont icon-more"></span></span></h2>
            <span>判断题：0.5分/题，60题</span>
            <span>单选题：1.0分/题，70题</span>
          </li>
        </ul>
      </div>
      <!-- 学习记录 -->
      <div class="details" v-show="num == 2">
        <div class="LearningRecord">
          <h2 class="bgTitle">
            <span>时间</span>
            <span>分数</span>
            <span>用时</span>
          </h2>
          <ul>
            <li v-for="(item,index) in learningRecord" :key="index">
              <span>{{item.lrTime}}<em>{{item.timec}}</em></span>
              <span>{{item.score}}</span>
              <span>{{item.useTime}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="warning" v-show="ok"><span>{{msgwarning}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'mobile',
  data(){
    return {
      msgwarning: "",
      ok:false,
      isOpen: false,
      detailsNav: ["操作视频","答题练习","学习记录"],
      detailsList:[
        {
          detailsTitle: "第一考区：孕产妇护理",
          subShow: true,
          titleList:[
            {
              smalltitle: "孕妇体操指导",
            },
            {
              smalltitle: "陪伴分娩时的呼吸指导",
            },
            {
              smalltitle: "指导挤奶",
            },
            {
              smalltitle: "哺乳期的准备",
            },
            {
              smalltitle: "乳房正常情况的按摩",
            }
          ]
        },
        {
          detailsTitle: "第二考区：孕产妇护理",
          subShow: false,
          titleList:[
            {
              smalltitle: "孕妇体操指导",
            },
            {
              smalltitle: "陪伴分娩时的呼吸指导",
            },
            {
              smalltitle: "指导挤奶",
            },
            {
              smalltitle: "哺乳期的准备",
            },
            {
              smalltitle: "乳房正常情况的按摩",
            }
          ]
        },
        {
          detailsTitle: "第三考区：孕产妇护理",
          subShow: false,
          titleList:[
            {
              smalltitle: "孕妇体操指导",
            },
            {
              smalltitle: "陪伴分娩时的呼吸指导",
            },
            {
              smalltitle: "指导挤奶",
            },
            {
              smalltitle: "哺乳期的准备",
            },
            {
              smalltitle: "乳房正常情况的按摩",
            }
          ]
        }
      ],
      conents: [],
      num: 0,
      learningRecord:[
        {
          lrTime:"2017-05-03",
          score:"92",
          useTime:"49分10秒"
        },
        {
          lrTime:"2017-06-03",
          score:"92",
          useTime:"33分10秒"
        }
      ],
      timec:1543423453
    }
  },
  methods:{
    tabs(index){
      this.num = index
    },
    open(i){
      let isShow = this.detailsList[i].subShow
      if(isShow){
        this.detailsList[i].subShow = false
        console.log('close')
      }else{
        this.detailsList[i].subShow = true
        console.log('open')
      }
    },
    timetrans(date){
        var date = new Date(date*1000);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
       /*  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds()); */
        return Y+M+D/* +h+m+s */;
    },
    timetrans1(date){
        var date = new Date(date*1000);//如果date为13位不需要乘1000
        /* var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '; */
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return h+m+s;
    },

    // 提示语弹框
    warningNone(){
      setTimeout(()=>{
        this.ok =false;
      },1000);
      
    },
   
  },
  created(){
    this.timetrans(1543423453)
    console.log(this.timetrans(1543423453))
    console.log(this.timetrans1(1543423453))
    this.learningRecord.lrTime = this.timetrans(1543423453)
    this.timec = this.timetrans1(1543423453)
  }
  
}
</script>

<style scoped>
.case{ width: 100%; height: 100%; margin: 0 auto; background: #efeff4; max-width: 750px; }
.header{ width: 100%; background: #333437; color: #f2f2f2; padding: 0 12.5px; }
.header span{ float: left; display: inline-block; vertical-align: middle; line-height: 47px; font-size: 16px; }
.header span:first-child i{ font-size: 16px; }
.header span:last-child{ float: right; }
.header span:last-child i{ display: inline-block; background: #f2f2f2; width: 5px; height: 5px; border-radius: 50%; margin: 0 3px; }
.header h2{ font-size: 18px; line-height: 47px; display: inline-block; }
.title{ height: 44px;; line-height: 44px; padding: 0 12.5px; text-align: center; color: #333; font-size: 16px; background: #ffffff; overflow: hidden; }
.title i{ display:block; font-size: 16px; float: left; cursor: pointer; }
.fl { float: left; display: block; }
ul{ background: #fff; padding: 0 12.5px; overflow: hidden; }
ul li{ border-bottom: 1px solid #f2f2f2;text-align: left; font-size: 16px; overflow: hidden; line-height: 36px; }

.button a{margin: 0 7.5px; margin-top: 10px; max-width: 180px; color: #fff; width: 100%; line-height: 42px; font-size: 16px; display: inline-block}
.warning span{ /* width: 130px; */ padding: 0 15px; line-height: 34px; text-align: center; color: #fff; background: #606062; font-size: 14px; display: inline-block; border-radius: 35px; }
.warning{ margin-top: 50px; text-align: center; }
.active{color:#45c889!important }
/* 主体 start */
.title .hb{ float: right; } 
.title .hb i{font-size: 10px; margin-top: 6px; color: #646466; float: right; font-family: STXihei; line-height: 16px; width: 24px;} 
.title .hb img{width: 32px; }
.banner img{width: 100%;max-width: 750px;}
.detailsNav{overflow: hidden; background: #FFFFFF;}
.detailsNav li{cursor: pointer; line-height: 44px; color: #646466; font-size: 16px; width: 33.333%; float: left; text-align: center}
.detailsNav li:hover,.detailsNav li.acrive{color: #31C27C;}
.main{overflow: hidden;}
.main .details h2.bgTitle{line-height: 42px; color: #333333; font-size: 15px; padding: 0 15px; font-weight: bold; text-align: left; background: #F0F0F5;}
.main .details ul{overflow: hidden; }
.main .details ul li{line-height: 42px;}
.main .details ul li a {color: #646466; font-size: 14px; width: 100%; display: inline-block;}
.main .details ul li a span{float: right; color: #969699; font-size: 12px;}
.main .details ul li a span.iconfont{ font-size: 20px;}
/* 答题练习 */
.practice{overflow: hidden;background: none;}
.practice li{border-bottom: none;line-height: 1!important; margin-bottom: 15px;margin: 15px 10px 0 10px;padding: 25px 15px 23px 20px;  background: #fff; border-radius: 6px;}
.practice li h2{font-size: 16px;color: #323233;line-height: 1;margin-bottom: 15px;}
.practice li h2 span{float: right; cursor: pointer;}
.practice li span{font-size: 12px;color: #969699;display: block;margin-bottom: 10px;}
/* 学习记录 */
.LearningRecord{}
.LearningRecord h2 span{font-size: 14px; color: #969699; width: 20%; text-align: center; display: inline-block;}
.LearningRecord h2 span:nth-child(1){width: 45%;}
.LearningRecord h2 span:nth-child(2){width: 30%;}
.LearningRecord h2 span:nth-child(3){width: 21%;}
.LearningRecord li span{ border-bottom: 1px solid #f2f2f2;text-align: center; display: inline-block;font-size: 14px; color: #646466;}
.LearningRecord li span em{font-size: 12px; color: #C8C8CC; margin-left: 5px}
.LearningRecord li span:nth-child(1){width: 45%;font-size: 12px;}
.LearningRecord li span:nth-child(2){width: 30%;}
.LearningRecord li span:nth-child(3){width: 21%;}
</style>
