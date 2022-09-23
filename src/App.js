import React from 'react';
import { ReactDOM } from 'react-dom';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
class App extends React.Component {
  constructor() {
    super();
    this.onChangeSearchField=this.onChangeSearchField.bind(this)
     this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          email:'frank@gmail.com',
          img:'a.jpg',
          id: '12sdf3!'
        }, {
          name: 'Dracula',
          email:'dracula@gmail.com',
          img:'b.jpg',
          id: '345ljfgoi$@#'
        }, {
          name: 'Zombie',
          email:'zombie@gmail.com',
          img:'c.jpg',
          id: 'sg#@$33 '
        }, {
          name: 'Godzila',
          email:'godzila@gmail.com',
          img:'d.jpg',
          id: 'sg#@3 '
        }, {
          name: 'Lion',
          email:'lion@gmail.com',
          img:'e.jpg',
          id: 'sg$33 '
        }, {
          name: 'Bropa',
          email:'bropa@gmail.com',
          img:'f.jpg',
          id: 'sg23$33 '
        }, {
          name: 'Bpppp',
          email:'bpppppp@gmail.com',
          img:'g.jpg',
          id: 'sg23$33@#!'
        }, {
          name: 'Bhhha',
          email:'bhhhha@gmail.com',
          img:'h.jpg',
          id: 'sg23$#@#3 '
        }
      ],
      searchField:''
    }
  }
  onChangeSearchField(e){
    this.setState({searchField:e.target.value})
  }
  
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters'  onChange={this.onChangeSearchField}/>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}
export default App;
