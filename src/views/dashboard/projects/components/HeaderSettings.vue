<template>
    <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
    <h2 >Header Settings</h2>
    <fieldset>
        <div>
            <div>
            <label for="keyword">
                Main Keyword<span>*</span>
            </label>
            <span>{{keyword.length}}/{{keywordLength}}</span>
            </div>
            <input type="text" v-model="keyword" id="keyword" name="keyword" />
        </div>
        <button>Regenerate Title</button>
    </fieldset>
    <fieldset>
        <div>
            <div>
            <label for="title">
                Title<span>*</span>
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

<style lang="less" scoped>
fieldset{
    @apply w-full flex items-end justify-between space-x-4;
    >div{
        @apply space-y-2 w-4/5;
        >div{
            @apply text-[#525252] text-sm flex justify-between;
            label>span {
                @apply text-red-500;
            }
        }
    }
    button{
        @apply bg-primary-blue border border-primary-blue hover:bg-secondary-blue transition-colors ease-linear duration-500 text-sm rounded text-white font-bold py-2 grow;
    }
}
</style>