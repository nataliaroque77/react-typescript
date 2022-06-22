import React from 'react';

import PageNotFound from '~/components/common/page-not-found';
import PageTitle from '~/components/common/page-title';
import { withTranslation } from '~/utils/i18n';

interface NotFoundProps {
    t: (key: string) => typeof key;
}

const NotFound = ({ t }: NotFoundProps) => {
    return (
        <>
            <PageTitle title={t('title')} />
            <PageNotFound />
        </>
    );
};

export default withTranslation(['error404'])(NotFound);
