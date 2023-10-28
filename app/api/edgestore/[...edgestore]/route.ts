import { initEdgeStore } from '@edgestore/server';
import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/app';
const es = initEdgeStore.create();
/**
 * This is the main router for the Edge Store buckets.
 */
const edgeStoreRouter = es.router({
  // accessKey:process.env.EDGE_STORE_ACCESS_KEY,
  // secretKey:process.env.EDGE_STORE_SECRET_KEY,
  publicFiles: es.fileBucket(),
});
console.log('edgerouterre', edgeStoreRouter);
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */

export type EdgeStoreRouter = typeof edgeStoreRouter;