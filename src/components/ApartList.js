import React, { Component } from 'react';

class ApartData extends Component {
    render() {
        return <div className="data-apart">
            <div className="image" src={this.props.data.Images.Primary}></div>
            <div className="detail">
                <span className="name">{this.props.data.Name}</span>
                <span className="description">{this.props.data.Description}</span>
                <span className="address">{this.props.data.Address.Street}</span>
            </div>
            <button className="detailButton"></button>
        </div>
    }
}

// class ApartName extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div>
//             <h2> {this.props.name}</h2> 
//         </div>
//     }
// }

class ApartList extends Component {
    render() {
        let ListData = [];
        // let search = [];
        let searchTerm = this.props.searchTerm;
        let key = '';
        this.props.data.forEach((row) => {
            if (row.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
                return;
            } else {
                key = row.Name.toLowerCase();
            }
            
            // if (searchTerm !== '')
            //     ListData.push( <SearchMatch match = {key}></SearchMatch>);
            ListData.push( <ApartData data = {row}></ApartData>)
        })

        return <div>
            {ListData}
        </div>
    }
}

export default ApartList;