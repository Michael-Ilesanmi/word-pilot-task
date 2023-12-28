<template>
    <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
    <h2 class="font-bold text-[#384D67]">Header Settings</h2>
    <fieldset class="w-full flex items-end justify-between space-x-4">
        <div class="space-y-2 w-4/5">
            <div class="text-[#525252] text-sm flex justify-between">
            <label for="keyword">
                Main Keyword<span class="text-red-500">*</span>
            </label>
            <span>{{keyword.length}}/{{keywordLength}}</span>
            </div>
            <input type="text" v-model="keyword" id="keyword" name="keyword" />
        </div>
        <button class="bg-primary-blue border border-primary-blue hover:bg-secondary-blue transition-colors ease-linear duration-500 text-sm rounded text-white font-bold py-2 grow">Regenerate Title</button>
    </fieldset>
    <fieldset class="w-full flex items-end justify-between space-x-4">
        <div class="space-y-2 w-4/5">
            <div class="text-[#525252] text-sm flex justify-between">
            <label for="title">
                Title<span class="text-red-500">*</span>
            </label>
            <span>{{title.length}}/{{ titleLength }}</span>
            </div>
            <input type="text" v-model="title" id="title" name="title" />
        </div>
    </fieldset>
    </div>  
</template>

<script setup>
import { ref } from "vue";


const keyword = ref('What do dermatologist prescribe for skin whitening?');
const title = ref('What do dermatologist prescribe for skin whitening? Discover Now!');

const keywordLength = ref(80)
const titleLength = ref(100)
</script>

<style>

</style>