<template>
  <div class="case">
    <div class="header">
      <span><i class="iconfont icon-xiangzuo1"></i>返回</span>
      <h2>家测职业圈</h2>
      <span><i></i><i></i><i></i></span>
    </div>
    <div class="main">
      <div class="mySetting">
        <div class="msTop">
          <i class="iconfont icon-tixing">提醒</i>
          <dl>
            <dt><i class="iconfont icon-gerenzhongxin2"></i></dt>
            <dd>查看个人详情</dd>
          </dl>
        </div>
        <div class="msList">
          <ul>
            <li><i class="iconfont icon-boshi">培训记录</i><i class="iconfont icon-more"></i></li>
            <li><i class="iconfont icon-zhengshu">我的证书</i><i class="iconfont icon-more"></i></li>
            <li><i class="iconfont icon-hongbao">邀请红包</i><span>2.90元</span><i class="iconfont icon-more"></i></li>
            <li><i class="iconfont icon-xiaoxi1">消息中心</i><i class="iconfont icon-more"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <My-footer></My-footer>
  </div>
</template>

<script>
import MyFooter from "@/components/common/MyFooter"
export default {
  name: 'mobile',
  data(){
    return {
    }
  },
  methods:{
    choose(i){
      this.ischoose = i
      console.log(this.ischoose)
    },
    goSchool (){

    }
  },
  components:{
    MyFooter
  }
}
</script>

<style scoped>
.mySetting{}
.msTop{position: relative;padding: 16px 0 26px 0; background: #31c27cFF;}
.msTop > i{ font-size: 12px; color: #fff; position: absolute; right: 17.5px; top: 17.5px;}
.msTop dl dt{margin-bottom: 4px;}
.msTop dl dt i{font-size: 60px; color: #fff}
.msTop dl dd{font-size: 14px; color: #fff; cursor: pointer;}
.msList{}
.msList ul{}
.msList ul li{background: #fff;padding: 0px 15px 0px 20px; position: relative; margin-bottom: 12px; text-align: left; line-height: 49px;}
.msList ul li:first-child{border-bottom: 1px solid #EFEFF4FF; margin-bottom: 0px;}
.msList ul li i:last-child{float: right; font-size: 24px; color: #DBDBDBFF}
.msList ul li i:first-child:before{margin-right: 13px;}
.msList ul li span{color: #969699FF;position: absolute; top:1px; right: 40px; }
.icon-boshi:before{color: #FF9A2CFF}
.icon-zhengshu:before{ color: #FF9967FF}
.icon-hongbao:before{ color: #FF6E6EFF}
.icon-xiaoxi1:before{ color: #88D056FF} 
</style>
