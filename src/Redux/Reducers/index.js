import { combineReducers } from 'redux';
import newComment from './galleryCommentReducer';

const rootReducer = combineReducers({
    newComment
})

export default rootReducer;