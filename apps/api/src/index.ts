// /**
//  * Import function triggers from their respective submodules:
//  *
//  * import {onCall} from "firebase-functions/v2/https";
//  * import {onDocumentWritten} from "firebase-functions/v2/firestore";
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// // export const helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

import { onRequest } from 'firebase-functions/v2/https';
import { fastify } from 'fastify';
import * as logger from 'firebase-functions/logger';
import { registerRoutes, setContentTypeParser } from './utils';

const app = fastify({
  logger: true,
});

// Register the content type parser before starting the server
setContentTypeParser(
  app,
  'application/json',
  { parseAs: 'string' },
  (request, incomingMessage, done) => {
    // useful to include the request's raw body on the `req` object that will
    // later be available in your other routes so you can calculate the HMAC
    // if needed
    // @ts-expect-error - taken from Fastify docs
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- taken from Fastify docs
    request.rawBody = incomingMessage.rawBody;
    // @ts-expect-error - taken from Fastify docs
    done(null, incomingMessage.body);
  }
);

registerRoutes(app);

export const server = onRequest(async (request, response) => {
  await app.ready();
  logger.info('Hello logs!', { structuredData: true });
  app.server.emit('request', request, response);
});
