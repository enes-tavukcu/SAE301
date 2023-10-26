/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ql7vwu5r7aswcfj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix, lunettes.enregistre as enregistrer,\nlunettes.commande as commander\n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nm2ayqbg",
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
    "id": "kyihcemw",
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
    "id": "8o8vswff",
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
    "id": "yn81alt4",
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
    "id": "crijyiuj",
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
    "id": "qdktnvkg",
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
    "id": "3difucvj",
    "name": "enregistrer",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjbxe925",
    "name": "commander",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix, lunettes.enregistre as enregistrer\n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
  }

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

  // remove
  collection.schema.removeField("nm2ayqbg")

  // remove
  collection.schema.removeField("kyihcemw")

  // remove
  collection.schema.removeField("8o8vswff")

  // remove
  collection.schema.removeField("yn81alt4")

  // remove
  collection.schema.removeField("crijyiuj")

  // remove
  collection.schema.removeField("qdktnvkg")

  // remove
  collection.schema.removeField("3difucvj")

  // remove
  collection.schema.removeField("cjbxe925")

  return dao.saveCollection(collection)
})
