export default async function ({ redirect, $axios, store }) {
  try {
    const data = await $axios.$get(`/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });

    store.commit("profileInfo", data?.data);
  } catch (e) {
    localStorage.removeItem("auth_token");
    redirect("/admin/login");
  }
}
