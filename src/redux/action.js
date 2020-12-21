import {INCREASE_BOMB, INCREASE_SCORE, CLEAR_STATE} from './constant';

export const increaseScore = () => {
  return {
    type: INCREASE_SCORE,
  };
};

export const increaseBomb = () => {
  return {
    type: INCREASE_BOMB,
  };
};

export const clearState = () => {
  return {
    type: CLEAR_STATE,
  };
};
