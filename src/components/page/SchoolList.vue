<template>
  <div class="case">

    <div class="banner">
      <img src="../../assets/image/schoolListBanner.png" alt="">
    </div>
    <div class="main">
      <div class="choose">
        <ul class="bgfff clearfix">
          <li>全部课程
            <select name="" id="">
            <option value=""></option>
            </select>
          </li>
          <li>全部区域
            <select name="" id="">
            <option value=""></option>
            </select>
          </li>
        </ul>
      </div>
      <!-- 职位详情列表 -->
      <div>
      <div class="positionDetail bgfff">
        <!-- <div v-for="(item,index) in positions" :key="index"> -->

        
          <div class="pdTop clearfix" to="/SchoolDetails">
            <dl>
              <dt><img src="../../assets/image/school01.png"></dt>
              <dd>
                <h2>家测商学院总部</h2>
                <div><span class="iconfont icon-wodedangxuan"></span>严老师</div>
                <div><span class="iconfont icon-dianhua1"></span>021-43444443</div>
                <div><span class="iconfont icon-dizhi"></span>上海徐汇区南丹东路300号亚都商务楼1201室</div>
              </dd>
            </dl>
          </div>
          <div class="pdbottom"><span>母婴护理、育婴师、家政服务员、保姆</span><a href="" class="cgreen">更多课程<i class=" iconfont icon-jinru2"></i></a></div>
        </div>

        <div class="positionDetail bgfff">
        <!-- <div v-for="(item,index) in positions" :key="index"> -->

        
          <div class="pdTop clearfix">
            <dl>
              <dt><img src="../../assets/image/school02.png"></dt>
              <dd>
                <h2>家测商学院总部</h2>
                <div><span class="iconfont icon-wodedangxuan"></span>严老师</div>
                <div><span class="iconfont icon-dianhua1"></span>021-43444443</div>
                <div><span class="iconfont icon-dizhi"></span>上海徐汇区南丹东路300号亚都商务楼1201室</div>
              </dd>
            </dl>
          </div>
          <div class="pdbottom"><span>母婴护理、育婴师、家政服务员、保姆</span><a href="" class="cgreen">更多课程<i class=" iconfont icon-jinru2"></i></a></div>
        </div>
      </div>
    </div>
  <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "@/components/common/MyFooter"
// import Positions from '@/data/positions'

export default {
  name: 'mobile',
  data(){
    return {
    }
  },
  components:{
    myFooter
  }

}
</script>

<style scoped>
.main{margin-bottom: 80px;}
.choose{margin-top: 12.5px; margin-bottom: 12px;}
/* .choose ul{overflow: hidden;} */
.choose ul li{width: 50%; float: left; line-height: 44px; color: #333; font-size: 15px;}
/* 职位详情列表 */
.positionDetail{margin: 0 12px;margin-bottom: 12px;text-align: left; overflow: hidden;box-shadow: 0px 5px 10px #ddd;}
.positionDetail .pdTop{padding: 20px 12px 10px 12px;}
.positionDetail .pdTop dl{overflow: hidden;}
.positionDetail .pdTop dl dt{margin-right: 2%; float: left; width: 28%}
.positionDetail .pdTop dl dt img{max-width: 75px; width: 100%}

.positionDetail .pdTop dl dd{float: left;width: 70%}
.positionDetail .pdTop dl dd h2{text-align: left;font-size: 16px;color: #323232;margin-bottom: 10px;}
.positionDetail .pdTop div{font-size: 12px; color: #646466;}
.positionDetail .pdTop div span{margin-right: 7px;}
.positionDetail .pdTop p{font-size: 14px; color: #323233; line-height: 22px; margin-top: 14px;}
.positionDetail .pdbottom {background: #efeff4; padding: 0 12px;}
.positionDetail .pdbottom span{ line-height: 42px; color: #999999; }
.positionDetail .pdbottom a{font-size: 15px; line-height: 28px; color: #fff; max-width: 80px; float: right;margin-top: 8px; }
.positionDetail .pdbottom i{font-size: 15px; line-height: 28px; margin-top: 8px; }
.icon-dianhua1:before {margin-right: 5px; }

.btn-bottom{margin-top: 49px;}
.btn-bottom a{width: 50%; max-width: 160px; margin: 0 7.5px}
</style>
