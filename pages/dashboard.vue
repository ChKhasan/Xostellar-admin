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
          <h1 class="text-[#000] text-[24px] font-tt font-semibold flex gap-4 mb-6">
            Arizalar soni <span class="text-[#0808FF]">{{ AplicationstotalCount }}</span>
          </h1>
          <div class="flex flex-col gap-2">
            <div class="table-head">
              <ul class="grid grid-cols-7 gap-2">
                <li
                  class="px-4 py-2 rounded-t-[8px] border flex items-center border-solid border-[#E9ECEF] bg-[#F8F9FA] font-tt text-[#020105] text-[14px] font-medium"
                >
                  Shahar nomi
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
        this.dashboard = data?.data;
        this.activeRegion = this.dashboard?.hotels[0]?.data[0]?.region?.id;
        this.activeTab = this.dashboard?.hotels[0]?.title?.id;
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
      } catch (e) {}
    },
    async __GET_REGIONS() {
      try {
        const data = await this.$store.dispatch("fetchRegions/getRegions");
        this.regions = data.data.data;
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
