import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardImg, CardText } from 'reactstrap';

export class Books extends Component {
  
  render(props) {

  return (
    <div className="row">
        <div className="col-12">
      <Card>
        <CardHeader>
            <span className="float-left h3">{this.props.title}</span>
            <span className="float-right">
            <Button color="info">View</Button>
            <Button color="warning">Save</Button>
            </span>
        </CardHeader>
        <CardBody>
          <CardText className="text-left h5">Written by: {this.props.author}</CardText>
          <span><span className="float-left"><CardImg top width="100%" src={this.props.image} alt="Book Image" /></span><p className="text-left">{this.props.description}</p></span>
          </CardBody>
      </Card>
      </div>
    </div>
  );
};
};