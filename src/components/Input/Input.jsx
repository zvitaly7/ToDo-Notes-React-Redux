import React from 'react';



export const Input = props => {
    const onChangeInternal = e =>
        props.onChange && props.onChange(e.target.value);

    const onBlurInternal = e =>
        props.onBlur && props.onBlur(e.target.value);

    return props.type === "text"?

        <textarea
            {...props}
            onBlur={onBlurInternal}
            onChange={onChangeInternal}
        >
            {props.children}
        </textarea>
        :
        <input
            {...props}
            onBlur={onBlurInternal}
            onChange={onChangeInternal}
        >
            {props.children}
        </input>


};