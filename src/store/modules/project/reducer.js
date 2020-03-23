import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  error: false,
  titleModal: '',
  descriptionModal: '',
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
        draft.error = false;
        break;
      }
      case '@project/PROJECT_FAILURE': {
        draft.loading = false;
        draft.error = true;
        draft.titleModal = action.payload.title;
        draft.descriptionModal = action.payload.description;
        break;
      }
      case '@modal/ACTION_MODAL': {
        draft.error = false;
        break;
      }
      default:
    }
  });
}
