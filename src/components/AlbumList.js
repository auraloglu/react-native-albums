import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //create empty state
  state = { albums: [] };

  componentWillMount() {
    //get hhtp request
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //get the json data and update the state with this data, always use this.setState for update
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //map helps with array data like foreach?
    return this.state.albums.map(album =>
      //key need to be unique data, album.title is not optimal here.
      //If you have ID property use it instead.
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
