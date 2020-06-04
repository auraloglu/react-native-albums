//Import a library to help create a component
//react-native init name --version 0.55.4 (create project)
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
