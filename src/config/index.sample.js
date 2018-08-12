/**
 * 1. Create a new file `index.js`
 * 2. Copy the content of this file to `index.js`
 * 3. Provide valid credentials
 */

const getEnvVars = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        FACEBOOK_APP_ID: 'APP_ID',
        INDEED_PUBLISHER: 'ID',
      };
    default: // development
      return {
        FACEBOOK_APP_ID: 'APP_ID',
        INDEED_PUBLISHER: 'ID',
      };
  }
};

export default {
  ...getEnvVars(),
};
