export const actions = {
  async getTranslations({}, payload) {
    const res = await this.$axios.$get(`/translations`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getTranslationsById({}, id) {
    const res = await this.$axios.$get(`/translations/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },

  async editTranslations({}, payload) {
    const res = await this.$axios.$put(
      `/translations/${payload.id}`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },
};
