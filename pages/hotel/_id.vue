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
      <button
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
    <div class="body mt-10 flex flex-col gap-10">
      <div class="title w-full flex justify-center bg-blue-grey py-[10px] rounded-[10px]">
        <h1 class="font-[verdana-700] text-[24px] text-white">
          Xostellar ma’lumotlari
        </h1>
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
          <p class="text-white font-[verdana-400] text-base">
            Xostellar manzili
          </p>
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
        <div class="justify-between flex flex-col relative">
          <button @click="visible = true" class="absolute right-0 bottom-4">
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
            {{ info?.status ? "Aktiv" : "To‘xtatilgan" }}
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
            {{ info?.director_surname }} {{ info?.director_name }}
            {{ info?.director_fathers_name }}
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
