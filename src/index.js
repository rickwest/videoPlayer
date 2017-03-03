import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
//create a new component that produces some html
const API_KEY = 'AIzaSyB4X-o2wYTw9cUV-dtgYHVI8gVxQ8jXSss';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this components generated html and put on the page
ReactDOM.render( <App /> , document.querySelector('.container'));
