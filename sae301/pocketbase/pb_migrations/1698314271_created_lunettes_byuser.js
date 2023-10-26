/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ql7vwu5r7aswcfj",
    "created": "2023-10-26 09:57:51.743Z",
    "updated": "2023-10-26 09:57:51.743Z",
    "name": "lunettes_byuser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aseulva9",
        "name": "user",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2vsi1x2v",
        "name": "Couleur_cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "c84hlyh3",
        "name": "Couleur_verre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "teuwi9se",
        "name": "Type_Cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rlrbrjkv",
        "name": "Type_Verre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "i8fi8ptf",
        "name": "Prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix \n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ql7vwu5r7aswcfj");

  return dao.deleteCollection(collection);
})
