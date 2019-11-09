import React, { Component } from 'react';
import { Searchcard } from '../components/Search';
import Results from '../components/Results';
import { Button } from 'reactstrap';
import { Books } from '../components/Books';
import axios from 'axios'

export class Search extends Component {

  state = {
    books: []
  }
  
  componentDidMount() {
    
    this.handleSearch();
    
  }
  
  handleSearch = () => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:fahrenheit+451')
    .then(response => {
      console.log(response)
      this.setState({books: response.data.items})
    })
    .catch(error => console.log(error))
  }

  render(props) {

  return (
    <div>
      <Searchcard>
      <Button color="success" onClick={this.handleSearch}>Search!</Button>
      </Searchcard>
        <Results>
          {this.state.books.map(books => (
            <Books 
            key={books.id}
            title={books.volumeInfo.title}
            author={books.volumeInfo.authors[0]}
            description={books.volumeInfo.description}
            />
          ))}
        </Results>
    </div>
  );
};
}