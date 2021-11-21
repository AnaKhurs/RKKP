import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Primary} from "../../stories/Button.stories";
import {UncontrolledRating} from "./UncontrolledRating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/UncontrolledRating stories',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;

export const EmptyStars = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true
};

export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue={0}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5}/>