import Image from 'next/image';
import { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { NotionText } from '../notionText';

import { richText } from '../../../types';
import { blockWithChildren } from '../../../types/notion';

export const CodeBlock = (block: blockWithChildren) => {
  const { type, id } = block;

  switch (type) {
    case 'paragraph':
      return (
        <p className='mb-4 text-gray-700'>
          <NotionText richTexts={block.paragraph.text as richText[]} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className='font-mono text-3xl md:text-5xl tracking-tight my-2 '>
          <NotionText richTexts={block.heading_1.text as richText[]} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className='font-mono text-2xl md:text-3xl tracking-tight my-2 '>
          <NotionText richTexts={block.heading_2.text as richText[]} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className='font-mono text-lg md:text-xl tracking-tight my-2 '>
          <NotionText richTexts={block.heading_3.text as richText[]} />
        </h3>
      );
    case 'numbered_list_item':
      return <li className='text-gray-700'>{block.numbered_list_item.text}</li>;
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
          <>
            {block.children?.map((block) => {
              <Fragment key={block.id}>{CodeBlock(block)}</Fragment>;
            })}
          </>
        </details>
      );

    case 'image':
      const imageSrc = block.image;
      const caption = imageSrc.caption?.length > 0 ? imageSrc.caption[0].plain_text : '';
      return (
        <figure>
          <Image src={block.image.type[0]} alt={caption} layout='fill' objectFit='contain' />
          {caption && <figcaption className='mt-2'>{caption}</figcaption>}
        </figure>
      );
    case 'bookmark':
      return (
        <iframe
          src={`/embed/?url=${block.bookmark.url}`}
          className='w-full block border-0 h-36'
        ></iframe>
      );
    case 'code':
      return (
        <div>
          <SyntaxHighlighter language={block.code.language} style={monokai}>
            {block.code.text.map(({ plain_text }) => plain_text)}
          </SyntaxHighlighter>
        </div>
      );
    default:
      return (
        <p>`Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;</p>
      );
  }
};
