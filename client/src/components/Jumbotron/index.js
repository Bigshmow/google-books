import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../../Style/Style.css'

const Mainjumb = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Google Books Search</h1>
        <p className="lead">Search for and save books of interest</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Mainjumb;