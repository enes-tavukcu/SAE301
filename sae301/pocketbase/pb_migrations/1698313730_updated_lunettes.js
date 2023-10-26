/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfboibh578juiuw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hx3sedje",
    "name": "couleur_branche",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jfboibh578juiuw")

  // remove
  collection.schema.removeField("hx3sedje")

  return dao.saveCollection(collection)
})
