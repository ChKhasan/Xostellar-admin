<template lang="html">
  <div class="max-w-[1536px] mx-auto py-10">
    <div class="flex flex-col gap-[10px]">
      <div class="grid grid-cols-3 gap-[10px]">
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold">
            Xostellar, oʼtovli va chodirli oromgohlar soni
          </p>
          <h4 class="text-[24px] text-[#437FEC] font-bold">
            {{
              `${dashboard?.allHotelsCount || 0}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }}
          </h4>
        </div>
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold">Aktiv mehmon uylari</p>
          <h4 class="text-[24px] text-[#00B55D] font-bold">
            {{
              `${dashboard?.activeHotelsCount || 0}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }}
          </h4>
        </div>
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold">To‘xtatilgan mehmon uylari</p>
          <h4 class="text-[24px] text-[#BB2649] font-bold">
            {{
              `${dashboard?.nonActiveHotelsCount || 0}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                " "
              )
            }}
          </h4>
        </div>
      </div>
      <div class="py-6 bg-white rounded-[10px] px-6 flex justify-between">
        <h4 class="text-[24px] font-semibold">Arizalar soni</h4>
        <h4 class="text-[24px] font-semibold">
          {{
            `${dashboard?.allApplicationsCount || 0}`.replace(
              /\B(?=(\d{3})+(?!\d))/g,
              " "
            )
          }}
        </h4>
      </div>
      <div class="grid grid-cols-4 gap-[10px]">
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold text-[#3C4BDC]">Yangi</p>
          <h5 class="text-[24px] font-bold py-1">
            {{
              `${dashboard?.newApplicationsCount || 0}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                " "
              )
            }}
          </h5>
          <ul class="flex flex-col gap-3">
            <li
              v-if="dashboard?.applications?.new"
              class="flex justify-between"
              v-for="[appName, appVal] in dashboard?.applications?.new &&
              Object.entries(dashboard?.applications?.new)"
            >
              <p class="text-base font-semibold">{{ appName }}</p>
              <p class="text-base font-semibold">{{ appVal }}</p>
            </li>
          </ul>
        </div>
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold text-[#FFA909]">Ko’rib chiqilmoqda</p>
          <h5 class="text-[24px] font-bold py-1">
            {{
              `${dashboard?.inProcessApplicationsCount || 0}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                " "
              )
            }}
          </h5>
          <ul class="flex flex-col gap-3">
            <li
              v-if="dashboard?.applications?.in_process"
              class="flex justify-between"
              v-for="[appName, appVal] in dashboard?.applications?.in_process &&
              Object.entries(dashboard?.applications?.in_process)"
            >
              <p class="text-base font-semibold">{{ appName }}</p>
              <p class="text-base font-semibold">{{ appVal }}</p>
            </li>
          </ul>
        </div>
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold text-[#00B55D]">Muvaffaqiyatli yakunlandi</p>
          <h5 class="text-[24px] font-bold py-1">
            {{
              `${dashboard?.acceptedApplicationsCount || 0}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                " "
              )
            }}
          </h5>
          <ul class="flex flex-col gap-3">
            <li
              v-if="dashboard?.applications?.accepted"
              class="flex justify-between"
              v-for="[appName, appVal] in dashboard?.applications?.accepted &&
              Object.entries(dashboard?.applications?.accepted)"
            >
              <p class="text-base font-semibold">{{ appName }}</p>
              <p class="text-base font-semibold">{{ appVal }}</p>
            </li>
          </ul>
        </div>
        <div class="py-3 bg-white rounded-[10px] px-6 flex flex-col gap-3">
          <p class="text-base font-semibold text-[#BB2649]">Rad etildi</p>
          <h5 class="text-[24px] font-bold py-1">
            {{
              `${dashboard?.rejectedApplicationsCount || 0}`.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                " "
              )
            }}
          </h5>
          <ul class="flex flex-col gap-3">
            <li
              v-if="dashboard?.applications?.rejected"
              class="flex justify-between"
              v-for="[appName, appVal] in dashboard?.applications?.rejected &&
              Object.entries(dashboard?.applications?.rejected)"
            >
              <p class="text-base font-semibold">{{ appName }}</p>
              <p class="text-base font-semibold">{{ appVal }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-2 h-full">
        <div class="py-[50px] h-full bg-white rounded-[10px] px-10">
          <apexchart
            v-if="chartOptionsHorizontal.xaxis.categories.length > 0"
            type="bar"
            style="height: 600px"
            height="100%"
            :options="chartOptionsHorizontal"
            :series="seriesOrderClient"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dashboard: {},
      seriesOrderClient: [
        {
          data: [],
        },
      ],
      chartOptionsHorizontal: {
        chart: {
          height: 1000,
          type: "bar",
        },
        title: {
          text: "Menmon uylari joylashgan hududlar",
          align: "left",
          style: {
            fontSize: "19px",
            fontWeight: "600",
            fontFamily: "Verdana-700",
            color: "#263238",
          },
        },

        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            show: true,
          },
        },
        colors: ["#E440FF"],
        legend: {
          position: "top",
          horizontalAlign: "center",
          offsetX: 40,
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  async mounted() {
    this.__GET_DASHBOARD();
  },
  methods: {
    async __GET_DASHBOARD() {
      try {
        const data = await this.$store.dispatch("fetchDashboard/getDashboard");
        this.chartOptionsHorizontal.xaxis.categories = data?.data?.hotels.map(
          (item) => item?.region_name
        );
        this.dashboard = data?.data;
        this.seriesOrderClient[0].data = data?.data?.hotels.map((item) => item?.count);
      } catch (e) {}
    },
  },
};
</script>
<style lang="css" scoped></style>
