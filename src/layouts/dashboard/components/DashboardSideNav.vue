<template>
  <aside class="min-h-screen bg-[#2B2A3F] px-6 pt-16 w-full">
    <img src="@/assets/img/logo/logo-light.svg" alt="Word Pilot Logo">
    <nav class="border-t border-[#FFFFFF0F] pt-8 mt-8">
      <ul class="text-white space-y-2">
        <li v-for="(item, index) in navItems" :key="index" :class="$route.name == item.routeName ? 'bg-primary-blue hover:bg-secondary-blue text-white rounded font-bold' : 'font-medium text-text-secondary'">
          <span class="iconify" :data-icon="item.icon"></span>
          {{
            item.title
          }}
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const navItems = [
  {
    title: 'Dashboard',
    icon: 'ri:dashboard-fill',
    routeName: 'DashboardIndex',
  },
  {
    title: 'Projects',
    icon: 'tdesign:folder-setting',
    routeName: 'ProjectsPage',
  },
  {
    title: 'Scheduler',
    icon: 'ri:calendar-schedule-fill',
    routeName: 'SchedulerPage',
  },
  {
    title: 'Content Wizard',
    icon: 'ri:magic-fill',
    routeName: 'ContentWizard',
  },
  {
    title: 'Documents',
    icon: 'jam:document-f',
    routeName: 'DocumentsPage',
  },
  {
    title: 'Logout',
    icon: 'ri:logout-circle-fill',
    routeName: 'Logout',
  },
];
</script>

<style lang="less" scoped>
li {
  @apply w-full p-3 font-primary transition-colors ease-linear duration-500 cursor-pointer;
  .iconify {
    @apply text-2xl mr-2;
  }
}
</style>