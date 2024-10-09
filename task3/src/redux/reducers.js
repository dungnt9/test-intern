const initialState = {
    posts: [],
    loading: false,
    error: null
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, loading: false, posts: action.payload };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'ADD_POST':
        return { ...state, posts: [action.payload, ...state.posts] };
      default:
        return state;
    }
  };
  
  export default rootReducer;