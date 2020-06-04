import React, { Component } from 'react';

// class SearchMatch extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div>
//         <p> Match: {this.props.match}</p> 
//       </div>
//     }
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    filterList = (event) => {
        this.props.userInput(event.target.value);
    } 
    
    render() {
        return (
            <div className="wrap">
                <div className="search">
                    <input type="text"
                        className="searchTerm"
                        placeholder="Searching Apartment or Office ?"
                        value = {this.props.searchTerm}
                        onChange = {this.filterList} 
                        autoFocus
                    />
                    <button onSubmit={this.mySubmitHandler} type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
