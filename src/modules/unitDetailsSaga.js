import { call, fork, takeLatest, select, put } from "redux-saga/effects";
import { loadUnitsApi } from "../utils/api";
import {
  fetchUnitDetails,
  fetchUnitDetailsFail,
  fetchUnitDetailsSuccess,
  selectSelectedUnitID,
} from "../features/unitDetailSlice";

function* onLoadUnitDetailsAsync() {
  try {
    const resp = yield call(loadUnitsApi);
    if (resp.length > 0) {
      const id = yield select(selectSelectedUnitID);
      const data = resp.filter((unit) => unit.id === id);
      yield put(fetchUnitDetailsSuccess(data[0]));
    }
  } catch (error) {
    yield call(fetchUnitDetailsFail);
  }
}

function* onLoadUnitDetails() {
  yield takeLatest(fetchUnitDetails.type, onLoadUnitDetailsAsync);
}

export const unitDetailsSagas = [fork(onLoadUnitDetails)];
