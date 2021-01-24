import './App.css'
import React, {Component} from 'react'
import data from './data'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import InfoBox from './Components/InfoBox'

class App extends Component {
  constructor(){
    super()

    this.state={
      data: data,
      value: 0
    }
  }
   
    // ShowPerson=() =>{
    //     let data = this.state.data
    //     if(data.id===this.state.value){
    //         this.setState({
    //           data: data.indexOf(data.id)
    //         })
    //     }
    //   }


    prevBtn=()=>{
      const value = this.state.value -1
      if(value > -1){
      this.setState({
        value: value
      })} else {
        this.setState({
          value: value +1
        })
      }
    }
  

    nxtBtn=()=>{
      const value = this.state.value +1
      if(value < 25){
        this.setState({
        value: value
      })} else {
        this.setState({
          value: value -1
        })
      }
    }

    // deletePerson = (index) => {
    //   const{data} = this.state
    //   data.splice(index, 1)
    //   this.setState({data})
    // }

  render(){
    return (
      <div className="App">
        <Header />
        <InfoBox className="PersonInfo" value={this.state.data[this.state.value]}/>
        <Navbar className="Nav" nxtBtn={this.nxtBtn} prevBtn={this.prevBtn}/>
        {/* <button className="PrevBtn" value={this.state.value}/>
        <button className="NxtBtn" value={this.state.value}/> */}
        <div className="emptyBox">
        </div>
      </div>
    );
  }
}
export default App;
