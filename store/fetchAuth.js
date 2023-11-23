export const actions = {
  async auth({}, data) {
    const res = await this.$axios.$post(`/auth/login`, data);
    return res;
  },
  async authByOneID({}, data) {
    const res = await this.$axios.$post(`/get_token`, data);
    return res;
  },
  async logOut({}, data) {
    const res = await this.$axios.$get(`/auth/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getOneIDLink({}) {
    const res = await this.$axios.$get(`/get_one_id_auth_link?login=1`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getPorfile({}, data) {
    const res = await this.$axios.$get(`/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
