export function createRequest(title, description) {
  return {
    type: '@project/PROJECT_REQUEST',
    payload: { title, description },
  };
}

export function createSuccess() {
  return {
    type: '@project/PROJECT_SUCCESS',
  };
}

export function createFailure(title, description) {
  return {
    type: '@project/PROJECT_FAILURE',
    payload: { title, description },
  };
}
