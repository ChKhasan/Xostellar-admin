<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px]">
      <div
        class="rounded-[10px] search-block border border-solid relative flex items-center"
      >
        <input
          v-model="search"
          @input="($event) => changeSearch($event, '__GET_HOTELS')"
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
        :scroll="{ x: 1920 }"
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
           <span slot="certificate" class="flex justify-center" slot-scope="text">
             <a v-if="text?.link" target="_blank" :href="text?.link" @click="preventOne">
               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="14" fill="white"/>
                <path d="M14.8333 5.6665V8.99984C14.8333 10.8408 16.3257 12.3332 18.1667 12.3332L21.5 12.3332M6.5 8.99984L6.5 18.9998C6.5 20.8408 7.99238 22.3332 9.83333 22.3332H18.1667C20.0076 22.3332 21.5 20.8408 21.5 18.9998V13.7139C21.5 12.8298 21.1488 11.982 20.5237 11.3569L15.8096 6.64281C15.1845 6.01769 14.3367 5.6665 13.4526 5.6665L9.83333 5.6665C7.99238 5.6665 6.5 7.15889 6.5 8.99984Z" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M9.36377 19V15.4209H10.5234C10.9629 15.4209 11.2493 15.4388 11.3828 15.4746C11.5879 15.5283 11.7596 15.6455 11.8979 15.8262C12.0363 16.0052 12.1055 16.2371 12.1055 16.522C12.1055 16.7417 12.0656 16.9264 11.9858 17.0762C11.9061 17.2259 11.8044 17.3439 11.6807 17.4302C11.5586 17.5148 11.4341 17.571 11.3071 17.5986C11.1346 17.6328 10.8848 17.6499 10.5576 17.6499H10.0864V19H9.36377ZM10.0864 16.0264V17.042H10.4819C10.7668 17.042 10.9572 17.0233 11.0532 16.9858C11.1493 16.9484 11.2241 16.8898 11.2778 16.8101C11.3332 16.7303 11.3608 16.6375 11.3608 16.5317C11.3608 16.4015 11.3226 16.2941 11.2461 16.2095C11.1696 16.1248 11.0728 16.0719 10.9556 16.0508C10.8693 16.0345 10.696 16.0264 10.4355 16.0264H10.0864Z" fill="#28303F"/>
                <path d="M12.6963 15.4209H14.0171C14.3149 15.4209 14.542 15.4437 14.6982 15.4893C14.9082 15.5511 15.0881 15.661 15.2378 15.8188C15.3875 15.9767 15.5015 16.1704 15.5796 16.3999C15.6577 16.6278 15.6968 16.9093 15.6968 17.2446C15.6968 17.5392 15.6602 17.7931 15.5869 18.0063C15.4974 18.2668 15.3696 18.4775 15.2036 18.6387C15.0783 18.7607 14.909 18.856 14.6958 18.9243C14.5363 18.9748 14.3231 19 14.0562 19H12.6963V15.4209ZM13.4189 16.0264V18.397H13.9585C14.1603 18.397 14.306 18.3856 14.3955 18.3628C14.5127 18.3335 14.6095 18.2839 14.686 18.2139C14.7642 18.1439 14.8276 18.0291 14.8765 17.8696C14.9253 17.7085 14.9497 17.4896 14.9497 17.2129C14.9497 16.9362 14.9253 16.7238 14.8765 16.5757C14.8276 16.4276 14.7593 16.312 14.6714 16.229C14.5835 16.146 14.472 16.0898 14.3369 16.0605C14.236 16.0378 14.0382 16.0264 13.7437 16.0264H13.4189Z" fill="#28303F"/>
                <path d="M16.3169 19V15.4209H18.7705V16.0264H17.0396V16.8735H18.5337V17.479H17.0396V19H16.3169Z" fill="#28303F"/>
             </svg>
            </a>
           </span>
        <span slot="application" class="flex justify-center" slot-scope="text">
          <a :href="`https://api.hotels.ndc.uz/generate-application/${text?.task_id}`" target="_blank" @click="preventOne">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="14" fill="white"/>
              <path d="M7.33337 9.6665C7.33337 7.45737 9.12423 5.6665 11.3334 5.6665H16.5099C17.5707 5.6665 18.5881 6.08793 19.3383 6.83808L21.1618 8.6616C21.9119 9.41174 22.3334 10.4292 22.3334 11.49V18.3332C22.3334 20.5423 20.5425 22.3332 18.3334 22.3332H11.3334C9.12424 22.3332 7.33337 20.5423 7.33337 18.3332V9.6665Z" stroke="#28303F" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M11.5 9.8335L18.1667 9.8335" stroke="#28303F" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M11.5 14H18.1667" stroke="#28303F" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M11.5 18.1665H14.8333" stroke="#28303F" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </a>
        </span>
