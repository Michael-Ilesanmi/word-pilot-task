<template>
    <div class="space-y-4">
        <div class="flex items-center justify-between space-x-4">
            <div>
                <h2 class="font-bold text-[#384D67]">Keywords to include in the text</h2>
                <p class="text-xs">If you do not provide the keywords, we will automatically generate relevant keywords from the main keyword for each section and use them to generate the article.</p>
            </div>
            <button class="bg-primary-blue border border-primary-blue hover:bg-secondary-blue transition-colors ease-linear duration-500 text-sm rounded text-white font-bold py-2 whitespace-nowrap px-4">NLP Keyword Generator</button>
        </div>
        <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
            <div class="flex flex-row flex-wrap gap-4">
                <button v-for="item in keywords" :key="item" class="w-fit text-xs text-[#718399] rounded p-1 bg-[#D3E7FF]">
                    {{ item }}
                    <button @click="removeKeyWord(item)">
                        <span class="iconify ml-3" data-icon="ph:x-thin"></span>
                    </button>
                </button>        
            </div>
            <p>Write some keyword or phrase relevant to your blog, then press Enter or + to add.</p>
        </div>  
    </div>
</template>

<script setup>
import { ref } from "vue";

const keywords = ref([
    'what do dermatologist prescribe for skin whitening?',
    'dermatologist prescribe',
    'skin whitening treatment',
    'dermatologist recommended skin whitening products',
    'skin lightening creams prescribed by dermatologists',
    'prescription medications for skin whitening',
    'professional skin whitening treatments',
    'dermatologist approved skin lightening treatments',
    'topical skin whitening prescriptions'
]);

const removeKeyWord = (index) => {
    return keywords.value.splice(index, 1);
}
</script>

<style>
</style>