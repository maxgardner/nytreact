module.exports = function(router) {
  router.get("/", (res, req) => {
    req.send(process.cwd() + "../public/index.html");
  });

  return router
}
