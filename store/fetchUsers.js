export const actions = {
  async getUsers({}, payload) {
    const res = await this.$axios.$get(`/users`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getUsersById({}, id) {
    const res = await this.$axios.$get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editUsers({}, payload) {
    const res = await this.$axios.$put(`/users/${payload.id}`, payload.data, {
      params: { ...payload.params },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async postUsers({}, payload) {
    const res = await this.$axios.$post(`/users`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
