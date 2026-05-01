const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/config/database');
jest.setTimeout(30000); // 30 segundos
describe('Task API', () => {

  // CREATE
  it('should create a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Teste' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  // LIST
it('should return all tasks', async () => {
  const res = await request(app).get('/tasks');

  expect(res.statusCode).toBe(200);

  const data = res.body.data || res.body.tasks || res.body.rows || res.body;

  expect(Array.isArray(data)).toBe(true);
});

  // GET BY ID
  it('should return a task by id', async () => {
    const task = await request(app)
      .post('/tasks')
      .send({ title: 'Teste ID' });

    const res = await request(app).get(`/tasks/${task.body.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  // GET NOT FOUND
  it('should return 404 for non-existing task', async () => {
    const res = await request(app).get('/tasks/999999');

    expect(res.statusCode).toBe(404);
  });

  // UPDATE
  it('should update a task', async () => {
    const task = await request(app)
      .post('/tasks')
      .send({ title: 'Antes' });

    const res = await request(app)
      .put(`/tasks/${task.body.id}`)
      .send({ title: 'Depois' });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Depois');
  });

  // DELETE
  it('should delete a task', async () => {
    const task = await request(app)
      .post('/tasks')
      .send({ title: 'Excluir' });

    const res = await request(app)
      .delete(`/tasks/${task.body.id}`);

    expect(res.statusCode).toBe(204);
  });


  afterAll(async () => {
    await sequelize.close();
  });

});