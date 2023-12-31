<template>
  <div class="mt-8 w-4/5">
        <h2>Document</h2>
        <div class="grid gap-8">
          <div class="grid grid-cols-4 gap-4 w-full">
            <div class="space-y-2 w-full ">
              <label for="network">Save to Directory</label> <br>
              <select name="network" id="network">
                <option :value="index" v-for="(index) in ['Home', 'About']" :key="index">
                  {{index}}
                </option>
              </select>
            </div>
            </div>
        </div>
      </div>
</template>

<script setup></script>

<style>

</style>