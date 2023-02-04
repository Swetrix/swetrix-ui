import {Meta, Story} from '@storybook/react';
import {Button, IButtonProps} from '../src/Button/Button';
import {Checkbox, ICheckboxProps} from "../src/Checkbox/Checkbox";

const meta: Meta = {
    title: 'Checkbox',
    component: Checkbox,
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

const Template: Story<ICheckboxProps> = args => <Checkbox {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    checked: true
};
