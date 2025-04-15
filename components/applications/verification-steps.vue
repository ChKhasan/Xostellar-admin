<script>
import moment from "moment";

export default {
  name: "verification-steps",
  props: ['parentForm', 'reasons', 'application', "loading"],
  data() {
    return {
      rules: {
        act_number: [
          {required: true, message: "This field is required", trigger: "change"},
        ],
        act: [
          {required: true, message: "This field is required", trigger: "change"},
        ],
        rooms: [
          {required: true, message: "This field is required", trigger: "change"},
        ],
        places: [
          {required: true, message: "This field is required", trigger: "change"},
        ],
      },
      reject_comment: false,
      formLast: {
        status: 50,
        act_number: "",
        act: "",
        rooms: null,
        places: null,
      },
      form: {
        status: 50,
        act_number: "",
        act: "",
        rooms: null,
        places: null,
      },
      fileNames: {
        form: '',
        formLast: '',
        formComplete: ''
      },
      formComplete: {
        status: 50,
        act_number: "",
        act: "",
        rooms: null,
        places: null,
      },
      headers: {
        authorization: 'authorization-text',
      },

      dateFormat: 'DD.MM.YYYY  -  HH:mm'
    }
  },
  mounted() {
    this.headers.authorization = 'Bearer ' + localStorage.getItem('auth_token');
  },
  computed: {
    baseUrl() {
      return process.env.baseUrl
    },
    apiUrl() {
      return process.env.fileUrl
    },
    aplicationGetting() {
      return Object.keys(this.application).length > 0
    },
    applicatonFirst() {
      return this.application?.my_gov_application?.canceled_applications[0]?.res?.task
    },
    activeStatus() {
      return this.application.pipe_status
    },
    appUpdateDate() {
      return moment(this.application.updated_at).format(this.dateFormat)
    },
    appCreatedDate() {
      return moment(this.application.created_at).format(this.dateFormat)
    },
    dateEnd() {
      const statusInfo = this.application?.pipe_status_changes?.find(elem => elem.changes.pipe_status === 20)
      const givenDate = new Date(statusInfo?.created_at);
      const daysToAdd = 5;
      const newDate = new Date(givenDate);
      newDate.setDate(givenDate.getDate() + daysToAdd);
      return moment(newDate.toISOString()).format('DD.MM.YYYY')
    },
    isDateEnd() {
      const isDay = new Date()
      const formatDate = moment(isDay).format('DD.MM.YYYY');
      const date1 = new Date(formatDate.split('.').reverse().join('.'));
      const date2 = new Date(this.dateEnd.split('.').reverse().join('.'));
      return date1 >= date2
    }
  },
  methods: {
    moment,
    statusHistory(status) {
      return this.application?.pipe_status_changes?.find(elem => elem.changes.pipe_status === status);
    },
    historyDateFormatter(currentDate) {
      return this.moment(currentDate).format(this.dateFormat)
    },
    handleOk() {
      this.visible = false
    },
    submit(status, ruleForm, form) {
      let isRuleForm
      [110, 90].includes(status) ? isRuleForm = 'ruleForm' : isRuleForm = false
      !form ? this.form.status = status : this[form].status = status
      ruleForm ?
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            status === 100 ? this.$emit('openModal', 100, this[form]) : this.$emit('submit', isRuleForm, this[form])
          } else {
            return false
          }
        }) :
        this.$emit('submit', isRuleForm, form ? this[form] : this.form)
    },
    handleChange(info, form) {
      if (info.file.status === 'done') {
        this[form].act = info.file.response
        this.fileNames[form] = info.file.name
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    aplicationFormGettings() {
      let status90 = this.statusHistory(90)?.changes
      let status80 = this.statusHistory(80)?.changes
      let status100 = this.statusHistory(100)?.changes
      let status110 = this.statusHistory(110)?.changes
      if (status90 || status80) {
        const currentForm = status90 || status80
        for (let item in this.form) {
          this.form[item] = currentForm[item]
        }
        if (!this.statusHistory(110)?.changes)
          for (let item in this.formComplete) {
            this.formComplete[item] = currentForm[item]
          }
      }
      if (status100 || status110) {
        const currentForm = status100 || status110
        for (let item in this.formLast) {
          this.formLast[item] = currentForm[item]
        }
        for (let item in this.formComplete) {
          this.formComplete[item] = currentForm[item]
        }
      }
    }
  },
  watch: {
    aplicationGetting() {
      this.aplicationFormGettings()
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <ApplicationsStepCard
      :file="false"
      v-if="statusHistory(110) || statusHistory(90) ||  activeStatus === 110 || activeStatus === 90"
      :content="[
        'Boshqarma hodimlari tomonidan bartaraf etilgangan kamchiliklar ko‘rib chiqilishi kutilmoqda',
        ]"
      :title="statusHistory(100) ? 'Ariza rad etildi':'Mehmon uyi Reyestrga kiritildi'"
      :subtitle="`Ariza kelib tushgan sana: ${
        statusHistory(110) || statusHistory(90) ?
        historyDateFormatter(statusHistory(110)?.created_at || statusHistory(90)?.created_at):
        appUpdateDate}`"
    >
      <div class="flex flex-col gap-3 my-4">
        <p class="verdana-400 text-base">Sababi: Quyidagi dalolatnoma asosida mehmon uyi kamchiliklari bartaraf
          etilmadi</p>
        <a-form-model class="w-full" :model="formComplete" ref="ruleFormLast">
          <div class="flex gap-4 mt-4">
            <a-form-model-item
              prop="name"
              class="form-item w-full mb-0 max-w-[150px] disabled"
              label="Xona soni"
            >
              <a-input disabled v-model="formComplete.rooms" placeholder="Kiriting"/>
            </a-form-model-item>
            <a-form-model-item
              prop="name"
              class="form-item w-full mb-0 max-w-[150px] disabled"
              label="O’rin-joylar soni"
            >
              <a-input disabled v-model="formComplete.places" placeholder="Kiriting"/>
            </a-form-model-item>
            <a-form-model-item
              prop="name"
              class="form-item w-full mb-0 max-w-[180px] disabled"
              label="Dalolatnoma raqami"
            >
              <a-input disabled v-model="formComplete.act_number" placeholder="Kiriting"/>
            </a-form-model-item>
            <a-form-model-item
              prop="name"
              class="form-item w-full mb-0 max-w-[180px]"
              label="Dalolatnoma"
            >
              <a :href="`${baseUrl}/${formComplete.act}`" target="_blank"
                 class="h-[50px] verdana-400 bg-[#EBEBEB] text-[#020105] text-base flex items-center px-5  rounded-[10px] min-w-[334px] justify-between">
                Dalolatnomani yuklab olish
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55999 15.1001C3.95999 14.7901 2.48999 12.9401 2.48999 8.8901L2.48999 8.7601C2.48999 4.2901 4.27999 2.5001 8.74999 2.5001L15.26 2.5001C19.73 2.5001 21.52 4.2901 21.52 8.7601L21.52 8.8901C21.52 12.9101 20.07 14.7601 16.53 15.0901"
                    stroke="#0D152C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22L12 9.12" stroke="#0D152C" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M8.65001 11.3501L12 8.0001L15.35 11.3501" stroke="#0D152C" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </a-form-model-item>
          </div>
        </a-form-model>
      </div>
      <div class="flex gap-4" v-if="!statusHistory(100)">
        <a :href="application?.certificate?.link" target="_blank" class="v-btn success-btn">Kochirmani yuklab olish</a>
      </div>
    </ApplicationsStepCard>
    <ApplicationsStepCard
      :file="false"
      v-if="statusHistory(85) ||  activeStatus === 85"
      :content="false"
      :completed="statusHistory(85)"
      :title="`Yangi ariza: Mehmon uyi kamchiliklarini bartaraf etilganligi tog’risida ariza #${statusHistory(85)?.changes?.task_id}`"
      :subtitle="`Ariza kelib tushgan sana: ${
        statusHistory(85) ?
        historyDateFormatter(statusHistory(85)?.created_at):
        appUpdateDate}`"
    >
      <div class="flex flex-col gap-3 my-4">

        <a-form-model class="w-full" :model="formLast" ref="ruleFormLast" :rules="rules">
          <div class="flex flex-col gap-3">
            <a-form-model-item
              prop="name"
              class="form-item w-full mb-0 max-w-[180px]"
              label="Kamchiliklar bartaraf etilganligi bo‘yicha hujjat"
            >
              <a :href="`${baseUrl}/${statusHistory(85)?.changes?.flaws_doc}`" target="_blank"
                 class="h-[50px] verdana-400 bg-[#EBEBEB] text-[#020105] text-base flex items-center px-5 border-[#0000004D] rounded-[10px] border border-solid min-w-[334px] justify-between">
                Hujjat fayli
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55999 15.1001C3.95999 14.7901 2.48999 12.9401 2.48999 8.8901L2.48999 8.7601C2.48999 4.2901 4.27999 2.5001 8.74999 2.5001L15.26 2.5001C19.73 2.5001 21.52 4.2901 21.52 8.7601L21.52 8.8901C21.52 12.9101 20.07 14.7601 16.53 15.0901"
                    stroke="#0D152C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22L12 9.12" stroke="#0D152C" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M8.65001 11.3501L12 8.0001L15.35 11.3501" stroke="#0D152C" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </a-form-model-item>
            <p class="verdana-400 text-base text-[#000]">Boshqarma hodimlari tomonidan bartaraf etilgangan kamchiliklar
              ko‘rib chiqilishi kutilmoqda</p>
            <div class="flex gap-4 ">
              <a-form-model-item
                prop="rooms"
                class="form-item w-full mb-0 max-w-[150px]"
                label="Xona soni"
              >
                <a-input v-model="formLast.rooms" placeholder="Kiriting"/>
              </a-form-model-item>
              <a-form-model-item
                prop="places"
                class="form-item w-full mb-0 max-w-[150px]"
                label="O’rin-joylar soni"
              >
                <a-input v-model="formLast.places" placeholder="Kiriting"/>
              </a-form-model-item>
              <a-form-model-item
                prop="act_number"
                class="form-item w-full mb-0 max-w-[180px]"
                label="Dalolatnoma raqami"
              >
                <a-input v-model="formLast.act_number" placeholder="Kiriting"/>
              </a-form-model-item>
              <a-form-model-item
                v-if="activeStatus === 85"
                prop="act"
                class="form-item w-full mb-0 max-w-[180px]"
                label="Dalolatnoma"
              >
                <a-upload
                  name="file"
                  :multiple="true"
                  :action="`${baseUrl}/api/files`"
                  :headers="headers"
                  @change="$event => handleChange($event,'formLast')"
                >
                  <button
                    class="h-[50px] verdana-400 bg-[#EBEBEB] whitespace-nowrap truncate text-[#020105] text-base flex items-center px-5 border-[#0000004D] rounded-[10px] border border-solid min-w-[334px]  max-w-[334px] justify-between">

                    <span class="max-w-[90%] truncate">{{ fileNames['formLast']  ? fileNames['formLast']:'Dalolatnomani biriktirish' }}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.55999 15.1001C3.95999 14.7901 2.48999 12.9401 2.48999 8.8901L2.48999 8.7601C2.48999 4.2901 4.27999 2.5001 8.74999 2.5001L15.26 2.5001C19.73 2.5001 21.52 4.2901 21.52 8.7601L21.52 8.8901C21.52 12.9101 20.07 14.7601 16.53 15.0901"
                        stroke="#0D152C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 22L12 9.12" stroke="#0D152C" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M8.65001 11.3501L12 8.0001L15.35 11.3501" stroke="#0D152C" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </a-upload>
              </a-form-model-item>
              <a-form-model-item
                v-else
                prop="act"
                class="form-item w-full mb-0 max-w-[180px]"
                label="Dalolatnoma"
              >
                <a
                  :href="`${baseUrl}/${formLast.act}`"
                  class="h-[50px] verdana-400 bg-[#EBEBEB] text-[#020105] text-base flex items-center px-5 border-[#0000004D] rounded-[10px] border border-solid min-w-[334px] justify-between">
                  Dalolatnomani yuklab olish
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.55999 15.1001C3.95999 14.7901 2.48999 12.9401 2.48999 8.8901L2.48999 8.7601C2.48999 4.2901 4.27999 2.5001 8.74999 2.5001L15.26 2.5001C19.73 2.5001 21.52 4.2901 21.52 8.7601L21.52 8.8901C21.52 12.9101 20.07 14.7601 16.53 15.0901"
                      stroke="#0D152C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 22L12 9.12" stroke="#0D152C" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M8.65001 11.3501L12 8.0001L15.35 11.3501" stroke="#0D152C" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </a-form-model-item>
            </div>
          </div>
        </a-form-model>
        <p class="verdana-400 text-base text-[#000]">Mehmon uyi bo’yicha kamchiliklar mavjudmi?</p>
      </div>
      <div class="flex gap-4" v-if="activeStatus === 85">
        <a-button :loading="loading" class="v-btn danger-btn" @click="submit(100,'ruleFormLast','formLast')">Xa, Yakuniy
          rad etish
        </a-button>
        <a-button :loading="loading" class="v-btn blue-btn" @click="submit(110,'ruleFormLast','formLast')">Reyestrga
          kiritish
        </a-button>
      </div>
    </ApplicationsStepCard>
    <ApplicationsStepCard
      :file="false"
      v-if="statusHistory(80) ||  activeStatus === 80"
      :content="false"
      :completed="activeStatus > 80"
      title="Mehmon uyi kamchiliklarini bartaraf etilganligi tog’risida ariza kutilmoqda"
      :subtitle="`Bosqich sanasi: ${
        statusHistory(80) ?
        historyDateFormatter(statusHistory(80)?.created_at):
        appUpdateDate}`"
    >
      <div class="flex flex-col gap-3 mt-4" v-if="activeStatus === 80">
        <p class="verdana-400 text-base">Quyidagi dalolatnoma asosida arizachi tomonidan kamchiliklarni bartaraf
          etilishi kutilmoqda. </p>
        <p class="verdana-400 text-base">90 kun ichida mehmon uyi kamchiliklar bartaraf etilmasa, ariza avtomatik tarza
          Rad etiladi</p>
      </div>

    </ApplicationsStepCard>
    <ApplicationsStepCard
      :file="false"
      v-if="statusHistory(30) || statusHistory(70) || activeStatus === 30 ||  activeStatus === 70"
      :completed="statusHistory(30) || statusHistory(70)"
      :content="[
        'Mehmon uyi bo‘yicha dalolatnoma tuzish va biriktirish',
        ]"
      title="Dalolatnoma biriktirilishi kutilmoqda"
      :subtitle="`Bosqich sanasi: ${
        statusHistory(30) || statusHistory(70) ?
        historyDateFormatter(statusHistory(30)?.created_at || statusHistory(70)?.created_at):
        appUpdateDate}`"
    >
      <div class="flex flex-col gap-3 mb-4">
        <a-form-model class="w-full" :model="form" ref="ruleFormFirst" :rules="rules">
          <div class="flex gap-4 ">
            <a-form-model-item
              prop="rooms"
              class="form-item w-full mb-0 max-w-[150px]"
              label="Xona soni"
            >
              <a-input type="number" min="0" :disabled="!(activeStatus === 30 || activeStatus === 70)" v-model="form.rooms"
                       placeholder="Kiriting"/>
            </a-form-model-item>
            <a-form-model-item
              prop="places"
              class="form-item w-full mb-0 max-w-[150px]"
              label="O’rin-joylar soni"
            >
              <a-input type="number" min="0" :disabled="!(activeStatus === 30 || activeStatus === 70)" v-model="form.places"
                       placeholder="Kiriting"/>
            </a-form-model-item>
            <a-form-model-item
              prop="act_number"
              class="form-item w-full mb-0 max-w-[180px]"
              label="Dalolatnoma raqami"
            >
              <a-input :disabled="!(activeStatus === 30 || activeStatus === 70)" v-model="form.act_number"
                       placeholder="Kiriting"/>
            </a-form-model-item>
            <a-form-model-item
              v-if="activeStatus === 30 ||  activeStatus === 70"
              prop="act"
              class="form-item w-full mb-0 max-w-[180px]"
              label="Dalolatnoma"
            >
              <a-upload
                :disabled="!(activeStatus === 30 || activeStatus === 70)"
                name="file"
                :multiple="true"
                :action="`${baseUrl}/api/files`"
                :headers="headers"
                @change="$event => handleChange($event,'form')"
              >
                <button
                  class="h-[50px] whitespace-nowrap  verdana-400 bg-[#EBEBEB] text-[#020105] text-base flex items-center px-5 border-[#0000004D] rounded-[10px] border border-solid min-w-[334px] max-w-[334px] justify-between">
                 <span class="max-w-[90%] truncate"> {{ fileNames['form']  ? fileNames['form']:'Dalolatnomani biriktirish' }}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.55999 15.1001C3.95999 14.7901 2.48999 12.9401 2.48999 8.8901L2.48999 8.7601C2.48999 4.2901 4.27999 2.5001 8.74999 2.5001L15.26 2.5001C19.73 2.5001 21.52 4.2901 21.52 8.7601L21.52 8.8901C21.52 12.9101 20.07 14.7601 16.53 15.0901"
                      stroke="#0D152C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 22L12 9.12" stroke="#0D152C" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M8.65001 11.3501L12 8.0001L15.35 11.3501" stroke="#0D152C" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </a-upload>
            </a-form-model-item>
            <a-form-model-item
              v-else
              prop="act"
              class="form-item w-full mb-0 max-w-[180px]"
              label="Dalolatnoma"
            >
              <a
                :href="`${baseUrl}/${form.act}`"
                class="h-[50px] verdana-400 bg-[#EBEBEB] text-[#020105] text-base flex items-center px-5 border-[#0000004D] rounded-[10px] border border-solid min-w-[334px] justify-between">
                Dalolatnomani yuklab olish
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55999 15.1001C3.95999 14.7901 2.48999 12.9401 2.48999 8.8901L2.48999 8.7601C2.48999 4.2901 4.27999 2.5001 8.74999 2.5001L15.26 2.5001C19.73 2.5001 21.52 4.2901 21.52 8.7601L21.52 8.8901C21.52 12.9101 20.07 14.7601 16.53 15.0901"
                    stroke="#0D152C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22L12 9.12" stroke="#0D152C" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M8.65001 11.3501L12 8.0001L15.35 11.3501" stroke="#0D152C" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </a-form-model-item>
          </div>
        </a-form-model>
        <p class="verdana-400 text-base" v-if="activeStatus === 30 || activeStatus === 70">Mehmon uyi bo’yicha
          kamchiliklar mavjudmi?</p>
      </div>
      <div class="flex gap-4" v-if="activeStatus === 30 || activeStatus === 70">
        <a-button :loading="loading" class="v-btn warning-btn" @click="submit(80,'ruleFormFirst','form')">Kamchiliklar
          mavjud
        </a-button>
        <a-button :loading="loading" class="v-btn blue-btn" @click="submit(90,'ruleFormFirst','form')">Reyestrga
          kiritish
        </a-button>
      </div>
    </ApplicationsStepCard>
    <ApplicationsStepCard
      v-if="statusHistory(40) || activeStatus === 40"
      :completed="statusHistory(40) && activeStatus !== 40"
      :file="false"
      :content="[
        'Boshqarma hodimlari tomondan ariza korib chiqilishi kutilmoqda',
        'Ariza kamchiliklari bartaraf etilmagan bo‘lsa Rad etiladi'
        ]"
      :title="`Yangi ariza: Ariza kamchiliklarini bartaraf etish uchun yangi ariza #${statusHistory(40)?.changes?.task_id}`"
      :subtitle="`Ariza kelib tushgan sana: ${
        statusHistory(40) ?
        historyDateFormatter(statusHistory(40)?.created_at):
        appUpdateDate}`"
    >
      <div class="flex gap-4 mt-4" v-if="activeStatus === 40">
        <a-button :loading="loading" class="v-btn danger-btn" @click="$emit('openModal',50)">Rad etish</a-button>
        <a-button :loading="loading" class="v-btn blue-btn" @click="submit(70)">Keyingi bosqich</a-button>
      </div>
    </ApplicationsStepCard>
    <ApplicationsStepCard
      v-if="statusHistory(20) || activeStatus === 20"
      :completed="statusHistory(20) && activeStatus !== 20"
      :file="false"
      :content="[
        'Kelib tushgan arizada kamchiliklar va hatolar mavjud. Arizachi tomonidan arizani  5 kun ichida tog’irlashi kutilmoqda. ',
        `5 kun ichida kamchiliklar tog’irlanmasa Rad etiladi. Qayta ariza jo‘natish yakuniy muddati: ${dateEnd}`
        ]"
      :title="statusHistory(60) ? 'Ariza rad etildi':'Qayta ariza kutilmoqda'"
      :subtitle="`Bosqich sanasi: ${
        statusHistory(20) ?
        historyDateFormatter(statusHistory(20)?.created_at):
        appUpdateDate}`"
    >
      <p v-if="statusHistory(60)" class="verdana-400 text-base mt-4">
        Sababi: Ariza kamchiliklari bartaraf etilmadi</p>
      <div class="flex gap-4 mt-4" v-if="activeStatus === 20">
        <a-button :loading="loading" class="v-btn danger-btn" :class="{isPending: !isDateEnd}"
                  @click="$emit('openModal',60)">Rad etish
        </a-button>
      </div>
    </ApplicationsStepCard>
    <ApplicationsStepCard
      :file="false"
      :completed="statusHistory(20) || statusHistory(30)"
      v-if="statusHistory(20) || statusHistory(30) || activeStatus === null"
      :content="[
        'Boshqarma hodimlari tomonidan ariza korib chiqilishi kutilmoqda.',
        'Kamchiliklar mavjud bo‘lsa “Kamchiliklar mavjud” knopkani bosing. Bu orqali arizachi qayta ariza jo‘natishi lozim.'
        ]"
      :title="`Ariza #${application?.task_id}: Hujjatlar ko‘rib chiqilmoqda`"
      :subtitle="`Ariza kelib tushgan sana: ${
        statusHistory(20) ?
        historyDateFormatter(statusHistory(20)?.created_at):
        appUpdateDate}`"
    >
      <div class="flex gap-4 mt-4" v-if="!(statusHistory(20) || statusHistory(30))">
        <a-button :loading="loading" class="v-btn warning-btn" @click="submit(20)">Kamchiliklar mavjud</a-button>
        <a-button :loading="loading" class="v-btn blue-btn" @click="submit(30)">Keyingi bosqich</a-button>
      </div>
    </ApplicationsStepCard>

  </div>
</template>

<style scoped lang="css">

:deep(.ant-upload-list) {
  display: none;
}

.v-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'verdana-400', sans-serif;
  font-size: 16px;
  color: #fff;
  border: none;
  min-height: 48px;
}

.warning-btn {
  background: #FF9900;
}

.blue-btn {
  background: var(--blue-bold);
}

.danger-btn {
  background: var(--red-dark2);
}

.success-btn {
  background: #29CC6A;
}

/* form  */
.form-item :deep(label) {
  font-family: var(--v-regular);
  font-size: 16px;
  line-height: 24px;
  text-align: left;
}

.form-item :deep(.ant-form-item-label) {
  line-height: 0;
  margin-bottom: 6px;
}

.form-item :deep(.ant-input) {
  padding: 10px 20px;
  color: #000;
  font-family: var(--v-regular);
  font-size: 16px;
  font-style: normal;
  line-height: 150%; /* 24px */
  background-color: transparent;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #0000004D;


}

.form-item :deep(.ant-input::placeholder) {
  color: #C2C2C3;
}

.form-item :deep(.ant-select-selection__placeholder) {
  color: #C2C2C3;
}

.disabled :deep(.ant-input) {
  background: #EBEBEB;
  border: 0;
}

.isPending {
  background: grey;
  pointer-events: none;
}
</style>
