import { memo, VFC } from 'react';

import { NotionBlock } from '../../../types/notion';

interface Props {
  block: Extract<NotionBlock, { type: 'callout' }>;
}
const Component: VFC<Props> = ({ block }) => {
  const { icon } = block.callout;
  const { text } = block.callout;
  if (!icon) {
    return null;
  }
  const emoji = icon.type === 'emoji' ? icon.emoji : '';
  return (
    <blockquote className='flex flex-wrap sm:flex-no-wrap justify-between bg-yellow-200 border rounded overflow-hidden p-2 space-x-0 sm:space-x-2'>
      <div className='flex flex-1 sm:flex-initial justify-center items-baseline py-4 sm:py-0'>
        <span className='bg-opacity-50 rounded-full p-1'>{emoji}</span>
        <p className='leading-tight text-xs md:text-sm'>{text[0].plain_text}</p>
      </div>
    </blockquote>
  );
};

export const Callout = memo(Component);
