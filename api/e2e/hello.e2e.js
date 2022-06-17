const request = require('supertest'); // supertest es la libreria que instalamos

const createApp = require('../src/app');

describe('Test for hello endPoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001); // app.listen(3001) es el puerto donde va a estar corriendo la app.
  });

  afterAll(async () => {
    await server.close(); // Esto es para cerrar la app cuando terminen las pruebas.
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
