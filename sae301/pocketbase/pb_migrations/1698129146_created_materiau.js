/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lrffjcw4npzaxqk",
    "created": "2023-10-24 06:32:26.126Z",
    "updated": "2023-10-24 06:32:26.126Z",
    "name": "materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0d0n9ggf",
        "name": "libelle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lrffjcw4npzaxqk");

  return dao.deleteCollection(collection);
})
