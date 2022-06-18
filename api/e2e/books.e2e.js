const request = require('supertest'); // supertest es la libreria que instalamos

const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for Books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001); // app.listen(3001) es el puerto donde va a estar corriendo la app.
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close(); // Esto es para cerrar la app cuando terminen las pruebas.
    await database.dropDatabase(); // ! Esto es para evitar el duplicado de los "libros"
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'Angel',
        },
        {
          name: 'Book2',
          year: '1998',
          author: 'Angel',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
