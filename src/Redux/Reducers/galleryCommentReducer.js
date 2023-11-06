const initialState = [];

const newComment = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [...state, action.payload];
        case "DELETE_COMMENT":
            const filterTasks = state.filter((obj) => obj.id !== action.payload);
            return filterTasks;
        case "EDIT_COMMENT":
            let editedData = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if(item.id === editedData.id){
                    item.id = editedData.id;
                    item.task = editedData.task;
                }
                updatedArray.push(item);
            });
            return updatedArray;
        default:
            return state;
    }
};

export default newComment;