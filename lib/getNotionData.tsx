import { Client } from '@notionhq/client';
import type {
  ListBlockChildrenResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints.d';

import { PostProps } from '../types';

export type blockWithChildren = ListBlockChildrenResponse['results'][number] & {
  children?: blockWithChildren[];
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getNotionData = async (
  databaseId: string,
  args: Omit<QueryDatabaseParameters, 'database_id'> = {},
) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    ...args,
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
      date: '',
    };
    Object.keys(d).forEach((key) => {
      const property = d[key];
      if (property.type === 'people') {
        // @ts-ignore
        item[key.toLowerCase()] = property.people.map((p) => (p as any).name);
      } else if (property.type === 'rich_text') {
        // @ts-ignore
        item[key.toLowerCase()] = property.rich_text[0].plain_text;
      } else if (property.type === 'files') {
        if (property.files[0].type === 'external') {
          // @ts-ignore
          item[key.toLowerCase()] = property.files[0].name;
        } else {
          // @ts-ignore
          item[key.toLowerCase()] = property.files[0].file?.url;
        }
      } else if (property.type === 'title') {
        // @ts-ignore
        item[key.toLowerCase()] = property.title[0].plain_text;
      } else if (property.type === 'checkbox') {
        // @ts-ignore
        item[key.toLowerCase()] = property.checkbox;
      } else if (property.type === 'multi_select') {
        // @ts-ignore
        item[key.toLowerCase()] = property.multi_select[0].name;
      } else if (property.type === 'date') {
        // @ts-ignore
        item[key.toLowerCase()] = property.date.start;
      }
    });
    return item;
  });
  return posts;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
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

    const next_cursor = blocksList.next_cursor as string | null;
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};
