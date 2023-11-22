export const actions = {
  async getMessages({}, payload) {
    const res = await this.$axios.$get(`/messages`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getMessagesById({}, id) {
    const res = await this.$axios.$get(`/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editMessages({}, payload) {
    const res = await this.$axios.$put(
      `/messages/${payload.id}`,
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
  async postMessage({}, payload) {
    const res = await this.$axios.$post(`/messages`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
