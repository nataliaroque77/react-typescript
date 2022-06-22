import styled from 'styled-components';

import { color, spacing, typography, media } from '~/theme';

export const StyledButton = styled.a<{
    as: 'a' | 'button';
    href: string | undefined;
}>`
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: none;
    display: block;
    font-size: 1.125rem;
    font-family: ${typography.fontPrimary};
    font-weight: ${typography.fontWeightRegular};
    line-height: calc(14 / 9);
    margin: ${spacing.spacing0} ${spacing.spacing0} ${spacing.spacing5} ${spacing.spacing0};
    min-width: 10rem;
    padding: calc((${spacing.spacing4} + ${spacing.spacing1}) / 2) ${spacing.spacing5};
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    width: 100%;

    &:focus,
    &:active {
        box-shadow: 0 0 0 4px ${color.focusBlue};
        outline: 4px solid transparent;
        transition: box-shadow 0.1s ease-in-out;
    }

    @media ${media.small} {
        display: inline-block;
        margin: ${spacing.spacing0} calc(${spacing.spacing4} + ${spacing.spacing3})
            ${spacing.spacing5} ${spacing.spacing0};
        width: auto;
    }

    ${props => {
        if (props.color === 'primary') {
            return `
				background-color: ${color.btnPrimaryBG};
				border: 2px solid ${color.btnPrimaryBG};
				color: ${color.palette.white};

				&:hover {
					background-color: ${color.btnPrimaryHover};
					border: 2px solid ${color.btnPrimaryHover};
					color: ${color.palette.white};
				}

				&:focus {
					background-color: ${color.btnPrimaryHover};
					border: 2px solid ${color.btnPrimaryHover};
					color: ${color.palette.white};
					transition: background-color .2s ease-out, box-shadow 0.1s ease-in-out;
				}

				&:active {
					background-color: ${color.btnPrimaryActive};
					border: 2px solid ${color.btnPrimaryActive};
					color: ${color.palette.white};
					transition: background-color 0s, box-shadow 0.1s ease-in-out;
				}

				&:visited {
					color: ${color.palette.white};
				}
			`;
        }
        if (props.color === 'secondary') {
            return `
				background-color: ${color.btnSecondaryBG};
				border: 2px solid ${color.baseLink};
				color: ${color.baseLink};

				&:hover {
					background-color: ${color.btnSecondaryHover};
					border-color: ${color.baseLinkHover};
					color: ${color.baseLinkHover};
				}

				&:focus {
					background-color: ${color.btnSecondaryHover};
					border-color: ${color.baseLinkHover};
					color: ${color.baseLinkHover};
					transition: background-color .2s ease-out, box-shadow 0.1s ease-in-out;
				}

				&:active {
					background-color: ${color.btnSecondaryActive};
					border-color: ${color.baseLinkActive};
					color: ${color.baseLinkActive};
					transition: background-color 0s, box-shadow 0.1s ease-in-out;
				}

				&:visited {
					color: ${color.baseLink};
				}
			`;
        }
        return `
			background-color: ${color.btnTertiaryBG};
			color: ${color.baseLink};
			text-decoration: underline;

			&:hover {
				background-color: ${color.btnTertiaryHover};
				color: ${color.btnPrimaryHover};
				text-decoration: underline;
			}

			&:focus {
				background-color: ${color.btnTertiaryHover};
				color: ${color.baseLinkHover};
				text-decoration: underline;
				transition: background-color .2s ease-out, box-shadow 0.1s ease-in-out;
			}

			&:active {
				background-color: ${color.btnTertiaryActive};
				color: ${color.baseLinkActive};
				text-decoration: underline;
				transition: background-color 0s, box-shadow 0.1s ease-in-out;
			}

			&:visited {
				color: ${color.baseLink};
			}
			`;
    }}
`;

const DarkButton = styled(StyledButton)`
    background-color: ${color.darkBtnBG};
    border-color: ${color.palette.white};
    color: ${color.palette.white};
    font-weight: ${typography.fontWeightSemiBold};
    margin: ${spacing.spacing0};
    padding: ${spacing.spacing3};
    text-decoration: none;

    abbr[title] {
        text-decoration: none;
    }

    &:hover,
    &:focus {
        background-color: ${color.darkBtnHover};
        color: ${color.palette.white};
        text-decoration: none;
    }

    &:active {
        background-color: ${color.darkBtnActive};
        color: ${color.palette.white};
        text-decoration: none;
    }

    &:visited {
        color: ${color.palette.white};
        text-decoration: none;
    }
`;

export const HeaderButton = styled(DarkButton)`
    border: none;
    min-width: auto;
    width: auto;

    @media ${media.small} {
        min-width: auto;
    }
`;

export default {
    StyledButton,
    HeaderButton,
};
