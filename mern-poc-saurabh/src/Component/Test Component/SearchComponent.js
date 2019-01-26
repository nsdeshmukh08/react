import React, { Component } from 'react';
import SearchInputComponent  from "./SearchInputComponent";
import ListComponent from './ListComponent';
import data from './search-list'
class SearchComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            serachResult : [],
            showMessage : false
        }
    }

    searchTextOnClick = (text) => {
        let searchResultArr = [];
        if(text.length > 0){
            searchResultArr = this.getSearchedData(text);
            if(searchResultArr.length > 0){
                this.setState({
                    serachResult: searchResultArr
                })
            }else{
                this.setState({
                    serachResult: [],
                    showMessage : true
                })
            }
        }
    }

    getSearchedData = (text) => {
        return data.filter(obj => {
            return obj.name.toLowerCase().indexOf(text.toLowerCase()) > -1 || obj._id == text.toLowerCase() || obj.gender.toLowerCase() == text.toLowerCase();
        });
    }

    render() {
        //console.log('data---->' + JSON.stringify(data));
        return (
            <div>
                <SearchInputComponent eventHandler = {this.searchTextOnClick}/>
                <ListComponent serachResult = {this.state.serachResult} showMessage = {this.state.showMessage}/>
            </div>
        );
    }
}

export default SearchComponent;