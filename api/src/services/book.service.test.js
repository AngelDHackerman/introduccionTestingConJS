const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

// ? Esto de abajo nos ayuda a hacer la suplantacion de la base de datos.
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// ? La linea de abajo es para no hacer pruebas en la base de datos real.
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // ! reinicia cada test para "limpiar" las pruebas
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.lenght).toEqual(1);
    });
  });
});
