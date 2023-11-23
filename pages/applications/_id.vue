<template lang="html">
  <div class="create-hotel max-w-[1536px] mx-auto py-[60px]">
    <div class="flex justify-start items-center">
      <button
        @click="$router.push('/applications')"
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
      <div class="grid grid-cols-3 gap-6">
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">Tashkilot yuridik nomi</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.legal_name }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">STIR raqami</p>
          <h5 class="text-[24px] text-white font-bold">{{ info?.tin }}</h5>
        </div>
        <div
          class="px-[30px] rounded-[6px] py-[30px] min-h-[150px] justify-between flex flex-col bg-blue-bold"
        >
          <p class="text-white font-[verdana-400] text-base">
            Xostellar rahbari
          </p>
          <h5 class="text-[24px] text-white font-bold">
            {{ info?.director_surname }} {{ info?.director_name }}
            {{ info?.director_fathers_name }}
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

      <div class="">
        <a-form-model :model="form" ref="ruleForm" :rules="rules">
          <div class="flex flex-col gap-10">
            <div class="grid grid-cols-2 gap-6">
              <a :href="`https://hotels.ndc.uz/storage/${files?.state_certificate}`">
                <div
                  class="border-[2px] border-solid rounded-[6px] border-[#5A5A5A] px-6 py-6"
                >
                  <p class="ant-upload-drag-icon flex justify-center">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00141989 5.37681C0.20726 4.43489 0.471302 3.51709 1.07037 2.73263C2.25856 1.17365 3.85985 0.502677 5.7919 0.504096C14.802 0.50977 23.8107 0.504096 32.8208 0.508351C35.4839 0.50977 34.9885 0.27571 36.9064 2.19075C40.0465 5.32574 43.1767 8.47066 46.3296 11.5929C46.9059 12.1631 47.1785 12.7859 47.1657 13.6015C47.1331 15.6769 47.1544 17.7536 47.1544 19.8304C47.1544 20.0148 47.1544 20.1978 47.1544 20.412H43.55V15.0059H42.8871C40.7904 15.0059 38.6936 15.0087 36.5969 15.0059C34.1467 15.0017 32.649 13.5022 32.6448 11.0496C32.6419 8.76855 32.6448 6.48753 32.6448 4.13416H32.0088C23.2826 4.13416 14.5564 4.13416 5.83023 4.13416C4.28999 4.13416 3.62846 4.79662 3.62846 6.34142C3.62846 21.7809 3.62846 37.2189 3.62846 52.6584C3.62846 54.2288 4.28431 54.8756 5.87708 54.8756C9.72983 54.8756 13.5826 54.8756 17.4368 54.8756H18.1366V58.5H4.87485C4.80671 58.4716 4.74141 58.4291 4.67043 58.4191C3.2693 58.222 2.14073 57.5567 1.2322 56.4786C0.533764 55.6487 0.222875 54.66 0 53.6301V5.37681H0.00141989Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M32.6436 38.5296C32.6436 36.2103 32.6407 33.891 32.6436 31.5702C32.6464 30.2169 33.3534 29.5048 34.6963 29.502C36.9605 29.4977 39.2262 29.4935 41.4904 29.502C43.7958 29.5119 45.3276 31.0326 45.3347 33.3321C45.3446 36.8203 45.346 40.3099 45.3347 43.7981C45.3276 46.0706 43.8015 47.6041 41.5387 47.6183C39.2361 47.6324 36.9336 47.6268 34.631 47.6183C33.3676 47.614 32.6464 46.8792 32.6436 45.5982C32.6379 43.2406 32.6422 40.883 32.6422 38.5268L32.6436 38.5296ZM36.3118 33.1505V43.9527H41.6807V33.1505H36.3118Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M21.778 42.1865V47.5826H18.1367C18.1367 47.3826 18.1367 47.1812 18.1367 46.9811C18.1367 41.8857 18.1367 36.7903 18.1367 31.6949C18.1367 30.1628 18.8039 29.5032 20.3541 29.5032C22.5261 29.5032 24.698 29.5004 26.87 29.5032C29.3259 29.5075 30.8264 31.0026 30.8306 33.451C30.8335 35.0739 30.8377 36.6967 30.8306 38.3209C30.8207 40.6601 29.3018 42.1765 26.9609 42.1879C25.4305 42.195 23.9017 42.1879 22.3713 42.1879H21.7794L21.778 42.1865ZM27.1653 38.5365V33.1702H21.795V38.5365H27.1653Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M57.9909 33.1377H50.8078V36.7309H57.9994V40.3439H50.7964V47.5913H47.1523C47.1523 47.4083 47.1523 47.2111 47.1523 47.0125C47.1523 41.8972 47.1523 36.7819 47.1523 31.6667C47.1523 30.1701 47.8295 29.502 49.3385 29.502C52.2075 29.502 55.0779 29.502 57.9895 29.502V33.1377H57.9909Z"
                        fill="#8E8F90"
                      />
                    </svg>
                  </p>
                  <span
                    :href="`https://hotels.ndc.uz/storage/${files?.cadastre}`"
                    class="text-base text-[#0D152C] flex justify-center gap-10 items-center mt-[50px]"
                  >
                    Davlat komissiyasining foydalanishga qabul qilish to‘g‘risida
                    dalolatnomasi
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0291 14.5918C31.7291 15.0826 34.0566 18.0118 34.0566 24.4243V24.6301C34.0566 31.7076 31.2225 34.5418 24.145 34.5418H13.8374C6.75995 34.5418 3.92578 31.7076 3.92578 24.6301V24.4243C3.92578 18.0593 6.22161 15.1301 11.8266 14.6076"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 3.66699V24.0603"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.3036 20.5293L18.9995 25.8335L13.6953 20.5293"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="buttons flex gap-6 justify-center mt-[60px]">
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0195 23.9812L23.9812 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.9812 23.9812L15.0195 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7715 19.5004L17.2523 23.9812L26.2298 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
              <a :href="`https://hotels.ndc.uz/storage/${files?.cadastre}`">
                <div
                  class="border-[2px] border-solid rounded-[6px] border-[#5A5A5A] px-6 py-6"
                >
                  <p class="ant-upload-drag-icon flex justify-center">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00141989 5.37681C0.20726 4.43489 0.471302 3.51709 1.07037 2.73263C2.25856 1.17365 3.85985 0.502677 5.7919 0.504096C14.802 0.50977 23.8107 0.504096 32.8208 0.508351C35.4839 0.50977 34.9885 0.27571 36.9064 2.19075C40.0465 5.32574 43.1767 8.47066 46.3296 11.5929C46.9059 12.1631 47.1785 12.7859 47.1657 13.6015C47.1331 15.6769 47.1544 17.7536 47.1544 19.8304C47.1544 20.0148 47.1544 20.1978 47.1544 20.412H43.55V15.0059H42.8871C40.7904 15.0059 38.6936 15.0087 36.5969 15.0059C34.1467 15.0017 32.649 13.5022 32.6448 11.0496C32.6419 8.76855 32.6448 6.48753 32.6448 4.13416H32.0088C23.2826 4.13416 14.5564 4.13416 5.83023 4.13416C4.28999 4.13416 3.62846 4.79662 3.62846 6.34142C3.62846 21.7809 3.62846 37.2189 3.62846 52.6584C3.62846 54.2288 4.28431 54.8756 5.87708 54.8756C9.72983 54.8756 13.5826 54.8756 17.4368 54.8756H18.1366V58.5H4.87485C4.80671 58.4716 4.74141 58.4291 4.67043 58.4191C3.2693 58.222 2.14073 57.5567 1.2322 56.4786C0.533764 55.6487 0.222875 54.66 0 53.6301V5.37681H0.00141989Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M32.6436 38.5296C32.6436 36.2103 32.6407 33.891 32.6436 31.5702C32.6464 30.2169 33.3534 29.5048 34.6963 29.502C36.9605 29.4977 39.2262 29.4935 41.4904 29.502C43.7958 29.5119 45.3276 31.0326 45.3347 33.3321C45.3446 36.8203 45.346 40.3099 45.3347 43.7981C45.3276 46.0706 43.8015 47.6041 41.5387 47.6183C39.2361 47.6324 36.9336 47.6268 34.631 47.6183C33.3676 47.614 32.6464 46.8792 32.6436 45.5982C32.6379 43.2406 32.6422 40.883 32.6422 38.5268L32.6436 38.5296ZM36.3118 33.1505V43.9527H41.6807V33.1505H36.3118Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M21.778 42.1865V47.5826H18.1367C18.1367 47.3826 18.1367 47.1812 18.1367 46.9811C18.1367 41.8857 18.1367 36.7903 18.1367 31.6949C18.1367 30.1628 18.8039 29.5032 20.3541 29.5032C22.5261 29.5032 24.698 29.5004 26.87 29.5032C29.3259 29.5075 30.8264 31.0026 30.8306 33.451C30.8335 35.0739 30.8377 36.6967 30.8306 38.3209C30.8207 40.6601 29.3018 42.1765 26.9609 42.1879C25.4305 42.195 23.9017 42.1879 22.3713 42.1879H21.7794L21.778 42.1865ZM27.1653 38.5365V33.1702H21.795V38.5365H27.1653Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M57.9909 33.1377H50.8078V36.7309H57.9994V40.3439H50.7964V47.5913H47.1523C47.1523 47.4083 47.1523 47.2111 47.1523 47.0125C47.1523 41.8972 47.1523 36.7819 47.1523 31.6667C47.1523 30.1701 47.8295 29.502 49.3385 29.502C52.2075 29.502 55.0779 29.502 57.9895 29.502V33.1377H57.9909Z"
                        fill="#8E8F90"
                      />
                    </svg>
                  </p>
                  <span
                    class="text-base text-[#0D152C] flex justify-center gap-10 items-center mt-[50px]"
                  >
                    Kadastr ko‘chirmasi yoki ijara shartnomasi nusxasi<svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0291 14.5918C31.7291 15.0826 34.0566 18.0118 34.0566 24.4243V24.6301C34.0566 31.7076 31.2225 34.5418 24.145 34.5418H13.8374C6.75995 34.5418 3.92578 31.7076 3.92578 24.6301V24.4243C3.92578 18.0593 6.22161 15.1301 11.8266 14.6076"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 3.66699V24.0603"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.3036 20.5293L18.9995 25.8335L13.6953 20.5293"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="buttons flex gap-6 justify-center mt-[60px]">
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0195 23.9812L23.9812 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.9812 23.9812L15.0195 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7715 19.5004L17.2523 23.9812L26.2298 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <a :href="`https://hotels.ndc.uz/storage/${files?.sanitation}`">
                <div
                  class="border-[2px] border-solid rounded-[6px] border-[#5A5A5A] px-6 py-6"
                >
                  <p class="ant-upload-drag-icon flex justify-center">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00141989 5.37681C0.20726 4.43489 0.471302 3.51709 1.07037 2.73263C2.25856 1.17365 3.85985 0.502677 5.7919 0.504096C14.802 0.50977 23.8107 0.504096 32.8208 0.508351C35.4839 0.50977 34.9885 0.27571 36.9064 2.19075C40.0465 5.32574 43.1767 8.47066 46.3296 11.5929C46.9059 12.1631 47.1785 12.7859 47.1657 13.6015C47.1331 15.6769 47.1544 17.7536 47.1544 19.8304C47.1544 20.0148 47.1544 20.1978 47.1544 20.412H43.55V15.0059H42.8871C40.7904 15.0059 38.6936 15.0087 36.5969 15.0059C34.1467 15.0017 32.649 13.5022 32.6448 11.0496C32.6419 8.76855 32.6448 6.48753 32.6448 4.13416H32.0088C23.2826 4.13416 14.5564 4.13416 5.83023 4.13416C4.28999 4.13416 3.62846 4.79662 3.62846 6.34142C3.62846 21.7809 3.62846 37.2189 3.62846 52.6584C3.62846 54.2288 4.28431 54.8756 5.87708 54.8756C9.72983 54.8756 13.5826 54.8756 17.4368 54.8756H18.1366V58.5H4.87485C4.80671 58.4716 4.74141 58.4291 4.67043 58.4191C3.2693 58.222 2.14073 57.5567 1.2322 56.4786C0.533764 55.6487 0.222875 54.66 0 53.6301V5.37681H0.00141989Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M32.6436 38.5296C32.6436 36.2103 32.6407 33.891 32.6436 31.5702C32.6464 30.2169 33.3534 29.5048 34.6963 29.502C36.9605 29.4977 39.2262 29.4935 41.4904 29.502C43.7958 29.5119 45.3276 31.0326 45.3347 33.3321C45.3446 36.8203 45.346 40.3099 45.3347 43.7981C45.3276 46.0706 43.8015 47.6041 41.5387 47.6183C39.2361 47.6324 36.9336 47.6268 34.631 47.6183C33.3676 47.614 32.6464 46.8792 32.6436 45.5982C32.6379 43.2406 32.6422 40.883 32.6422 38.5268L32.6436 38.5296ZM36.3118 33.1505V43.9527H41.6807V33.1505H36.3118Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M21.778 42.1865V47.5826H18.1367C18.1367 47.3826 18.1367 47.1812 18.1367 46.9811C18.1367 41.8857 18.1367 36.7903 18.1367 31.6949C18.1367 30.1628 18.8039 29.5032 20.3541 29.5032C22.5261 29.5032 24.698 29.5004 26.87 29.5032C29.3259 29.5075 30.8264 31.0026 30.8306 33.451C30.8335 35.0739 30.8377 36.6967 30.8306 38.3209C30.8207 40.6601 29.3018 42.1765 26.9609 42.1879C25.4305 42.195 23.9017 42.1879 22.3713 42.1879H21.7794L21.778 42.1865ZM27.1653 38.5365V33.1702H21.795V38.5365H27.1653Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M57.9909 33.1377H50.8078V36.7309H57.9994V40.3439H50.7964V47.5913H47.1523C47.1523 47.4083 47.1523 47.2111 47.1523 47.0125C47.1523 41.8972 47.1523 36.7819 47.1523 31.6667C47.1523 30.1701 47.8295 29.502 49.3385 29.502C52.2075 29.502 55.0779 29.502 57.9895 29.502V33.1377H57.9909Z"
                        fill="#8E8F90"
                      />
                    </svg>
                  </p>
                  <span
                    class="text-base text-[#0D152C] flex justify-center gap-10 items-center mt-[50px]"
                  >
                    Sanitariya-gigiyena talablari bo‘yicha xulosa
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0291 14.5918C31.7291 15.0826 34.0566 18.0118 34.0566 24.4243V24.6301C34.0566 31.7076 31.2225 34.5418 24.145 34.5418H13.8374C6.75995 34.5418 3.92578 31.7076 3.92578 24.6301V24.4243C3.92578 18.0593 6.22161 15.1301 11.8266 14.6076"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 3.66699V24.0603"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.3036 20.5293L18.9995 25.8335L13.6953 20.5293"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="buttons flex gap-6 justify-center mt-[60px]">
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0195 23.9812L23.9812 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.9812 23.9812L15.0195 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7715 19.5004L17.2523 23.9812L26.2298 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
              <a :href="`https://hotels.ndc.uz/storage/${files?.fire_safety}`">
                <div
                  class="border-[2px] border-solid rounded-[6px] border-[#5A5A5A] px-6 py-6"
                >
                  <p class="ant-upload-drag-icon flex justify-center">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00141989 5.37681C0.20726 4.43489 0.471302 3.51709 1.07037 2.73263C2.25856 1.17365 3.85985 0.502677 5.7919 0.504096C14.802 0.50977 23.8107 0.504096 32.8208 0.508351C35.4839 0.50977 34.9885 0.27571 36.9064 2.19075C40.0465 5.32574 43.1767 8.47066 46.3296 11.5929C46.9059 12.1631 47.1785 12.7859 47.1657 13.6015C47.1331 15.6769 47.1544 17.7536 47.1544 19.8304C47.1544 20.0148 47.1544 20.1978 47.1544 20.412H43.55V15.0059H42.8871C40.7904 15.0059 38.6936 15.0087 36.5969 15.0059C34.1467 15.0017 32.649 13.5022 32.6448 11.0496C32.6419 8.76855 32.6448 6.48753 32.6448 4.13416H32.0088C23.2826 4.13416 14.5564 4.13416 5.83023 4.13416C4.28999 4.13416 3.62846 4.79662 3.62846 6.34142C3.62846 21.7809 3.62846 37.2189 3.62846 52.6584C3.62846 54.2288 4.28431 54.8756 5.87708 54.8756C9.72983 54.8756 13.5826 54.8756 17.4368 54.8756H18.1366V58.5H4.87485C4.80671 58.4716 4.74141 58.4291 4.67043 58.4191C3.2693 58.222 2.14073 57.5567 1.2322 56.4786C0.533764 55.6487 0.222875 54.66 0 53.6301V5.37681H0.00141989Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M32.6436 38.5296C32.6436 36.2103 32.6407 33.891 32.6436 31.5702C32.6464 30.2169 33.3534 29.5048 34.6963 29.502C36.9605 29.4977 39.2262 29.4935 41.4904 29.502C43.7958 29.5119 45.3276 31.0326 45.3347 33.3321C45.3446 36.8203 45.346 40.3099 45.3347 43.7981C45.3276 46.0706 43.8015 47.6041 41.5387 47.6183C39.2361 47.6324 36.9336 47.6268 34.631 47.6183C33.3676 47.614 32.6464 46.8792 32.6436 45.5982C32.6379 43.2406 32.6422 40.883 32.6422 38.5268L32.6436 38.5296ZM36.3118 33.1505V43.9527H41.6807V33.1505H36.3118Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M21.778 42.1865V47.5826H18.1367C18.1367 47.3826 18.1367 47.1812 18.1367 46.9811C18.1367 41.8857 18.1367 36.7903 18.1367 31.6949C18.1367 30.1628 18.8039 29.5032 20.3541 29.5032C22.5261 29.5032 24.698 29.5004 26.87 29.5032C29.3259 29.5075 30.8264 31.0026 30.8306 33.451C30.8335 35.0739 30.8377 36.6967 30.8306 38.3209C30.8207 40.6601 29.3018 42.1765 26.9609 42.1879C25.4305 42.195 23.9017 42.1879 22.3713 42.1879H21.7794L21.778 42.1865ZM27.1653 38.5365V33.1702H21.795V38.5365H27.1653Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M57.9909 33.1377H50.8078V36.7309H57.9994V40.3439H50.7964V47.5913H47.1523C47.1523 47.4083 47.1523 47.2111 47.1523 47.0125C47.1523 41.8972 47.1523 36.7819 47.1523 31.6667C47.1523 30.1701 47.8295 29.502 49.3385 29.502C52.2075 29.502 55.0779 29.502 57.9895 29.502V33.1377H57.9909Z"
                        fill="#8E8F90"
                      />
                    </svg>
                  </p>
                  <span
                    class="text-base text-[#0D152C] flex justify-center gap-10 items-center mt-[50px]"
                  >
                    Yong‘in xavfsizligi talablari bo‘yicha xulosa<svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0291 14.5918C31.7291 15.0826 34.0566 18.0118 34.0566 24.4243V24.6301C34.0566 31.7076 31.2225 34.5418 24.145 34.5418H13.8374C6.75995 34.5418 3.92578 31.7076 3.92578 24.6301V24.4243C3.92578 18.0593 6.22161 15.1301 11.8266 14.6076"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 3.66699V24.0603"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.3036 20.5293L18.9995 25.8335L13.6953 20.5293"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="buttons flex gap-6 justify-center mt-[60px]">
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0195 23.9812L23.9812 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.9812 23.9812L15.0195 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7715 19.5004L17.2523 23.9812L26.2298 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div class="grid grid-cols-1 gap-6">
              <a :href="`https://hotels.ndc.uz/storage/${files?.certificate}`">
                <div
                  class="border-[2px] border-solid rounded-[6px] border-[#5A5A5A] px-6 py-6"
                >
                  <p class="ant-upload-drag-icon flex justify-center">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00141989 5.37681C0.20726 4.43489 0.471302 3.51709 1.07037 2.73263C2.25856 1.17365 3.85985 0.502677 5.7919 0.504096C14.802 0.50977 23.8107 0.504096 32.8208 0.508351C35.4839 0.50977 34.9885 0.27571 36.9064 2.19075C40.0465 5.32574 43.1767 8.47066 46.3296 11.5929C46.9059 12.1631 47.1785 12.7859 47.1657 13.6015C47.1331 15.6769 47.1544 17.7536 47.1544 19.8304C47.1544 20.0148 47.1544 20.1978 47.1544 20.412H43.55V15.0059H42.8871C40.7904 15.0059 38.6936 15.0087 36.5969 15.0059C34.1467 15.0017 32.649 13.5022 32.6448 11.0496C32.6419 8.76855 32.6448 6.48753 32.6448 4.13416H32.0088C23.2826 4.13416 14.5564 4.13416 5.83023 4.13416C4.28999 4.13416 3.62846 4.79662 3.62846 6.34142C3.62846 21.7809 3.62846 37.2189 3.62846 52.6584C3.62846 54.2288 4.28431 54.8756 5.87708 54.8756C9.72983 54.8756 13.5826 54.8756 17.4368 54.8756H18.1366V58.5H4.87485C4.80671 58.4716 4.74141 58.4291 4.67043 58.4191C3.2693 58.222 2.14073 57.5567 1.2322 56.4786C0.533764 55.6487 0.222875 54.66 0 53.6301V5.37681H0.00141989Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M32.6436 38.5296C32.6436 36.2103 32.6407 33.891 32.6436 31.5702C32.6464 30.2169 33.3534 29.5048 34.6963 29.502C36.9605 29.4977 39.2262 29.4935 41.4904 29.502C43.7958 29.5119 45.3276 31.0326 45.3347 33.3321C45.3446 36.8203 45.346 40.3099 45.3347 43.7981C45.3276 46.0706 43.8015 47.6041 41.5387 47.6183C39.2361 47.6324 36.9336 47.6268 34.631 47.6183C33.3676 47.614 32.6464 46.8792 32.6436 45.5982C32.6379 43.2406 32.6422 40.883 32.6422 38.5268L32.6436 38.5296ZM36.3118 33.1505V43.9527H41.6807V33.1505H36.3118Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M21.778 42.1865V47.5826H18.1367C18.1367 47.3826 18.1367 47.1812 18.1367 46.9811C18.1367 41.8857 18.1367 36.7903 18.1367 31.6949C18.1367 30.1628 18.8039 29.5032 20.3541 29.5032C22.5261 29.5032 24.698 29.5004 26.87 29.5032C29.3259 29.5075 30.8264 31.0026 30.8306 33.451C30.8335 35.0739 30.8377 36.6967 30.8306 38.3209C30.8207 40.6601 29.3018 42.1765 26.9609 42.1879C25.4305 42.195 23.9017 42.1879 22.3713 42.1879H21.7794L21.778 42.1865ZM27.1653 38.5365V33.1702H21.795V38.5365H27.1653Z"
                        fill="#8E8F90"
                      />
                      <path
                        d="M57.9909 33.1377H50.8078V36.7309H57.9994V40.3439H50.7964V47.5913H47.1523C47.1523 47.4083 47.1523 47.2111 47.1523 47.0125C47.1523 41.8972 47.1523 36.7819 47.1523 31.6667C47.1523 30.1701 47.8295 29.502 49.3385 29.502C52.2075 29.502 55.0779 29.502 57.9895 29.502V33.1377H57.9909Z"
                        fill="#8E8F90"
                      />
                    </svg>
                  </p>
                  <span
                    class="text-base text-[#0D152C] flex justify-center gap-10 items-center mt-[50px]"
                  >
                    Tashkilot guvohnomasi
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0291 14.5918C31.7291 15.0826 34.0566 18.0118 34.0566 24.4243V24.6301C34.0566 31.7076 31.2225 34.5418 24.145 34.5418H13.8374C6.75995 34.5418 3.92578 31.7076 3.92578 24.6301V24.4243C3.92578 18.0593 6.22161 15.1301 11.8266 14.6076"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19 3.66699V24.0603"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.3036 20.5293L18.9995 25.8335L13.6953 20.5293"
                        stroke="#0D152C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="buttons flex gap-6 justify-center mt-[60px]">
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0195 23.9812L23.9812 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.9812 23.9812L15.0195 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4993 35.3337C28.2077 35.3337 35.3327 28.2087 35.3327 19.5003C35.3327 10.792 28.2077 3.66699 19.4993 3.66699C10.791 3.66699 3.66602 10.792 3.66602 19.5003C3.66602 28.2087 10.791 35.3337 19.4993 35.3337Z"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7715 19.5004L17.2523 23.9812L26.2298 15.0195"
                          stroke="#8E8F90"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div class="grid grid-cols-1 w-full">
              <a-form-model-item
                prop="address.uz"
                class="form-item w-full mb-0"
                label="Tashkilot manzili (O‘Z)"
              >
                <a-input v-model="form.address.uz" placeholder="Tashkilot manzili..." />
              </a-form-model-item>
            </div>
            <div class="grid grid-cols-1 w-full">
              <a-form-model-item
                prop="address.ru"
                class="form-item w-full mb-0"
                label="Tashkilot manzili (RU)"
              >
                <a-input v-model="form.address.ru" placeholder="Tashkilot manzili..." />
              </a-form-model-item>
            </div>
            <div class="grid grid-cols-1 w-full">
              <a-form-model-item
                prop="address.en"
                class="form-item w-full mb-0"
                label="Tashkilot manzili (EN)"
              >
                <a-input v-model="form.address.en" placeholder="Tashkilot manzili..." />
              </a-form-model-item>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <a-form-model-item
                prop="name"
                class="form-item w-full mb-0"
                label="Xostel nomi"
              >
                <a-input v-model="form.name" placeholder="Lokomotiv hostel" />
              </a-form-model-item>
              <a-form-model-item
                prop="region_id"
                class="form-item w-full mb-0"
                label="Xostel joylashgan hudud"
              >
                <a-select
                  v-model="form.region_id"
                  placeholder="Toshkent shahri"
                  class="w-full"
                >
                  <a-select-option
                    :value="region?.id"
                    v-for="region in regions"
                    :key="region?.id"
                  >
                    {{ region?.name?.uz }}</a-select-option
                  >
                </a-select>
              </a-form-model-item>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <a-form-model-item
                prop="lat"
                class="form-item w-full mb-0"
                label="Xaritada joylashuv uzunlik nuqtasi"
              >
                <a-input
                  type="number"
                  v-model="form.lat"
                  @change="currentLatLon"
                  placeholder="Uzunlik nuqtasini kiriting"
                />
              </a-form-model-item>
              <a-form-model-item
                prop="lon"
                class="form-item w-full mb-0"
                label="Xaritada joylashuv kenglik nuqtasi"
              >
                <a-input
                  type="number"
                  v-model="form.lon"
                  @change="currentLatLon"
                  placeholder="Kenglik nuqtasini kiriting"
                />
              </a-form-model-item>
            </div>
          </div>
        </a-form-model>
      </div>
      <div class="map min-h-[700px]">
        <yandex-map
          @click="onClick"
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
      <div
        class="buttons flex justify-center gap-6"
        v-if="
          info?.application_status != 'accepted' && info?.application_status != 'rejected'
        "
      >
        <button
          @click="visible = true"
          class="py-[13px] w-[366px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
        >
          Rad etish
        </button>
        <button
          @click="submit('accept')"
          class="py-[13px] w-[366px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
        >
          Tasdiqlash va reyestrga kiritish
        </button>
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
          <h4 class="text-[24px] font-[verdana-700] text-blue-bold text-center mb-6">
            Rad etishingizga aminmisiz?
          </h4>
        </div>

        <div class="buttons grid grid-cols-2 gap-[30px]">
          <button
            @click="handleOk"
            class="py-[13px] rounded-[8px] text-white bg-red-dark2 font-[verdana-400] text-base uppercase flex justify-center"
          >
            Bekor qilish
          </button>
          <button
            @click="submit('cancel')"
            class="py-[13px] rounded-[8px] text-white bg-blue-bold font-[verdana-400] text-base uppercase flex justify-center"
          >
            Ha, aminman
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      coords: [41.311081, 69.240562],
      regions: [],
      form: {},
      info: {},
      files: {},
      rules: {
        lat: [{ required: true, message: "This field is required", trigger: "change" }],
        lon: [{ required: true, message: "This field is required", trigger: "change" }],
        name: [{ required: true, message: "This field is required", trigger: "change" }],
        status: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        address: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
          uz: [{ required: true, message: "This field is required", trigger: "change" }],
          en: [{ required: true, message: "This field is required", trigger: "change" }],
        },
      },
      form: {
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
    };
  },
  mounted() {
    this.__GET_APPLICATIONS(this.$route.params.id);
    this.__GET_REGIONS();
  },
  methods: {
    handleOk() {
      this.visible = false;
    },
    submit(type) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.__EDIT_APPLICATIONS(this.form, type);
        } else {
        }
      });
    },
    onClick(e) {
      this.coords = e.get("coords");
      this.form.lat = this.coords[0];
      this.form.lon = this.coords[1];
    },
    currentLatLon() {
      this.coords = [this.form.lat, this.form.lon];
    },
    async __GET_REGIONS() {
      try {
        const data = await this.$store.dispatch("fetchRegions/getRegions");
        this.regions = data.data.data;
      } catch (e) {}
    },
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    async __GET_APPLICATIONS(id) {
      try {
        const data = await this.$store.dispatch("fetchApplications/getAppById", id);
        this.form.address = data?.data?.hotel?.address
          ? data?.data?.hotel?.address
          : {
              uz: "",
              en: "",
              ru: "",
            };
        this.form.lat = data?.data?.hotel?.lat;
        this.form.lon = data?.data?.hotel?.lon;
        this.form.status = data?.data?.hotel?.status;
        this.form.name = data?.data?.hotel?.name;
        this.form.region_id = data?.data?.hotel?.region?.id;
        this.files = data?.data;
        this.info = data?.data?.hotel;
        this.title = { ...data?.data?.hotel?.name };
      } catch (e) {}
    },
    async __EDIT_APPLICATIONS(form, type) {
      try {
        const data = await this.$store.dispatch("fetchApplications/editApp", {
          id: this.$route.params.id,
          data: form,
          params: {
            type: type,
          },
        });
        this.$notification["success"]({
          message: "Success",
          description: "Ariza muvaffaqiyatli o'zgartirildi",
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
:deep(.ant-upload.ant-upload-drag) {
  background-color: transparent;
  border-radius: 6px;
  border: 2px solid #5a5a5a;
}
</style>
