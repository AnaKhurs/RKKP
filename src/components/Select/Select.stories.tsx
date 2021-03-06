import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {PropsSelectType, Select} from "./Select";
import {Accordion, AccordionPropsType} from "../Accordion/Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/Select stories',
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

const onChange = action("value changed")

export const WithValue = Template.bind({})
WithValue.args = {
    onChange: onChange,
    items: [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kiev"}],
    value: "2"
}

export const WithoutValue = Template.bind({})
WithoutValue.args = {
    onChange: onChange,
    items: [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kiev"}]
}

export const ModeChanging: Story<PropsSelectType> = (args) => {
    const [value, setValue] = useState("2")
    return <Select {...args}
                   value={value}
                   items={
                       [
                           {value: "1", title: "Minsk"},
                           {value: "2", title: "Moscow"},
                           {value: "3", title: "Kiev"}
                       ]
                   }
                   onChange={setValue}
    />
}

/*
ModeChanging.args = {
    titleValue: "Users"
}*/
