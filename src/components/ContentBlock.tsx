import { ReactChild, VFC } from 'react';

const SpanText = ({ text, id }) => {
  if (!text) return null;
  return text.map((value, i) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={id + i}
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

export const Text = ({ text, id }) => {
  return (
    <p className='mb-4 text-gray-700'>
      <SpanText text={text} id={id} />
    </p>
  );
};
export const ListItem = ({ text, id }) => {
  return (
    <li className='text-gray-700'>
      <SpanText text={text} id={id} />
    </li>
  );
};

export const Heading = ({ text, level, id }) => {
  switch (level) {
    case 'heading_1':
      return (
        <h1 id={id} className=' font-mono text-3xl md:text-5xl tracking-tight my-2 '>
          {text[0].text.content}
        </h1>
      );
    case 'heading_2':
      return (
        <h2 id={id} className='font-mono text-2xl md:text-3xl tracking-tight my-2 '>
          {text[0].text.content}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 id={id} className='font-mono text-lg md:text-xl tracking-tight my-2 '>
          {text[0].text.content}
        </h3>
      );
    default:
      return null;
  }
};

export const ToDo = ({ id, value, text }) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type='checkbox' id={id} defaultChecked={value.checked} /> {text[0].text.content}
      </label>
    </div>
  );
};

interface ToggleProps {
  text: string;
  children?: ReactChild;
}

export const Toggle: VFC<ToggleProps> = ({ text, children }) => {
  return (
    <details>
      <summary className='cursor-pointer'>{text[0].text.content}</summary>
      {children?.map((block) => {
        if (block.type === 'paragraph') {
          return <Text key={block.id} text={block.paragraph.text} id={block.id} />;
        }
      })}
    </details>
  );
};
