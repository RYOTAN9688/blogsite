import { useEffect, VFC } from 'react';
import { SpanText } from '../SpanText';

import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('js', js);

interface CodeBlockProps {
  text: string;
  lang: string;
}

export const CodeBlock: VFC<CodeBlockProps> = ({ text, lang }) => {
  useEffect(() => {
    hljs.initHighlighting();
    (hljs.initHighlighting as any).called = false;
  }, []);
  return (
    <pre className='mb-6 md:mb-8 text-sm text-white bg-black p-4 overflow-x-auto rounded-md bg-opacity-80'>
      <code className={lang}>
        <SpanText text={text} />
      </code>
    </pre>
  );
};
