import React from 'react';
import renderer from 'react-test-renderer';

import Button from './button';

it('should be rendered correctly', () => {
  const component = renderer.create(
      <Button>Button</Button>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
