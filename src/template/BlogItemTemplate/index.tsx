import { VFC } from 'react';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { PageHead } from '../../hooks/SEO/PageHead';
import { Header } from '../../components/organisms/Header';
import { Footer } from '../../components/organisms/Footer';
import { blockWithChildren, NotionBlock } from '../../types/notion';
import { NotionText } from '../../components/notion/notionText';
import { richText } from '../../types';
import { CodeBlock } from '../../components/notion/codeBlock';
import { Callout } from '../../components/atoms/callout';

interface Props {
  page: any;
  pageTitle: string;
  pageDescription: string;
  pageType: string;
  pageUrl: string;
  slug: string;
  blocks: NotionBlock[];
}

export const BlogItemTemplate: VFC<Props> = ({
  page,
  pageTitle,
  pageDescription,
  pageType,
  pageUrl,
  slug,
  blocks,
}) => {
  console.log(page, blocks);

  return (
    <>
      <PageHead title={pageTitle} description={pageDescription} type={pageType} url={pageUrl} />
      <Header />
      <main id='skip' className='px-4 '>
        <article className='flex flex-col font-fancy justify-center items-start max-w-2xl mx-auto mb-16 w-full '>
          <span className='text-sm text-black'>
            {new Date(page.pageInfo.created_time).toLocaleString('ja-JP', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            })}
          </span>
          <h1 className='font-fancy  md:text-5xl tracking-tight mb-5 text-black'>{slug}</h1>
          <section>
            {blocks.map((block: blockWithChildren) => {
              const { type, id } = block;

              switch (type) {
                case 'paragraph':
                  return (
                    <p className='font-fancy mb-4 text-black whitespace-normal'>
                      <NotionText richTexts={block.paragraph.text as richText[]} />
                    </p>
                  );

                case 'heading_1':
                  return (
                    <h1 className='font-fancy text-lg md:text-2xl tracking-tight my-2 text-gray-900 whitespace-normal '>
                      <NotionText richTexts={block.heading_1.text as richText[]} />
                    </h1>
                  );

                case 'heading_2':
                  return (
                    <h2 className='font-fancy text-2xl md:text-2xl tracking-tight my-2 whitespace-normal '>
                      <NotionText richTexts={block.heading_2.text as richText[]} />
                    </h2>
                  );

                case 'heading_3':
                  return (
                    <h3 className='font-fancy text-lg md:text-xl tracking-tight my-2  whitespace-normal '>
                      <NotionText richTexts={block.heading_3.text as richText[]} />
                    </h3>
                  );

                case 'numbered_list_item':
                  return (
                    <li className='text-gray-700 font-fancy'>
                      <NotionText richTexts={block.numbered_list_item.text as richText[]} />
                    </li>
                  );

                case 'bulleted_list_item':
                  return (
                    <li>
                      <NotionText richTexts={block.bulleted_list_item.text as richText[]} />
                    </li>
                  );

                case 'to_do':
                  const toDoValue = block[type];
                  return (
                    <div>
                      <label htmlFor={id}>
                        <input defaultChecked={toDoValue.checked} type='checkbox' />
                        <NotionText richTexts={toDoValue.text as richText[]} />
                      </label>
                    </div>
                  );

                case 'toggle':
                  const blockValue = block[type];
                  return (
                    <details>
                      <summary>
                        <NotionText richTexts={blockValue.text as richText[]} />
                      </summary>
                      {CodeBlock(block)}
                    </details>
                  );

                case 'child_page':
                  const childPageValue = block[type];
                  return <p>{childPageValue.title}</p>;

                case 'image':
                  const imageSrc = block.image;
                  const caption =
                    imageSrc.caption?.length > 0 ? imageSrc.caption[0].plain_text : '';
                  return (
                    <Image
                      //@ts-ignore
                      src={block[type].file.url}
                      alt={caption}
                      width={380}
                      height={200}
                    />
                  );

                case 'quote':
                  const quoteValue = block.quote;
                  return (
                    <blockquote>
                      <NotionText richTexts={quoteValue.text as richText[]} />
                    </blockquote>
                  );

                case 'callout':
                  return <Callout block={block} />;

                case 'bookmark':
                  return (
                    <iframe
                      src={`/embed/?url=${block.bookmark.url}`}
                      className='w-full block border-0 h-36'
                    ></iframe>
                  );

                case 'code':
                  return (
                    <div className='container w-screen md:w-8/12'>
                      <div className='font-fancy font-medium bg-gray-700  text-white pb-2'>
                        {block.code.language}
                      </div>
                      <SyntaxHighlighter
                        language={block.code.language.toLowerCase()}
                        style={monokai}
                        customStyle={{ padding: '12px 16px', lineHeight: '30px' }}
                      >
                        {block.code.text.map(({ plain_text }) => plain_text)}
                      </SyntaxHighlighter>
                    </div>
                  );

                default:
                  return (
                    <p>
                      サポートしていないブロックです ($
                      {type === 'unsupported' ? 'unsupported by Notion API' : type});
                    </p>
                  );
              }
            })}
          </section>
        </article>
      </main>
      <Footer />;
    </>
  );
};
