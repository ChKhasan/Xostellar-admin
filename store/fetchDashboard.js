export const actions = {
  async getDashboard({},) {
    const res = await this.$axios.$get(`/dashboard`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
