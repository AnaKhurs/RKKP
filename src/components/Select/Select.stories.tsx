import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Select} from "./Select";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/Accordion stories',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const callback = action("accordion mode change event fired")
const onClick = action("some item was clicked")

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    collapsed: true,
    titleValue: "Menu",
    setCollapsedAccordion: callback,
    items: [],
    onClick: onClick
}

export const UserUnCollapsedMode = Template.bind({})
UserUnCollapsedMode.args = {
    collapsed: false,
    titleValue: "User",
    setCollapsedAccordion: callback,
    onClick: onClick,
    items: [{title: "Dima",
        value: 1
    }, {
        title: "Valery",
        value: 2
    }, {
        title: "Nastya",
        value: 3
    }, {
        title: "Lena",
        value: 4
    }, {
        title: "Masha",
        value: 5
    }]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState(false)
    return <Accordion {...args} collapsed={value} setCollapsedAccordion={setValue} onClick={onClick} items={[
        {title: "Dima",
            value: 1
        }, {
            title: "Valery",
            value: 2
        }, {
            title: "Nastya",
            value: 3
        }, {
            title: "Lena",
            value: 4
        }, {
            title: "Masha",
            value: 5
        }]}/>
}

ModeChanging.args = {
    titleValue: "Users"
}