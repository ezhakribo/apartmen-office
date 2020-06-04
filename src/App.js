import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ApartList from './components/ApartList'
import Map from './components/GoogleMaps'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      filterText2: ''
    };
  }

  handleUserInput = (filter) => {
    this.setState({
      filterText: filter
    });
  }

  render() {
    return <div>
      <SearchBar searchTerm = {this.state.filterText} userInput = {this.handleUserInput}></SearchBar>
      <ApartList searchTerm = {this.state.filterText} data = {DATA_PLACE}></ApartList>
      <Map></Map>
    </div>;
  }
}

var DATA_PLACE = [{
  "ID": "01",
  "Name": "Apart A",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "./img/a.png",
      "Others" : ["./img/other1.png", "./img/other2.png", "./img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : 9.87654,
      "Latitude" : 60.06060
  }
}, {
  "ID": "02",
  "Name": "Apart B",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "./img/a.png",
      "Others" : ["./img/other1.png", "./img/other2.png", "./img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : 9.87654,
      "Latitude" : 90.06060
  }
}];

export default App;