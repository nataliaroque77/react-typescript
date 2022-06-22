import React from 'react';

import { StyledButton } from './styles';

export const ButtonAppearances = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
};

interface ButtonProps {
    appearance?: keyof typeof ButtonAppearances;
    as?: 'a' | 'button';
    href?: string | undefined;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
}

const Button = ({
    appearance = 'primary',
    as = 'button',
    href,
    type,
    children,
    ...other
}: ButtonProps) => (
    <StyledButton {...other} color={appearance} type={type} as={as} href={href}>
        {children}
    </StyledButton>
);

export default Button;
