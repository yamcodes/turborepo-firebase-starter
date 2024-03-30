import { faker } from '@faker-js/faker';
import { type FastifyPluginCallback } from 'fastify';
import { iLikeTurtles } from 'utilities';

export const routes: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.get('/legacy', () => ({
    hello: 'world!',
    randomName: faker.person.firstName(),
    iLikeTurtles: iLikeTurtles(),
    nice: 69,
  }));

  done();
};
