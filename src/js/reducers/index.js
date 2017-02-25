import wordlists from './wordlists';
import setting from './setting'

const reducers = [
    wordlists,
    setting
];

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};
