import React from 'react';
import { Jumbotron } from 'reactstrap';

const Results = (props) => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-1"></div>
        <div className="col-10">
      <Jumbotron>
        <h1 className="display-3">Results!</h1>
        <hr className="my-2" />
        <p className="lead">
        </p>
        <div>
            {props.children}
        </div>
      </Jumbotron>
    </div>
    <div className="col-1"></div>
    </div>
    </div>
  );
};

export default Results;