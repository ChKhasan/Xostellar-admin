export const actions = {
  async getApp({}, payload) {
    const res = await this.$axios.$get(`/applications`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getAppById({}, id) {
    const res = await this.$axios.$get(`/applications/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editApp({}, payload) {
    const res = await this.$axios.$put(`/applications/${payload.id}`, payload.data, {
      params: {
        ...payload.params,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
