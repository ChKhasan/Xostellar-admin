<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px]">
      <div
        class="rounded-[10px] search-block border border-solid relative flex items-center"
      >
        <input
          v-model="search"
          @input="onSearch"
          type="text"
          class="w-full px-5 py-[10px]"
          placeholder="Xostellar nomini kiriting"
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
        <span slot="certificate" slot-scope="text">
          <a v-if="text" :href="text.link" @click="preventOne" class="flex justify-end"
            ><svg
              data-v-3ff0ae0c=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                data-v-3ff0ae0c=""
                d="M6 8L8 10M8 10L10 8M8 10L8 2"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                data-v-3ff0ae0c=""
                d="M5 6V6C3.34315 6 2 7.34315 2 9L2 11C2 12.6569 3.34315 14 5 14L11 14C12.6569 14 14 12.6569 14 11L14 9C14 7.34315 12.6569 6 11 6V6"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></a>
          <span v-else>-----</span>
        </span>
        <span slot="status" slot-scope="text">
          <span
            :class="{
              'status-new': text == 'new',
              'status-inactive': text == 'rejected',
              'status-progress': text == 'in_process',
              'status-success': text == 'accepted',
            }"
          >
            {{ statusTypes[text] }}
          </span>
        </span>
        <span slot="name" slot-scope="text">
          {{ text?.name > 0 ? text?.name : "----" }}
        </span>
        <span slot="end_date" slot-scope="text">
          {{ text ? text : "----" }}
        </span>
        <span slot="begin_date" slot-scope="text">
          {{ text ? moment(text).format("DD.MM.YYYY - HH-MM") : "----" }}
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
import moment from "moment";
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Arizalar",
    };
  },
  data() {
    return {
      isLinkClicked: false,
      loading: false,
      hotels: [],
      search: "",
      totalPage: 1,
      statusTypes: {
        new: "Yangi",
        rejected: "RAD ETILGAN",
        in_process: "HUJJATLAR KO‘RIB CHIQILMOQDA",
        accepted: "MUVAFFAQIYATLI YAKUNLANGAN",
      },
      columnOrders: [
        {
          title: "№",
          dataIndex: "key",
          key: "key",
          customRender: (text, row, index) => <span>#{text}</span>,
          className: "column-text cursor-pointer",
        },
        {
          title: "Xostel nomi",
          dataIndex: "hotel",
          key: "hotel",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-text cursor-pointer",
        },
        {
          title: "STIR raqami",
          dataIndex: "hotel",
          key: "tin",
          slots: { title: "customTitle" },
          customRender: (text) => <span>{text?.tin ? text?.tin : "----"}</span>,
          className: "column-text cursor-pointer",
        },
        {
          title: "Ariza kelib tushgan sana",
          dataIndex: "created_at",
          key: "created_at",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "begin_date" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Ariza yakunlangan sana",
          dataIndex: "closed_at",
          key: "closed_at",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "end_date" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Hudud",
          dataIndex: "hotel",
          key: "hotel",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "status" },
          className: "column-text",
          customRender: (text) => `${text?.region?.name?.uz}`,
        },
        {
          title: "Ariza holati",
          dataIndex: "status",
          key: "status",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "status" },
          className: "column-status",
        },
        {
          title: "Sertifikat",
          dataIndex: "certificate",
          key: "certificate",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "certificate" },
          className: "column-certificate",
          align: "end",
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
      if (!this.isLinkClicked) {
        this.$router.push(`/applications/${obj?.id}`);
      } else {
        this.isLinkClicked = false;
      }
    },
    moment,
    preventOne() {
      this.isLinkClicked = true;
    },
    async __GET_HOTELS() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchApplications/getApp", {
          page: 1,
          page_size: 16,
          ...this.$route.query,
        });
        const pageIndex = this.indexPage(data?.data?.current_page, data?.data?.per_page);
        this.hotels = data.data.data.map((item, index) => {
          return {
            ...item,
            indexId: item.id,
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
:deep(.ant-table-row:nth-child(2n + 1) .column-certificate svg path) {
  stroke: var(--blue-bold) !important;
  color: var(--blue-bold);
}
:deep(.ant-table-row:nth-child(2n) .column-certificate) {
  color: #fff !important;
}
:deep(.ant-table-row:nth-child(2n) .column-text span svg path) {
  stroke: #fff;
}
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
:deep(.column-status .status-new) {
  color: var(--blue);
}
:deep(.column-status .status-inactive) {
  color: var(--red-dark);
}
:deep(.column-status .status-progress) {
  color: var(--orange);
}
:deep(.column-status .status-success) {
  color: var(--green);
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
