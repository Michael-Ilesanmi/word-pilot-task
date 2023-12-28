<template>
    <div class="card w-full bg-white rounded p-8 shadow-[#7090B01F] space-y-4">
        <h2 class="font-bold text-[#384D67]">Publish to Wordpress</h2>
        <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
                <label for="language">Publication</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes','No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 col-span-2 grow w-full ">
              <h3>Important</h3>
              <p class="text-sm">
                If you enable this option, all generated documents will be published on the selected site. Be careful with the settings and publication date.
              </p>
            </div>
        </div>
    </div>  
</template>

<script setup>
</script>

<style>

</style>