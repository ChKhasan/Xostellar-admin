<template>
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="search mb-[60px] flex justify-between">
      <!-- <button
        @click="visibleUser = true"
        class="w-[366px] h-12 flex uppercase justify-center gap-5 items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] bg-blue-bold text-white text-base"
      >
        Yangi xabar foydalanuvchi yaratish
      </button> -->
      <div class="flex gap-6 justify-center">
        <button
          :class="{ 'bg-blue-bold text-white': $route.name == 'settings' }"
          class="w-[366px] h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] text-blue-bold text-base"
        >
          Foydalanuvchilar
        </button>
        <button
          :class="{ 'bg-blue-bold text-white': $route.name == 'settings-messages' }"
          @click="$router.push('/settings/messages')"
          class="w-[366px] h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] text-blue-bold text-base"
        >
          Xabarlar
        </button>
      </div>
      <button
        @click="visibleUser = true"
        class="px-6 h-12 flex uppercase justify-center gap-5 items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] bg-blue-bold text-white text-base"
      >
        Yangi xabar foydalanuvchi yaratish
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
        :columns="columns"
        :data-source="users"
        class="custom-table"
        :loading="loading"
        :pagination="false"
        align="center"
      >
        <span slot="name" slot-scope="text"> {{ text?.name }} {{ text?.username }} </span>
        <span slot="role" slot-scope="text"> {{ text ? text : "----" }} </span>
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
        <span slot="indexId" slot-scope="text">
          <span class="flex gap-5 justify-end">
            <button class="edit" @click="editData(text)">
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
          </span>
        </span>
      </a-table>
    </div>
    <div class="mt-10">
      <VPagination @getData="__GET_USERS" :totalPage="totalPage" />
    </div>
    <a-modal
      class="close-modal"
      v-model="visible"
      :body-style="{ borderRadius: '20px' }"
      centered
      :closable="false"
      width="748px"
      @ok="handleOk"
    >
      <div>
        <div class="head">
          <h4 class="text-[24px] font-[verdana-700] text-blue-bold text-center">
            Profil holatini o‘zgartirish
          </h4>
        </div>
        <div class="body pt-[30px] mb-[76px] flex justify-center">
          <div class="flex flex-col items-center gap-10">
            <p class="text-base text-blue-bold font-[verdana-400]">
              {{ userInfo?.name }} {{ userInfo?.username }}
            </p>
            <p
              class="text-base font-[verdana-400] text-blue-bold flex items-center gap-10"
            >
              Joriy holat:
              <span
                class="font-[verdana-700]"
                :class="{
                  'text-green': userInfo?.is_active,
                  'text-red-dark': !userInfo?.is_active,
                }"
                >{{ userInfo?.is_active ? "Aktiv" : "To‘xtatilgan" }}</span
              >
            </p>
            <p
              class="text-base font-[verdana-400] text-blue-bold flex items-center gap-10"
            >
              O‘zgaradigan holati:
              <span
                class="font-[verdana-700]"
                :class="{
                  'text-green': !userInfo?.is_active,
                  'text-red-dark': userInfo?.is_active,
                }"
                >{{ !userInfo?.is_active ? "Aktiv" : "To‘xtatilgan" }}</span
              >
            </p>
          </div>
        </div>
        <div class="buttons grid grid-cols-2 gap-[30px]">
          <button
            @click="handleOk"
            class="py-[13px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
          >
            Bekor qilish
          </button>
          <button
            @click="submit"
            class="py-[13px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </a-modal>
    <a-modal
      class="close-modal"
      v-model="visibleUser"
      :body-style="{ borderRadius: '20px' }"
      centered
      :closable="false"
      width="1010px"
      @ok="handleOk"
    >
      <div>
        <div class="head">
          <h4 class="text-[24px] font-[verdana-700] text-white text-center">
            Yangi foydalanuvchi yaratish
          </h4>
        </div>
        <div class="body pt-[28px] mb-12 flex justify-center">
          <a-form-model class="w-full" :model="form" ref="ruleForm" :rules="rules">
            <div class="flex flex-col gap-10">
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="name"
                  class="form-item w-full mb-0"
                  label="F.I.SH"
                >
                  <a-input v-model="form.name" placeholder="F.I.SH" />
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="region_id"
                  class="form-item w-full mb-0"
                  label="Viloyat"
                >
                  <a-select
                    v-model="form.region_id"
                    placeholder="Viloyot nomi"
                    class="w-full"
                  >
                    <a-select-option
                      :value="region?.id"
                      v-for="region in regions"
                      :key="region?.id"
                    >
                      {{ region?.name?.uz }}</a-select-option
                    >
                  </a-select>
                </a-form-model-item>
              </div>
              <div class="grid grid-cols-1 w-full">
                <a-form-model-item
                  prop="pin"
                  class="form-item w-full mb-0"
                  label="JSHSHIR "
                >
                  <a-input v-model="form.pin" placeholder="JSHSHIR " />
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
            @click="submitUser"
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
      title: "Foydalanuvchilar",
    };
  },
  data() {
    return {
      visibleUser: false,
      tabHandler: true,
      visible: false,
      editId: null,
      loading: false,
      totalPage: 1,
      text: "",
      regions: [],
      form: {
        name: "",
        pin: "",
        region_id: undefined,
      },

      rules: {
        name: [{ required: true, message: "This field is required", trigger: "change" }],
        pin: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        region_id: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
     
      },
      users: [],
      userInfo: {},
      columns: [
        {
          title: "Foydalanuvchi",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
          className: "column-text",
        },
        {
          title: "Profil holati",
          dataIndex: "is_active",
          key: "is_active",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "status" },
          className: "column-status",
        },
        {
          title: "Roli",
          dataIndex: "role",
          key: "role",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "role" },
          className: "column-text",
          align: "end",
        },
        {
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "indexId" },
          align: "end",
          className: "column-btns",
        },
      ],
      columnOrders: [
        {
          title: "Xabarnoma sarlavhasi",
          dataIndex: "title",
          key: "title",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "title" },
          className: "column-text",
        },
        {
          title: "Xabarnomani yuborgan foydalanuvchi",
          dataIndex: "user",
          key: "user",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "user" },
          className: "column-text",
        },
        {
          title: "Yuborilgan sanasi",
          dataIndex: "begin_date",
          key: "begin_date",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "begin_date" },
          className: "column-text",
          align: "end",
        },
      ],
      orders: [
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
        {
          title: "Barcha Xostellar egalari diqqatiga",
          user: "Xasanov Abror Ikromovich",
          begin_date: "15.10.2023  -  14:37",
        },
      ],
    };
  },
  mounted() {
    this.__GET_USERS();
    this.__GET_REGIONS();
  },
  methods: {
    handleOk() {
      this.visible = false;
      this.visibleUser = false;
    },
    editData(obj) {
      this.editId = obj.id;
      this.userInfo = { ...obj };
      this.visible = true;
    },
    submit() {
      this.__EDIT_USERS({ is_active: this.userInfo?.is_active == 1 ? 0 : 1 });
    },
    submitUser() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.form.password != this.form.password_confirmation) {
            this.$notification["error"]({
              message: "Error",
              description: "Пожалуйста, перепроверьте пароль",
            });
          } else {
            this.__POST_USERS(this.form);
          }
        }
      });
    },
    async __GET_REGIONS() {
      try {
        const data = await this.$store.dispatch("fetchRegions/getRegions");
        this.regions = data.data.data;
      } catch (e) {}
    },
    async __GET_USERS() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchUsers/getUsers", {
          page: 1,
          page_size: 16,
          ...this.$route.query,
        });
        this.users = data.data.data.map((item) => {
          return {
            ...item,
            indexId: item.id,
          };
        });
        this.totalPage = data.data.total;
        this.loading = false;
      } catch (e) {}
    },
    async __EDIT_USERS(form) {
      try {
        const data = await this.$store.dispatch("fetchUsers/editUsers", {
          id: this.editId,
          data: form,
          params: {
            role: this.userInfo?.role ? this.userInfo?.role : "admin",
          },
        });
        this.__GET_USERS();
        this.editId = null;
        this.visible = false;
        this.userInfo = {};
        this.$notification["success"]({
          message: "Success",
          description: "Muvaffaqiyatli o'zgartirildi",
        });
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    async __POST_USERS(form) {
      try {
        const data = await this.$store.dispatch("fetchUsers/postUsers", {
          data: form,
        });
        this.__GET_USERS();
        this.visibleUser = false;
        this.$notification["success"]({
          message: "Success",
          description: "Foydalanuvchi muvaffaqiyatli yaratildi",
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
    visibleUser(val) {
      if (!val) {
        this.form = {
          name: "",
          username: "",
          region_id: undefined,
          password: "",
          password_confirmation: "",
        };
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
.form-item :deep(.ant-input::placeholder) {
  color: #fff;
}
.form-item :deep(.ant-select-selection__placeholder) {
  color: #fff;
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
:deep(.column-status .status-active) {
  color: var(--green);
}
:deep(.column-status .status-inactive) {
  color: var(--red-dark);
}
/* form  */
</style>
