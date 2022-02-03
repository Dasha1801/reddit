import { combineReducers } from '@reduxjs/toolkit';
import { article_reducer } from './slices/articleSlice';
import { error_reducer } from './slices/errorSlice';
import { loading_reducer } from './slices/loadingSlice';
import { savedArticles_reducer } from './slices/savedArticlesSlice';
import { sort_reducer } from './slices/sortSlice';

const rootReducer = combineReducers({
  loading: loading_reducer,
  error: error_reducer,
  savedArticles: savedArticles_reducer,
  article: article_reducer,
  sortType: sort_reducer,
});

export default rootReducer;
