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
      <div class="problem">
        <div class="overTime">剩余时间：<span>89分钟20秒</span></div>
        <div class="pDetail">
          <h2 class="pTitle">1.【单选题】早产儿吸吮能力差，喂养要有耐心，吸 奶困难时可用（  ）喂，保证其奶的摄入。</h2>
          <ul>
            <li @click="choose(index)" v-for="(item,index) in answers" :key="index">
              <label>
                <span class="iconfont" :class="{'icon-danxuankuang': ischoose==index, 'icon-radio': ischoose!=index}"></span>
                {{item.answer}}
                </label>
                </li>
           <!--  <li><span class="iconfont icon-radio"></span>B. 75%酒精</li>
            <li><span class="iconfont icon-radio"></span>C. 制霉菌素甘油</li>
            <li><span class="iconfont icon-radio"></span>D.碘酒</li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      <a href="###" class="btn button brd3 cfff bggreen">下一题</a>
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
      ischoose: 0,
    //  answers:["A. 甘油","B. 75%酒精","C. 制霉菌素甘油","D.碘酒"]
    answers:[
      {
        answer:"A. 甘油"
      },
      {
        answer:"B. 75%酒精"
      },
      {
        answer:"C. 制霉菌素甘油"
      },
      {
        answer:"D.碘酒"
      }
    ]
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
.problem{ margin-top:13px; background: #fff; }
.problem .overTime{color: #333;font-size: 16px;padding: 30px 0px; border-bottom: 1px solid #E8E8ED}
.problem .overTime span{color: #FF605F;}
.problem .pDetail{padding: 0 20px; text-align: left}
.problem .pDetail h2{color: #646466; font-size: 16px; line-height: 22px; margin: 25px 0px;}
.problem .pDetail ul{overflow: hidden;}
.problem .pDetail ul li{ cursor: pointer; border-bottom: 1px solid #E8E8ED; line-height: 45px; color: #646466;font-size: 16px;}
.problem .pDetail ul li span{margin-right: 19px;}
.btn-bottom{margin-top: 49px;}
</style>
