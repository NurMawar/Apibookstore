const axios = require('axios');

describe('BookStore API Test', () => {
  it('should create a book with valid data', async () => {
    const response = await axios.post('https://bookstore.toolsqa.com/swagger/BookStore/v1/Books', {
      isbn: 'test123'
    });

    expect(response.status).toBe(201);
    expect(response.data.isbn).toBe('test123');
  });

  it('should return a 400 error with invalid data', async () => {
    try {
      await axios.post('https://bookstore.toolsqa.com/swagger/BookStore/v1/Books', {});
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.code).toBe(0);
      expect(error.response.data.message).toBe('string');
    }
  });

  it('should return a 401 Unauthorized error', async () => {
    try {
      await axios.post('https://bookstore.toolsqa.com/swagger/BookStore/v1/Books', {}, {
        headers: {
          Authorization: 'Bearer your_access_token'
        }
      });
    } catch (error) {
      expect(error.response.status).toBe(401);
      expect(error.response.data.code).toBe(0);
      expect(error.response.data.message).toBe('string');
    }
  });
});
