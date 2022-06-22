import styled from 'styled-components';
import { imageUrl } from '~/utils/url-helpers';

import { color, spacing, media } from '~/theme';

const checkboxSVG = imageUrl('images/ontario-checkbox-background-no-width.svg');
const touchTargetSize = 36;
const touchTargetSizeMobile = 40;
const checkboxSize = 28;
const checkboxSizeMobile = 32;
const checkboxBorderSize = 2;

const CheckboxContainer = styled.div`
    margin: 0 0 ${spacing.spacing4};
    min-height: ${checkboxSizeMobile}px;
    padding: 0 ${spacing.spacing7} 0;
    position: relative;

    &:last-of-type {
        margin: ${spacing.spacing0};
    }

    @media ${media.small} {
        padding: 0 ${spacing.spacing6} 0;
        min-height: ${checkboxSize}px;
    }
`;

const CheckboxLabel = styled.label`
    cursor: pointer;
    display: inline-block;
    margin: calc(${spacing.spacing4} / 3) 0;
    padding: 0 ${spacing.spacing4};

    @media ${media.small} {
        overflow-wrap: break-word;
        word-wrap: break-word;
        -ms-word-break: break-all;
        word-break: break-word;
        -ms-hyphens: auto;
        hyphens: auto;
        -webkit-hyphens: auto;

        line-height: 1.5;
        margin: ${spacing.spacing1} 0;
    }

    // [ ] Check box styles
    &:before {
        content: '';
        border: ${checkboxBorderSize}px solid ${color.palette.black};
        border-radius: 4px;
        box-sizing: content-box;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: ${checkboxSizeMobile}px;
        height: ${checkboxSizeMobile}px;
        transition: border 0.1s ease-in-out;

        @media ${media.small} {
            width: ${checkboxSize}px;
            height: ${checkboxSize}px;
        }
    }

    // ✔✔✔ Check mark styles ✔✔✔
    &:after {
        content: '';
        background-image: url(${checkboxSVG});
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        height: calc(${checkboxSizeMobile}px + ${checkboxBorderSize}px);
        width: calc(${checkboxSizeMobile}px + ${checkboxBorderSize}px);

        opacity: 0;
        bottom: 0;
        left: calc(${checkboxBorderSize}px / 2);
        right: 0;
        top: calc(${checkboxBorderSize}px / 2);

        @media ${media.small} {
            height: calc(${checkboxSize}px + ${checkboxBorderSize}px);
            width: calc(${checkboxSize}px + ${checkboxBorderSize}px);
        }
    }
`;

const FormCheckboxField = styled.input.attrs({ type: 'checkbox' })`
    width: ${touchTargetSizeMobile}px;
    height: ${touchTargetSizeMobile}px;
    opacity: 0;
    position: absolute;
    top: -${checkboxBorderSize}px;
    left: -${checkboxBorderSize}px;

    @media ${media.small} {
        cursor: pointer;
        margin: 0;
        width: ${touchTargetSize}px;
        height: ${touchTargetSize}px;
        z-index: 1;

        // prevent blue default highlighting of input on android
        -webkit-tap-highlight-color: transparent;
    }

    // focus
    &:focus + ${CheckboxLabel}:before {
        -moz-box-shadow: 0 0 0 4px ${color.focusBlue};
        -webkit-box-shadow: 0 0 0 4px ${color.focusBlue};
        box-shadow: 0 0 0 4px ${color.focusBlue};
        outline: 4px solid transparent;
        transition: all 0.1s ease-in-out;
    }

    &:checked + ${CheckboxLabel}:after {
        opacity: 1;
    }

    &:checked + ${CheckboxLabel}:before {
        background-color: ${color.palette.black};
    }
`;

export { CheckboxContainer, CheckboxLabel, FormCheckboxField };
