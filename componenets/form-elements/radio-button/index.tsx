import React from 'react';

import { RadioButtonContainer, FormRadioButtonField, RadioButtonLabel } from './styles';

interface RadioButtonProps {
    id: string;
    name: string;
    value: string;
    text: string;
    checked: boolean;
    radioOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    register: (instance: HTMLInputElement | null) => void;
    errorTitle: string;
}

const RadioButton = ({
    id,
    name,
    value,
    text,
    checked,
    radioOnChange,
    register,
    errorTitle,
}: RadioButtonProps) => {
    return (
        <RadioButtonContainer>
            <FormRadioButtonField
                type="radio"
                id={id}
                name={name}
                value={value}
                defaultChecked={checked}
                onChange={radioOnChange}
                ref={register}
                data-errortitle={errorTitle}
            />
            <RadioButtonLabel htmlFor={id}>{text}</RadioButtonLabel>
        </RadioButtonContainer>
    );
};

export default RadioButton;
