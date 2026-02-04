import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setData, setError, setLoading } from "./slice";
import { fetchProductDetailData } from "./api";
import { GET_PRODUCT_DETAIL } from "./constants";

function* fetchProductDetailApiData(action: any): any {
  const id = action.payload;
  try {
    yield put(setLoading());
    const data = yield call(fetchProductDetailData, id);
    yield put(setData(data));
  } catch (error: any) {
    yield put(setError(error.message));
  }
}

function* productDetailSaga() {
  yield takeLatest(GET_PRODUCT_DETAIL, fetchProductDetailApiData);
}

export default productDetailSaga;
