import React from 'react';
import { WithTranslation } from 'react-i18next';
import { compose } from 'recompose';
import { withTranslation } from '~/utils/i18n';

import BaseLayout from '~/components/common/layout';

import MainApp from '~/components/main';
import withSessionTimeout from '~/components/sessiontimeout';
import PageTitle from '~/components/common/page-title';

interface IndexPageProps extends WithTranslation {
    t: (key: string) => typeof key;
}

const IndexPage: any = (props: IndexPageProps) => {
    return (
        <>
            <PageTitle title={props.t('mainform:title')} />
            <BaseLayout>
                <MainApp />
            </BaseLayout>
        </>
    );
};

IndexPage.getInitialProps = async (): Promise<Record<string, unknown>> => {
    return {
        namespacesRequired: ['base-layout', 'mainform'],
    };
};

export default compose(withTranslation(['base-layout', 'mainform']), withSessionTimeout)(IndexPage);
