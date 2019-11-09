import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardText, InputGroup} from 'reactstrap';

export class Searchcard extends Component {
  
  render(props) {

  return (
    <div>
      <Card>
        <CardHeader>Book Search</CardHeader>
        <CardBody>
          <CardText>Search for a book you'd like to know more about!</CardText>
          <InputGroup>
            {this.props.children}
        </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};
}