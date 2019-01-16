import PouchDB from 'pouchdb-browser';

const db = new PouchDB('bulletbuddy');

export const putItem = async (docId, newItem) => {
  console.log('POUCHDB: putItem', newItem);
  const doc = await db.get(docId);
  const res = await db.put({
    ...doc,
    _id: docId,
    _rev: doc._rev,
    content: {
      items: [
        ...doc.content.items,
        newItem,
      ],
    },
  });
  return res.ok;
};
export const patchItem = async (docId, patchedItem) => {
  console.log('POUCHDB: patchItem', patchedItem);
  const doc = await db.get(docId);
  const res = await db.put({
    ...doc,
    _id: docId,
    _rev: doc._rev,
    content: {
      items: doc.content.items.map((item) => {
        if (item.id !== patchedItem.id) { return item; }
        return patchedItem;
      }),
    },
  });
  return res.ok;
};

export default db;
