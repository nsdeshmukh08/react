import React, { Component } from 'react';

const ListComponent = (props) => {
        if(props.serachResult.length <= 0){
            return props.showMessage ? <div>Sorry No Matches Found.</div> : '';
        }
           return (
            <div>
                <table border='1 px solid'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           props.serachResult.map((obj)=>{
                                return <tr key = {obj._id}>
                                    <td>{obj._id}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.gender}</td>
                                </tr>
                           }) 
                        }
                        
                    </tbody>
                </table>
            </div>
        );
    
}

export default ListComponent;