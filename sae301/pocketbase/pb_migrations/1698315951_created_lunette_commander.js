/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gemue3qp2tvx99h",
    "created": "2023-10-26 10:25:51.289Z",
    "updated": "2023-10-26 10:25:51.289Z",
    "name": "lunette_commander",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mzzflks5",
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
        "id": "sixfdkqw",
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
        "id": "a1dzrk3u",
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
        "id": "fszfnnpt",
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
        "id": "ae86im7h",
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
        "id": "xzrnep1h",
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
      },
      {
        "system": false,
        "id": "dw3bilt8",
        "name": "enregistrer",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix, lunettes.enregistre as enregistrer\n\nFROM lunettes, users \nWHERE lunettes.commande = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gemue3qp2tvx99h");

  return dao.deleteCollection(collection);
})
