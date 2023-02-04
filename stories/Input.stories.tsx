import {Meta, Story} from '@storybook/react';
import {Button, IButtonProps} from '../src/Button/Button';
import {IInputProps, Input} from "../src/Input/Input";

const meta: Meta = {
    title: 'Input',
    component: Input,
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

const Template: Story<IInputProps> = args => <Input {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

let value = 'cjbdhcbhcchbvdcbsdcbuvc'

Default.args = {
    value,
};
