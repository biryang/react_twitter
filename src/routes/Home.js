import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { dbService } from 'firebase/AppFirebase';

const Home = props => {
  const [tweet, setTweet] = useState("")
  const [tweets, setTweets] = useState([])
  const getTweets = async () => {
    const dbTweets = await dbService.collection("tweets").get()
    dbTweets.forEach((document) => {
      const tweetObject = {
        ...document.data(),
        id: document.id,
      }
      setTweets((prev) => [tweetObject, ...prev])
    })
  }
  useEffect(() => {
    getTweets()
  }, [])
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
  console.log(tweets)
  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="text" value={tweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map(tweet =>
          <div key={tweet.id}>
            <h4>{tweet.tweet}</h4>
          </div>)}
      </div>
    </div>
  );
};

Home.propTypes = {

};

export default Home;