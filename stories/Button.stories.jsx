import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: true }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Siguiente',
  backgroundColor: 'red',
  onClick: { action: true }
};

/* Verify button args */
Primary.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(args.label).toEqual('Siguiente');
  await expect(args.backgroundColor).toEqual('red');
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secundario',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Largo',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Pequeño',
};
