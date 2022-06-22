import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { WithTranslation } from 'react-i18next';
import { compose } from 'recompose';

import { withTranslation } from '~/utils/i18n';
import { useStateValue } from '~/store/store';

import {
    successfulSignupProducts,
    failedSignupProducts,
} from '~/components/verify-page/product-helpers';

import BaseLayout from '~/components/common/layout';
import Spinner from '~/components/common/spinner';

import AllItemsSucceed from '~/components/verify-page/all-items-succeed';
import PartialSuccess from '~/components/verify-page/partial-success';
import AllItemsFail from '~/components/verify-page/all-items-fail';
import withSessionTimeout from '~/components/sessiontimeout';
import PageTitle from '~/components/common/page-title';

interface VerifyPageProps extends WithTranslation {
    t: (key: string) => typeof key;
}

const Verify: any = (props: VerifyPageProps) => {
    const { t } = props;
    const { state, locale } = useStateValue();
    const router = useRouter();

    // gather successful and unsuccessful products from signup response
    const successfulProducts = successfulSignupProducts(state).length;
    const unsuccessfulProducts = failedSignupProducts(state).length;

    const [userSignedUp, setUserSignedUp] = useState<boolean | null>(true);

    const reloadForm = () => {
        router.push(`/${locale}`);
    };

    useEffect(() => {
        if (!Array.isArray(state.reminderMethod) || !state.reminderMethod.length) {
            setUserSignedUp(false);
        } else {
            setUserSignedUp(true);
        }
    }, [props, state, state.reminderMethod]);

    return (
        <>
            <PageTitle title={t('verify-page:title')} />
            <BaseLayout>
                <div>
                    {/* only successful products are returned */}
                    {userSignedUp && successfulProducts > 0 && unsuccessfulProducts === 0 && (
                        <AllItemsSucceed displayBackLink displayTitle />
                    )}
                    {/* some products are successful, others fail (ineligible or invalid) */}
                    {userSignedUp && successfulProducts !== 0 && unsuccessfulProducts !== 0 && (
                        <PartialSuccess />
                    )}
                    {/* All products fail (ineligible or invalid) */}
                    {userSignedUp && unsuccessfulProducts > 0 && successfulProducts === 0 && (
                        <AllItemsFail />
                    )}

                    {!userSignedUp && <Spinner isLoading={!userSignedUp} />}
                    {!userSignedUp && reloadForm()}
                </div>
            </BaseLayout>
        </>
    );
};

Verify.getInitialProps = async ({ query }: NextPageContext): Promise<any> => {
    const { methods } = query;

    if (methods === null) {
        return null;
    }

    return {
        namespacesRequired: ['base-layout', 'verify-page'],
        query,
    };
};

export default compose(withTranslation(['base-layout', 'verify-page']), withSessionTimeout)(Verify);
