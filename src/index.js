import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

const post = {
  title: 'Why Beer Is Great',
  authors: [
    'Ray Bradbury',
    'Shel Silverstein',
    'Chuck Palahniuk'
  ],
  body: "Beer is great, don't burn books, I'm falling up and don't talk about that thing...",
  comments: [
    "I agree, beer is great.",
    "Are you crazy, beer sucks!",
    "We should burn books AND beer!"
  ]
}

ReactDOM.render(
  <Post
  title={post.title}
  authors={post.authors}
  body={post.body}
  comments={post.comments}
  />,
  document.getElementById('root')
);
registerServiceWorker();