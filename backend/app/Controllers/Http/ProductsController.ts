import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    /* console.log('Products API called')

    return response.internalServerError({
      message: 'Testing retry',
    }) */
//note this is just for learning how the retry works so to test this just uncomment the above and comment the below and after the console info undo to see
//and boom its working firely 
    const search = request.input('search')

    const query = Product.query()

    if (search) {
      query.whereILike('name', `%${search}%`)
    }

    return await query.orderBy('id', 'asc')
  }

  public async show({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.notFound({
        message: 'Product not found',
      })
    }

    return product
  }

  public async store({ request, response }: HttpContextContract) {
    const product = await Product.create(
      request.only(['name', 'price', 'image'])
    )

    return response.created(product)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.notFound({
        message: 'Product not found',
      })
    }
    const requestversion = request.input('version')

    product.merge(
      request.only(['name', 'price', 'image'])
    )
    if (product.version !== requestversion) {
      return response.conflict({
        message: "Product was modifying by another admin !",
        currentVersion: product.version
      })
    }
    await product.save()
    product.version += 1
    await product.save()

    return product
  }

  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.notFound({
        message: 'Product not found',
      })
    }

    await product.delete()

    return response.ok({
      message: 'Product deleted successfully',
    })
  }
}
