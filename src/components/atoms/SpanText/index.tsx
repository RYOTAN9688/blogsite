import { richText } from '../../../../types';

export const SpanText = ({ text }: { text: richText[] }) => {
  if (!text) {
    return null;
  }
  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={i + i}
        className={[
          bold ? 'font-bold' : '',
          code ? 'bg-gray-100 p-1 font-mono text-sm rounded-md' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a href={text.link.url} className='text-indigo-400 hover:underline'>
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};
