<template>
  <div class="case">
    <div class="header">
      <span @click="$router.back(-1)"><i class="iconfont icon-xiangzuo1"></i>返回</span>
      <h2>家测职业圈</h2>
      <span><i></i><i></i><i></i></span>
    </div>
    <div class="title">
      <span class="fl"  @click="$router.back(-1)"><i class="iconfont icon-xiangzuo1"></i></span>
      <span>职位详情({{$route.query.id}})</span>
      <span class="hb cgreen"><i class="icon-skip iconfont">分享职位</i></span>
    </div>
    <div class="main">
      <div class="pdType bggreen">
        <div class="ptTop">正在寻找 <span>{{thisPosition.position}}</span> </div>
        <ul>
          <li>
            <p>20分钟前</p>
            <span>发布时间</span>
          </li>
          <li>
            <p>{{thisPosition.salary}}元/月</p>
            <span>价格预算</span>
          </li>
          <li>
            <p>{{thisPosition.age}}</p>
            <span>年龄要求</span>
          </li>
        </ul>
      </div>
      <div class="detail">
        <h2>需求详情</h2>
        <div><span>服务区域</span><span>{{thisPosition.address}}</span></div>
        <div><span>服务时间</span><span>{{thisPosition.salary}}</span></div>
        <div><span>技能要求</span><span>{{thisPosition.salary}}</span></div>
      </div>
      <div class="detail">
        <h2>职位要求</h2>
        <p>{{thisPosition.intro}}</p>
      </div>
     
    </div>
    <div class="pdbottom"><span>{{thisPosition.company}}</span><a href="" class="btn brd3 bggreen iconfont icon-dianhua1">{{thisPosition.people}}</a></div>

  </div>
</template>

<script>
import Positions from '@/data/positions'

export default {
  name: 'mobile',
  data(){
    return {
      
    }
  },
  methods:{
   
  },
  created(){
    console.log(this.$route)
   this.id = this.$route.query.id
  //  console.log(Positions.length)
    // 第二种
    for(let i = 0; i<Positions.length; i++){
      if(Positions[i].id == this.id){
        this.thisPosition = Positions[i]
        // console.log(this.thisPosition)
      }
    }

  // 第一种
  /*  console.log(info)
   let thisPos = Positions.filter((item) => {
     return item.id == this.id
   })
   console.log(thisPos)
   this.thisPosition = thisPos[0] */
  }
  
}
</script>

<style scoped>
/* 主体 start */
.title .hb i{font-size: 10px; margin-top: 6px; float: right; font-family: STXihei; line-height: 16px;} 
.icon-skip:before{display: block}
.main{overflow: hidden; margin-bottom: 50px}
.pdType{padding-top: 30px; padding-bottom: 10px; margin-bottom: 12px;}
.pdType .ptTop{padding-left: 15px; text-align: left; margin-bottom: 30px; color: #fff; font-size: 15px;}
.pdType .ptTop span{font-size: 17px; margin-left: 10px;}
ul{overflow: hidden;}
ul li{float: left; width: 33.333%; color: #fff;}
.detail{padding: 0 15px 15px 15px; text-align: left; background: #fff; margin-bottom: 12px;}
.detail h2{color: #333333FF; font-size: 15px; border-bottom: 1px solid #EFEFF4FF; margin-bottom: 15px; line-height: 41px;}
.detail div{margin-bottom: 15px;}
.detail div span{color: #888888FF; font-size: 15px;}
.detail div span:last-child{color: #333333FF; margin-left: 15px;}
.detail p{color: #888888FF}
.pdbottom {background: #fff; padding: 0 12px; position: fixed; bottom: 0px;width: 100%;}
.pdbottom span{ line-height: 42px; color: #BCBCBCFF; float: left; }
.pdbottom .btn{font-size: 15px; line-height: 28px; color: #fff; max-width: 80px; float: right;margin-top: 8px; }
.icon-dianhua1:before {margin-right: 5px; }
</style>
