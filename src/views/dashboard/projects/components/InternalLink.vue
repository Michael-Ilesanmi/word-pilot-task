<template>
    <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
        <h2 class="font-bold text-[#384D67]">Internal Link</h2>
        <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
                <label for="language">Insert Internal Link</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes','No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Number of Internal Link</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in [1,2,3,4,5]" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full col-span-2">
                <label for="post_links">Post Links</label> <br>
                <textarea class="w-full border" name="post_links" id="post_links" cols="30" rows="3" ></textarea>
            </div>
        </div>
    </div>  
</template>

<script setup>
</script>

<style>

</style>