import styled, { css } from 'styled-components';

import { color, media, spacing, typography } from '~/theme';

export const FieldLabel = styled.label<{ readonly: boolean; size: 'default' | 'large' }>`
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-word;
    hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;

    cursor: pointer;
    color: ${color.palette.black};
    display: inline-block;
    font-family: ${typography.fontSecondary};
    font-weight: ${typography.fontWeightBold};
    margin: 0 0 ${spacing.spacing3} 0;
    width: auto;

    ${props =>
        props.size === 'default'
            ? css`
                  font-size: 1.125rem;
                  line-height: ${typography.lineHeight18};

                  @media ${media.small} {
                      font-size: 1.1875rem;
                      line-height: ${typography.lineHeight17};
                  }
              `
            : css`
                  font-size: 1.4375rem;
                  line-height: ${typography.lineHeight15};

                  @media ${media.small} {
                      font-size: 1.75rem;
                      letter-spacing: ${typography.letterSpacingXSmall};
                      line-height: ${typography.lineHeight1};
                  }
              `}

    ${props =>
        props.readonly &&
        css`
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        `}
`;

export const RequiredFlag = styled.span`
    font-family: ${typography.fontPrimary};
    font-size: 1rem;
    font-weight: ${typography.fontWeightRegular};
`;

export default { FieldLabel, RequiredFlag };
