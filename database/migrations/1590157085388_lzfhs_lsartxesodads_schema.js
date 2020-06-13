'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LzfhsLsartxesodadsSchema extends Schema {
  up () {
    this.create('lzfhs_lsartxesodads', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('lzfhs_lsartxesodads')
  }
}

module.exports = LzfhsLsartxesodadsSchema
