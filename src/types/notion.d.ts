import {
  GetPageResponse,
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

type NotionSelectOption = {
  id: string;
  name: string;
};

type NotionPageItem = QueryDatabaseResponse['results'][number];

type NotionBlock = ListBlockChildrenResponse['results'][number];

type NotionPageContent = {
  blocks: NotionBlock[];
};

export type blockWithChildren = ListBlockChildrenResponse['results'][number] & {
  children?: blockWithChildren[];
};
