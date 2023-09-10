const { create } = require("zustand");

const useAuthStore = create((set) => ({
  isLogin: false,
  setIsLogin: (login) => set({ isLogin: login }),
}));

export default useAuthStore;
