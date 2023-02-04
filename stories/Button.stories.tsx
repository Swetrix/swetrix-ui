import {Meta, Story} from '@storybook/react';
import {Button, IButtonProps} from '../src/Button/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: {expanded: true},
    },
};

export default meta;

const Template: Story<IButtonProps> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    type: 'button',
    children: 'Click me!',
    loading: false,
    large: true,
    primary: true,
    themeType: 'christmas'
};
