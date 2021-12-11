import GitHub from './atoms/icon/GitHub';
import Twitter from './atoms/icon/Twitter';

import { VFC } from 'react';
import GitLab from './atoms/icon/GitLab';

export const OtherSites = [
  {
    Comp: Twitter,
    alt: 'twiiter icon',
    link: 'https://twitter.com/ryokakedasi',
  },
  {
    Comp: GitHub,
    alt: 'GitHub',
    link: 'https://github.com/RYOTAN9688',
  },
  {
    Comp: GitLab,
    alt: 'GitLab',
    link: 'https://gitlab.com/RYOTAN9688',
  },
  // {
  //   alt: 'Zenn',
  //   link: 'https://zenn.dev/ryofrontenginer',
  // },
  // {
  //   alt: 'Qiita',
  //   link: 'https://qiita.com/RYOTAN9688',
  // },
];

export const OtherSite: VFC = () => {
  return (
    <div className='flex space-x-5 justify-center pt-5'>
      {OtherSites.map(({ Comp, link, alt }) => {
        return (
          <a key={link} href={link} aria-label={alt}>
            <Comp height={30} />
          </a>
        );
      })}
    </div>
  );
};
