export const actions = {
  async getHotels({}, payload) {
    const res = await this.$axios.$get(`/hotels`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getHotelsById({}, id) {
    const res = await this.$axios.$get(`/hotels/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editHotels({}, payload) {
    const res = await this.$axios.$put(`/hotels/${payload.id}`, payload.data, {
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
