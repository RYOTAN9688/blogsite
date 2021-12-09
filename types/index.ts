export type PostProps = {
  thumbnail: string;
  authors: string[];
  slug: string;
  published: 'Yes' | 'no';
  title: string;
  description: string;
  id: string;
};

export type richText = {
  type: 'text';
  text: {
    content: string;
    link: {
      url: string;
    } | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color:
      | 'default'
      | 'gray'
      | 'brown'
      | 'orange'
      | 'yellow'
      | 'green'
      | 'blue'
      | 'purple'
      | 'pink'
      | 'red'
      | 'gray_background'
      | 'brown_background'
      | 'orange_background'
      | 'yellow_background'
      | 'green_background'
      | 'blue_background'
      | 'purple_background'
      | 'pink_background'
      | 'red_background';
  };
  plain_text: string;
  href: string | null;
  id: number | string;
  level: string;
};
