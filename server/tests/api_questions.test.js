const request = require('supertest')
const app=require('../src/app')
const mongoose=require('mongoose')

test('Should create a question', async()=>{
    const response= await request(app).post('/api/questions').send({
     question:'What is Item Revision?',
     category:'Application Usage'
    }).expect(201)
})