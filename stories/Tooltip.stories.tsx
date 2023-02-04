import {Meta, Story} from '@storybook/react';
import {Tooltip, ITooltipProps} from "../src/Tooltip/Tooltip";

const meta: Meta = {
    title: 'Tooltip',
    component: Tooltip,
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

const Template: Story<ITooltipProps> = args => <Tooltip {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    className: 'mt-10, text-sky-400',
    text: 'jcnjdcjcndjcnjn'
};
