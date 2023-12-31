<template>
    <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
        <h2 class="font-bold text-[#384D67]">SEO</h2>
        <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
                <label for="language">SEO Score</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['0-20','21-50', '51-70']" :key="index">
                    {{index}}%
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Keyword Density</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in [10,20,30,40]" :key="index">
                    {{index}} times
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Tags</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['None',1,2,3,4]" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
        </div>
        <div class="flex-row items-start text-sm">
            <input type="checkbox" name="mode" id="mode" class="!w-fit">
            <label for="mode">
            Use the main keyword to write and insert a a meta description in the post. Also relevant keywords will be picked up and added to the meta description. 
            </label>
        </div>
    </div>  
</template>

<script setup>
</script>

<style>

</style>