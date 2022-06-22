import React from 'react';
import { NextPageContext } from 'next';
import { WithTranslation } from 'react-i18next';

import { compose } from 'recompose';
import { withTranslation } from '~/utils/i18n';

import BaseLayout from '~/components/common/layout';
import MainApp from '~/components/main/';
import PageTitle from '~/components/common/page-title';
import withSessionTimeout from '~/components/sessiontimeout';

interface CallCentreProps extends WithTranslation {
    t: (key: string) => typeof key;
    id: string;
}

const CallCentre: any = ({ t, id }: CallCentreProps) => {
    const title = `${t('contactcentre:title.page')} ${id} | ${t('contactcentre:title.ontario')}`;

    return (
        <>
            <PageTitle title={title} />
            <BaseLayout>
                <MainApp />
            </BaseLayout>
        </>
    );
};

CallCentre.getInitialProps = async ({
    query,
}: NextPageContext): Promise<Record<string, unknown>> => {
    const { id } = query;

    return {
        namespacesRequired: ['base-layout', 'contactcentre'],
        id,
    };
};

export default compose(
    withTranslation(['base-layout', 'contactcentre']),
    withSessionTimeout
)(CallCentre);
