<template lang="html">
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="body flex flex-col gap-4">
      <div class="flex flex-col gap-[10px]">
        <ul class="grid grid-cols-3 gap-4">
          <!-- <li v-for="tabItem in tabList" :key="tabItem.value">
              <button
                :class="{ active: activeTab == tabItem.value }"
                @click="activeTab = tabItem.value"
                class="text-[var(--blue-bold)] h-12 flex justify-center items-center verdana-700 rounded-lg border border-solid border-[var(--blue-bold)] w-full"
              >
                {{ tabItem.label }}
              </button>
            </li> -->
          <li v-for="tabItem in dashboard?.hotels" :key="tabItem?.title?.id">
            <button
              :class="{ active: activeTab == tabItem?.title?.id }"
              @click="activeTab = tabItem?.title?.id"
              class="text-[#5D5D5F] py-[22px] text-[20px] bg-white font-tt font-medium flex justify-center items-center verdana-700 rounded-[16px] w-full"
            >
              {{ tabItem?.title?.title }}
            </button>
          </li>
        </ul>
      </div>
      <div class="map-container bg-white rounded-[24px]">
        <ul class="flex flex-col w-full pl-6 py-6">
          <!-- <li v-for="tabItem in tabList" :key="tabItem.value">
              <button
                :class="{ active: activeTab == tabItem.value }"
                @click="activeTab = tabItem.value"
                class="text-[var(--blue-bold)] h-11 flex justify-center verdana-400 items-center rounded-lg border border-solid border-[var(--blue-bold)] w-full"
              >
                {{ tabItem.label }}
              </button>
            </li> -->
          <li v-for="(region, index) in activeHotel?.data" :key="region?.region?.id">
            <button
              :class="{ active: activeRegion == region?.region?.id, 'pt-5': index != 0 }"
              @click="mapClick(region?.region?.id)"
              class="text-[#5D5D5F] pb-5 flex justify-between font-medium font-tt text-base items-start border-[0] border-b border-solid border-[#F3F4F8] w-full"
            >
              {{ region?.region?.name?.uz }}
              <svg
                v-if="activeRegion == region?.region?.id"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 16L18 12M18 12L14 8M18 12L6 12"
                  stroke="#3C4BDC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
        <div
          class="map-block border-[0] border-l border-solid border-[#EBEBEB] flex flex-col justify-between"
        >
          <div class="2xl:px-[100px] pt-12 px-12">
            <Map @mapHandle="mapClick" :currentRegion="activeRegion" />
          </div>
          <div class="map-infos flex flex-col mt-10 gap-6">
            <div class="px-10">
              <h5 class="font-medium font-tt text-[24px] text-[#3C4BDC]">
                {{ regionsName }}
              </h5>
            </div>
            <div
              class="grid grid-cols-3 py-6 border-[0] border-t border-solid border-[#EBEBEB]"
            >
              <div class="flex flex-col gap-2 items-center justify-between">
                <h6 class="text-[#002856] text-start text-[32px] font-tt font-semibold">
                  {{ hotelsActiveCount }}
                </h6>
                <p class="font-tt font-medium text-start text-base text-[#5D5D5F]">
                  Xostellar soni
                </p>
              </div>
              <div class="flex flex-col gap-2 items-center justify-between relative">
                <span class="h-[52px] w-[1px] absolute bg-[#EBEBEB] left-0"> </span>
                <span class="h-[52px] w-[1px] absolute bg-[#EBEBEB] right-0"> </span>
                <h6 class="text-[#002856] text-[32px] font-tt font-semibold">
                  {{ hotelsPlacesCount }}
                </h6>
                <p class="font-tt font-medium text-base text-[#5D5D5F] text-center">
                  O'rinlar soni
                </p>
              </div>
              <div class="flex flex-col gap-2 items-center justify-between">
                <h6 class="text-[#002856] text-[32px] font-tt font-semibold">
                  {{ hotelsInActiveCount }}
                </h6>
                <p class="font-tt font-medium text-base text-[#5D5D5F] text-center">
                  To’xtatilgan xostellar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="bg-[#F0F0F0] px-10 py-10 rounded-[20px] flex flex-col gap-10">
          <h6 class="text-[--blue-bold] text-[24px] verdana-700 text-center">
            Turfirma faoliyatidan o‘rtacha qoniqish ko‘rsatkichlari
          </h6>
          <div class="grid grid-cols-3 gap-6">
            <a-form-model-item prop="region_id" class="form-item w-full mb-0" label="Yil">
              <a-select placeholder="Yilni tanlang" class="w-full">
                <a-select-option
                  :value="region"
                  v-for="region in [1, 2, 3, 4]"
                  :key="region"
                >
                  {{ region }}</a-select-option
                >
              </a-select>
            </a-form-model-item>
            <a-form-model-item prop="region_id" class="form-item w-full mb-0" label="Kesim">
              <a-select placeholder="Kesimni tanlang" class="w-full">
                <a-select-option
                  :value="region"
                  v-for="region in [1, 2, 3, 4]"
                  :key="region"
                >
                  {{ region }}</a-select-option
                >
              </a-select>
            </a-form-model-item>
            <a-form-model-item prop="region_id" class="form-item w-full mb-0" label="Oy">
              <a-select placeholder="Oyni tanlang" class="w-full">
                <a-select-option
                  :value="region"
                  v-for="region in [1, 2, 3, 4]"
                  :key="region"
                >
                  {{ region }}</a-select-option
                >
              </a-select>
            </a-form-model-item>
          </div>
          <apexchart
            type="line"
            height="500"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div> -->
      <div class="flex gap-[10px] flex-col mt-4">
        <div class="table-container px-6 py-6 rounded-[24px] bg-white">
          <div class="flex justify-between">
            <h1 class="text-[#000] text-[24px] font-tt font-semibold flex gap-4 mb-6">
              Arizalar soni
              <span class="text-[#0808FF]">{{ AplicationstotalCount }}</span>
            </h1>
            <download-excel
              class="btn btn-default"
              :data="dashboard.applications"
              :fields="json_fields"
              worksheet="My Worksheet"
              name="statistic_xotels.xls"
            >
              <button
                class="flex gap-4 px-4 py-2 items-center justify-center bg-[#E0F2E2] font-tt text-[#009A10] text-[14px] font-semibold text-center"
              >
                Excel faylni yuklab olish
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g
                    style="
                      stroke: none;
                      stroke-width: 0;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: none;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 78.42 18.345 v 68.502 c 0 1.741 -1.412 3.153 -3.153 3.153 H 14.733 c -1.741 0 -3.153 -1.412 -3.153 -3.153 V 3.153 C 11.58 1.412 12.991 0 14.733 0 h 45.343 L 78.42 18.345 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 130, 83);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 78.42 18.345 H 62.948 c -1.587 0 -2.873 -1.286 -2.873 -2.873 V 0 L 78.42 18.345 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 170, 109);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 81.953 63.087 H 8.047 c -1.176 0 -2.129 -0.953 -2.129 -2.129 V 39.235 c 0 -1.176 0.953 -2.129 2.129 -2.129 h 73.905 c 1.176 0 2.129 0.953 2.129 2.129 v 21.722 C 84.081 62.133 83.128 63.087 81.953 63.087 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(0, 170, 109);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 53.313 58.602 h -5.286 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 h 5.286 c 0.575 0 1.043 -0.468 1.043 -1.043 v -2.841 c 0 -0.575 -0.468 -1.043 -1.043 -1.043 H 50.07 c -1.678 0 -3.043 -1.365 -3.043 -3.043 v -2.841 c 0 -1.678 1.365 -3.043 3.043 -3.043 h 3.599 c 0.553 0 1 0.448 1 1 s -0.447 1 -1 1 H 50.07 c -0.575 0 -1.043 0.468 -1.043 1.043 v 2.841 c 0 0.575 0.468 1.043 1.043 1.043 h 3.243 c 1.678 0 3.043 1.365 3.043 3.043 v 2.841 C 56.356 57.236 54.991 58.602 53.313 58.602 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(255, 255, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 42.628 58.654 h -4.982 c -1.861 0 -3.375 -1.514 -3.375 -3.375 V 43.748 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 v 11.532 c 0 0.758 0.617 1.375 1.375 1.375 h 4.982 c 0.552 0 1 0.447 1 1 S 43.181 58.654 42.628 58.654 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(255, 255, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 21.723 58.602 c -0.158 0 -0.317 -0.037 -0.467 -0.116 c -0.488 -0.258 -0.674 -0.863 -0.416 -1.352 l 7.329 -13.854 c 0.258 -0.488 0.863 -0.675 1.352 -0.416 c 0.488 0.258 0.674 0.863 0.416 1.352 l -7.329 13.854 C 22.429 58.408 22.082 58.602 21.723 58.602 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(255, 255, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 29.054 58.602 c -0.359 0 -0.706 -0.193 -0.885 -0.532 L 20.84 44.215 c -0.258 -0.488 -0.072 -1.093 0.416 -1.352 c 0.49 -0.258 1.094 -0.071 1.352 0.416 l 7.329 13.854 c 0.258 0.488 0.072 1.094 -0.416 1.352 C 29.372 58.564 29.212 58.602 29.054 58.602 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(255, 255, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 60.945 58.602 c -0.157 0 -0.317 -0.037 -0.467 -0.116 c -0.488 -0.258 -0.675 -0.863 -0.416 -1.352 l 7.329 -13.854 c 0.259 -0.487 0.862 -0.676 1.352 -0.416 c 0.488 0.258 0.675 0.863 0.416 1.352 L 61.83 58.069 C 61.65 58.408 61.304 58.602 60.945 58.602 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(255, 255, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 68.276 58.602 c -0.358 0 -0.705 -0.193 -0.885 -0.532 l -7.329 -13.854 c -0.259 -0.488 -0.072 -1.093 0.416 -1.352 c 0.49 -0.26 1.093 -0.071 1.352 0.416 l 7.329 13.854 c 0.259 0.488 0.072 1.094 -0.416 1.352 C 68.594 58.564 68.434 58.602 68.276 58.602 z"
                      style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: rgb(255, 255, 255);
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </button>
            </download-excel>
          </div>
          <div class="flex flex-col gap-2">
            <div class="table-head">
              <ul class="grid grid-cols-7 gap-2">
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center border-solid border-[#E9ECEF] bg-[#F8F9FA] font-tt text-[#020105] text-[14px] font-medium"
                >
                  Viloyat nomi
                </li>
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center justify-center border-solid border-[#E9ECEF] bg-[#F0F1FD] font-tt text-[#3C4BDC] text-[14px] font-semibold text-center"
                >
                  Ko‘rib chiqish muddati yaqinlashdi
                </li>
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center justify-center border-solid border-[#E9ECEF] bg-[#FDF2E9] font-tt text-[#F2994A] text-[14px] font-semibold text-center"
                >
                  Ko‘rib chiqish muddati kechikdi
                </li>
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center justify-center border-solid border-[#E9ECEF] bg-[#EEE4F9] font-tt text-[#781ECD] text-[14px] font-semibold text-center"
                >
                  Yangi
                </li>
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center justify-center border-solid border-[#E9ECEF] bg-[#E0F2E2] font-tt text-[#009A10] text-[14px] font-semibold text-center"
                >
                  Ko‘rib chiqilmoqda
                </li>
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center justify-center border-solid border-[#E9ECEF] bg-[#EBEBFD] font-tt text-[#5D5FEF] text-[14px] font-semibold text-center"
                >
                  Muvaffaqiyatli yakunlandi
                </li>
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center justify-center border-solid border-[#E9ECEF] bg-[#FCEAEA] font-tt text-[#EB5757] text-[14px] font-semibold text-center"
                >
                  Rad etildi
                </li>
              </ul>
            </div>
            <div class="table-body">
              <div
                v-for="(region, index) in dashboard.applications"
                :key="region?.region.id"
              >
                <ul class="grid grid-cols-7 gap-2">
                  <li
                    class="h-10 px-4 flex items-center bg-[#FAFAFC] border-[0] border-t border-solid border-[#E9ECEF] text-[12px] text-[#020105] font-medium font-tt"
                  >
                    {{ region?.region?.name?.uz }}
                  </li>
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                  >
                    {{ region?.warning }}
                  </li>
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                  >
                    {{ region?.danger }}
                  </li>
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                  >
                    {{ region?.new }}
                  </li>
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                  >
                    {{ region?.in_process }}
                  </li>
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                  >
                    {{ region?.accepted }}
                  </li>
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                  >
                    {{ region?.rejected }}
                  </li>
                </ul>
              </div>
              <!-- <ul v-for="elem in [1, 2, 3, 4, 5, 6]" :key="elem">
                  <li
                    class="h-10 px-4 flex items-center border border-solid border-[#E9ECEF] text-[12px] text-[#212529] justify-center font-tt"
                    v-for="(region, index) in this.dashboard.applications"
                    :key="region.id"
                  >
                    363
                  </li>
                </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Map from "./map.vue";
export default {
  data() {
    return {
      json_fields: {
        "Viloyat nomi": {
          field: "region.name.ru",
        },
        "Ko‘rib chiqish muddati yaqinlashdi": "warning",
        "Ko‘rib chiqish muddati kechikdi": "danger",
        Yangi: "new",
        "Ko‘rib chiqilmoqda": "in_process",
        "Muvaffaqiyatli yakunlandi": "accepted",
        "Rad etildi": "rejected",
      },

      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      activeTab: 1,
      activeRegion: null,
      tabList: [
        {
          label: "Xostellar",
          value: 1,
        },
        {
          label: "O‘tovli oromgohlar",
          value: 2,
        },
        {
          label: "Chodirli oromgohlar",
          value: 3,
        },
      ],
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: undefined,
        },
        colors: ["#E11943"],
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        },
        markers: {
          size: 0,
        },
        yaxis: {
          max: 100,
        },
        legend: {
          show: false,
        },
      },
      regions: [],
      dashboard: {
        applications: [],
        hotels: [],
      },
    };
  },
  computed: {
    activeHotel() {
      return this.dashboard.hotels?.find((item) => item?.title?.id == this.activeTab);
    },
    regionsName() {
      return this.activeHotel?.data?.find((item) => item?.region?.id == this.activeRegion)
        ?.name?.uz;
    },
    hotelsActiveCount() {
      return this.activeHotel?.data?.find((item) => item?.region?.id == this.activeRegion)
        ?.count;
    },
    hotelsInActiveCount() {
      return this.activeHotel?.data?.find((item) => item?.region?.id == this.activeRegion)
        ?.inactive_count;
    },
    hotelsPlacesCount() {
      return this.activeHotel?.data?.find((item) => item?.region?.id == this.activeRegion)
        ?.places;
    },
    AplicationstotalCount() {
      if (this.dashboard?.applications?.length > 0) {
        return this.dashboard?.applications?.reduce((sum, item) => {
          return (
            sum +
            (item?.accepted +
              item?.danger +
              item?.in_process +
              item?.new +
              item?.rejected +
              item?.warning)
          );
        }, 0);
      } else {
        return 0;
      }
    },
  },
  mounted() {
    this.__GET_DASHBOARD();
    this.__GET_REGIONS();
  },
  methods: {
    async mapClick(val) {
      this.activeRegion = val;
    },
    async __GET_DASHBOARD() {
      try {
        const data = await this.$store.dispatch("fetchDashboard/getDashboard");
        this.dashboard = { ...data?.data };
        if (
          this.$store.state.profileInfo?.region_id &&
          this.dashboard.hotels[0].data.length > 0
        ) {
          this.dashboard.hotels.forEach((elem, index) => {
            this.dashboard.hotels[index].data = this.dashboard?.hotels[
              index
            ]?.data.filter(
              (item) => item.region.id == this.$store.state.profileInfo?.region_id
            );
          });
        }
        if (this.$store.state.profileInfo?.region_id) {
          this.dashboard.applications = this.dashboard.applications.filter(
            (item) => item.region.id == this.$store.state.profileInfo?.region_id
          );
        } else {
          [0, 1, 2].forEach((elem) => {
            const allRegions = this.dashboard?.hotels[elem]?.data?.reduce(
              (sum, item) => {
                return {
                  inactive_count: sum.inactive_count + item.inactive_count,
                  count: sum.count + item.count,
                  places: sum.places + item.places,
                  region: {
                    id: 8888,
                    name: {
                      uz: "Республика",
                    },
                  },
                };
              },
              {
                inactive_count: 0,
                count: 0,
                places: 0,
                region: {
                  name: {
                    uz: "",
                  },
                },
              }
            );
            this.dashboard?.hotels[elem]?.data.unshift(allRegions);
          });
        }
        this.activeRegion = this.dashboard?.hotels[0]?.data[0]?.region?.id;
        this.activeTab = this.dashboard?.hotels[0]?.title?.id;
      } catch (e) {}
    },
    async __GET_REGIONS() {
      try {
        const data = await this.$store.dispatch("fetchRegions/getRegions");
        this.regions = data.data.data;
        if (this.$store.state.profileInfo?.region_id) {
          this.regions = this.regions.filter(
            (item) => item.id == this.$store.state.profileInfo?.region_id
          );
        }
        this.activeRegion = this.regions[0]?.id;
      } catch (e) {}
    },
  },
  watch: {
    activeTab() {
      this.activeRegion = this.dashboard?.hotels[0]?.data[0]?.region?.id;
    },
  },
  components: {
    Map,
  },
};
</script>
<style lang="css" scoped>
.font-tt {
  font-family: "TT Interfaces";
}
.bg-yellow10 {
  background: rgba(236, 228, 28, 0.1);
}

:deep(.apexcharts-tooltip-title) {
  background: #000 !important;
  color: #fff !important;
}
.active {
  /* background: var(--blue-bold); */
  /* color: #fff; */
  color: #0808ff;
}
.map-container {
  display: grid;
  grid-template-columns: 266px 1fr;
  gap: 8px;
}
.form-item :deep(.ant-select-selection--single),
.form-item :deep(.ant-select-selection) {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: transparent;
  min-height: 50px;
  color: #5a5a5a;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
  /* display: flex;
    align-items: center; */
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}
.form-item :deep(label) {
  font-family: var(--v-bold);
  color: var(--blue-bold);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
.form-item :deep(.ant-form-item-label) {
  line-height: 0;
  margin-bottom: 6px;
}
.form-item :deep(label::after) {
  display: none;
}
.form-item :deep(.ant-select-selection__placeholder) {
  color: #413f3f;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
}
:deep(.apexcharts-yaxis-label),
:deep(.apexcharts-xaxis-label) {
  color: #161515;

  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
