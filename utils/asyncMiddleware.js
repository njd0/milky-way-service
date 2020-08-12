export const asyncMiddleware = (fn, deps) =>
(req, res, next) => {
  req.deps = deps; // Pass dependcies to routes
  Promise.resolve(fn(req, res, next))
    .catch(next);
};