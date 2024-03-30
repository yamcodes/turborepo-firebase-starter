import type { AddContentTypeParser, FastifyInstance } from 'fastify';

export const setContentTypeParser = (
  app: FastifyInstance,
  ...[contentType, opts, parser]: Parameters<AddContentTypeParser>
) => {
  app.removeContentTypeParser(contentType);
  app.addContentTypeParser(contentType, opts, parser);
};
