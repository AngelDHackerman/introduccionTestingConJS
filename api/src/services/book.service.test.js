const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const mockGetAll = jest.fn(); // ? asi se hace las pruebas de caja blanca

// ? Esto de abajo nos ayuda a hacer la suplantacion de la base de datos.

// ? La linea de abajo es para no hacer pruebas en la base de datos real.
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // ! reinicia cada test para "limpiar" las pruebas
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled(); // Ve si el spy fue llamado.
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // Arrange
      mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Harry Potter 2',
      }]);
      // Act
      const books = await service.getBooks({});
      console.log(books, 'harry potter 2');
      // Assert
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
