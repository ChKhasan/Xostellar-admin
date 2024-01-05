export default async function ({ redirect, $axios, store }) {
  if (
    store.state.profileInfo?.role != "admin" &&
    store.state.profileInfo?.role != "committee"
  ) {
    redirect("/settings");
  }
}
