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
import Fastify, { FastifyPluginAsync } from 'fastify';
import { registerRoutes } from './utils';

const fastify = Fastify({
  logger: true,
});

const app: FastifyPluginAsync = async (request, reply) => {
  await registerRoutes(fastify);
  await fastify.ready();
  fastify.server.emit('request', request, reply);
};

// @ts-ignore -- firebase functions typescript is set to only support express, but it actually supports fastify
export const server = onRequest(app);
