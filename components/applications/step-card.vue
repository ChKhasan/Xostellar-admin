<script>
export default {
  name: "step-card",
  props: ['file','content','title','subtitle','completed']
}
</script>

<template>
  <div class="step-card px-4 py-4 rounded-[4px] bg-white flex flex-col" :class="{'completed': completed}">
    <div class="flex flex-col gap-4">
      <div class="flex justify-between">
        <div  >
          <h4 class="verdana-700 text-black text-[18px]">{{ title }}</h4>
          <p class="verdana-400 text-[13px] text-[#9A999B]">{{ subtitle }}</p>
        </div>
        <a :href="file" class="px-6 py-3 rounded-[8px] flex gap-[10px] text-base text-[#024B80] bg-[#F5F5F7] items-center" :class="{'pointer-events-none': completed}" v-if="file">Ariza
          <span class="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33331 5.66663C3.33331 3.45749 5.12417 1.66663 7.33331 1.66663H12.5098C13.5707 1.66663 14.5881 2.08805 15.3382 2.8382L17.1617 4.66172C17.9119 5.41187 18.3333 6.42928 18.3333 7.49015V14.3333C18.3333 16.5424 16.5425 18.3333 14.3333 18.3333H7.33331C5.12417 18.3333 3.33331 16.5424 3.33331 14.3333V5.66663Z" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M7.5 5.83337L14.1667 5.83337" stroke="#28303F" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M7.5 10H14.1667" stroke="#28303F" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M7.5 14.1666H10.8333" stroke="#28303F" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </span>
        </a>
      </div>
      <div class="content flex flex-col gap-4" v-if="content && !completed">
        <p class="verdana-400 text-base" v-for="(text,index) in content" :key="index">{{ text }}</p>
      </div>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="css">
.completed {
  background: #F3F3F3;
}
</style>
