import { iLikeTurtles } from '@acme/shared';
import { faker } from '@faker-js/faker';
import { type FastifyInstance, type FastifyRequest } from 'fastify';

export interface Request extends FastifyRequest {
  /** The wire format representation of the request body. */
  rawBody: Buffer;
}

export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.addContentTypeParser('application/json', {}, (req, payload, done) => {
    // useful to include the request's raw body on the `req` object that will
    // later be available in your other routes so you can calculate the HMAC
    // if needed
    // @ts-expect-error - taken from Fastify docs
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- taken from Fastify docs
    req.rawBody = payload.rawBody;

    // payload.body is already the parsed JSON so we just fire the done callback
    // with it
    // @ts-expect-error - taken from Fastify docs
    done(null, payload.body);
  });

  // define your endpoints here...
  fastify.post('/some-route-here', (_request) => {
    return { message: 'Hello World!!' };
  });

  fastify.get('/', async (request, reply) => {
    void reply.send({ message: 'Hello World!!' });
  });

  fastify.get('/legacy', (_req, res) => {
    void res.send({
      hello: 'world',
      randomName: faker.person.firstName(),
      iLikeTurtles: iLikeTurtles(),
      nice: 69,
    });
  });
};
