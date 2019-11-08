import React from 'react';
import { Card, Button, CardHeader, CardBody, CardText, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Searchcard = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Book Search</CardHeader>
        <CardBody>
          <CardText>Search for a book you'd like to know more about!</CardText>
          <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
          <Button color="success">Search!</Button>
        </InputGroupAddon>
        </InputGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default Searchcard;