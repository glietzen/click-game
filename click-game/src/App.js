import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import employees from './employees.json';
import FriendCard from './components/FriendCard/';

class App extends Component {
  pickedArrary = [];
  state = {
    employees: employees,
    score: 0,
    highScore: 0
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    this.setState({employees})
  };
  
  checkPick = (id) => {

    this.pickedArrary.push({id: id});
    console.log(this.pickedArrary)
    
    console.log(`id: ${id}`);

    let result = this.pickedArrary.filter((item) => {
      return item.id === id;
    });

    console.log(result)


    if (result.length > 1) {
      console.log('you lose.')
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        });
      }
      this.setState({
        score: 0
      })
      this.pickedArrary = [];
      alert('Play again!')
    } else {
      console.log('keep going');
      this.setState({
        score: this.state.score+ 1
      })
    }

    
    this.shuffleArray(this.state.employees)
  }

  render() {
    return (
      <div className="App">
        <Nav
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        <div className="container">
        {
          this.state.employees.map((item) => {
           return <FriendCard 
              key={item.id}
              image={item.image}
              click={this.checkPick}
              id={item.id}
            />
          })
        }
        </div>
        
      </div>
      
    );
  }
}

export default App;
