import {postJson} from "./index";

export const submitContactRequest = (payload) => {
    return postJson({
        url : "/api/submitContactRequest",
        data: payload
    });
} 