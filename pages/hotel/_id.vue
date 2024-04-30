<template lang="html">
  <div class="hotek-inner max-w-[1536px] mx-auto py-10">
    <div class="flex justify-between items-center">
      <button
        @click="$router.go(-1)"
        class="flex gap-[10px] w-[236px] h-11 border border-solid border-blue-bold bg-blue-bold rounded-[8px] justify-center items-center text-white font-[verdana-400] text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4999 12H3.66992"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Orqaga
      </button>
     <div class="flex gap-4">
       <a :href="info?.application?.certificate?.link" target="_blank"  v-if="info?.deregistration_date === null"
         class="uppercase hover:text-white flex gap-[10px] px-6 h-[50px] bg-[#00CD69] rounded-[8px] justify-center items-center text-white font-[verdana-400] text-base"
       >
         Kochirma
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M13 2V6C13 8.20914 14.7909 10 17 10L21 10M3 6L3 18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V11.6569C21 10.596 20.5786 9.57857 19.8284 8.82843L14.1716 3.17157C13.4214 2.42143 12.404 2 11.3431 2L7 2C4.79086 2 3 3.79086 3 6Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
           <path d="M6.43652 18V13.7051H7.82812C8.35547 13.7051 8.69922 13.7266 8.85938 13.7695C9.10547 13.834 9.31152 13.9746 9.47754 14.1914C9.64355 14.4062 9.72656 14.6846 9.72656 15.0264C9.72656 15.29 9.67871 15.5117 9.58301 15.6914C9.4873 15.8711 9.36523 16.0127 9.2168 16.1162C9.07031 16.2178 8.9209 16.2852 8.76855 16.3184C8.56152 16.3594 8.26172 16.3799 7.86914 16.3799H7.30371V18H6.43652ZM7.30371 14.4316V15.6504H7.77832C8.12012 15.6504 8.34863 15.6279 8.46387 15.583C8.5791 15.5381 8.66895 15.4678 8.7334 15.3721C8.7998 15.2764 8.83301 15.165 8.83301 15.0381C8.83301 14.8818 8.78711 14.7529 8.69531 14.6514C8.60352 14.5498 8.4873 14.4863 8.34668 14.4609C8.24316 14.4414 8.03516 14.4316 7.72266 14.4316H7.30371Z" fill="white"/>
           <path d="M10.4355 13.7051H12.0205C12.3779 13.7051 12.6504 13.7324 12.8379 13.7871C13.0898 13.8613 13.3057 13.9932 13.4854 14.1826C13.665 14.3721 13.8018 14.6045 13.8955 14.8799C13.9893 15.1533 14.0361 15.4912 14.0361 15.8936C14.0361 16.2471 13.9922 16.5518 13.9043 16.8076C13.7969 17.1201 13.6436 17.373 13.4443 17.5664C13.2939 17.7129 13.0908 17.8271 12.835 17.9092C12.6436 17.9697 12.3877 18 12.0674 18H10.4355V13.7051ZM11.3027 14.4316V17.2764H11.9502C12.1924 17.2764 12.3672 17.2627 12.4746 17.2354C12.6152 17.2002 12.7314 17.1406 12.8232 17.0566C12.917 16.9727 12.9932 16.835 13.0518 16.6436C13.1104 16.4502 13.1396 16.1875 13.1396 15.8555C13.1396 15.5234 13.1104 15.2686 13.0518 15.0908C12.9932 14.9131 12.9111 14.7744 12.8057 14.6748C12.7002 14.5752 12.5664 14.5078 12.4043 14.4727C12.2832 14.4453 12.0459 14.4316 11.6924 14.4316H11.3027Z" fill="white"/>
           <path d="M14.7803 18V13.7051H17.7246V14.4316H15.6475V15.4482H17.4404V16.1748H15.6475V18H14.7803Z" fill="white"/>
         </svg>


       </a>
       <a :href="`${baseUrl}/generate-application/${info?.application?.task_id}`" target="_blank" v-if="info?.deregistration_date === null"
         class="uppercase flex hover:text-white gap-[10px] px-6 h-[50px] bg-[#F2994A] rounded-[8px] justify-center items-center text-white font-[verdana-400] text-base"
       >
         Ariza
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M4 6C4 3.79086 5.79086 2 8 2H15.3431C16.404 2 17.4214 2.42143 18.1716 3.17157L20.8284 5.82843C21.5786 6.57857 22 7.59599 22 8.65685V18C22 20.2091 20.2091 22 18 22H8C5.79086 22 4 20.2091 4 18V6Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
           <path d="M9 7L17 7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
           <path d="M9 12H17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
           <path d="M9 17H13" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
         </svg>



       </a>
       <button
         v-if="$store.state.profileInfo.role == 'region_subadmin'"
         @click="$router.push(`/hotel/edit/${info?.id}`)"
         class="uppercase flex gap-[10px] px-6 h-[50px] border border-solid border-blue-bold bg-blue-bold rounded-[8px] justify-center items-center text-white font-[verdana-400] text-base"
       >
         Ma’lumotlarni o‘zgartirish
         <svg
           width="25"
           height="24"
           viewBox="0 0 25 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M8.5 12H16.5"
             stroke="white"
             stroke-width="1.5"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             d="M12.5 16V8"
             stroke="white"
             stroke-width="1.5"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
           <path
             d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
             stroke="white"
             stroke-width="1.5"
             stroke-linecap="round"
             stroke-linejoin="round"
           />
         </svg>
       </button>
     </div>
    </div>
    <div class="body mt-10 flex flex-col gap-10">
      <div class="title w-full flex justify-center bg-blue-grey py-[10px] rounded-[10px]">
        <h1 class="font-[verdana-700] text-[24px] text-white">Xostellar ma’lumotlari</h1>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Xostellar nomi</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.name }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">
            Xostellar joylashgan hudud
          </p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.region?.name?.uz }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Xostellar manzili</p>
          <h5 class="text-[24px] text-white font-bold">
            {{ info?.address_from_application }}
          </h5>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Tashkilot yuridik nomi</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.legal_name }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">
            Reyestrga kiritilgan sanasi
          </p>
          <h5 class="text-[24px] text-white font-bold">
            {{ moment(info?.updated_at).format("DD.MM.YYYY - HH:MM") }}
          </h5>
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-5 rounded-[6px] bg-blue-bold min-h-[150px] px-[30px] py-[30px]"
      >
        <div class="justify-between flex flex-col">
          <p class="text-white font-[verdana-400] text-base">Reyestr raqami</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.register_number }}</h5>
        </div>
        <div class="rounded-[6px] justify-between flex flex-col bg-blue-bold">
          <p class="text-white font-[verdana-400] text-base">STIR raqami</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.tin }}</h5>
        </div>
        <div class="justify-between flex flex-col relative" >
          <button @click="visible = true" class="absolute right-0 bottom-4" v-if="$store.state.profileInfo.role == 'region_subadmin'">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0399 3.01976L8.15988 10.8998C7.85988 11.1998 7.55988 11.7898 7.49988 12.2198L7.06988 15.2298C6.90988 16.3198 7.67988 17.0798 8.76988 16.9298L11.7799 16.4998C12.1999 16.4398 12.7899 16.1398 13.0999 15.8398L20.9799 7.95976C22.3399 6.59976 22.9799 5.01976 20.9799 3.01976C18.9799 1.01976 17.3999 1.65976 16.0399 3.01976Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p class="text-white font-[verdana-400] text-base">Xostellar holati</p>
          <h5
            class="text-[24px] font-bold"
            :class="{ 'text-green-light': info?.status, 'text-red-dark': !info?.status }"
          >
             <span v-if="info?.deregistration_date !== null"  class="text-red-dark"
             >Registerdan chiqarilgan</span
             >
            <span
                v-else
                :class="{ 'text-green-light': info?.status, 'text-red-dark': !info?.status }"
            >{{ info?.status ? "Aktiv" : "To‘xtatilgan" }}</span
            >
          </h5>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-6">
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">
            Xostellar telefon raqamlari
          </p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.phone_number }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Elektron manzili</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.email }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Veb sayti</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.website }}</h5>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="px-[30px] w-full rounded-[6px] py-[30px] min-h-[150px] justify-between items-center flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Xostellar egasi</p>
          <h5 class="text-[24px] text-white font-bold">
            {{ info?.director_full_name }}
          </h5>
        </div>
      </div>
      <div class="map min-h-[700px]">
        <yandex-map
          :coords="coords"
          :zoom="10"
          style="height: 700px"
          class="min-h-[700px]"
        >
          <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
        </yandex-map>
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.152394473258!2d69.24323909041384!3d41.32729942574873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b711d027053%3A0x2ec050777a5a6873!2z0JPQsNC90LPQsA!5e0!3m2!1sru!2s!4v1700216322446!5m2!1sru!2s"
          class="w-full"
          height="700"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> -->
      </div>
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
              Xostellar faoliyati holatini o‘zgartirish
            </p>
            <p
              class="text-base font-[verdana-400] text-blue-bold flex items-center gap-10"
            >
              Joriy holat:
              <span
                class="font-[verdana-700]"
                :class="{ 'text-green': info?.status, 'text-red-dark': !info?.status }"
                >{{ info?.status ? "Aktiv" : "To‘xtatilgan" }}</span
              >
            </p>
            <p
              class="text-base font-[verdana-400] text-blue-bold flex items-center gap-10"
            >
              O‘zgaradigan holati:
              <span
                class="font-[verdana-700]"
                :class="{ 'text-green': !info?.status, 'text-red-dark': info?.status }"
                >{{ !info?.status ? "Aktiv" : "To‘xtatilgan" }}</span
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
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      info: {
        name: "",
        lat: "",
        lon: "",
        status: "",
        region_id: undefined,
        address: {
          ru: "",
          en: "",
          uz: "",
        },
      },
      coords: [],
      form: {},
      visible: false,
    };
  },
  computed:{
    baseUrl() {
      return process.env.baseUrl
    },
  },
  mounted() {
    this.__GET_HOTEL(this.$route.params.id);
  },
  methods: {
    moment,
    handleOk() {
      this.visible = false;
    },
    submit() {
      this.__EDIT_HOTEL(
        {
          ...this.form,
          status: this.form?.status == 1 ? 0 : 1,
        },
        "update"
      );
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
    async __GET_HOTEL(id) {
      try {
        const data = await this.$store.dispatch("fetchHotels/getHotelsById", id);
        this.info = data?.data;
        this.coords = [this.info?.lat, this.info?.lon];
        this.form.name = data?.data.name;
        this.form.region_id = data?.data.region_id;
        this.form.lat = data?.data.lat;
        this.form.lon = data?.data.lon;
        this.form.status = data?.data.status;
        this.form.address = data?.data.address;
      } catch (e) {}
    },
  },
};
</script>
<style lang="css" scoped></style>
