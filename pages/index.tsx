import { HomeTemplate } from 'components';
import { fetchInvoices } from 'lib';
import Head from 'next/head';
import { GetStaticProps, Invoice, NextPageWithLayout } from 'types';

import { InvoiceProvider } from 'context';
import type { InferNextPropsType } from 'types';
type Props = InferNextPropsType<typeof getStaticProps>;
// type Props = {};

const Home: NextPageWithLayout<Props> = ({ invoices }) => {
  return (
    <>
      <Head>
        <title>Invoice Mailer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <InvoiceProvider value={invoices}>
        <HomeTemplate />
      </InvoiceProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  invoices: Invoice[];
}> = async () => {
  try {
    const invoices = await fetchInvoices();

    return {
      props: {
        invoices,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
