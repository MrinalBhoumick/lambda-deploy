exports.handler = async (event) => {
  const method = event.httpMethod;
  const path = event.path;

  if (method === 'ANY' && path === '/checkserver') {
    return {
      statusCode: 200,
      body: 'Server is up',
    };
  } else {
    return {
      statusCode: 404,
      body: 'Not Found',
    };
  }
};
