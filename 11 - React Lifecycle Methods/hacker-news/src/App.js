import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      stories: []
    }
  }

  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
    fetch(topStories)
    .then(data => data.json()) // returns an array of IDs
    .then(data => data.slice(0, 9))
    .then(data => data.map(id => {
      const url = `${storyUrlBase}${id}.json`;
      return fetch(url).then(d => d.json());
    }))
    .then(promises => Promise.all(promises))
    .then(stories => this.setState({stories}));
  }

  render() {
    let views = <div>Loading...</div>;
    const {stories} = this.state;
    if (stories && stories.length > 0) { // If there are no stories, we still want the loading view there.
      views = stories.map(story => (
        <p key={story.id}>
          <a href={story.url}>{story.title}</a> from <strong>{story.by}</strong>
        </p>
      ))
    }

    return (
      <div className="App">
        <h2>Hacker News Latest Articles</h2>
        {views}
      </div>
    );
  }
}

export default App;
