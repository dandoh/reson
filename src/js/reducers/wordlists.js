import AppConstants from '../constants/AppConstants';

export default (state = {}, payload) => {
    switch (payload.type) {

        case (AppConstants.APP_LIST_ADD): {
            return {
                ...state,
            };
        }

        case (AppConstants.APP_LIST_REFRESH): {
            return {
                ...state,
                wordLists: payload.wordLists
            }
        }

        case(AppConstants.APP_LIST_LOAD_ONE): {
            const newState = {...state};
            newState.words[state.cursor] = {
                all: [...payload.words],
                sub: [...payload.words]
            };
            return newState;
        }

        default: {
            return state;
        }
    }
};


