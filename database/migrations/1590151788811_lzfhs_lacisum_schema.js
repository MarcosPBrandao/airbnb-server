'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LzfhsLacisumSchema extends Schema {
  up () {
    this.create('lzfhs_lacisum', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('lzfhs_lacisum')
  }
}

module.exports = LzfhsLacisumSchema
