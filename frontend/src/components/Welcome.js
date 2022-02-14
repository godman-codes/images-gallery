import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that retrives images using Unsplash API. in
        order to start enter any search term in the input field
      </p>
      <p>
        <Button variant="primary" href="http://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
