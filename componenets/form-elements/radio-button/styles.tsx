import styled from 'styled-components';

import { color, spacing, media } from '~/theme';

const touchTargetSize = 36;
const touchTargetSizeMobile = 40;
const radioSize = 32;
const radioSizeMobile = 36;
const radioButtonOffset = (touchTargetSize - radioSize) / 2;
const translateOffset = radioButtonOffset * 3;

export const RadioButtonContainer = styled.div`
    position: relative;
    display: block;
    margin: 0 0 ${spacing.spacing4};
    padding: 0 ${spacing.spacing6} 0;

    &:last-of-type input:checked + label {
        margin-bottom: ${spacing.spacing7};
    }
`;

export const RadioButtonLabel = styled.label`
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;

    display: inline-block;
    font-size: 1rem;
    margin: calc(${spacing.spacing4} / 3) 0;
    padding: 0 ${spacing.spacing4};

    // remove 300ms pause on mobile
    touch-action: manipulation;

    @media ${media.small} {
        font-size: 1rem;
        margin: calc(${spacing.spacing4} / 4) 0;
    }

    &:before {
        content: '';
        border: 2px solid ${color.palette.black};
        border-radius: 50%;
        box-sizing: border-box;
        height: ${radioSizeMobile}px;
        width: ${radioSizeMobile}px;
        transition: border 0.1s ease-in-out;

        position: absolute;
        top: 0;
        left: 0;

        @media ${media.small} {
            height: ${radioSize}px;
            width: ${radioSize}px;
        }
    }

    &:after {
        content: '';
        border-radius: 50%;
        border: 12px solid ${color.palette.black};

        position: absolute;
        top: 0;
        left: 0;
        transform: translate(${translateOffset}px, ${translateOffset}px);
        opacity: 0;

        @media ${media.small} {
            border: 10px solid ${color.palette.black};
        }
    }
`;

export const FormRadioButtonField = styled.input.attrs({ type: 'radio' })`
    cursor: pointer;
    height: ${touchTargetSizeMobile}px;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: calc(${radioButtonOffset}px * -0.75);
    left: calc(${radioButtonOffset}px * -0.75);
    width: ${touchTargetSizeMobile}px;
    z-index: 1;

    @media ${media.small} {
        top: calc(${radioButtonOffset}px * -1);
        left: calc(${radioButtonOffset}px * -1);
        width: ${touchTargetSize}px;
        height: ${touchTargetSize}px;
    }

    &:focus + ${RadioButtonLabel}:before {
        -moz-box-shadow: 0 0 0 4px ${color.focusBlue};
        -webkit-box-shadow: ${color.focusBlue};
        box-shadow: 0 0 0 4px ${color.focusBlue};
        outline: 4px solid transparent;
        transition: box-shadow 0.1s ease-in-out;
    }

    &:checked + ${RadioButtonLabel}:after {
        opacity: 1;
    }
`;

export default { RadioButtonContainer, RadioButtonLabel, FormRadioButtonField };
