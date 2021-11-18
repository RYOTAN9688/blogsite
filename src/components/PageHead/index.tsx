import Head from 'next/head';
import { VFC } from 'react';

interface MetaData {
  title: string;
  description: string;
  type: string;
  url: string;
}

export const PageHead: VFC<MetaData> = ({ title, description, type, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='robots' content='noindex' />
      <meta name='viewport' content='width=device-width' />
      <meta property='og:title' content={title} name='title' />
      <meta property='og:description' content={description} name='description' />
      <meta property='og:image' content='/favicon.ico' />
      <meta property='og;type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content='portFolio' />
      <meta property='og:locale' content='ja_JP' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@luciovilla' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/favicon.ico' />
    </Head>
  );
};
