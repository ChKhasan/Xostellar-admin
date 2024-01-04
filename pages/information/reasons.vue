<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px]">
      <div class="flex justify-between">
        <div class="flex gap-6 justify-start">
          <button
            :class="{ 'bg-blue-bold text-white': $route.name == 'information' }"
            @click="$router.push('/information')"
            class="w-[366px] 2xl:px-6 2xl:w-auto h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-700] text-blue-bold text-base"
          >
            Viloyatlar
          </button>
          <button
            :class="{
              'bg-blue-bold text-white': $route.name == 'information-additional',
            }"
            @click="$router.push('/information/additional')"
            class="w-[366px] 2xl:px-6 2xl:w-auto h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-700] text-blue-bold text-base"
          >
            Qo‘shimcha
          </button>
          <button
            :class="{ 'bg-blue-bold text-white': $route.name == 'information-reasons' }"
            @click="$router.push('/information/reasons')"
            class="w-[366px] 2xl:px-6 2xl:w-auto h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-700] text-blue-bold text-base"
          >
            Rad etish sabablari
          </button>
        </div>
        <button
          @click="visibleReason = true"
          class="px-6 h-12 flex uppercase justify-center gap-5 items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] bg-blue-bold text-white text-base"
        >
          Qo'shish
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
    </div>
    <div class="body">
      <a-table
        :columns="columnOrders"
        :data-source="reasons"
        class="custom-table"
        :loading="loading"
        :pagination="false"
        align="center"
      >
        <span slot="id" slot-scope="text">
          <span class="flex gap-5 justify-end">
            <!-- <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z"
                  stroke="#0B8927"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.9999 13.5138C10.3532 13.5138 12.5466 12.1271 14.0732 9.72714C14.6732 8.78714 14.6732 7.20714 14.0732 6.26714C12.5466 3.86714 10.3532 2.48047 7.9999 2.48047C5.64656 2.48047 3.45323 3.86714 1.92656 6.26714C1.32656 7.20714 1.32656 8.78714 1.92656 9.72714C3.45323 12.1271 5.64656 13.5138 7.9999 13.5138Z"
                  stroke="#0B8927"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> -->

            <button class="edit" v-if="$store.state.profileInfo?.role != 'committee'" @click="editData(text)">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33398 1.33301H6.00065C2.66732 1.33301 1.33398 2.66634 1.33398 5.99967V9.99967C1.33398 13.333 2.66732 14.6663 6.00065 14.6663H10.0007C13.334 14.6663 14.6673 13.333 14.6673 9.99967V8.66634"
                  stroke="#092D53"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6933 2.0135L5.43992 7.26684C5.23992 7.46684 5.03992 7.86017 4.99992 8.14684L4.71325 10.1535C4.60659 10.8802 5.11992 11.3868 5.84659 11.2868L7.85325 11.0002C8.13325 10.9602 8.52659 10.7602 8.73325 10.5602L13.9866 5.30684C14.8933 4.40017 15.3199 3.34684 13.9866 2.0135C12.6533 0.680168 11.5999 1.10684 10.6933 2.0135Z"
                  stroke="#092D53"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.93945 2.7666C10.3861 4.35993 11.6328 5.6066 13.2328 6.05993"
                  stroke="#092D53"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <a-popconfirm
              title="Siz haqiqatan ham o'chirmoqchimisiz"
              ok-text="Ha"
              cancel-text="Yo'q"
              @confirm="deleteReason(text)"
            >
              <button class="delete">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7481 9.33297V18.332C18.7481 19.989 17.4051 21.332 15.7481 21.332H8.41505C6.75805 21.332 5.41505 19.989 5.41505 18.332V9.33297M4.08105 5.33497H20.0811M10.7481 2.66797H13.4151M8.66205 10.667V17.332M12.0811 10.667V17.332M15.3721 10.667V17.332"
                    stroke="red"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </a-popconfirm>
            <!-- <a-popover v-model="visible"  trigger="click">
              <template slot="content">
                <div class="flex justify-end gap-4 items-center">
                  <a slot="content" @click="hide">Close</a>
                  <button
                    @click="deleteReason(text)"
                    class="px-4 h-8 flex uppercase justify-center gap-5 items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] bg-blue-bold text-white text-base"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.7481 9.33297V18.332C18.7481 19.989 17.4051 21.332 15.7481 21.332H8.41505C6.75805 21.332 5.41505 19.989 5.41505 18.332V9.33297M4.08105 5.33497H20.0811M10.7481 2.66797H13.4151M8.66205 10.667V17.332M12.0811 10.667V17.332M15.3721 10.667V17.332"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </template>
              <button class="delete">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7481 9.33297V18.332C18.7481 19.989 17.4051 21.332 15.7481 21.332H8.41505C6.75805 21.332 5.41505 19.989 5.41505 18.332V9.33297M4.08105 5.33497H20.0811M10.7481 2.66797H13.4151M8.66205 10.667V17.332M12.0811 10.667V17.332M15.3721 10.667V17.332"
                    stroke="red"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </a-popover> -->
          </span>
        </span>
        <span slot="chapter" slot-scope="text">
          {{ text?.name?.uz }}
        </span>
        <span slot="group" slot-scope="text">
          {{ text?.name?.uz }}
        </span>
        <span slot="name_uz" slot-scope="text">
          {{ text?.name?.uz }}
        </span>
        <span slot="name_en" slot-scope="text">
          {{ text?.name?.en }}
        </span>
      </a-table>
    </div>
    <div class="mt-10">
      <VPagination @getData="__GET_REASONS" :totalPage="totalPage" />
    </div>
    <!-- <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ borderRadius: '20px' }"
      centered
      :closable="false"
      width="1010px"
      @ok="handleOk"
    >
      <div>
        <div class="head">
          <h4 class="text-[24px] font-[verdana-700] text-white text-center">
            {{ title.uz }}
          </h4>
        </div>
        <div class="body pt-[28px] mb-12 flex justify-center">
          <a-form-model class="w-full" :model="form" ref="ruleForm" :rules="rules">
            <div class="flex flex-col gap-10">
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="deadline"
                  class="form-item w-full mb-0"
                  label="O‘Z"
                >
                  <a-input
                    v-model="form.name.uz"
                    placeholder="Klassifikatorning o‘zbekcha nomini kiriting"
                  />
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="deadline"
                  class="form-item w-full mb-0"
                  label="RU"
                >
                  <a-input
                    v-model="form.name.ru"
                    placeholder="Klassifikatorning ruscha nomini kiriting"
                  />
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="deadline"
                  class="form-item w-full mb-0"
                  label="EN"
                >
                  <a-input
                    v-model="form.name.en"
                    placeholder="Klassifikatorning inglizcha nomini kiriting"
                  />
                </a-form-model-item>
              </div>
            </div>
          </a-form-model>
        </div>
        <div class="buttons flex justify-center gap-[30px]">
          <button
            @click="handleOk"
            class="py-[13px] w-[360px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
          >
            Bekor qilish
          </button>
          <button
            @click="submit"
            class="py-[13px] w-[360px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
          >
            Saqlash
          </button>
        </div>
      </div>
    </a-modal> -->
    <a-modal
      class="close-modal"
      v-model="visibleReason"
      :body-style="{ borderRadius: '20px' }"
      centered
      :closable="false"
      width="1010px"
      @ok="handleOk"
    >
      <div>
        <div class="head">
          <h4 class="text-[24px] font-[verdana-700] text-white text-center">
            Rad etish uchun sabab yaratish
          </h4>
        </div>
        <div class="body pt-[28px] mb-12 flex justify-center">
          <a-form-model class="w-full" :model="form" ref="ruleForm" :rules="rules">
            <div class="flex flex-col gap-10">
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="name.uz"
                  class="form-item w-full mb-0"
                  label="Sabab matni (O‘Z)"
                >
                  <a-input v-model="form.name.uz" placeholder="Matn..." />
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item class="form-item w-full mb-0" label="Sabab matni (RU)">
                  <a-input v-model="form.name.ru" placeholder="Matn..." />
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="chapter_id"
                  class="form-item w-full mb-0"
                  label="Bo'limlar"
                >
                  <a-select
                    v-model="form.chapter_id"
                    placeholder="Bo'limni tanlang"
                    class="w-full"
                  >
                    <a-select-option
                      :value="chapter?.id"
                      v-for="chapter in chapters"
                      :key="chapter?.id"
                    >
                      {{ chapter?.name?.uz }}</a-select-option
                    >
                  </a-select>
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="group_id"
                  class="form-item w-full mb-0"
                  label="Gruppalar"
                >
                  <a-select
                    v-model="form.group_id"
                    placeholder="Gruppani tanlang"
                    class="w-full"
                  >
                    <a-select-option
                      :value="group?.id"
                      v-for="group in groups"
                      :key="group?.id"
                    >
                      {{ group?.name?.uz }}</a-select-option
                    >
                  </a-select>
                </a-form-model-item>
              </div>
            </div>
          </a-form-model>
        </div>
        <div class="buttons flex justify-center gap-[30px]">
          <button
            @click="handleOk"
            class="py-[13px] w-[360px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
          >
            Bekor qilish
          </button>
          <button
            @click="submit"
            class="py-[13px] w-[360px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
          >
            Saqlash
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import VPagination from "@/components/VPagination.vue";
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Viloyatlar",
    };
  },
  data() {
    return {
      title: {},
      tabHandler: true,
      visible: false,
      editId: null,
      loading: false,
      text: "",
      form: {
        name: {
          uz: "",
          ru: "",
        },
        group_id: undefined,
        chapter_id: undefined,
      },
      rules: {
        name: {
          uz: [{ required: true, message: "This field is required", trigger: "change" }],
        },
        chapter_id: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        group_id: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
      },
      totalPage: null,
      visibleReason: false,
      columnOrders: [
        {
          title: "№",
          dataIndex: "indexId",
          key: "indexId",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "indexId" },
          className: "column-text",
        },
        {
          title: "Sabab",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name_uz" },
          className: "column-text",
        },
        {
          title: "Bo'lim",
          dataIndex: "chapter",
          key: "chapter",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "chapter" },
          className: "column-text",
        },
        {
          title: "Gruppa",
          dataIndex: "group",
          key: "group",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "group" },
          className: "column-text",
        },
        {
          dataIndex: "id",
          key: "id",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "id" },
          align: "end",
          className: "column-btns",
        },
      ],

      reasons: [],
      chapters: [],
      groups: [],
    };
  },
  mounted() {
    this.__GET_REASONS();
    this.__GET_CHAPTERS();
    this.__GET_GROUPS();
  },
  methods: {
    handleOk() {
      this.visibleReason = false;
    },
    editData(id) {
      this.visibleReason = true;
      this.editId = id;
      this.__GET_REASON(id);
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.editId ? this.__EDIT_REGION(this.form) : this.__POST_REASONS(this.form);
        }
      });
    },

    async __GET_REASONS() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchReasons/getReasons", {
          page: 1,
          page_size: 16,
          ...this.$route.query,
        });
        this.reasons = data.data.map((item, index) => {
          return {
            ...item,
            indexId: index + 1,
          };
        });
        this.totalPage = data.data.total;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
    async __GET_CHAPTERS() {
      try {
        const data = await this.$store.dispatch("fetchReasons/getChapters");
        this.chapters = data.data;
      } catch (e) {
      } finally {
      }
    },
    async __DELETE_CHAPTERS(id) {
      try {
        const data = await this.$store.dispatch("fetchReasons/deleteReasons", id);
        this.__GET_REASONS();
        this.$notification["success"]({
          message: "Success",
          description: "Muvaffaqiyatli o'chirildi",
        });
      } catch (e) {
      } finally {
      }
    },
    deleteReason(id) {
      this.__DELETE_CHAPTERS(id);
    },
    async __GET_GROUPS() {
      try {
        const data = await this.$store.dispatch("fetchReasons/getGroups");
        this.groups = data.data;
      } catch (e) {
      } finally {
      }
    },
    indexPage(current_page, per_page) {
      return (current_page * 1 - 1) * per_page + 1;
    },
    async __GET_REASON(id) {
      try {
        const data = await this.$store.dispatch("fetchReasons/getReasonsById", id);
        this.form.name = data?.data?.name;
        this.form.chapter_id = data?.data?.chapter_id;
        this.form.group_id = data?.data?.group_id;
      } catch (e) {}
    },
    async __POST_REASONS(form) {
      try {
        const data = await this.$store.dispatch("fetchReasons/postReasons", {
          data: form,
        });
        this.__GET_REASONS();
        this.editId = null;
        this.visibleReason = false;
        this.$notification["success"]({
          message: "Success",
          description: "Muvaffaqiyatli qo'shildi",
        });
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    async __EDIT_REGION(form) {
      try {
        const data = await this.$store.dispatch("fetchReasons/editReasons", {
          id: this.editId,
          data: form,
        });
        this.__GET_REASONS();
        this.editId = null;
        this.visibleReason = false;
        this.$notification["success"]({
          message: "Success",
          description: "Viloyat muvaffaqiyatli o'zgartirildi",
        });
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
  },
  watch: {
    visibleReason(val) {
      if (!val) {
        this.form = {
          name: {
            uz: "",
            ru: "",
          },
          group_id: undefined,
          chapter_id: undefined,
        };
        this.editId = null;
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
:deep(.ant-table-row:nth-child(2n) .column-btns .edit svg path),
:deep(.ant-table-row:nth-child(2n) .column-btns .delete svg path) {
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
.form-item :deep(.ant-input::placeholder),
.form-item
  :deep(.ant-select-selection__placeholder, .ant-select-search__field__placeholder) {
  color: rgba(255, 255, 255, 0.7);
}
.form-item :deep(.ant-select-selection--single) {
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: transparent;
  height: 50px;
  color: #fff;
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
/* form  */
</style>
