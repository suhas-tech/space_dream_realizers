const initState = {
    allStudents: [],
};

export default function studentReducer(state = initState, action) {
    switch (action.type) {
        case actions.GET_ALL_STUDENTS_REQUEST:
            return {
                ...state,
            };
        case actions.GET_ALL_STUDENTS_REQUEST_SUCCESS:
            return {
                ...state,
                allStudents: action.allStudents,
            };
        default:
            return state;
    }
}
