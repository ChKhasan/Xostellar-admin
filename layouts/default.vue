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
                    :class="{
                      active: $route.name == 'index' || $route.name.includes('hotel'),
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
                    to="/dashboard"
                    :class="{
                      active:
                        $route.name == 'dashboard' || $route.name.includes('dashboard'),
                    }"
                    class="font-[verdana-400] text-base leading-6 text-white flex gap-6 hover:text-white px-6 py-3 rounded-[6px]"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M13.5 7.25C13.0858 7.25 12.75 7.58579 12.75 8C12.75 8.41421 13.0858 8.75 13.5 8.75V7.25ZM16.2764 8.55279L15.6056 8.8882V8.8882L16.2764 8.55279ZM16.3292 10.3354C16.5144 10.7059 16.9649 10.8561 17.3354 10.6708C17.7059 10.4856 17.8561 10.0351 17.6708 9.66459L16.3292 10.3354ZM16.1272 8.91119L16.5384 8.28396L15.284 7.46158L14.8728 8.08881L16.1272 8.91119ZM12.7644 12.6729L12.1372 12.2617V12.2617L12.7644 12.6729ZM11.0726 12.6424L10.431 13.0308L11.0726 12.6424ZM9.16445 9.49006L8.52284 9.87844H8.52284L9.16445 9.49006ZM7.43044 9.5302L6.77155 9.17193L7.43044 9.5302ZM4.34111 13.6417C4.14324 14.0056 4.27783 14.461 4.64173 14.6589C5.00562 14.8568 5.46103 14.7222 5.65889 14.3583L4.34111 13.6417ZM5 1.75H17V0.25H5V1.75ZM20.25 5V17H21.75V5H20.25ZM17 20.25H5V21.75H17V20.25ZM1.75 17V5H0.25V17H1.75ZM5 20.25C3.20507 20.25 1.75 18.7949 1.75 17H0.25C0.25 19.6234 2.37665 21.75 5 21.75V20.25ZM20.25 17C20.25 18.7949 18.7949 20.25 17 20.25V21.75C19.6234 21.75 21.75 19.6234 21.75 17H20.25ZM17 1.75C18.7949 1.75 20.25 3.20507 20.25 5H21.75C21.75 2.37665 19.6234 0.25 17 0.25V1.75ZM5 0.25C2.37665 0.25 0.25 2.37665 0.25 5H1.75C1.75 3.20507 3.20507 1.75 5 1.75V0.25ZM13.5 8.75H15.382V7.25H13.5V8.75ZM15.6056 8.8882L16.3292 10.3354L17.6708 9.66459L16.9472 8.21738L15.6056 8.8882ZM15.382 8.75C15.4767 8.75 15.5632 8.8035 15.6056 8.8882L16.9472 8.21738C16.6508 7.6245 16.0448 7.25 15.382 7.25V8.75ZM14.8728 8.08881L12.1372 12.2617L13.3917 13.084L16.1272 8.91119L14.8728 8.08881ZM11.7142 12.2541L9.80606 9.10169L8.52284 9.87844L10.431 13.0308L11.7142 12.2541ZM6.77155 9.17193L4.34111 13.6417L5.65889 14.3583L8.08934 9.88848L6.77155 9.17193ZM9.80606 9.10169C9.1065 7.946 7.41688 7.98511 6.77155 9.17193L8.08934 9.88848C8.18153 9.71893 8.4229 9.71334 8.52284 9.87844L9.80606 9.10169ZM12.1372 12.2617C12.0363 12.4155 11.8095 12.4114 11.7142 12.2541L10.431 13.0308C11.0978 14.1323 12.6857 14.1609 13.3917 13.084L12.1372 12.2617Z"
                        fill="white"
                      /></svg
                    >Dashboard</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/applications"
                    :class="{
                      active:
                        $route.name == 'applications' ||
                        $route.name.includes('applications'),
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
                    >Arizalar
                  </nuxt-link>
                </li>
                <li v-if="$store.state.profileInfo?.role == 'admin'">
                  <nuxt-link
                    to="/information"
                    :class="{
                      active:
                        $route.name == 'information' ||
                        $route.name.includes('information'),
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
                        $route.name == 'settings' || $route.name.includes('settings'),
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
                />{{ $store.state.profileInfo?.name }}
              </button>
            </a-popover>
          </div>
        </div>
      </div>
      <div class="body ml-[336px] 2xl:px-4">
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
  z-index: 1000;

}
.logout-btn {
  background: linear-gradient(215deg, #012f46 0%, #010d1d 47.19%, #01354c 141.84%);
}
.menu .active {
  background: rgba(255, 255, 255, 0.36);
  pointer-events: none;
}
</style>
