import React, {Component} from 'react';
import Article from './Article';
import './App.css';

class App extends Component {

  state = {
    articles: [
      {title: "Bruxelles, ma Belle",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio culpa eius excepturi earum labore voluptas debitis aliquid veritatis doloribus?",author: "Local Guide"},
      {title: "Venezia, notre inoubliable",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio culpa eius excepturi earum labore voluptas debitis aliquid veritatis doloribus?",author: "Local Guide"},
      {title: "Makkah, la sainte",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio culpa eius excepturi earum labore voluptas debitis aliquid veritatis doloribus?",author: "Local Guide"},
      {title: "Moskva, l'incomprise",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio culpa eius excepturi earum labore voluptas debitis aliquid veritatis doloribus?",author: "Local Guide"}
    ]
  };

  render() {
    return (
      <div className="App">
        
        {
         this.state.articles.map(param => {
           return (
             <Article title={param.title} text={param.text} author={param.author}></Article>
           )
         }) 
        }
      </div>
    );
  }
}

export default App;
