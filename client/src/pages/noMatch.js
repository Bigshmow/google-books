import React from "react";
import { Jumbotron } from "reactstrap"

export const noMatch = props => (
    <div>
      <Jumbotron>
        <h1 className="display-3">404</h1>
        <p className="lead">Sorry, but the page you are trying to view doesn't exist.</p>
      </Jumbotron>
    </div>
);