import React from 'react';
import Input from './input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'label',
  placeholder: 'placeholder',
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  label: 'label',
  placeholder: 'placeholder',
  errors: 'error',
};
