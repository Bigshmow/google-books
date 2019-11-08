import React, { Component } from 'react';
import Results from '../components/Results';
import { Books } from '../components/Books';

export class Saved extends Component {

    render() {
  return (
    <div>
      <Results>
            <Books />
        </Results>
    </div>
  );
};
}