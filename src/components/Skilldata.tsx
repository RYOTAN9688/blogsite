interface Props {
  name: string;
  image: string;
  alt: string;
}

const Git: Props = {
  name: 'Git',
  image: 'https://cdn.svgporn.com/logos/git-icon.svg',
  alt: 'Git',
};

const Github: Props = {
  name: 'GitHub',
  image: 'https://cdn.svgporn.com/logos/github-icon.svg',
  alt: 'GitHub',
};

const HTML: Props = {
  name: 'HTML',
  image: 'https://cdn.svgporn.com/logos/html-5.svg',
  alt: 'HTML',
};

const CSS: Props = {
  name: 'CSS',
  image: 'https://cdn.svgporn.com/logos/css-3.svg',
  alt: 'CSS',
};

const JavaScript: Props = {
  name: 'JavaScript',
  image: 'https://cdn.svgporn.com/logos/javascript.svg',
  alt: 'JavaScript',
};

const TypeScript: Props = {
  name: 'TypeScript',
  image: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
  alt: 'TypeScript',
};

const React: Props = {
  name: 'React',
  image: 'https://cdn.svgporn.com/logos/react.svg',
  alt: 'React',
};

const Next: Props = {
  name: 'Next.js',
  image: 'https://cdn.svgporn.com/logos/nextjs.svg',
  alt: 'Next',
};

export const skilldata: Props[] = [Git, Github, HTML, CSS, JavaScript, TypeScript, React, Next];
