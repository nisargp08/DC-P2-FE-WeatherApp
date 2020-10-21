export const loader = {
    // namespaced: true,
    state: {
        //API status tracker
        isLoading: false,
        isError: false,
        isDone: false,
        // // Error message storage
        errArray: [],
    },
    mutations: {
        // Start loading
        startLoading(state) {
            state.isLoading = true;
        },
        // End loading
        stopLoading(state) {
            state.isLoading = false;
        },
        // PRocess done
        showIsDone(state) {
            state.isDone = true;
        },
        // Process not done
        hideIsDone(state) {
            state.isDone = false;
        },
        //Sets the error message
        setErrorMessage(state, errMsg) {
            state.isError = true;
            state.errArray.push(errMsg);
        },
        // Function to reset api tracking variables
        resetTracker(state) {
            state.isLoading = state.isError = state.isDone = false;
            state.errArray = [];
        },
    },
    actions: {
        // isLoading
        startLoading({ commit }) {
            commit("startLoading");
        },
        stopLoading({ commit }) {
            commit("stopLoading");
        },
        // isDone
        showIsDone({ commit }) {
            commit("showIsDone");
        },
        hideIsDone({ commit }) {
            commit("hideIsDone");
        },
        setErrorMessage({ commit }, errMsg) {
            commit("setErrorMessage", errMsg);
        },
        resetTracker({ commit }) {
            commit("resetTracker");
        }
    },
};