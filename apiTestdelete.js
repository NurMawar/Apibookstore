const axios = require('axios');
const assert = require('assert');

describe('BookStore API Tests', () => {
    it('should delete books successfully', async () => {
        try {
            const response = await axios.delete('https://bookstore.toolsqa.com/swagger/BookStore/v1/Books');
            assert.strictEqual(response.status, 204);
        } catch (error) {
            assert.fail(error.response.data);
        }
    });

    it('should return Unauthorized status code (401)', async () => {
        try {
            const response = await axios.delete('https://bookstore.toolsqa.com/swagger/BookStore/v1/Books', {
                validateStatus: false
            });
            assert.strictEqual(response.status, 401);
        } catch (error) {
            assert.fail(error.response.data);
        }
    });
});
