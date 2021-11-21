import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, RatingValueType} from "./Rating";
import {Primary} from "../../stories/Button.stories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'component/Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStars = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true
};

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
   return <Rating value={rating} setValueRating={setRating}/>
}
