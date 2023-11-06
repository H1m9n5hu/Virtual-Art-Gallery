export const addComment = (data) => {
    return {
        type: 'ADD_COMMENT',
        payload: data
    }
}

export const deleteComment = (data) => {
    return {
        type: 'DELETE_COMMENT',
        payload: data
    }
}

export const updateComment = (data) => {
    return {
        type: "EDIT_COMMENT",
        payload: data
    }
}