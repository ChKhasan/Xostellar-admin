<template lang="html">
  <div class="h-[100vh] bg-bg-grey">
    <div class="layout">
      <div class="toolbar w-[336px] fixed top-0 left-0 h-full">
        <div class="relative h-full flex flex-col justify-between pb-6">
          <div>
            <div class="px-6">
              <div
                class="logo flex flex-col gap-[14px] items-center border-[0] border-b border-solid border-white py-6"
              >
                <div>
                  <img src="../assets/images/logo.png" alt="" />
                </div>
                <h3 class="font-[verdana-700] text-white text-base">Turizm qo‘mitasi</h3>
              </div>
            </div>
            <div class="menu px-6 mt-10">
              <ul class="flex flex-col gap-6">
                <li>
                  <nuxt-link
                    to="/"
                    :class="{ active: $route.name == 'index' }"
                    class="font-[verdana-400] text-base leading-6 text-white flex gap-6 hover:text-white px-6 py-3 rounded-[6px]"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M2 22H22"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 16.5H10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 16.5H17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 12H10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 12H17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 7.5H10"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 7.5H17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >Xostellar
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/applications"
                    :class="{ active: $route.name == 'applications' }"
                    class="font-[verdana-400] text-base leading-6 text-white flex gap-6 hover:text-white px-6 py-3 rounded-[6px]"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2V8L14 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 8L10 6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >Arizalar</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/information"
                    :class="{
                      active:
                        $route.name == 'information' ||
                        $route.name == 'information-additional',
                    }"
                    class="font-[verdana-400] text-base leading-6 text-white flex gap-6 hover:text-white px-6 py-3 rounded-[6px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 13H12"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 17H16"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >Ma’lumotnoma</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/settings"
                    :class="{
                      active:
                        $route.name == 'settings' || $route.name == 'settings-messages',
                    }"
                    class="font-[verdana-400] text-base leading-6 text-white flex gap-6 hover:text-white px-6 py-3 rounded-[6px]"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    >Sozlamalar</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="px-6">
            <a-popover v-model="visible" title="Chiqish" trigger="click">
              <button
                slot="content"
                @click="logout"
                class="logout-btn font-[verdana-400] text-base rounded-[12px] px-4 py-2 text-white flex justify-center w-full"
              >
                LogOut
              </button>
              <button
                class="flex gap-[18px] items-center px-[6px] font-[verdana-400] text-base text-white"
              >
                <img
                  class="h-8 w-8 rounded-[6px] overflow-hidden"
                  src="../assets/images/avatar.png"
                  alt=""
                />{{$store.state.profileInfo?.username}}
              </button>
            </a-popover>
          </div>
        </div>
      </div>
      <div class="body ml-[336px]">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "auth",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("fetchAuth/logOut");
        localStorage.removeItem("auth_token");
        this.$router.push("/admin/login");
      } catch (e) {
        localStorage.removeItem("auth_token");
        this.$router.push("/admin/login");
      }
    },
  },
};
</script>
<style lang="css" scoped>
.toolbar {
  background: linear-gradient(215deg, #012f46 0%, #010d1d 47.19%, #01354c 141.84%);
  /* 10 */
  box-shadow: 0px 4.13688px 12.41065px 2.06844px rgba(0, 0, 0, 0.12);
}
.logout-btn {
  background: linear-gradient(215deg, #012f46 0%, #010d1d 47.19%, #01354c 141.84%);
}
.menu .active {
  background: rgba(255, 255, 255, 0.36);
  pointer-events: none;
}
</style>
