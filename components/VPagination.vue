<template lang="html">
  <div class="pagination flex justify-between">
    <div class="buttons flex gap-6">
      <button
        @click="prevPage"
        :class="{ 'opacity-10 pointer-events-none': current == 1 }"
        class="flex gap-[10px] w-[236px] h-12 border border-solid border-black rounded-[6px] justify-center items-center text-black font-[verdana-400] text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M15.4998 19.9201L8.97984 13.4001C8.20984 12.6301 8.20984 11.3701 8.97984 10.6001L15.4998 4.08008"
            stroke="#0D152C"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >Oldingi
      </button>
      <button
        @click="nextPage"
        :class="{
          'opacity-10 pointer-events-none':
            totalPage / ((current + 1) * params.pageSize) < 1,
        }"
        class="flex gap-[10px] w-[236px] h-12 border border-solid border-blue-bold bg-blue-bold rounded-[6px] justify-center items-center text-white font-[verdana-400] text-base"
      >
        Keyingi
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="flex gap-12 items-center">
      <p class="text-black font-[verdana-400] text-base">
        Barcha sahifalar
        <span>{{ (this.totalPage / this.params.pageSize).toFixed() }}</span>
      </p>
      <div class="flex gap-3 items-center">
        <input
          v-model="pageHandle"
          type="text"
          class="flex rounded-[6px] border border-solid border-black px-6 py-3 text-base font-[verdana-400] max-w-[106px]"
        />
        <p class="text-black font-[verdana-400] text-base">sahifaga o‘tish</p>
      </div>
      <button
        @click="changePage"
        class="flex gap-[10px] w-[236px] h-12 border border-solid border-black rounded-[6px] justify-center items-center text-black font-[verdana-400] text-base"
      >
        O'tish<svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M9.41016 19.9201L15.9302 13.4001C16.7002 12.6301 16.7002 11.3701 15.9302 10.6001L9.41016 4.08008"
            stroke="#0D152C"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["totalPage"],
  data() {
    return {
      current: 1,
      pageHandle: 1,
      params: {
        pageSize: 16,
        page: 1,
      },
    };
  },
  methods: {
    async changePage() {
      if (
        this.pageHandle > 0 &&
        this.totalPage / (this.pageHandle * this.params.pageSize) > 1
      ) {
        await this.changePagination(this.pageHandle);
        this.$emit("getData");
      } else {
        this.pageHandle = (this.totalPage / this.params.pageSize).toFixed();
        if (this.pageHandle < 1) this.pageHandle = 1;
        await this.changePagination(this.pageHandle);
        this.$emit("getData");
      }
    },
    async prevPage() {
      if (this.current > 1) {
        this.current--;
        await this.changePagination(this.current);
        this.$emit("getData");
      }
    },
    async nextPage() {
      this.current++;
      await this.changePagination(this.current);
      this.$emit("getData");
    },
    async pageChange(e) {
      await this.changePagination(e);
      this.$emit("getData");
    },
    async changePagination(val) {
      if (this.$route.query.page != val) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            page: val,
          },
        });
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  async mounted() {
    if (
      !Object.keys(this.$route.query).includes("page") ||
      !Object.keys(this.$route.query).includes("page_size")
    ) {
      await this.$router.replace({
        path: this.$route.path,
        query: { page: this.params.page, page_size: this.params.pageSize },
      });
    }
    this.current = Number(this.$route.query.page);
    this.pageHandle = Number(this.$route.query.page);
  },
  watch: {
    current(val) {
      this.pageHandle = val;
    },
  },
};
</script>
<style lang="css" scoped></style>
