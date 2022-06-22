import React, { useEffect, useState } from 'react';

import { WithTranslation } from 'react-i18next';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { withTranslation } from '~/utils/i18n';

import BaseLayout from '~/components/common/layout';
import PageTitle from '~/components/common/page-title';
import TimeoutClose from '~/components/sessiontimeout/timeout-close';
import { useStateValue } from '~/store/store';
import { RESET_ON_SUCCESS } from '~/store/actions';
import BackLink from '~/components/common/back-link';
import Button from '~/components/form-elements/button';

interface Sessiontimeout extends WithTranslation {
    t: (key: string) => typeof key;
    id: string;
}

const SessionTimeout: any = ({ t, id }: Sessiontimeout) => {
    const router = useRouter();
    const { dispatch, locale } = useStateValue();
    const [toUrl, setToUrl] = useState<string>('');

    useEffect(() => {
        if (id) {
            setToUrl(`/${locale}/contactcentre/${id}`);
        } else {
            setToUrl(`/`);
        }
        router.beforePopState(() => {
            dispatch({ type: RESET_ON_SUCCESS });
            router.push(toUrl);
            return true;
        });
    }, [id, locale, router, dispatch, toUrl]);

    const MainApp = () => {
        dispatch({ type: RESET_ON_SUCCESS });
        router.push(toUrl);
    };

    return (
        <>
            <PageTitle title={t('sessiontimeout:sessionTimeoutPage.title')} />
            <BaseLayout>
                <BackLink type="internal" url="" backButtonOnClick={MainApp} />
                <TimeoutClose />
                <div className="ontario-margin-top-40-!">
                    <Button
                        as="button"
                        aria-label="Return to previous page"
                        onClick={MainApp}
                    >
                        {t('sessiontimeout:sessionTimeoutPage.signingUp')}
                    </Button>
                </div>
            </BaseLayout>
        </>
    );
};

SessionTimeout.getInitialProps = async ({
    query,
}: NextPageContext): Promise<Record<string, unknown>> => {
    const { id } = query;
    return {
        namespacesRequired: ['base-layout', 'sessiontimeout'],
        id,
    };
};

export default withTranslation(['base-layout', 'sessiontimeout'])(SessionTimeout);
