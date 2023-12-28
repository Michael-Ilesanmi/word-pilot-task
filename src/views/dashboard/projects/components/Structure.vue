<template>
    <div class="w-full space-y-4">
        <h2 class="font-bold text-[#384D67]">Structure</h2>
        <div class="grid grid-cols-6 gap-4 w-full">
            <div class="space-y-2 w-full ">
                <label for="language">Conclusion</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Tables</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">H3</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">List</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Italics</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Quotes</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Key Takeaways</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">FAQs</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
            <div class="space-y-2 w-full ">
                <label for="language">Bold</label> <br>
                <select name="language" id="language">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                    {{index}}
                </option>
                </select>
            </div>
        </div>
    </div>  
</template>

<script setup>
</script>

<style>

</style>