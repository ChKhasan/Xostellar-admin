<template lang="html">
  <div class="hotek-inner max-w-[1536px] mx-auto py-10">
    <div class="flex justify-start items-center">
      <button
        @click="$router.go(-1)"
        class="flex gap-[10px] w-[236px] h-11 border border-solid border-blue-bold bg-blue-bold rounded-[8px] justify-center items-center text-white font-[verdana-400] text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4999 12H3.66992"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Orqaga
      </button>
    </div>
    <div class="body mt-10 flex flex-col gap-10">
      <div class="title w-full flex justify-center bg-blue-grey py-[10px] rounded-[10px]">
        <h1 class="font-[verdana-700] text-[24px] text-white">Xostel ma’lumotlari</h1>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">
            Xabarnomani yuborgan hodim
          </p>
          <h5 class="text-[24px] text-white font-bold">
            {{ message?.admin?.name }}
          </h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Xabarnoma yuborilgan sana</p>
          <h5 class="text-[24px] text-white font-bold">{{ moment(message?.created_at).format('DD.MM.YYYY - HH:MM') }}</h5>
        </div>
      </div>

      <div class="flex justify-center">
        <div
          class="px-[30px] w-full rounded-[6px] py-[30px] min-h-[150px] justify-between items-center flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Xabarnoma sarlavhasi</p>
          <h5 class="text-[24px] text-white font-bold">{{ message?.title }}</h5>
        </div>
      </div>
      <div class="desc px-6 py-6 rounded-[20px] flex flex-col gap-3">
        <h4 class="text-base text-white font-[verdana-700]">Xabarnoma matni</h4>
        <p class="text-base text-white font-[verdana-400]" v-html="message?.message"></p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      message: {},
    };
  },
  mounted() {
    this.__GET_APPLICATIONS(this.$route.params.id);
  },
  methods: {
    moment,
    async __GET_APPLICATIONS(id) {
      try {
        const data = await this.$store.dispatch("fetchMessages/getMessagesById", id);
        this.message = data?.data;
      } catch (e) {}
    },
  },
};
</script>
<style lang="css" scoped>
.desc {
  background: rgba(9, 45, 83, 0.6);
}
</style>
