import { VFC } from 'react';
import Container from '../components/Container';

interface Props {
  children: Array<string>;
}

export const BlogLayout: VFC<Props> = ({ children, page }) => {
  console.log(children, page);

  return (
    <Container
      title={page.properties.Post}
      description={page.properties.Description}
      date={new Date(page.properties.Date.date.start)}
      type='article'
    >
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        {children}
      </article>
    </Container>
  );
};
