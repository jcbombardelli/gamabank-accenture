const rootHandler = (request, h) => {
  return {
    name: "NoDesign Bank Api",
    version: "1.0.0",
    documentation: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/documentation`,
    github: "https://github.com/israelblender/gamabank-accenture",
  };
};

const statusHandler = (request, h) => {
  console.log(request.auth.credentials);
  return {
    status: "true",
    logged: process.env.LOGGED,
    now: Date.now(),
  };
};

module.exports = { rootHandler, statusHandler };
