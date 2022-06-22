import styled from 'styled-components';

import { color, spacing, typography } from '~/theme';

export const FormTextField = styled.input`
    border: 2px solid ${color.palette.black};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${color.palette.black};
    display: block;
    font-size: 1rem;
    font-family: ${typography.fontPrimary};
    line-height: 1.5;
    margin: 0 0 ${spacing.spacing7};
    max-width: 46em;
    padding: 0.625rem ${spacing.spacing4};
    transition: box-shadow 0.1s ease-in-out;
    width: ${props => {
        switch (props.width) {
            case '20-char-width':
                return '41ex';
            case '10-char-width':
                return '23ex';
            case '7-char-width':
                return '17ex';
            case '5-char-width':
                return '14ex';
            case '4-char-width':
                return '12ex';
            case '3-char-width':
                return '10ex';
            case '2-char-width':
                return '8ex';
            default:
                return '100%';
        }
    }};

    &:focus,
    &:active {
        box-shadow: 0 0 0 4px ${color.focusBlue};
        outline: 4px solid transparent;
        transition: box-shadow 0.1s ease-in-out;
    }
`;

export const ConditionalTextFieldContainer = styled.div`
    margin-top: ${spacing.spacing0};
    margin-left: ${spacing.spacing4};

    & label {
        display: none;
    }

    & FormTextField {
        margin-bottom: calc(${spacing.spacing6} + ${spacing.spacing1});
    }
`;

export default {
    FormTextField,
    ConditionalTextFieldContainer,
};
