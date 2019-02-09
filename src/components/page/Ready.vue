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
      <div class="ready">
        <span class="iconfont icon-dengpao-tianchong"></span>
        <p>模拟考试，必须在90分钟完成 答题并交卷，中途不得暂停。</p>
        <em>准备好了吗？加油咯！</em>
      </div>
    </div>
    <div class="btn-bottom">
      <a href="###" class="btn button brd3 cfff bggreen">开始答题</a>
      <a href="###" class="btn button brd3 brd1">返回上页</a>
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
      ok:false
  }
  }
}
</script>

<style scoped>
.ready{ margin-top: 75px; color: #323333;font-size: 16px; text-align: center; }
.ready span{ font-size: 40px;color: #f29317;margin-bottom: 53px; display: inline-block}
.ready p{ padding: 0 82.5px;line-height: 28px;margin-bottom: 35px;}
.ready em{font-size: 16px; color: #969699;margin-bottom: 65px; display: inline-block}
.btn-bottom{padding: 0 15px;}
.btn{line-height: 42px; display: inline-block;width: 100%;margin-bottom: 15px;}
.btn:last-child{color:#969699;border: 1px solid #C8C8CC;}
</style>
