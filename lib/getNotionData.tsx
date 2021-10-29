import { Client } from '@notionhq/client';
import type {
  QueryDatabaseResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints.d';

export type blockWithChildren = ListBlockChildrenResponse['results'][number] & {
  children?: blockWithChildren[];
};
declare type NotionProperty = QueryDatabaseResponse['results'][number]['properties'];
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getNotionData = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getPageTitle = (property: NotionProperty) => {
  if (property.Name.type === 'title' && property.Name.title[0]) {
    return property.Name.title[0].plain_text;
  }
  return '';
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
