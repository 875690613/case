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
    </div>
    <form action="">

    <ul>
      <li><div><span>手机号</span><input type="text" placeholder="请输入手机号" v-model="mobile" class="mobile"></div></li>
      <li><div><span>图形码</span><input type="text" placeholder="请输入右侧图形码" v-model="txyzm" class="txyzm"></div><input class="txyzmTxt" @click="txyzmTxt" v-model="txyzmtxt"></li>
      <li><div><span>验证码</span><input type="text" placeholder="请输入短信验证码" v-model="dxyzm" class="dxyzm"></div><input type="button" value="获取验证码" class="getyzm" @click="daojishi(5,this)"></li>
    </ul>
    <div>
      <div class="btn button bggreen" @click="checkMobile">开始</div>
    </div>
    </form>
    <p class="txt">点击开始，即表示已阅读并同意<span>《用户服务协议》</span></p>
    <div class="warning" v-show="ok"><span>{{msgwarning}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'mobile',
  data(){
    return {
      mobile: "",
      txyzm: "",
      txyzmtxt: "",
      dxyzm: "",
      getyzm: "获取验证码",
      msgwarning: "",
      ok:false

    }
  },
  methods:{
    checkMobile(){
      let bmreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/      
      if(this.mobile =="" || this.mobile == null){
        this.msgwarning = "请输入手机号";
        this.ok = true
        this.warningNone();
      }else if(!bmreg.test(this.mobile)){
        this.msgwarning = "请输入正确的手机号";
        this.ok = true;
        this.warningNone();
      }else if(this.txyzm == "" || this.txyzm == null){
        this.msgwarning = "请输入图形验证码"
        this.ok = true
        this.warningNone();
      }else if(this.txyzm != this.txyzmtxt){
        console.log(this.txyzm)
        this.msgwarning = "请输入正确的图像验证码"
        this.ok = true;
        this.warningNone();
      }else if(this.dxyzm == "" || this.dxyzm == null){
        this.msgwarning = "请输入短信验证码"
        this.ok = true
        this.warningNone();
      }else if(this.dxyzm != this.txyzmtxt){
        this.msgwarning = "短信验证码不正确"
        this.ok = true
        this.warningNone()
      }else{
        this.msgwarning = "提交成功"
        this.ok = true
        this.warningNone()
      }
    },
    // 提示语弹框
    warningNone(){
      setTimeout(()=>{
        this.ok =false;
      },1000);
      
    },
    // 随机数图形验证码
    txyzmTxt(){
      function rand(min,max) {
        return Math.floor(Math.random()*(max-min))+min;
      }
      let randnum = rand(1000,9999);
      this.txyzmtxt = randnum;
    },
    // 获取短信验证码倒计时
    daojishi(seconds,obj){
      if (seconds > 1){
        seconds--;
        console.log(seconds)
        $(".getyzm").val(seconds+"秒后重发 ").attr("disabled", true).addClass("btnd");//禁用按钮
        // 定时1秒调用一次
        setTimeout(() =>{
            this.daojishi(seconds,obj);
        },1000);
      }else{
          $(".getyzm").val("获取验证码").attr("disabled", false).removeClass("btnd");//启用按钮
      }
      
    }
  },
  created(){
    this.txyzmTxt()
  }
  
}
</script>

<style scoped>
.case{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #efeff4;
  max-width: 750px;
}
.header{
  width: 100%;
  background: #333437;
  color: #f2f2f2;
  padding: 0 12.5px;
}
.header span{
  float: left;
  display: inline-block;
  vertical-align: middle;
  line-height: 47px;
  font-size: 16px;
}
.header span:first-child i{
 font-size: 16px;
}
.header span:last-child{
  float: right;
}
.header span:last-child i{
  display: inline-block;
  background: #f2f2f2;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 3px;

}
.header h2{
  font-size: 18px;
  line-height: 47px;
  display: inline-block;
}
.title{
  line-height: 44px;
  padding: 0 12.5px;
  text-align: center;
  color: #333;
  font-size: 16px;
  background: #ffffff;
  overflow: hidden;
}
.title i{
  display:block;
  font-size: 16px;
  float: left;
  cursor: pointer;
}
.fl {
  float: left;
  display: block;
}
ul{
  background: #fff;
  margin-top: 12px;
  padding: 0 12.5px;
  overflow: hidden;
}
ul li{
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0px;
  text-align: left;
  font-size: 16px;
  overflow: hidden;
  line-height: 36px;
}

ul li>input{
  width: 30%;float: left;line-height: 36px;background: #f0f0f5;text-align: center;font-size: 15px;
  border-radius: 4px;cursor: pointer;
}
ul li div{
  width: 70%;float: left;
}
ul li div span{
  color: #646466;
  margin-right: 16px;
}
ul li div input:focus{
  outline: none
}
ul li div input{
  border: none;
  width: 69%;
}
ul li>.getyzm{background: #45c889; color: #fff;}
.btnd{
  background: #f0f0f5!important;
  color: #736565!important;
  cursor: no-drop;
}
.button{
  line-height: 42px;
  font-size: 16px;
  margin: 0 25px;
  margin-top: 50px;
  cursor: pointer;
  color: #fff;
}
.txt{
  margin-top: 15px;
  color: #969699;
}
.txt span{
  color: #45c889;
}
.warning span{
  /* width: 130px; */
  padding: 0 15px;
  line-height: 34px;
  text-align: center;
  color: #fff;
  background: #606062;
  font-size: 14px;
  display: inline-block;
  border-radius: 35px;
}
.warning{
  margin-top: 50px;
  text-align: center;
}
</style>
