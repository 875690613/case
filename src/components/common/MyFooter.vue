<template>
    <div class="bottom">
      <ul>
        <router-link to="/SmallClass" tag="li"><i class="iconfont icon-icon1"></i>微课堂</router-link>
        <router-link to="/Index" tag="li"><i class="iconfont icon-renwufangtanfuben4"></i>找工作</router-link>
        <router-link to="/SchoolList" tag="li"><i class="iconfont icon-yuanxiaoku"></i>院校</router-link>
        <router-link to="/MySetting" tag="li"><i class="iconfont icon-wodedangxuan"></i>我的</router-link>
      </ul>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
li.router-link-active {
  color: #45c889;
}
</style>
