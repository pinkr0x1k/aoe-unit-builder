import { takeLatest, call, put, fork, select } from "redux-saga/effects";
import {
  fetch,
  fetchFail,
  fetchSuccess,
  filterUnits,
  filterUnitsFail,
  filterUnitsSuccess,
  selectActiveFilters,
  selectBaseUnits,
  selectFilters,
} from "../features/unitSlice";
import { loadUnitsApi } from "../utils/api";

function* onLoadUnitsAsync() {
  try {
    const resp = yield call(loadUnitsApi);
    if (resp.length > 0) {
      yield put(fetchSuccess(resp));
    }
  } catch (error) {
    yield call(fetchFail);
  }
}

function* onLoadUnits() {
  yield takeLatest(fetch.type, onLoadUnitsAsync);
}

function* onFilterUnitsAsync({ payload }) {
  try {
    const filters = yield select(selectFilters);
    const activeFilters = yield select(selectActiveFilters);
    const data = yield select(selectBaseUnits);

    let filteredData = data.filter(function (unit) {
      if (payload.age) {
        return payload.age === "All" || unit.age === payload.age;
      } else {
        return filters.age === "All" || unit.age === filters.age;
      }
    });

    filteredData = filteredData.filter(function (unit) {
      if (activeFilters.wood || filters.wood === 0) {
        if (unit.cost.Wood < filters.wood) {
          return false;
        }
      }

      if (activeFilters.food || filters.food === 0) {
        if (unit.cost.Food < filters.food) {
          return false;
        }
      }

      if (activeFilters.gold || filters.gold === 0) {
        if (unit.cost.Gold < filters.gold) {
          return false;
        }
      }
      return true;
    });

    yield put(filterUnitsSuccess(filteredData));
  } catch (error) {
    yield call(filterUnitsFail);
  }
}

function* onFilterUnitsBy() {
  yield takeLatest(filterUnits.type, onFilterUnitsAsync);
}

export const unitsSagas = [fork(onLoadUnits), fork(onFilterUnitsBy)];
