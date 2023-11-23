export const state = () => ({
  authenticated: false,
  profileInfo: {},
  code: ""
});
export const mutations = {
  logIn(state) {
    state.authenticated = true;
  },
  profileInfo(state, payload) {
    state.profileInfo = payload;
  },
  getCode(state, payload) {
    state.code = payload;
  },
};
