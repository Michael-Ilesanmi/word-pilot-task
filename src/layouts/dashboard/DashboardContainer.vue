<template>
  <main class="grid-cols-[290px_1fr]">
    <SideNav />
    <div class="p-4 w-full min-h-full">
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
main {
  @apply grid place-items-start gap-0 bg-[#F2F1F9];
}
</style>