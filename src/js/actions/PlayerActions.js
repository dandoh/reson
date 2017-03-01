/**
 * Created by Dandoh on 3/1/17.
 */
import store from '../store.js';
import AppConstants  from '../constants/AppConstants';
import app from '../app';
import Player from '../lib/player';
import utils from '../util/utils'

const start = (_id, numLoop, interval) => {
    console.log("PlayerActions.js: Line 11: calling start " + _id);
    // TODO (y.solovyov | KeitIG): calling getState is a hack.
    const {words, cursor} = store.getState();
    const queue = [...words[cursor].sub];
    const queuePosition = queue.findIndex((word) => {
        return word._id === _id;
    });

    console.log(queue[queuePosition].path);

    if (queuePosition > -1) {
        const uri = utils.parseUri(queue[queuePosition].path);

        Player.setAudioSrc(uri);
        Player.play();
        Player.setIntervalTime(interval);

        store.dispatch({
            type: AppConstants.APP_PLAYER_START,
            queuePosition,
            _id,
            numLoop
        });
    }


};

const next = () => {
    console.log("PlayerActions.js: Line 34: calling next");
    // TODO (y.solovyov | KeitIG): calling getState is a hack.
    const {queue, queueCursor, repeat, numQueueLoop} = store.getState();
    let newQueueCursor;

    if (queueCursor === queue.length - 1) { // is last track
        if (numQueueLoop > 1) {
            newQueueCursor = 0; // start with new track
            store.dispatch({
                type: AppConstants.APP_PLAYER_DECREASE_LOOP,
            })
        } else {
            stop();
            return;
        }
    } else {
        newQueueCursor = queueCursor + 1;
    }

    const word = queue[newQueueCursor];

    if (word !== undefined) {
        const uri = utils.parseUri(word.path);

        Player.setAudioSrc(uri);
        Player.play();
        store.dispatch({
            type: AppConstants.APP_PLAYER_NEXT,
            newQueueCursor
        });
    } else {
        stop();
    }
};

const stop = () => {
    console.log("PlayerActions.js: Line 64: calling stop");
    Player.stop();
    store.dispatch({
        type: AppConstants.APP_PLAYER_STOP
    });
};

export default {
    start,
    next,
    stop
};