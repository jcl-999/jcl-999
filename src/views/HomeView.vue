<template>
  <div class="home">
    <el-container>
      <el-header class="headerTop">
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content ep-bg-purple" />
            <img class="headerLogo"  src="../assets/logo.png" alt="">
          </el-col>
          <el-col :span="16"><div class="grid-content ep-bg-purple" />
            <h2 class="headerSize">后台管理系统</h2>
          </el-col>
          <el-col :span="4"><div class="grid-content ep-bg-purple" />
            <span class="headerSize">退出登录</span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo left-menu"
            default-active="2"
            text-color="#fff"
            router
          >
            <el-menu-item v-for="(item) in RouterLsit" :key="item.path" :index='item.path'>
              <span>{{item.meta.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRouter} from 'vue-router'
export default defineComponent({
  name: 'HomeView',
  setup(){
    const router = useRouter()
    const RouterLsit = router.getRoutes().filter(v=>v.meta.isShow)
    // const List = []
    // routerLsit.forEach((item)=>{
    //   if(item.meta.isShow){
    //     console.log(item,'符合要求的数据')
    //     List.push(item)
    //   }
    // })

    return {RouterLsit}
  },
  components: {
  },
});
</script>
<style lang="scss" scoped>
  .home{
    .headerTop{
      height: 80px;
      background: #666;
      .headerLogo{
        height: 80px;
      }
      .headerSize{
        text-align: center;
        height: 80px;
        line-height:80px;
        color: #fff;
      }
    }
    .left-menu{
      height: calc(100vh - 80px);
    }
  }
</style>
