import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h1 className="mb-4">Posts App</h1>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;