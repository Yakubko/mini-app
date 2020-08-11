import request from 'supertest';
import app from '../src/app';

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(404);
    });

    test("It shouldn't response the GET method", () => {
        return request(app).get('/wrong/path').expect(404);
    });
});
