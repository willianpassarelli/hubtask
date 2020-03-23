import produce from 'immer';

const INITIAL_STATE = {
  error: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/ACTION_MODAL': {
        draft.error = false;
        break;
      }
      default:
    }
  });
}
