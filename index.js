// index.js

// Function to perform basic arithmetic operations
function calculator(operation, num1, num2) {
  switch(operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return num1 / num2;
    default:
      throw new Error('Unsupported operation');
  }
}

// Lambda function handler
exports.handler = async (event) => {
  try {
    // Parse input from API Gateway event
    const { operation, num1, num2 } = JSON.parse(event.body);

    // Perform calculation
    const result = calculator(operation, num1, num2);

    // Return successful response
    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    };
  } catch (error) {
    // Return error response
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message || 'Unknown error' }), // Handle undefined error message
    };
  }
};
