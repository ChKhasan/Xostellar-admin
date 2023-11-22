<template lang="html">
  <div class="login">
    <div>
      <div class="max-w-[1080px] w-full h-[100vh] form-block">
        <div class="px-[140px] flex flex-col items-center justify-center h-full w-full">
          <div class="w-full flex flex-col gap-[50px]">
            <h4
              class="font-[verdana-700] text-white uppercase leading-[48px] text-[32px]"
            >
              Xostellar Yagona Reyesrti tizimi
            </h4>
            <a-form-model :model="form" ref="ruleForm" :rules="rules">
              <div class="flex flex-col gap-[60px]">
                <a-form-model-item
                  prop="username"
                  class="form-item w-full mb-0"
                  label="Login"
                >
                  <div class="flex items-center relative">
                    <a-input
                      v-model="form.username"
                      placeholder="Loginingizni kiriting"
                    />
                    <svg
                      class="absolute right-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z"
                        stroke="#595959"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                        stroke="#595959"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#595959"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a-form-model-item>
                <a-form-model-item
                  prop="password"
                  class="form-item w-full mb-0"
                  label="Parol"
                >
                  <div class="flex items-center relative">
                    <a-input
                      :type="passwordHide ? 'text' : 'password'"
                      v-model="form.password"
                      placeholder="Parolingizni kiriting"
                    />
                    <button
                      class="absolute right-6"
                      @click="passwordHide = !passwordHide"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z"
                          stroke="#595959"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
                          stroke="#595959"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </a-form-model-item>
              </div>
            </a-form-model>
          </div>
          <div class="w-full flex flex-col gap-10 mt-10">
            <span class="flex gap-6 items-center">
              <a-checkbox />
              <p class="font-[verdana-400] text-base text-white">Eslab qolish</p></span
            >
            <button
              @click="submit"
              class="w-full flex py-[18px] justify-center text-[#0E3685] uppercase font-[verdana-700] bg-white rounded-[12px]"
            >
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "empty",
  middleware: "login",
  data() {
    return {
      passwordHide: false,
      rules: {
        username: [
          { required: true, message: "Username is required", trigger: "change" },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "change" },
        ],
      },
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__AUTH(this.form);
        } else {
        }
      });
    },
    async __AUTH(data) {
      try {
        const res = await this.$store.dispatch("fetchAuth/auth", data);
        localStorage.setItem("auth_token", res.data.token);
        this.$store.commit("logIn");
        this.$router.push("/");
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
.login {
  background-image: url(../../assets/images/login-banner.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.form-block {
  background: rgba(0, 0, 0, 0.6);

  backdrop-filter: blur(10px);
}
.form-item :deep(label) {
  font-family: var(--v-regular);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
.form-item :deep(label::before) {
  display: none;
}
.form-item :deep(.ant-form-item-label) {
  line-height: 0;
  margin-bottom: 12px;
}
.form-item :deep(.ant-input) {
  padding: 18px 24px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.5);
  height: 60px;
  border: none;
}
:deep(.ant-form-item) {
  margin-bottom: 0;
}
:deep(.ant-checkbox-inner) {
  border-radius: 6px;
  border: 2px solid #fff;
  background-color: transparent;
  width: 24px;
  height: 24px;
}
:deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover
    .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner) {
  border-color: #fff;
}
</style>
