export const actions = {
  async getRegions({}, payload) {
    const res = await this.$axios.$get(`/regions`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getRegionsById({}, id) {
    const res = await this.$axios.$get(`/regions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editRegions({}, payload) {
    const res = await this.$axios.$put(`/regions/${payload.id}`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async postRegions({}, payload) {
    const res = await this.$axios.$post(`/regions`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
