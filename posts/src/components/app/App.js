import React from 'react';
import { withPostsService } from '../hoc';
// import Spinner from "../spinner";

function App({ postsService }) {
  console.log(postsService.getAllPosts());

  return (
    <div className="App">
      {/*<Spinner/>*/}
    </div>
  );
}

export default withPostsService()(App);
