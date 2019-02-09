<template>
  <div class="case">
    <div class="header">
      <span><i class="iconfont icon-xiangzuo1"></i>返回</span>
      <h2>家测职业圈</h2>
      <span><i></i><i></i><i></i></span>
    </div>
    <div class="title">
      <span class="fl"><i class="iconfont icon-xiangzuo1"></i></span>
      <span>母婴护理员</span>
    </div>

    <div class="main">
      <div class="answerOver">
        <div class="overTitle">
          <span class="iconfont icon-gouxuan1"></span>
          <p>恭喜你完成答题！</p>
        </div>
        <div class="aoDetail">
          <div class="detTitle">
            <span></span>
            <span>成绩单</span>
            <span></span>
          </div>
          <ul>
            <li><span>答题科目</span>母婴护理【上岗】</li>
            <li><span>答题时长</span>27分02秒</li>
            <li><span>成绩</span><em>77.5分</em></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      <a href="###" class="btn button brd3 c969 bgfff">返回首页</a>
      <a href="###" class="btn button brd3 cfff bggreen">查看答题卡</a>
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style scoped>
.answerOver{ margin-top:13px; background: #fff; }
.answerOver .overTitle{color: #31C27C;font-size: 15px;padding: 41px 0 59px 0;}
.answerOver .overTitle span{font-size: 60px;margin-bottom: 24px;display: block;}
.answerOver .aoDetail{padding: 0 20px; text-align: left; overflow: hidden;}
.answerOver .aoDetail .detTitle{text-align: center;font-size: 18px;margin-bottom: 30px;}
.answerOver .aoDetail ul{padding: 0 12%; margin-bottom: 50px}
.answerOver .aoDetail ul li{font-size: 16px;margin-bottom: 20px;}
.answerOver .aoDetail ul li span{color: #646466; margin-right: 30px; width: 35%; text-align: right;display: inline-block;}
.answerOver .aoDetail ul li em{color: #FF605F;}

.btn-bottom{margin-top: 49px;}
.btn-bottom a{width: 50%; max-width: 160px; margin: 0 7.5px}
</style>
