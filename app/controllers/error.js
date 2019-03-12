// module.exports = function(request, response, next) {
//   if(typeof(request.session.logged) != "undefined") {
//     return response.redirect('/');
//   }
//   return next();
// };

exports.notFound = function(req, res, next) {
  res.status(404);
  res.render('not-found');
};

exports.serverError = function(error, req, res, next) {
  res.status(500);
  res.render('server-error', {error: error});
};