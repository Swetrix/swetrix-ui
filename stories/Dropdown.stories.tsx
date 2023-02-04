import {Meta, Story} from '@storybook/react';
import {Dropdown, IDropdownProps} from "../src/Dropdown/Dropdown";

const meta: Meta = {
    title: 'Dropdown',
    component: Dropdown,
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

const Template: Story<IDropdownProps> = args => <Dropdown {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    onSelect: (item: any) => {},
    title: 'ADF',
    items: ['ddd', 'aaa', 'sss', 'eee'],
    buttonClassName:'flex items-center w-full rounded-md border border-gray-300 shadow-sm px-3 md:px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:text-gray-50 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600',
    selectItemClassName:'text-gray-700 block px-4 py-2 text-base cursor-pointer hover:bg-gray-200 dark:text-gray-50 dark:border-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'

};
