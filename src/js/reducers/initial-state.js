import app from '../app';

export default {
    words: {
        library: { // Tracks of the library view
            all: [], // All tracks
            sub: []// Filtered tracks (e.g search)
        },
        wordList: {
            all: [],
            sub: []
        }
    },
    wordLists: [],
    cursor: 'wordList',  // 'library' or 'wordList'
    wordsToCreate: [],


    queue             :  [],    // Tracks to be played
    queueCursor       :  null,  // The cursor of the queue
    numQueueLoop      : 1,

    repeat            :  app.config.get('audioRepeat'), // the current repeat state (one, all, none)

    playerStatus      : 'stop', // Player status
};
