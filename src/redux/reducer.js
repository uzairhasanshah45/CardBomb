import {INCREASE_BOMB, INCREASE_SCORE, CLEAR_STATE} from './constant';

let stateVal = {
  scoreValue: 0,
  bombValue: 0,
};

export const Reducer = (state = stateVal, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return {
        ...state,
        scoreValue: state.scoreValue + 1,
      };

    case INCREASE_BOMB:
      return {
        ...state,
        bombValue: state.bombValue + 1,
      };

    case CLEAR_STATE:
      return {
        ...state,
        bombValue: 0,
        scoreValue: 0,
      };

    default:
      return state;
  }
};
