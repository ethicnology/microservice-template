/*
 * All business logic have to be here
 * For example here we have a service and DB access.
 */
const doSomething = async (idontknow) => {
  try {
    idontknow = "Something";
    return idontknow;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  doSomething,
};
