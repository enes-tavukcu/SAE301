/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5771x2fk0ashjw9",
    "created": "2023-10-26 14:24:07.461Z",
    "updated": "2023-10-26 14:24:07.461Z",
    "name": "lunettes_by_user",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "je2mp1wz",
        "name": "id_lunette",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jfboibh578juiuw",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "npkw6ylp",
        "name": "id_user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, id as id_lunette, id_user\nFROM lunettes"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5771x2fk0ashjw9");

  return dao.deleteCollection(collection);
})
