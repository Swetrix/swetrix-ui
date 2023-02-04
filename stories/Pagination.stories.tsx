import {Meta, Story} from '@storybook/react';
import {Beta, IBetaProps} from "../src/Beta/Beta";
import Pagination, {IPaginationProps} from "../src/Pagination/Pagination";

const meta: Meta = {
    title: 'Pagination',
    component: Pagination,
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

const Template: Story<IPaginationProps> = args => <Pagination {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    total: 50,
    pageAmount:5,
    page: 2,
    setPage: () => {},
    prevButtonText: 'Попередня',
    nextButtonText: 'Наступна',
};
