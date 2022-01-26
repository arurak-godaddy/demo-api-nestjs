import * as request from 'supertest';
import { APP_URL } from '../utils/constants';

describe('API test (e2e)', () => {
  const app = APP_URL;

  it('Task : /api/v1/task (POST)', () => {
    return request(app)
      .post('/api/v1/task')
      .send({})
      .expect(200)
      .expect(({ body }) => {
        expect(body.success).toBeDefined();
      });
  });
});
