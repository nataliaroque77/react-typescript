import React from 'react';
import { NextPageContext } from 'next';
import { WithTranslation } from 'react-i18next';

import { withTranslation } from '~/utils/i18n';
import { TextParagraph } from '~/theme';

interface ErrorPageProps extends WithTranslation {
    t: (key: string) => typeof key;
    statusCode: number;
}

// TODO: Add Error translations
const Error = ({ t, statusCode }: ErrorPageProps) => {
    return (
        <TextParagraph>
            {statusCode
                ? `${t('base-layout:errorPage.anError')} ${statusCode} ${t(
                      'base-layout:errorPage.occuredOnServer'
                  )}`
                : `${t('base-layout:errorPage.anError')} ${t(
                      'base-layout:errorPage.occuredOnClient'
                  )}`}
        </TextParagraph>
    );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { namespacesRequired: ['base-layout'], statusCode };
};

export default withTranslation('base-layout')(Error);
