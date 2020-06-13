'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lzfhslsomtirs
 */
const Ritmos = use("App/Models/LzfhsLsomtir")
class LzfhsLsomtirController {
  /**
   * Show a list of all lzfhslsomtirs.
   * GET lzfhslsomtirs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    //const ritmos = Ritmos.all()
    return Ritmos.all()

  }

  /**
   * Render a form to be used for creating a new lzfhslsomtir.
   * GET lzfhslsomtirs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new lzfhslsomtir.
   * POST lzfhslsomtirs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single lzfhslsomtir.
   * GET lzfhslsomtirs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing lzfhslsomtir.
   * GET lzfhslsomtirs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update lzfhslsomtir details.
   * PUT or PATCH lzfhslsomtirs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a lzfhslsomtir with id.
   * DELETE lzfhslsomtirs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LzfhsLsomtirController
