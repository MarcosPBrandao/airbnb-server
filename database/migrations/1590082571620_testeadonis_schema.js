'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TesteadonisSchema extends Schema {
  up () {
    this.create('testeadonis', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('testeadonis')
  }
}

module.exports = TesteadonisSchema
