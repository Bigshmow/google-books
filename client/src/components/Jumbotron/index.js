import React from 'react';
import { Jumbotron } from 'reactstrap';
import '../../Style/Style.css'

const Mainjumb = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Google Books Search</h1>
        <hr className="my-2" />
        <p className="lead">Search for and save books of interest</p>
      </Jumbotron>
    </div>
  );
};

export default Mainjumb;