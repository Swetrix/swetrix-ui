import {Meta, Story} from '@storybook/react';
import {IModalProps, Modal} from "../src/Modal/Modal";

const meta: Meta = {
    title: 'Modal',
    component: Modal,
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

const Template: Story<IModalProps> = args => <Modal {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    className: '',
    isOpened: true,
    submitText: 'cnscs',
    size: 'large',
    title: 'title',
    message: 'JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y JBjsbcsouvhscovoucvscuhvsocusvcohcuscvscoocusvuhvpbueij]wopc[hvbe0y'
};
