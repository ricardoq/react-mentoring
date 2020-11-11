import React from 'react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  color: 'primary-inverted',
  children: 'Primary inverted',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'secondary',
};
