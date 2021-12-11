import { VFC } from 'react';
import { NotionBlock } from '../../../types/notion';

interface Props {
  block: Extract<NotionBlock, { type: 'callout' }>;
}
export const CallOut: VFC<Props> = ({ block }) => {
  const text = block.callout.text;
  const icon = block.callout.icon;
  if (!icon) {
    return null;
  }
  const emoji = icon.type === 'emoji' ? icon.emoji : '';
  return (
    <div className='flex flex-wrap sm:flex-no-wrap justify-between bg-white rounded overflow-hidden p-2 space-x-0 sm:space-x-2'>
      <div className='flex flex-1 sm:flex-initial justify-center items-baseline py-4 sm:py-0'>
        <div className=' bg-opacity-50 rounded-full p-1'>{emoji}</div>
      </div>
      <div className='flex flex-col flex-grow text-center sm:text-left'>{text}</div>
    </div>
  );
};
