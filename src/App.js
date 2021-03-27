import React from "react";
import './App.css';
import Clock from "./Clock";
import Image from './Image.png'
class App extends React.Component {

  state = {
    Person: {
      fullName: "Houssem Eddine Hammadi",
      bio: "I Learn to code",
      imgSrc: Image,
      profession: "Student"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {
        this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt ="pic" ></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
           
          </>
        )}

        <button onClick={this.handleShowPerson}>Show</button>
        <Clock/>
      </>
    );
  }
}

export default App;
