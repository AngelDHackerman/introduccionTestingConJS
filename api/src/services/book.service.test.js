const BooksService = require('./books.service');

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    // Arrange
    // Act
    const books = service.getBooks();
    // Assert
    expect(books.lenght).toEqual();
  });
});
