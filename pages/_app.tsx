import React, { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import type { AppContext } from 'next/app';

import { appWithTranslation } from '~/utils/i18n';
import initModal from '~/core/modal';
import { AppProvider } from '~/store/store';
import GlobalStyle, { fonts } from '~/theme';
import { isLocale } from '~/locale/types';

initModal();

const DigitalRemindersApp = ({ Component, pageProps, locale }: any) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="telephone=no" />
                <style>{fonts}</style>
            </Head>
            <GlobalStyle />
            <AppProvider lang={locale}>
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
};

DigitalRemindersApp.getInitialProps = async (appContext: AppContext) => {
    const { ctx } = appContext;
    const pageProps = await App.getInitialProps(appContext);

    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
        return { ...pageProps, locale: undefined };
    }

    return { ...pageProps, locale: ctx.query.lang };
};
export default appWithTranslation(DigitalRemindersApp);
