<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px] flex justify-between">
      <div class="flex gap-6 justify-center">
        <button
          :class="{ 'bg-blue-bold text-white': $route.name == 'settings' }"
          @click="$router.push('/settings')"
          class="w-[366px] h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] text-blue-bold text-base"
        >
          Foydalanuvchilar
        </button>
        <button
          :class="{ 'bg-blue-bold text-white': $route.name == 'settings-messages' }"
          class="w-[366px] h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] text-blue-bold text-base"
        >
          Xabarlar
        </button>
      </div>
      <button
        @click="$router.push('/settings/add')"
        class="w-[366px] h-12 flex uppercase justify-center gap-5 items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] bg-blue-bold text-white text-base"
      >
        Yangi xabar jo‘natish
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12H16"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16V8"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="body">
      <a-table
        :columns="columnOrders"
        :data-source="messages"
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
        <span slot="admin" slot-scope="text">{{ text?.name }}</span>
        <span slot="begin_date" slot-scope="text">
          <span class="flex items-center gap-5 justify-end">
            {{ moment(text).format("DD.MM.YYYY - HH:MM")
            }}<svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
        </span>
      </a-table>
    </div>
    <div class="mt-10">
      <VPagination @getData="__GET_MESSAGES" :totalPage="totalPage" />
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
      title: "Xabarlar",
    };
  },
  data() {
    return {
      loading: false,
      totalPage: 1,
      text: "",
      messages: [],
      columnOrders: [
        {
          title: "Xabarnoma sarlavhasi",
          dataIndex: "title",
          key: "title",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "title" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Xabarnomani yuborgan foydalanuvchi",
          dataIndex: "admin",
          key: "admin",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "admin" },
          className: "column-text cursor-pointer",
        },
        {
          title: "Yuborilgan sanasi",
          dataIndex: "created_at",
          key: "created_at",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "begin_date" },
          className: "column-text cursor-pointer",
          align: "end",
        },
      ],
    };
  },
  mounted() {
    this.__GET_MESSAGES();
  },
  methods: {
    moment,
    clickRow(obj) {
      this.$router.push(`/settings/${obj?.id}`);
    },
    async __GET_MESSAGES() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchMessages/getMessages", {
          page: 1,
          page_size: 16,
          ...this.$route.query,
        });
        this.messages = data.data.data.map((item) => {
          return {
            ...item,
            indexId: item.id,
          };
        });
        this.totalPage = data.data.total;
        this.loading = false;
      } catch (e) {}
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
:deep(.ant-table-row:nth-child(2n) .column-btns .edit svg path) {
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
:deep(.ant-modal-body) {
  padding: 40px 45px;
}
:deep(.ant-modal-content) {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);

  backdrop-filter: blur(16px);
}

/* form  */
.form-item :deep(label) {
  font-family: var(--v-regular);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.form-item :deep(.ant-form-item-label) {
  line-height: 0;
  margin-bottom: 6px;
}
.form-item :deep(.ant-input) {
  padding: 10px 20px;
  color: #fff;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: transparent;
  height: 50px;
}
.form-item :deep(.ant-select-selection--single) {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  height: 50px;
  color: #5a5a5a;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}
:deep(.ant-form-item) {
  margin-bottom: 0;
}
:deep(.column-status .status-active) {
  color: var(--green);
}
:deep(.column-status .status-inactive) {
  color: var(--red-dark);
}
/* form  */
</style>
