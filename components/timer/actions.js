import { START_TIMER, RESTART_TIMER, ADD_SECOND } from "./types";

function startTimer() {
  return {
    type: START_TIMER
  }
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  }
}

function addSecond() {
  return {
    type: ADD_SECOND
  }
}

const actionsCreators = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionsCreators };