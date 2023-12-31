<template>
  <main>
    <nav id="sideNav">
      <SideNav />
    </nav>
    <div class="">
      <TopNav />
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import SideNav from "./components/DashboardSideNav.vue";
import TopNav from "./components/DashboardTopNav.vue";

</script>

<style lang="less" scoped>
@side-nav-width:290px;
@bg-color: #F2F1F9;

main {
  position: relative;
  height: 100vh;
  background-color: @bg-color;
  #sideNav {
    width: @side-nav-width;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  >div {
    width: calc(100% - @side-nav-width);
    @apply p-4 grow flex flex-col ml-auto h-full overflow-y-clip;
    >main{
      @apply mt-4 w-full grow overflow-y-clip;
    }
  }
}
</style>