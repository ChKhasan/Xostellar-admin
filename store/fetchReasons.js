export const actions = {
  async getReasons({}, payload) {
    const res = await this.$axios.$get(`/reject_reasons`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getChapters({}, payload) {
    const res = await this.$axios.$get(`/reject_reasons/chapters`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getGroups({}, payload) {
    const res = await this.$axios.$get(`/reject_reasons/groups`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getReasonsById({}, id) {
    const res = await this.$axios.$get(`/reject_reasons/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async deleteReasons({}, id) {
    const res = await this.$axios.$delete(`/reject_reasons/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editReasons({}, payload) {
    const res = await this.$axios.$put(
      `/reject_reasons/${payload.id}`,
      payload.data,
      {
        params: { ...payload.params },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },

  async postReasons({}, payload) {
    const res = await this.$axios.$post(`/reject_reasons`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
