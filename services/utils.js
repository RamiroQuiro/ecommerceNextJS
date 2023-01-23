import { getItems } from "./itemsServices";

export async function getPathsFromdID() {
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return ids
}
