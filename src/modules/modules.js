import { all } from "redux-saga/effects";
import { unitsSagas } from "./unitSaga";
import { unitDetailsSagas } from "./unitDetailsSaga";

export default function* modules() {
  yield all([...unitsSagas, ...unitDetailsSagas]);
}
