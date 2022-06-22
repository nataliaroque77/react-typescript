/* eslint-disable no-prototype-builtins */
import React, { ReactNode } from 'react';
import { WithTranslation } from 'react-i18next';

import { withTranslation } from '~/utils/i18n';

import InlineError from '../inline-error';
import Label from '../label';
import HintText from '../hint-text';
import HintExpander from '../hint-expander';
import FormGroup from '../form-group';

import { FormTextField } from './styles';

interface TextInputProps extends WithTranslation {
    t: any;
    id: string;
    name: string;
    type?: string;
    defaultValue: string | undefined;
    labelSize?: 'default' | 'large';
    hiddenLabel?: boolean;
    text: string;
    hintId?: string;
    hintText?: string;
    hintExpander?: boolean;
    hintExpanderLabel?: string;
    hintExpanderContent?: string | ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    inputSize?: string;
    register: (instance: HTMLInputElement | null) => void;
    required?: boolean;
    errors: boolean | undefined;
    errorTitle: string;
    autocomplete?: string;
}

const TextInput = ({
    t,
    id,
    name,
    type = 'text',
    defaultValue,
    hiddenLabel,
    labelSize = 'default',
    text,
    hintId,
    hintText,
    hintExpander = false,
    hintExpanderLabel,
    hintExpanderContent,
    onChange,
    onBlur,
    inputSize,
    register,
    required,
    errors,
    errorTitle,
    autocomplete,
}: TextInputProps) => {
    return (
        <FormGroup errors={errors} id={`formgroup-${id}`}>
            <Label id={id} addRequiredFlag={required} size={labelSize} readonly={hiddenLabel}>
                {text}
            </Label>

            {errors && (
                <InlineError id={`${id}-error`}>{t(`errors:errorCodes.${errors}`)}</InlineError>
            )}

            {hintText && <HintText id={hintId}>{hintText}</HintText>}

            {hintExpander && (
                <HintExpander id={id} label={hintExpanderLabel} content={hintExpanderContent} />
            )}

            <FormTextField
                aria-describedby={[hintId || undefined, errors && `${id}-error`].join(' ')}
                aria-invalid={!!errors}
                type={type}
                id={id}
                name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                onBlur={onBlur}
                ref={register}
                data-errortitle={errorTitle}
                width={inputSize}
                autoComplete={autocomplete || 'off'}
            />
        </FormGroup>
    );
};

export default withTranslation('errors')(TextInput);
