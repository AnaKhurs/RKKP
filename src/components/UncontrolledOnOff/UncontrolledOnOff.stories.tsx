import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/UncontrolledOnOff stories',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;


export const OnMode = () => {
    return <UncontrolledOnOff defaultOn={true} onChange={action('on or off clicked')}/>
}
export const OffMode = () => {
    return <UncontrolledOnOff defaultOn={false} onChange={action('on or off clicked')}/>
}