import PouchDB from 'pouchdb-browser';

const db = new PouchDB('bulletbuddy');

export const updateDoc = async (docId, item) => {
  const doc = await db.get(docId);
  const res = await db.put({
    ...doc,
    _id: docId,
    _rev: doc._rev,
    content: {
      items: [
        ...doc.content.items,
        item,
      ],
    },
  });
  return res.ok;
};

export default db;
