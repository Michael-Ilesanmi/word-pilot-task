<template>
  <div class="mt-8 w-4/5">
        <h3 class="text-[#384D67] font-bold mb-6">Language Model</h3>
        <div class="grid gap-8">
          <div class="grid grid-cols-3 gap-4 items-end">
            <div class="space-y-2">
              <label for="network">Quality Type</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['GPT 3.5 + GPT 3.5 Turbo `16K + GPT 4']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            <p class="text-sm col-span-2 grow">
                For optimal results, we use a mix of different models including GPT 3.5, GPT 3.5 Turbo 16K, and GPT 4 8K, ensuring the best quality.
            </p>
            </div>
          <div class="grid grid-cols-3 gap-4 items-end">
            <div class="space-y-2">
              <label for="network">openAI API Key</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['No']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            <p class="text-sm col-span-2">
              You can connect your API key if you have used up our words and still have unspent Article Generations limits.
            </p>
            </div>
        </div>
      </div>
</template>

<script setup></script>

<style>

</style>