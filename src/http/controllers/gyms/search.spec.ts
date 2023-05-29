import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)
    console.log(token)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'js gym',
        description: 'vai nessa',
        phone: '1199999999',
        latitude: -27.0747279,
        longitude: -49.4889672,
      })
    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'ts gym',
        description: 'vai nessa',
        phone: '1199999999',
        latitude: -27.0747279,
        longitude: -49.4889672,
      })
    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        query: 'js',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'js gym',
      }),
    ])
  })
})
