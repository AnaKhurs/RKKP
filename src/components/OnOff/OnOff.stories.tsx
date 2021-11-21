import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/OnOff stories',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;


export const OnMode = () => {
    return <OnOff on={true} setOn={action('on or off clicked')}/>
}
export const OffMode = () => {
    return <OnOff on={false} setOn={action('on or off clicked')}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return <OnOff on={value} setOn={setValue}/>
}