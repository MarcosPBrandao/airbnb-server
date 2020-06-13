'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lzfhslacisums
 */
const LzfhsLacisum = use("App/Models/LzfhsLacisum")
class LzfhsLacisumController {
  /**
   * Show a list of all lzfhslacisums.
   * GET lzfhslacisums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const teste = LzfhsLacisum.all()
    return teste
  }

  /**
   * Render a form to be used for creating a new lzfhslacisum.
   * GET lzfhslacisums/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new lzfhslacisum.
   * POST lzfhslacisums
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single lzfhslacisum.
   * GET lzfhslacisums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    //const musica = await LzfhsLacisum.findOrFail(params.mus)
    const musica = await LzfhsLacisum
      .query()
      .where('BPM', '>', params.mus)
      .fetch()
    return musica
  }

  /**
   * Render a form to update an existing lzfhslacisum.
   * GET lzfhslacisums/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update lzfhslacisum details.
   * PUT or PATCH lzfhslacisums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a lzfhslacisum with id.
   * DELETE lzfhslacisums/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LzfhsLacisumController
