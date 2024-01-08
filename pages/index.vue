<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px]">
      <div
        class="rounded-[10px] search-block border border-solid relative flex items-center"
      >
        <input
          type="text"
          v-model="search"
          class="w-full px-5 py-[10px]"
          placeholder="Xostellar nomini kiriting"
          @input="onSearch"
        />
        <svg
          class="absolute right-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 22L20 20"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="body">
      <a-table
        :columns="columnOrders"
        :data-source="hotels"
        class="custom-table"
        :loading="loading"
        :pagination="false"
        align="center"
        :customRow="
          (column) => {
            return {
              on: {
                click: (e) => clickRow(column), // click header row
              },
            };
          }
        "
      >
        <span slot="status" slot-scope="text">
          <span
            :class="{
              'status-active': text == 1,
              'status-inactive': text == 0,
            }"
          >
            {{ text ? "Aktiv" : "To‘xtatilgan" }}</span
          >
        </span>

        <span slot="derictor" slot-scope="text">{{ text?.director_full_name }} </span>
        <span slot="place" slot-scope="text">{{ text?.ru }}</span>
        <span
          slot="phone_number"
          class="flex justify-between items-center cursor-pointer"
          slot-scope="text"
        >
          {{ text }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.61914 3.95312L13.6658 7.99979L9.61914 12.0465"
              stroke="#092D53"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.33398 8H13.554"
              stroke="#092D53"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </a-table>
    </div>
    <div class="mt-10">
      <VPagination @getData="__GET_HOTELS" :totalPage="totalPage" />
    </div>
  </div>
</template>

<script>
import VPagination from "@/components/VPagination.vue";
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Xostellar",
    };
  },
  data() {
    return {
      hotels: [],
      totalPage: 1,
      loading: false,
      search: "",
      columnOrders: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          customRender: (text) => `#${text}`,
          className: "column-text cursor-pointer",
        },
        {
          title: "Reyestr raqami",
          dataIndex: "register_number",
          key: "register_number",
          customRender: (text) => {
            return text ? text : "---";
          },
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "register_number" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Xostel nomi",
          dataIndex: "name",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Xostel direktori",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "derictor" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Xostel joylashgan hudud",
          dataIndex: "address",
          key: "address",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "place" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Xostel holati",
          dataIndex: "status",
          key: "status",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "status" },
          className: "column-status",
        },
        {
          title: "Xostel telefon raqami",
          dataIndex: "phone_number",
          key: "phone_number",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "phone_number" },
          className: "column-text cursor-pointer",
        },
      ],
    };
  },
  mounted() {
    this.__GET_HOTELS();
    this.search = this.$route.query["search"] || "";
  },
  methods: {
    onSearch(e) {
      this.changeSearch(e, "/", "__GET_HOTELS");
    },
    clickRow(obj) {
      this.$router.push(`/hotel/${obj?.id}`);
    },
    async __GET_HOTELS() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchHotels/getHotels", {
          page: 1,
          page_size: 16,
          ...this.$route.query,
        });
        const pageIndex = this.indexPage(data?.data?.current_page, data?.data?.per_page);
        this.hotels = data.data.data.map((item, index) => {
          return {
            ...item,
            key: index + pageIndex,
          };
        });
        this.totalPage = data.data.total;
        this.loading = false;
      } catch (e) {}
    },
    indexPage(current_page, per_page) {
      return (current_page * 1 - 1) * per_page + 1;
    },
    async changeSearch(val, url, func) {
      if (val.target.value.length > 2) {
        if (this.$route.query?.search != val.target.value) {
          await this.$router.replace({
            path: url,
            query: { ...this.$route.query, search: val.target.value, page: 1 },
          });
        }
        if (val.target.value == this.$route.query.search) this[func]();
      } else if (val.target.value.length == 0) {
        this.clearQuery(url, func);
      }
    },
    async clearQuery(url, func) {
      this.search = "";
      const queryFirst = { ...this.$route.query, page: 1 };
      const { search, ...query } = queryFirst;
      if (this.$route.query?.search) {
        await this.$router.replace({
          path: url,
          query: { ...query },
        });
        this[func]();
      }
    },
  },
  components: {
    VPagination,
  },
};
</script>
<style lang="css" scoped>
/* table  */
:deep(.ant-table-row:nth-child(2n) td) {
  background-color: var(--blue-bold);
}
:deep(.ant-table-row:nth-child(2n) td:first-child),
:deep(.ant-table-thead > tr > th:first-child) {
  border-radius: 5px 0 0 5px;
}
:deep(.ant-table-row:nth-child(2n) td:last-child),
:deep(.ant-table-thead > tr > th:last-child) {
  border-radius: 0 5px 5px 0;
}
.custom-table :deep(.column-text),
.custom-table :deep(.column-status) {
  font-family: var(--v-regular);
  color: var(--blue-bold);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
:deep(.ant-table-column-title) {
  font-family: var(--v-regular);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
:deep(.ant-table-row:nth-child(2n) .column-text) {
  color: #fff;
}
:deep(.ant-table-row:nth-child(2n) .column-text span svg path) {
  stroke: #fff;
}
:deep(.ant-table-thead > tr > th) {
  background-color: var(--blue-grey);
}

:deep(.ant-table-thead .column-text) {
  color: #fff;
}
:deep(.ant-table-thead > tr > th, .ant-table-tbody > tr > td) {
  padding: 10px 20px;
}
:deep(.column-status .status-active) {
  color: var(--green);
}
:deep(.column-status .status-inactive) {
  color: var(--red-dark);
}
:deep(.ant-table-tbody
    > tr:nth-child(2n):hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td) {
  background: #002144;
}
/* table  */
.search-block {
  border-color: rgba(0, 0, 0, 0.3);
}
</style>
