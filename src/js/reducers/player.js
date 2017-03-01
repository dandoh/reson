import AppConstants from '../constants/AppConstants';

export default (state = {}, payload) => {
    switch (payload.type) {
        case(AppConstants.APP_PLAYER_START): {
            const queue = [...state.words[state.cursor].sub];
            const id = payload._id;

            let queueCursor = payload.queuePosition; // Clean that variable mess later

            const newState = {...state};
            newState.numQueueLoop = payload.numLoop;
            return {
                ...newState,
                queue,
                queueCursor,
                playerStatus: 'play'
            };
        }

        case(AppConstants.APP_PLAYER_NEXT): {
            return {
                ...state,
                playerStatus: 'play',
                queueCursor: payload.newQueueCursor
            };
        }

        case(AppConstants.APP_PLAYER_STOP): {
            const newState = {
                ...state,
                queue          :  [],
                queueCursor    :  null,
                playerStatus   : 'stop'
            };

            return newState;
        }

        case(AppConstants.APP_PLAYER_DECREASE_LOOP): {
            const newState = {...state};
            newState.numQueueLoop -= 1;

            return newState;
        }

        default: {
            return state;
        }
    }
};

