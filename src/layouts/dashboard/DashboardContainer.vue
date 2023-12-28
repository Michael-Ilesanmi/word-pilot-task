<template>
  <main class="grid-cols-[290px_1fr] h-screen min-h-screen overflow-hidden">
    <SideNav />
    <div class="p-4 w-full max-h-full grid grid-rows-[80px_calc(100vh-110px)] overflow-y-clip">
      <TopNav />
      <RouterView class="mt-4 max-h-full overflow-y-clip" />
    </div>
  </main>
</template>

<script setup>
import SideNav from "./components/DashboardSideNav.vue";
import TopNav from "./components/DashboardTopNav.vue";

</script>

<style lang="less" scoped>
main {
  @apply grid place-items-start gap-0 bg-[#F2F1F9];
}
</style>