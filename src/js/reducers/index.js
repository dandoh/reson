import wordlists from './wordlists';
import setting from './setting'
import player from './player'


const reducers = [
    wordlists,
    setting,
    player
];

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};
