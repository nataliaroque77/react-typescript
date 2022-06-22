import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import getLocale from '~/locale/get-locale';

const Index: React.FC = () => {
    useEffect(() => {
        const lang = getLocale();
        Router.push(`/${lang}`);
    });
    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" />
        </Head>
    );
};

export default Index;
