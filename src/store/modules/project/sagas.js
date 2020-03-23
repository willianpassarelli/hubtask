import { takeLatest, call, put, all } from 'redux-saga/effects';

import { createSuccess, createFailure } from './actions';

import api from '~/services/api';

export function* createProject({ payload }) {
  try {
    const { title, description } = payload;

    yield call(api.post, '/projects', { title, description });

    yield put(createSuccess());
  } catch (err) {
    yield put(
      createFailure(
        'Falha ao cadastrar projeto',
        'Verifique os dados preechidos'
      )
    );
  }
}

export default all([takeLatest('@project/PROJECT_REQUEST', createProject)]);
