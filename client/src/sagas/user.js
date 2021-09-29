import { takeEvery, put, all, fork } from 'redux-saga/effects';
import axios from 'axios';

export function* getAllStudents() {
    yield takeEvery(actions.GET_ALL_STUDENTS_REQUEST, function* () {
        try {
            let response = yield axios.get(siteConfig.apiUrl +
                          '/students/all', {
                            headers: {
                             'content-type': 
                               'application/x-www-form-urlencoded',
                               'Authorization': 'Bearer ' + token
                            }
                          });
            yield put({
                type: actions.GET_ALL_STUDENTS_REQUEST_SUCCESS,
                allStudents: response.data
            })
         } catch (error) {
            yield put({
                type: actions.GET_ALL_STUDENTS_REQUEST_ERROR,
            })
        }
    })
}
// Error handling
export function* getAllStudentError() {
    yield takeEvery(actions.GET_ALL_STUDENTS_REQUEST_ERROR,
                       function* () { console.log("error") })
}
export default function* rootSaga() {
    yield all([
        fork(getAllStudent)
    ])
}