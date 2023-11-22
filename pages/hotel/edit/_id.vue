<template lang="html">
  <div class="create-hotel max-w-[1536px] mx-auto py-[60px]">
    <div class="">
      <a-form-model :model="form" ref="ruleForm" :rules="rules">
        <div class="flex flex-col gap-10">
          <div class="grid grid-cols-2 gap-6">
            <a-form-model-item
              prop="name"
              class="form-item w-full mb-0"
              label="Xostellar nomi"
            >
              <a-input v-model="form.name" placeholder="Mehmonxona nomi" />
            </a-form-model-item>
            <a-form-model-item
              class="form-item w-full mb-0"
              label="Xostellar joylashgan hudud"
            >
              <a-select
                v-model="form.region_id"
                placeholder="Mehmonxona manzili"
                class="w-full"
              >
                <a-select-option
                  :value="region?.id"
                  v-for="region in regions"
                  :key="region?.id"
                >
                  {{ region?.name?.uz }}</a-select-option
                >
              </a-select></a-form-model-item
            >
          </div>
          <div class="grid grid-cols-1 w-full">
            <a-form-model-item
              prop="address.uz"
              class="form-item w-full mb-0"
              label="Tashkilot manzili (O‘Z)"
            >
              <a-input v-model="form.address.uz" placeholder="Tashkilot manzili..." />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-1 w-full">
            <a-form-model-item
              prop="address.ru"
              class="form-item w-full mb-0"
              label="Tashkilot manzili (RU)"
            >
              <a-input v-model="form.address.ru" placeholder="Tashkilot manzili..." />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-1 w-full">
            <a-form-model-item
              prop="address.en"
              class="form-item w-full mb-0"
              label="Tashkilot manzili (EN)"
            >
              <a-input v-model="form.address.en" placeholder="Tashkilot manzili..." />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <a-form-model-item
              prop="lat"
              class="form-item w-full mb-0"
              label="Xaritada joylashuv uzunlik nuqtasi"
            >
              <a-input v-model="form.lat" placeholder="Uzunlik nuqtasini kiriting" />
            </a-form-model-item>
            <a-form-model-item
              prop="lon"
              class="form-item w-full mb-0"
              label="Xaritada joylashuv kenglik nuqtasi"
            >
              <a-input v-model="form.lon" placeholder="Kenglik nuqtasini kiriting" />
            </a-form-model-item>
          </div>
          <div class="buttons flex justify-center gap-6">
            <button
              @click="$router.go(-1)"
              class="py-[13px] w-[366px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
            >
              Bekor qilish
            </button>
            <button
              @click="submit"
              class="py-[13px] w-[366px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
            >
              Saqlash
            </button>
          </div>
        </div>
      </a-form-model>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      form: {
        name: "",
        region_id: "",
        lat: "",
        lon: "",
        status: 1,
        address: {
          uz: "",
          ru: "",
          en: "",
        },
      },
      regions: [],
      rules: {
        name: [{ required: true, message: "This field is required", trigger: "change" }],
        lat: [{ required: true, message: "This field is required", trigger: "change" }],
        lon: [{ required: true, message: "This field is required", trigger: "change" }],
        address: {
          uz: [{ required: true, message: "This field is required", trigger: "change" }],
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
          en: [{ required: true, message: "This field is required", trigger: "change" }],
        },
      },
    };
  },
  mounted() {
    this.__GET_REGIONS();
    this.__GET_HOTEL(this.$route.params.id);
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__EDIT_HOTEL(this.form, "update");
        }
      });
    },
    handleOk() {
      this.visible = false;
    },
    async __GET_REGIONS() {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchRegions/getRegions", {
          page: 1,
          page_size: 16,
          ...this.$route.query,
        });
        this.regions = data.data.data.map((item) => {
          return {
            ...item,
            indexId: item.id,
          };
        });
        this.totalPage = data.data.total;
        this.loading = false;
      } catch (e) {}
    },
    async __GET_HOTEL(id) {
      try {
        const data = await this.$store.dispatch("fetchHotels/getHotelsById", id);
        this.info = data?.data;
        this.form.name = data?.data.name;
        this.form.region_id = data?.data.region_id;
        this.form.lat = data?.data.lat;
        this.form.lon = data?.data.lon;
        this.form.status = data?.data.status;
        this.form.address.uz = data?.data.address.uz;
        this.form.address.ru = data?.data.address.ru;
        this.form.address.en = data?.data.address.uz;
      } catch (e) {}
    },
    async __EDIT_HOTEL(form, type) {
      try {
        const data = await this.$store.dispatch("fetchHotels/editHotels", {
          id: this.$route.params.id,
          data: form,
          params: {
            type: type,
          },
        });
        this.$notification["success"]({
          message: "Success",
          description: "Muvaffaqiyatli o'zgartirildi",
        });
        this.$router.go(-1);
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
  },
};
</script>
<style lang="css" scoped>
.form-item :deep(label::before) {
  display: none;
}
/* form  */
.form-item :deep(label) {
  font-family: var(--v-regular);
  color: #000;
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
  color: #5a5a5a;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
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
/* form  */
:deep(.ant-modal-body) {
  padding: 40px 45px;
}
:deep(.ant-modal-content) {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);

  backdrop-filter: blur(16px);
}
</style>
