import React, { Component } from 'react';

const SearchInputComponent = (props) => {
        return (
            <div>
                <input type="text" id='search' placeholder="enter text here"/>
                <button onClick = {() => {props.eventHandler(document.getElementById('search').value)}}>Search</button>
            </div>
        );
}

export default SearchInputComponent;