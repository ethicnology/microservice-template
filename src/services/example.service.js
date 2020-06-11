/*
 * All business logic have to be here
 * For example here we have a service and DB access.
 */
const doSomething = async (idontknow) => {
  let result = {};
  try {
    idontknow = "Something";
    result.idontknow = idontknow;
  } catch (error) {
    console.error(error.message);
    result.error = error.message;
  } finally {
    return result;
  }
};

module.exports = {
  doSomething,
};
