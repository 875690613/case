<template>
  <div class="case">
    <div class="header">
      <span><i class="iconfont icon-xiangzuo1"></i>返回</span>
      <h2>家测职业圈</h2>
      <span><i></i><i></i><i></i></span>
    </div>
    <div class="main">
      <!-- 职位列表 -->
      <div class="positionList bgfff">
        <dl>
          <dt><span class="iconfont icon-yuesao01"></span></dt>
          <dd>月嫂</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-yinger"></span></dt>
          <dd>育儿嫂</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-baomu"></span></dt>
          <dd>保姆</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-saoba"></span></dt>
          <dd>钟点工</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-yishenghushiAvatar"></span></dt>
          <dd>医院护工</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-duanqihuli"></span></dt>
          <dd>老人陪护</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-guanjia"></span></dt>
          <dd>家庭管家</dd>
        </dl>
        <dl>
          <dt><span class="iconfont icon-jingqingqidai"></span></dt>
          <dd>敬请期待</dd>
        </dl>
      </div>
      <div class="choose">
        <ul class="bgfff clearfix">
          <li>工种
            <select name="" id="">
            <option value=""></option>
            </select>
          </li>
          <li>薪资
            <select name="" id="">
            <option value=""></option>
            </select>
          </li>
          <li>区域
            <select name="" id="">
            <option value=""></option>
            </select>
          </li>
          <li>更多
            <select name="" id="">
            <option value=""></option>
            </select>
          </li>
        </ul>
      </div>
      <!-- 职位详情列表 -->
      <div class="positionDetail bgfff">
        <div class="pdTop clearfix">
          <h2>月嫂<span>12999元/26天</span></h2>
          <div><span class="iconfont icon-nianling">29-39岁</span><span class="iconfont icon-dizhi">上海市-徐汇区</span></div>
          <p>辅食、早教、年纪小于50岁，会普通话，性格开朗，喜欢小孩，育儿经验5年以上</p>
        </div>
        <div class="pdbottom"><span>天天家政</span><a href="" class="btn brd3 bggreen iconfont icon-dianhua1">王老师</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
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
.positionDetail .pdbottom span{ line-height: 42px; color: #999999; }
.positionDetail .pdbottom .btn{font-size: 15px; line-height: 28px; color: #fff; max-width: 80px; float: right;margin-top: 8px; }
.icon-dianhua1:before {margin-right: 5px; }

.btn-bottom{margin-top: 49px;}
.btn-bottom a{width: 50%; max-width: 160px; margin: 0 7.5px}
</style>
