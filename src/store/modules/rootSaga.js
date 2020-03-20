import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import project from './project/sagas';

export default function* rootSaga() {
  return yield all([auth, project]);
}
