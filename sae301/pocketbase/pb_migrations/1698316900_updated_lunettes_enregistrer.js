/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ql7vwu5r7aswcfj")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.name as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_branche as Couleur_branche, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix, lunettes.enregistre as enregistrer\n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
  }

  // remove
  collection.schema.removeField("cfcmcep3")

  // remove
  collection.schema.removeField("ouq7coxt")

  // remove
  collection.schema.removeField("mucfr0g5")

  // remove
  collection.schema.removeField("wom9grzm")

  // remove
  collection.schema.removeField("nsfruuuv")

  // remove
  collection.schema.removeField("zuhh56cs")

  // remove
  collection.schema.removeField("3qj1vsa8")

  // remove
  collection.schema.removeField("1ct57wrh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxhxl1um",
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
    "id": "ae7csvdt",
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
    "id": "xxmrns7d",
    "name": "Couleur_branche",
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
    "id": "4wl92dgr",
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
    "id": "ificznk8",
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
    "id": "yrcsxwjy",
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
    "id": "fydrpj98",
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
    "id": "upgclv8r",
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
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as user,lunettes.couleur_cadre as Couleur_cadre, lunettes.couleur_branche as Couleur_branche, lunettes.couleur_verre as Couleur_verre, lunettes.type_cadre as Type_Cadre, lunettes.type_verre as Type_Verre, lunettes.prix as Prix, lunettes.enregistre as enregistrer\n\nFROM lunettes, users \nWHERE lunettes.enregistre = TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cfcmcep3",
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
    "id": "ouq7coxt",
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
    "id": "mucfr0g5",
    "name": "Couleur_branche",
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
    "id": "wom9grzm",
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
    "id": "nsfruuuv",
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
    "id": "zuhh56cs",
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
    "id": "3qj1vsa8",
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
    "id": "1ct57wrh",
    "name": "enregistrer",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yxhxl1um")

  // remove
  collection.schema.removeField("ae7csvdt")

  // remove
  collection.schema.removeField("xxmrns7d")

  // remove
  collection.schema.removeField("4wl92dgr")

  // remove
  collection.schema.removeField("ificznk8")

  // remove
  collection.schema.removeField("yrcsxwjy")

  // remove
  collection.schema.removeField("fydrpj98")

  // remove
  collection.schema.removeField("upgclv8r")

  return dao.saveCollection(collection)
})
