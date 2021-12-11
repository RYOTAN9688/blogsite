import { Client } from '@notionhq/client';

import { PostProps } from '../../types';
import { blockWithChildren } from '../../types/notion';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const database_id = process.env.NOTION_DATABASE_ID as string;

export const getNotionData = async () => {
  const response = await notion.databases.query({
    database_id: database_id,
    filter: {
      or: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });
  const { results } = response;
  const posts = results.map((result) => {
    const d = result.properties;
    const item: PostProps = {
      thumbnail: '',
      authors: [],
      slug: '',
      published: 'no',
      description: '',
      title: '',
      id: result.id,
      date: new Date(),
    };
    Object.keys(d).forEach((key) => {
      const property = d[key];
      if (property.type === 'people') {
        //@ts-ignore
        item[key.toLowerCase()] = property.people.map((p) => (p as any).name);
      } else if (property.type === 'rich_text') {
        //@ts-ignore
        item[key.toLowerCase()] = property.rich_text[0].plain_text;
      } else if (property.type === 'files') {
        if (property.files[0].type === 'external') {
          //@ts-ignore
          item[key.toLowerCase()] = property.files[0].name;
        } else {
          //@ts-ignore
          item[key.toLowerCase()] = property.files[0].file?.url;
        }
      } else if (property.type === 'title') {
        //@ts-ignore
        item[key.toLowerCase()] = property.title[0].plain_text;
      } else if (property.type === 'checkbox') {
        //@ts-ignore
        item[key.toLowerCase()] = property.checkbox;
      } else if (property.type === 'multi_select') {
        //@ts-ignore
        item[key.toLowerCase()] = property.multi_select[0].name;
      } else if (property.type === 'date') {
        //@ts-ignore
        item[key.toLowerCase()] = property.date.start;
      }
    });
    return item;
  });
  return posts;
};

/* PAGEの情報とpropertiesを取得 */
export const getPage = async (pageId: string) => {
  try {
    const pageInfo = await notion.pages.retrieve({ page_id: pageId });

    const response = await notion.blocks.children.list({
      block_id: pageId,
    });
    return { pageInfo, blocks: response.results };
  } catch (error: any) {
    throw Error(error);
  }
};

export const getBlocks = async (blockId: string) => {
  const blocks: blockWithChildren[] = [];
  let cursor: undefined | string = undefined;

  while (true) {
    const blocksList = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...blocksList.results);

    const next_courser = blocksList.next_cursor as string;
    if (!next_courser) {
      break;
    }
    cursor = next_courser;
  }
  return blocks;
};
