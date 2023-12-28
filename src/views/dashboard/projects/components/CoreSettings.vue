<template>
  <div class="mt-8 w-4/5">
        <h3 class="text-[#384D67] font-bold mb-6">Core Settings</h3>
        <div class="grid grid-cols-2 gap-8">
          <div class="flex flex-col space-y-4 w-full">
            <div class="space-y-2 w-full ">
              <label for="language">Language</label> <br>
              <select name="language" id="language">
                <option :value="language.code" v-for="(language, index) in languages" :key="index">
                  {{language.label}}
                </option>
              </select>
            </div>
            <div class="space-y-2 w-full ">
              <label for="voice_tone">Tone of Voice</label> <br>
                <select name="voice_tone" id="voice_tone">
                <option :value="tone.key" v-for="(tone, index) in voice_tones" :key="index">
                  {{tone.label}}
                </option>
              </select>
            </div>
            <div class="space-y-2 w-full ">
              <label for="pov">Point of View</label> <br>
              <select name="pov" id="pov">
                <option :value="pov" v-for="(pov, index) in povs" :key="index">
                  {{pov}}
                </option>
              </select>
            </div>
            <div class="space-y-2 w-full ">
              <label for="target">Target Country</label> <br>
              <select name="target" id="target">
                <option :value="target" v-for="(target, index) in target_countries" :key="index">
                  {{target}}
                </option>
              </select>
            </div>
          </div>
          <div class="flex flex-col space-y-4 w-full">
            <div class="space-y-2 w-full ">
              <label for="language">Article Size</label> <br>
              <div class="grid grid-cols-2 items-stretch gap-2">
                <select name="article_size" id="article_size">
                  <option :value="size.key" v-for="(size, index) in article_sizes" :key="index">
                    {{size.label}}
                  </option>
                </select>
                <button class="rounded px-4 text-[#718399] text-xs bg-[#D3E7FF] grow">2400-3600 words, 9-12 H2 headings</button>
              </div>
              <p class="text-[#6B6B6B] text-xs">The X-Small article offers short articles or news, ideal for quick updates and capturing immediate interest, ensuring your content remains fresh and timely in the eyes of your audiences.</p>
            </div>
            <div class="flex justify-between">
              <p>Details to Include <span class="iconify" data-icon="ic:outline-info"></span></p>
              <ul class="flex justify-between text-secondary-blue">
                <li class="border-secondary-blue border-r last-of-type:border-r-0 px-4">Sample 1</li>
                <li class="border-secondary-blue border-r last-of-type:border-r-0 px-4">Sample 2</li>
                <li class="border-secondary-blue border-r last-of-type:border-r-0 px-4">Sample 3</li>
              </ul>
            </div>
            <div class="flex-row items-start text-sm">
              <input type="checkbox" name="mode" id="mode" class="!w-fit">
              <label for="mode">
                Intense mode: to each section, beyond just the entire article.
              </label>
            </div>
            <textarea name="" id="" cols="30" rows="5" placeholder="e.g. phone number as 267-229-6783"></textarea>
          </div>
        </div>
      </div>
</template>

<script setup>
const languages = [
  {
    label: "English",
    code: "en",
  },
  {
    label: "French",
    code: "fr"
  },
  {
    label: "Spanish",
    code: "se",
  },
  {
    label: "Chinese",
    code: "ch"
  },
];
const voice_tones = [
  {
    label: "Friendly",
    key: 1,
  },
  {
    label: "Formal",
    key: 2,
  },
  {
    label: "Angry",
    key: 3,
  },
];

const povs = ['None', 1, 2, 3];
const target_countries= ['None', 'Nigeria', 'Ghana', 'USA'];
const article_sizes = [
  {
    label: 'X-Small',
    key: 1,
  },
  {
    label: 'M-Medium',
    key: 2
  },
  {
    label: 'LG-Long',
    key: 3
  },
];
</script>

<style>

</style>