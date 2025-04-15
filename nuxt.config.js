export default {
  head: {
    title: "Xostellar",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    { src: "~plugins/antd-ui.js", ssr: false },
    { src: "~plugins/quill-editor.js", ssr: false },
    { src: "~/plugins/ymapPlugin.js", mode: "client" },
    { src: "~plugins/apex-chart.js", ssr: false },
    { src: "~plugins/vue-excel-export.js", ssr: false },
  ],
  ssr: false,
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: process.env.BASE_URL,
  },
  components: true,
  layout: {
    error: "error",
  },
  generate: {
    fallback: true,
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  env: {
    baseUrl: process.env.BASE_URL,
    fileUrl: process.env.FILE_URL,
  },
  modules: ["@nuxtjs/axios"],

  build: {},
};
