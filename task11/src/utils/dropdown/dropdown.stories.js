import React from 'react';
import Dropdown from './dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'label',
  placeholder: 'placeholder',
  options: [{
      value: 'value 1',
      label: 'label 1',
    }, {
      value: 'value 2',
      label: 'label 2',
    }, {
      value: 'value 3',
      label: 'label 3',
    }],
};