<!--        <span slot="certificate" slot-scope="text">-->
<!--          <a v-if="text" :href="text.link" @click="preventOne" class="flex justify-end"-->
<!--          ><svg-->
<!--            data-v-3ff0ae0c=""-->
<!--            xmlns="http://www.w3.org/2000/svg"-->
<!--            width="24"-->
<!--            height="24"-->
<!--            viewBox="0 0 16 16"-->
<!--            fill="none"-->
<!--          >-->
<!--              <path-->
<!--                data-v-3ff0ae0c=""-->
<!--                d="M6 8L8 10M8 10L10 8M8 10L8 2"-->
<!--                stroke="#fff"-->
<!--                stroke-linecap="round"-->
<!--                stroke-linejoin="round"-->
<!--              ></path>-->
<!--              <path-->
<!--                data-v-3ff0ae0c=""-->
<!--                d="M5 6V6C3.34315 6 2 7.34315 2 9L2 11C2 12.6569 3.34315 14 5 14L11 14C12.6569 14 14 12.6569 14 11L14 9C14 7.34315 12.6569 6 11 6V6"-->
<!--                stroke="#fff"-->
<!--                stroke-linecap="round"-->
<!--                stroke-linejoin="round"-->
<!--              ></path></svg-->
<!--          ></a>-->
<!--          <span v-else>-&#45;&#45;&#45;&#45;</span>-->
<!--        </span>-->
        <span slot="status" slot-scope="text">
          <span
            :class="{
              'status-new': text?.status == 'new',
               'status-inactive': text.status == 'rejected' || text?.user_canceled,
              'status-progress': text?.status === 'in_process',
              'status-success': text?.status === 'accepted',
            }"
          >
            {{
              text?.user_canceled
                ? "MIJOZ TOMONDAN RAD ETILGAN"
                : statusTypes[text.status]
            }}
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
        <span slot="deadline" slot-scope="text">
         {{ text?.deadline &&  !text?.user_canceled ? `${text?.deadline} kun` : "Yakunlangan" }}
        </span>
      </a-table>
    </div>
    <div class="mt-10">
      <VPagination @getData="__GET_HOTELS" :totalPage="totalPage"/>
    </div>
  </div>
</template>

<script>
import VPagination from "@/components/VPagination.vue";
import moment from "moment";
import search from "@/mixins/search";

export default {
  name: "IndexPage",
  mixins: [search],
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
          fixed: 'left',
          width: '100px'
        },
        {
          title: "Ariza raqami",
          dataIndex: "task_id",
          key: "task_id",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "task_id"},
          className: "column-text cursor-pointer last-fixed",
          fixed: 'left',
          width: '150px'

        },
        {
          title: "Xostel nomi",
          dataIndex: "hotel",
          key: "name",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "name"},
          className: "column-text cursor-pointer",
        },
        {
          title: "STIR raqami",
          dataIndex: "hotel",
          key: "tin",
          slots: {title: "customTitle"},
          customRender: (text) => <span>{text?.tin ? text?.tin : "----"}</span>,
          className: "column-text cursor-pointer",
        },
        {
          title: "Ariza kelib tushgan sana",
          dataIndex: "created_at",
          key: "created_at",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "begin_date"},
          className: "column-text cursor-pointer",
        },
        {
          title: "Ariza yakunlangan sana",
          dataIndex: "closed_at",
          key: "closed_at",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "end_date"},
          className: "column-text cursor-pointer",
        },
        {
          title: "Hudud",
          dataIndex: "hotel",
          key: "hotel",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "status"},
          className: "column-text",
          customRender: (text) => `${text?.region?.name?.uz}`,
        },
        {
          title: "Muhlat",
          key: "deadline",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "deadline"},
          className: "column-text",
        },
        {
          title: "Ariza holati",
          slots: {title: "customTitle"},
          scopedSlots: {customRender: "status"},
          className: "column-status",
        },
        {
          title: "Kochirmani yuklab olish",
          dataIndex: "certificate",
          key: "certificate",
          scopedSlots: {customRender: "certificate"},
          className: "cursor-pointer",
          width: '150px',
          align: 'center'
        },
        {
          title: "Ariza yuklab olish",
          key: "application",
          scopedSlots: {customRender: "application"},
          className: "cursor-pointer",
          width: '150px',
          align: 'center'},
          // {
          //   title: "Sertifikat",
          //   dataIndex: "certificate",
          //   key: "certificate",
          //   slots: {title: "customTitle"},
          //   scopedSlots: {customRender: "certificate"},
          //   className: "column-certificate",
          //   align: "end",
          //   fixed: 'right',
          //   width: '100px'
          // },
      ],
    };
  },
  mounted() {
    this.__GET_HOTELS();
    this.search = this.$route.query["search"] || "";
  },
  methods: {
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
      } catch (e) {
      }
    },
    indexPage(current_page, per_page) {
      return (current_page * 1 - 1) * per_page + 1;
    },
  },
  components: {
    VPagination,
  },
};
</script>
<style lang="css" scoped>
:deep(.last-fixed) {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

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
:deep(.ant-table-row:nth-child(2n) td), :deep(.ant-table-row-hover:nth-child(2n)) {
  background-color: var(--blue-bold);
}

:deep(.ant-table-fixed-left table),
:deep(.ant-table-fixed-right table) {
  background: var(--bg-grey);
}

:deep(.ant-table-tbody > tr.ant-table-row-hover:nth-child(2n):not(.ant-table-expanded-row):not(.ant-table-row-selected) > td) {
  background-color: var(--blue-bold);
}

:deep(.ant-table-row-cell-last) {
  border-radius: 0;
}

:deep(.ant-table-tbody > tr.ant-table-row-hover:nth-child(2n + 1):not(.ant-table-expanded-row):not(.ant-table-row-selected) > td) {
  background: var(--bg-grey);
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
