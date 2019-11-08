import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardImg, CardText } from 'reactstrap';

export class Books extends Component {
  
  render(props) {
  return (
    <div className="row">
        <div className="col-12">
      <Card>
        <CardHeader>
            <span className="float-left h3">{this.props.title}BOOKTITLEPLACEHOLDER!!!</span>
            <span className="float-right">
            <Button color="info">View</Button>
            <Button color="warning">Save</Button>
            {/* <Button color="warning">Delete</Button> */}
            </span>
        </CardHeader>
        <CardBody>
          <CardText className="text-left h5">Written by: {this.props.author} BOOKAUTHORPLACEHOLDER!!!</CardText>
          <span><span className="float-left"><CardImg top width="100%" src="#" alt="Book Image" /></span><p className="text-left">{this.props.description}DESCRIPTIONPLACEHOLDER!!!: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit. Id diam maecenas ultricies mi eget mauris pharetra et. Lectus urna duis convallis convallis. Varius morbi enim nunc faucibus a. Risus sed vulputate odio ut enim blandit. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Tempor orci eu lobortis elementum nibh. Sapien eget mi proin sed libero.</p></span>
          </CardBody>
      </Card>
      </div>
    </div>
  );
};
};