import React from 'react';
import Searchcard from '../components/Search';
import Results from '../components/Results';
import { Books } from '../components/Books';

export const Search = (props) => {
  return (
    <div>
      <Searchcard />
        <Results>
            <Books />
        </Results>
    </div>
  );
};