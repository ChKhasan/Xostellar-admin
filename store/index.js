export const state = () => ({
  authenticated: false,
  profileInfo: {},
});
export const mutations = {
  logIn(state) {
    state.authenticated = true;
  },
  profileInfo(state, payload) {
    state.profileInfo = payload;
  },
};
