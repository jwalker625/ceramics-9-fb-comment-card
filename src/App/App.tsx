import './App.css';
import React from 'react';
import CommentCard from './CommentCard';
import reactLogo from '../assets/react.svg';

const App = () => {
  const commentCardProps = {
    name: 'Billy Bob',
    location: 'Nashville, TN',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    timePosted: new Date(2022, 11, 10, 12, 10),
    imageUrl: reactLogo
  }

  return (
    <div className="App">
      <CommentCard
        {...commentCardProps}
      />
    </div>
  );
}

export default App;
