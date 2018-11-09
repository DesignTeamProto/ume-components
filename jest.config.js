module.exports = {
  reporters: [
    'default',
    'jest-junit',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/util/assetsTransformer.js',
    '\\.(css|scss|less)$': '<rootDir>/util/assetsTransformer.js',
  },
};
