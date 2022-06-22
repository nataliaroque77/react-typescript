import React from 'react';
import { WithTranslation } from 'react-i18next';

import { withTranslation } from '~/utils/i18n';

import { FieldLabel, RequiredFlag } from './styles';

interface LabelProps extends WithTranslation {
    t: (key: string) => typeof key;
    id: string;
    size: 'default' | 'large';
    readonly?: boolean;
    children: string;
    addRequiredFlag: boolean | undefined;
}

const Label = ({
    t,
    id,
    size = 'default',
    readonly = false,
    children,
    addRequiredFlag,
}: LabelProps) => {
    return (
        <FieldLabel htmlFor={id} size={size} readonly={readonly}>
            {children}
            {addRequiredFlag ? <RequiredFlag> ({t('required')})</RequiredFlag> : null}
        </FieldLabel>
    );
};

export default withTranslation('common')(Label);
