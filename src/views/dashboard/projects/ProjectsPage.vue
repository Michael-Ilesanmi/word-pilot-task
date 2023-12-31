<template>
  <main>
    <nav>
      <button>
        <span class="iconify" data-icon="bi:arrow-left"></span>
      </button>
      <h1>Write</h1>
    </nav>
    <div>
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
@nav-height:80px;
@select-bg-img:'https://api.iconify.design/fe/arrow-down.svg?color=%2377aef4';
.customized-scrollbar{
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    padding-right: 12px;
    background-color: #ffffff99; 
  }
  &::-webkit-scrollbar-thumb {
      background: #CFE4FF;
  }  
}
main {
  @apply font-primary;
  nav{
    @apply h-[@nav-height] flex items-center space-x-4;
    button {
      @apply bg-primary-blue px-4 py-2 rounded text-white flex items-center justify-center;
    }
    h1 {
      @apply font-bold font-primary text-[#384D67] text-2xl;
    }
  }
  >div {
    .customized-scrollbar();
    height: calc(100% - @nav-height);
    @apply space-y-8 pb-12 overflow-y-auto pr-4 mt-4;
    &:deep(input), &:deep(textarea) {
      @apply border border-[#CBCBCB] text-black bg-white rounded p-2 text-sm w-full;
    }
    &:deep(select){
      @apply border border-[#CBCBCB] rounded bg-white bg-[url(@select-bg-img)] bg-no-repeat appearance-none min-w-full text-sm text-[#505050] p-2 pr-8;
        background-position: calc(100% - 0.75rem) center !important;
      option {
        @apply bg-[#D3E7FF] text-black;
      }
    }
    &:deep(h2){
      @apply text-[#384D67] font-bold mb-6;
    }

  }
}
</style>