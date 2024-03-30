import { iLikeTurtles } from 'utilities';
import { faker } from '@faker-js/faker';
import type { AddContentTypeParser, FastifyInstance } from 'fastify';

export const setContentTypeParser = (
  app: FastifyInstance,
  ...[contentType, opts, parser]: Parameters<AddContentTypeParser>
) => {
  app.removeContentTypeParser(contentType);
  app.addContentTypeParser(contentType, opts, parser);
};

export const registerRoutes = (fastify: FastifyInstance) => {
  // define your endpoints here...
  // fastify.post('/some-route-here', (_request) => {
  //   return { message: 'Hello World!!' };
  // });

  // fastify.get('/', async (request, reply) => {
  //   void reply.send({ message: 'Hello World!!' });
  // });

  // fastify.get('/legacy', (_req, res) => {
  //   void res.send({
  //     hello: 'world',
  //     randomName: faker.person.firstName(),
  //     iLikeTurtles: iLikeTurtles(),
  //     nice: 69,
  //   });
  // });

  fastify.get('*', (_req, res) => {
    void res.send({
      hello: 'world',
      randomName: faker.person.firstName(),
      iLikeTurtles: iLikeTurtles(),
      nice: 69,
    });
  });
};
