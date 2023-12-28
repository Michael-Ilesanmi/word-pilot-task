<template>
    <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
        <h2 class="font-bold text-[#384D67]">Media Hub</h2>
        <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
                <label for="language">AI Images</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['None',1,2,3,4]" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Number of Images</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in [1,2,3,4]" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Image Style</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['None',1,2,3,4]" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Image Size</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in imageSizes" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
        </div>
        <div class="flex-row items-start text-sm">
            <input type="checkbox" name="mode" id="mode" class="!w-fit">
            <label for="mode">
            Include the main keyword in the first images as Alt-text. Relevant keywords will be picked up and added to the rest of the images. 
            </label>
        </div>
        <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
                <label for="language">YouTube Videos</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{ index }}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Number of Videos</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in [1,2,3,4]" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Layout Options</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in videoLayout" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
        </div>
        <div class="flex-row items-start text-sm">
            <input type="checkbox" name="mode" id="mode" class="!w-fit">
            <label for="mode">
            All media elements will be placed strictly under the heading. If disabled, the AI will decide and find the best replacement. 
            </label>
        </div>
    </div>  
</template>

<script setup>
const imageSizes = ['1344x768 (16:9)','1024x768 (16:9)',]
const videoLayout = ['Distribute evenly', 'Stretch', 'Aspect ratio']
</script>

<style>

</style>