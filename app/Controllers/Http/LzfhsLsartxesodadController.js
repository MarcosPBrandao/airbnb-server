'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lzfhslsartxesodads
 */
const Extras = use("App/Models/LzfhsLsartxesodad")
class LzfhsLsartxesodadController {
  /**
   * Show a list of all lzfhslsartxesodads.
   * GET lzfhslsartxesodads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Extras.all();
  }

  /**
   * Render a form to be used for creating a new lzfhslsartxesodad.
   * GET lzfhslsartxesodads/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new lzfhslsartxesodad.
   * POST lzfhslsartxesodads
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single lzfhslsartxesodad.
   * GET lzfhslsartxesodads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing lzfhslsartxesodad.
   * GET lzfhslsartxesodads/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update lzfhslsartxesodad details.
   * PUT or PATCH lzfhslsartxesodads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a lzfhslsartxesodad with id.
   * DELETE lzfhslsartxesodads/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LzfhsLsartxesodadController
