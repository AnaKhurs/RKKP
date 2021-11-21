import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/Accordion stories',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callback = action("accordion mode change event fired")

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    collapsed: true,
    titleValue: "Menu",
    setCollapsedAccordion: callback
}

export const UserUnCollapsedMode = Template.bind({})
UserUnCollapsedMode.args = {
    collapsed: false,
    titleValue: "User",
    setCollapsedAccordion: callback
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState(false)
    return <Accordion {...args} collapsed={value} setCollapsedAccordion={setValue}/>
}

ModeChanging.args = {
    titleValue: "Users"
}