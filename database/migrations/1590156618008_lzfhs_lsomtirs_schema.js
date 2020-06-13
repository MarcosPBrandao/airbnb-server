'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LzfhsLsomtirsSchema extends Schema {
  up () {
    this.create('lzfhs_lsomtirs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('lzfhs_lsomtirs')
  }
}

module.exports = LzfhsLsomtirsSchema
