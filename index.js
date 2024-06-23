const customQuotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "Believe in Yourself. - Mrinal Bhoumick"
];

const motivationalQuotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It always seems impossible until it's done. - Nelson Mandela"
];

exports.handler = async (event) => {
  try {
    if (!event || !event.path) {
      throw new Error('Invalid request: Event object or path not defined');
    }

    const route = event.path;

    if (route === '/greeting') {
      const currentTime = new Date();
      const hour = currentTime.getUTCHours();

      let greeting;
      if (hour < 12) {
        greeting = 'Good morning';
      } else if (hour < 18) {
        greeting = 'Good afternoon';
      } else {
        greeting = 'Good evening';
      }

      const message = `${greeting}, User!`;

      return {
        statusCode: 200,
        body: JSON.stringify({ message }),
      };
    } else if (route === '/customquote') {
      const randomIndex = Math.floor(Math.random() * customQuotes.length);
      const quote = customQuotes[randomIndex];

      return {
        statusCode: 200,
        body: JSON.stringify({ quote }),
      };
    } else if (route === '/motivationalquote') {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      const quote = motivationalQuotes[randomIndex];

      return {
        statusCode: 200,
        body: JSON.stringify({ quote }),
      };
    } else {
      throw new Error('Unsupported route');
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
