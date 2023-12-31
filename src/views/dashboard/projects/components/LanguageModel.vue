<template>
  <div class="mt-8 w-4/5">
        <h2>Language Model</h2>
        <div class="grid gap-8">
          <fieldset>
            <div>
              <label for="network">Quality Type</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['GPT 3.5 + GPT 3.5 Turbo `16K + GPT 4']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            <p>
                For optimal results, we use a mix of different models including GPT 3.5, GPT 3.5 Turbo 16K, and GPT 4 8K, ensuring the best quality.
            </p>
          </fieldset>
          <fieldset>
            <div>
              <label for="network">openAI API Key</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['No']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            <p class="">
              You can connect your API key if you have used up our words and still have unspent Article Generations limits.
            </p>
          </fieldset>
        </div>
      </div>
</template>

<script setup></script>
<style lang="less" scoped>
fieldset{
    @apply grid grid-cols-3 gap-4 items-end w-full;
    >div{
        @apply space-y-2 ;
    }
    p{
      @apply text-sm col-span-2;
    }
}
</style>