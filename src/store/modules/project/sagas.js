import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { createSuccess, createFailure } from './actions';

import api from '~/services/api';

export function* createProject({ payload }) {
  try {
    const { title, description } = payload;

    const response = yield call(api.post, '/projects', { title, description });

    console.tron.log('resp', response);

    yield put(createSuccess());
  } catch (err) {
    console.tron.log('erro', err);
    Alert.alert('Falha ao cadastrar projeto', 'verifique os dados preechidos');
    yield put(createFailure());
  }
}

export default all([takeLatest('@project/PROJECT_REQUEST', createProject)]);
