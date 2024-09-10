import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='container'>
          {/* <h1>My tttle</h1>
          <h2>My subtitle</h2> */}
          
            <Logo />

            <SearchBar/>

          <div className="recent">
            <ul>
              <li>post</li>
              <li>post</li>
              <li>post</li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
