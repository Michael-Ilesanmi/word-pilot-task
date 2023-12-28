<template>
  <div class="mt-8 w-4/5">
        <h3 class="text-[#384D67] font-bold mb-6">Connect to Web</h3>
        <div class="grid grid-rows-2 gap-8">
          <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
              <label for="network">Network</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            <div class="space-y-2 w-full ">
              <label for="network">Source links</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['Yes', 'No']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            <div class="space-y-2 col-span-2 grow w-full ">
              <h3>Search Depth</h3>
              <p class="text-sm">
                Quickly finds from thematic sources and uses them as a factual basis for writing an article.
              </p>
              <p class="text-sm">
                The technology of Real-Time Search Results enables the immediate acquisition of search findings, which are then utilized for article writing.
              </p>
            </div>
            </div>
          <div class="grid grid-cols-2 gap-4 w-full">
            <div class="space-y-2 w-full ">
              <label for="network">Search Source</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['Real-Time Search Results', 'No']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            </div>
        </div>
        <div class="space-y-2 w-full ">
              <label for="network">Search Source</label> <br>
            <select name="network" id="network">
            <option :value="index" v-for="(index) in ['Real-Time Search Results', 'No']" :key="index">
                {{index}}
            </option>
            </select>
        </div>
        

      </div>
</template>

<script setup></script>

<style>

</style>