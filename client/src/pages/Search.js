import React, { Component } from 'react';
import { Searchcard } from '../components/Search';
import Results from '../components/Results';
import { Button, Input } from 'reactstrap';
import { Books } from '../components/Books';
import axios from 'axios'

export class Search extends Component {

  state = {
    books: [],
    search: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

   handleSearch = event => {
     event.preventDefault();
     console.log(this.state.search)

      axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + this.state.search)
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
      <Input
      type="text"
      name="search"
      placeholder="Enter book title here!"
      value={this.state.search}
      onChange={this.handleInputChange}
      />
      <Button color="success" onClick={this.handleSearch}>Search!</Button>
      </Searchcard>
        <Results>
          {this.state.books.map(books => (
            <Books 
            key={books.id}
            title={books.volumeInfo.title}
            author={books.volumeInfo.authors[0]}
            description={books.volumeInfo.description}
            image={books.volumeInfo.imageLinks.smallThumbnail}
            />
          ))}
        </Results>
    </div>
  );
};
}