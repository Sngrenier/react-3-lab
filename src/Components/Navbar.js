import React, {Component} from 'react'

export default class Navbar extends Component {
    render(){
        return(
            <div className="nav-buttons">
                <button className="prevBtn" onClick={this.props.prevBtn}>{`< Previous`}</button>
                <div className="center-buttons">
                <button className="center-btn">Edit</button>
                <button className="center-btn">Delete</button>
                <button className="center-btn">New</button>
                </div>
                <button className="nxtBtn" onClick={this.props.nxtBtn}>{`Next >`}</button>
            </div>
        )
    }

}
