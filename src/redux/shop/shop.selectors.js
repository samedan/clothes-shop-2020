import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    // collections.find(
    //   collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    // )
  );

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // ["hats", "jackets"]
  collections => Object.keys(collections).map(key => collections[key])
);
