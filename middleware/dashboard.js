export default function ({ store, redirect }) {
  const token = store.state.profileInfo?.id != 1;
  if (!!token) redirect("/");
}
