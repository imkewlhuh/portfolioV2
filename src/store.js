import { create } from "zustand";

const useNavStore = create((set) => ({
    play: 0,
    about: 0,
    skills: 0,
    projects: 0,
    pass: 0,
    setPageVisited: (page) => set((state) => ({
        [page]: state[page] + 1
    }))
}));

export default useNavStore;