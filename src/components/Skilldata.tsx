interface skillsProps {
  name: string;
  image: string;
  alt: string;
}
interface otherSkillProps {
  name: string;
}

const Git: skillsProps = {
  name: 'Git',
  image: 'https://cdn.svgporn.com/logos/git-icon.svg',
  alt: 'Git',
};

const Github: skillsProps = {
  name: 'GitHub',
  image: 'https://cdn.svgporn.com/logos/github-icon.svg',
  alt: 'GitHub',
};

const HTML: skillsProps = {
  name: 'HTML',
  image: 'https://cdn.svgporn.com/logos/html-5.svg',
  alt: 'HTML',
};

const CSS: skillsProps = {
  name: 'CSS',
  image: 'https://cdn.svgporn.com/logos/css-3.svg',
  alt: 'CSS',
};

const JavaScript: skillsProps = {
  name: 'JavaScript',
  image: 'https://cdn.svgporn.com/logos/javascript.svg',
  alt: 'JavaScript',
};

const TypeScript: skillsProps = {
  name: 'TypeScript',
  image: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
  alt: 'TypeScript',
};

const React: skillsProps = {
  name: 'React',
  image: 'https://cdn.svgporn.com/logos/react.svg',
  alt: 'React',
};

const Next: skillsProps = {
  name: 'Next.js',
  image: 'https://cdn.svgporn.com/logos/nextjs.svg',
  alt: 'Next',
};

const firebase: otherSkillProps = {
  name: 'firebase',
};

const tailwindcss: otherSkillProps = {
  name: 'tailwindcss',
};

const gitLab: otherSkillProps = {
  name: 'gitLab',
};

const figma: otherSkillProps = {
  name: 'figma',
};

const materialUI: otherSkillProps = {
  name: 'materialUI',
};

export const skilldata: skillsProps[] = [
  Git,
  Github,
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  React,
  Next,
];

export const otherSkilldata: otherSkillProps[] = [firebase, tailwindcss, gitLab, figma, materialUI];
