<template lang="html">
  <div class="create-hotel max-w-[1536px] mx-auto py-[60px]">
    <div class="flex gap-6 justify-start mb-10">
      <button
        :class="{ 'bg-blue-bold text-white': $route.name == 'settings' }"
        @click="$router.push('/settings')"
        class="w-[366px] h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] text-blue-bold text-base"
      >
        Foydalanuvchilar
      </button>
      <button
        class="w-[366px] bg-blue-bold h-12 flex uppercase justify-center items-center border border-solid border-blue-bold rounded-[8px] font-[verdana-400] text-white text-base"
      >
        Xabarlar
      </button>
    </div>
    <div class="">
      <a-form-model :model="form" ref="ruleForm" :rules="rules">
        <div class="flex flex-col gap-10">
          <div class="grid grid-cols-1 gap-6">
            <a-form-model-item
              prop="title"
              class="form-item w-full mb-0"
              label="Xabar sarlavhasi"
            >
              <a-input v-model="form.title" placeholder="Xabar sarlavhasini kiriting" />
            </a-form-model-item>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <a-form-model-item prop="message" class="form-item w-full mb-0">
              <quill-editor
                :options="editorOption"
                :value="form.message"
                v-model="form.message"
              />
            </a-form-model-item>
          </div>

          <div class="buttons flex justify-center gap-6">
            <button
              class="py-[13px] w-[366px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
            >
              Bekor qilish
            </button>
            <button
              @click="submit"
              class="py-[13px] w-[366px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
            >
              Xabarni jo‘natish
            </button>
          </div>
        </div>
      </a-form-model>
    </div>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  data() {
    return {
      form: {
        title: "",
        message: "",
      },
      rules: {
        title: [{ required: true, message: "This field is required", trigger: "change" }],
        message: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
      },
      text: "",
      sort: undefined,
      visible: false,
      tabHandler: true,
      editorOption: {
        theme: "snow",
      },
    };
  },
  methods: {
    handleOk() {
      this.visible = false;
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__POST_MESSAGE(this.form);
        } else {
        }
      });
    },
    async __POST_MESSAGE(form) {
      try {
        const data = await this.$store.dispatch("fetchMessages/postMessage", { ...form });
        this.$notification["success"]({
          message: "Success",
          description: "Xabar muvaffaqiyatli yuborildi",
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
/* form  */
.form-item :deep(label::before) {
  display: none;
}
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
:deep(.ql-toolbar.ql-snow),
:deep(.ql-container.ql-snow) {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
:deep(.ql-toolbar.ql-snow) {
  border-radius: 10px 10px 0 0;
}
:deep(.ql-container.ql-snow) {
  border-radius: 0 0 10px 10px;
}
:deep(.ql-container) {
  height: 640px;
}
</style>
