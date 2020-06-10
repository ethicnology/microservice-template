const exampleController = require("../controllers/example.controller");

/**
 * @api {get} / Do Something
 * @apiName GetSomething
 * @apiGroup Something
 *
 * @apiSuccess (200) {String} idontknow "Something".
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Something"
 *     }
 *
 * @apiError (500) ServiceError Something was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 *     {
 *       "error": "Something"
 *     }
 */
module.exports = (server) => {
  server.route("/").get(exampleController.thisFunctionControlSomething);
};
