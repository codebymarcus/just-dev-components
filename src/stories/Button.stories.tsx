import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button} from '../components';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  label: 'Hello world!',
};
