import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@project/PROJECT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@project/PROJECT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@project/PROJECT_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
