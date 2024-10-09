import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' });
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    dispatch({ type: 'ADD_POST', payload: response.data });
  } catch (error) {
    console.error('Error adding post:', error);
  }
};