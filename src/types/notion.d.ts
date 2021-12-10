import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';

type NotionSelectOption = {
  id: string;
  name: string;
};

type NotionBlock = ListBlockChildrenResponse['results'][number];
