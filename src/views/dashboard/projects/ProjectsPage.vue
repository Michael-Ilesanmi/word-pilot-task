<template>
  <main class="font-primary">
    <nav class="flex items-center space-x-4">
      <button class="bg-primary-blue px-4 py-2 rounded text-white flex items-center justify-center">
        <span class="iconify" data-icon="bi:arrow-left"></span>
      </button>
      <h1 class="font-bold font-primary text-[#384D67] text-2xl">Write</h1>
    </nav>
    <div class="space-y-8 h-[calc(100vh-80px)] pb-32 overflow-y-auto customized-scrollbar pr-4 mt-4">
      <HeaderSettings />
      <CoreSettings />
      <MediaHub />
      <SEO />
      <Keywords />
      <Structure />
      <ConnectWeb />
      <InternalLink />
      <Document />
      <PublishWordpress />
      <LanguageModel />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import HeaderSettings from "./components/HeaderSettings.vue"
import CoreSettings from "./components/CoreSettings.vue"
import MediaHub from "./components/MediaHub.vue"
import SEO from "./components/SEO.vue"
import Keywords from "./components/Keywords.vue"
import Structure from "./components/Structure.vue"
import ConnectWeb from "./components/ConnectWeb.vue"
import InternalLink from "./components/InternalLink.vue"
import Document from "./components/Document.vue"
import PublishWordpress from "./components/PublishWordpress.vue"
import LanguageModel from "./components/LanguageModel.vue"


</script>

<style lang="less" scoped>

main /deep/ input, main /deep/ textarea {
  @apply border border-[#CBCBCB] text-black bg-white rounded p-2 text-sm w-full;
}

main /deep/ select{
  @apply border border-[#CBCBCB] rounded bg-white min-w-full text-sm text-[#505050] p-2;
  background-image: url('https://api.iconify.design/fe/arrow-down.svg?color=%2377aef4');
  background-repeat: no-repeat;
  background-position: calc(100% - 0.75rem) center !important;
  -moz-appearance:none !important;
  -webkit-appearance: none !important; 
  appearance: none !important;
  padding-right: 2rem !important;
}

main /deep/ select option{
  @apply bg-[#D3E7FF] text-black;
}
</style>