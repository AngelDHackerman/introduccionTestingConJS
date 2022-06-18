const request = require('supertest'); // supertest es la libreria que instalamos

const createApp = require('../src/app');

const mockGetAll = jest.fn();

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementatio(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for Books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001); // app.listen(3001) es el puerto donde va a estar corriendo la app.
  });

  afterAll(async () => {
    await server.close(); // Esto es para cerrar la app cuando terminen las pruebas.
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', () => request(app)
      .get('/api/v1/books') // ! el "/" al principio del path de la API es OBLIGATORIO.
      .expect(200)
      .then(({ body }) => {
        console.log(body);
        expect(body.length).toEqual(1);
      }));
  });
});
