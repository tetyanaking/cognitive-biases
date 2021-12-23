const react = require('@neutrinojs/react');

module.exports = {
  options: {
    root: __dirname,
    output: 'docs',
  },
  use: [
    react({
      html: {
        title: 'Cognitive Biases'
      }
    }),
  ],
};
