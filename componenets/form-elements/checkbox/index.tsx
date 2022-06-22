import React, { ReactNode } from 'react';

import HintText from '../hint-text';

import { CheckboxContainer, CheckboxLabel, FormCheckboxField } from './styles';

interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    text: string;
    hintId: string;
    hintText: string;
    checked: boolean;
    checkboxOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    register: (instance: HTMLInputElement | null) => void;
    errorTitle: string;
    children?: ReactNode;
}

const Checkbox = ({
    id,
    name,
    value,
    text,
    hintId,
    hintText,
    checked,
    checkboxOnChange,
    register,
    errorTitle,
    children,
}: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <FormCheckboxField
                id={id}
                name={name}
                value={value}
                type="checkbox"
                aria-describedby={hintId || undefined}
                defaultChecked={checked}
                onChange={checkboxOnChange}
                ref={register}
                data-errortitle={errorTitle}
            />
            <CheckboxLabel htmlFor={id}>{text}</CheckboxLabel>
            {hintText && (
                <HintText fieldsetHintText id={hintId}>
                    {hintText}
                </HintText>
            )}
            {children}
        </CheckboxContainer>
    );
};

export default Checkbox;
