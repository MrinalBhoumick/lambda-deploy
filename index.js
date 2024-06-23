// Lambda function handler
exports.handler = async (event) => {
  try {
    // Determine which route is being accessed
    const route = event.requestContext.http.path;

    // Handle different routes
    if (route === '/greeting') {
      // Get current date and time
      const currentTime = new Date();
      const hour = currentTime.getUTCHours();

      // Determine greeting based on time of day
      let greeting;
      if (hour < 12) {
        greeting = 'Good morning';
      } else if (hour < 18) {
        greeting = 'Good afternoon';
      } else {
        greeting = 'Good evening';
      }

      // Construct greeting message
      const message = `${greeting}, User!`;

      // Return successful response
      return {
        statusCode: 200,
        body: JSON.stringify({ message }),
      };
    } else {
      // Handle unknown routes
      throw new Error('Unsupported route');
    }
  } catch (error) {
    // Return error response
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
