import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { dbService } from 'firebase/AppFirebase';

const Home = props => {
  const [tweet, setTweet] = useState("")
  const onSubmit = async (event) => {
    event.preventDefault()
    await dbService.collection("tweets").add({
      tweet,
      createdAt: Date.now(),
    })
    setTweet("")
    console.log(tweet)
  }
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setTweet(value)
    console.log(tweet)
  }
  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="text" value={tweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Tweet" />
      </form>
    </div>
  );
};

Home.propTypes = {

};

export default Home;