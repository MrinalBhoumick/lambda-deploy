// Lambda function handler
exports.handler = async (event) => {
  try {
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
  } catch (error) {
    // Return error response
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
