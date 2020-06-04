import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ApartList from './components/ApartList';
import Map from './components/GoogleMaps';
import * as Data from "./data/data.json";

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
      <div className="data-apart">
        <ApartList searchTerm = {this.state.filterText} data = {DATA_PLACE}></ApartList>
      </div>
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
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.259681575237362,
      "Latitude" : 106.80748166222766
  }
},
{
  "ID": "02",
  "Name": "Apart B",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.254050493550704,
      "Latitude" : 106.81370438714221
  }
},
{
  "ID": "03",
  "Name": "Apart C",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.257207319545384,
      "Latitude" : 106.8164938845177
  }
},
{
  "ID": "04",
  "Name": "Apart D",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.265056642038305,
      "Latitude" : 106.81773842950061
  }
},
{
  "ID": "05",
  "Name": "Apart E",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.2700477259295075,
      "Latitude" : 106.81439103265002
  }
},
{
  "ID": "06",
  "Name": "Apart F",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.27183938542006,
      "Latitude" : 106.80984200616076
  }
},
{
  "ID": "07",
  "Name": "Apart G",
  "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac sapien ante. Ut facilisis vitae ipsum sed elementum. Etiam volutpat ullamcorper massa at tempor. ",
  "Facilities" : ["Kasur", "Balkon", "WC"],
  "Type" : "Apartment",
  "Images" : {
      "Primary" : "../img/a.png",
      "Others" : ["../img/other1.png", "../img/other2.png", "../img/other3.png"]
  },  
  "Address" : {
      "Street" : "Jl. Jalan Kemana Aja",
      "City" : "Jakarta Selatan",
      "Country" : "Indonesia",
      "Longitude" : -6.268384036604967,
      "Latitude" : 106.80323304314807
  }
}];

export default App;