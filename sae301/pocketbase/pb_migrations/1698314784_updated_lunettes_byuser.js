/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ql7vwu5r7aswcfj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix, lunettes.enregistre as enregistrer\n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
  }

  // remove
  collection.schema.removeField("aseulva9")

  // remove
  collection.schema.removeField("2vsi1x2v")

  // remove
  collection.schema.removeField("c84hlyh3")

  // remove
  collection.schema.removeField("teuwi9se")

  // remove
  collection.schema.removeField("rlrbrjkv")

  // remove
  collection.schema.removeField("i8fi8ptf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mty9ptog",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "70uaz1jl",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5upbekar",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4cjjal0v",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmfyiwcu",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nfcqtrkw",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwqdrzjz",
    "name": "enregistrer",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ql7vwu5r7aswcfj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix \n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("mty9ptog")

  // remove
  collection.schema.removeField("70uaz1jl")

  // remove
  collection.schema.removeField("5upbekar")

  // remove
  collection.schema.removeField("4cjjal0v")

  // remove
  collection.schema.removeField("fmfyiwcu")

  // remove
  collection.schema.removeField("nfcqtrkw")

  // remove
  collection.schema.removeField("dwqdrzjz")

  return dao.saveCollection(collection)
})
