<template>
  <div class="case">
    <div class="header">
      <span @click="$router.back(-1)"><i class="iconfont icon-xiangzuo1"></i>返回</span>
      <h2>家测职业圈</h2>
      <span><i></i><i></i><i></i></span>
    </div>
    <div class="main">
      <div class="title">
      <span class="fl"  @click="$router.back(-1)"><i class="iconfont icon-xiangzuo1"></i></span>
      <span>家策健康学院({{$route.query.id}})</span>
    </div>
    <div class="banner">
      <img src="../../assets/image/schoolDetailsBanner.png" alt="">
    </div>
      <div class="detail">
        <h2>学校简介</h2>
        <p>家庭健康服务领域的职业技能培训中心。联合各大家政公司、月子会所、养老机构等进行合作招生，集聚行业雄厚师资力量，应用互联网在线应用互联网在 </p>
      </div>
      <!-- 职位详情列表 -->
      <div>
      <div class="positionDetail bgfff">
        <!-- <div v-for="(item,index) in positions" :key="index"> -->

        
          <div class="pdTop clearfix">
            <h2>高级育婴师<span class="iconfont icon-zhanghuguanli cgreen">2300</span></h2>
            <div><span>适合工种：月嫂、育婴师</span></div>
            <p>家庭健康服务领域的职业技能培训中心。联合各大家政公司、月子会所、养老机构等进行合作招生</p>
          </div>
          <div class="pdbottom"><span>￥4880<em>优惠</em> <i>￥7000</i></span><a href="" class="btn brd3 bggreen">待审核</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Positions from '@/data/positions'

export default {
  name: 'mobile',
  data(){
    return {

    }
  }


}
</script>

<style scoped>
.main{margin-bottom: 80px;}
.positionList{overflow: hidden;padding: 5px 6.7% 5px 6.7%;}
.positionList dl{float: left; width: 25%;}
.positionList dl dt span{text-align: center;font-size: 42px; color: #FFB06A}
.positionList dl:nth-child(2) dt span{color: #FECB5D}
.positionList dl:nth-child(3) dt span{color: #FF868E}
.positionList dl:nth-child(4) dt span{color: #A2D25C}
.positionList dl:nth-child(5) dt span{color: #82C5F4}
.positionList dl:nth-child(6) dt span{color: #A7B2FF}
.positionList dl:nth-child(7) dt span{color: #50CFC7}
.positionList dl:nth-child(8) dt span{color: #C8C8CC}
.positionList dl dd{text-align: center;color: #646466; line-height: 25px; font-size: 12px;}

.choose{margin-top: 12.5px; margin-bottom: 12px;}
/* .choose ul{overflow: hidden;} */
.choose ul li{width: 25%; float: left; line-height: 44px; color: #333; font-size: 15px;}
/* 职位详情列表 */
.positionDetail{margin: 0 12px;margin-bottom: 12px;text-align: left; overflow: hidden;box-shadow: 0px 5px 10px #ddd;}
.positionDetail .pdTop{padding: 0 12px 10px 12px;}
.positionDetail .pdTop h2{text-align: left;font-size: 16px;color: #323232; margin-top: 15px; margin-bottom: 10px;}
.positionDetail .pdTop h2 span{float:right; font-size: 14px; color: #FF605F;}
.positionDetail .pdTop div{font-size: 12px; color: #646466;}
.positionDetail .pdTop div span{margin-right: 32px;}
.positionDetail .pdTop p{font-size: 14px; color: #323233; line-height: 22px; margin-top: 14px;}
.positionDetail .pdbottom {background: #efeff4; padding: 0 12px;}
.positionDetail .pdbottom span{ line-height: 42px; color: #FF605FFF; font-size: 18px;}
.positionDetail .pdbottom span em{display: inline-block; text-align: center;  width: 30px; background: #FF605F; line-height: 20px; color: #fff; font-size: 10px; margin-left: 15px; margin-right: 15px;}
.positionDetail .pdbottom span i{display: inline-block;color: #808080FF; font-size: 14px;font-style: normal;text-decoration: line-through; }
.positionDetail .pdbottom .btn{font-size: 15px; line-height: 28px; color: #fff; max-width: 80px; float: right;margin-top: 8px; }
.icon-dianhua1:before {margin-right: 5px; }

.btn-bottom{margin-top: 49px;}
.btn-bottom a{width: 50%; max-width: 160px; margin: 0 7.5px}


.detail{padding: 0 15px 15px 15px; text-align: left; background: #fff; margin-bottom: 12px;}
.detail h2{color: #333333FF; font-size: 15px; border-bottom: 1px solid #EFEFF4FF; margin-bottom: 15px; line-height: 41px;}
.detail div{margin-bottom: 15px;}
.detail div span{color: #888888FF; font-size: 15px;}
.detail div span:last-child{color: #333333FF; margin-left: 15px;}
.detail p{color: #888888FF}
</style>
