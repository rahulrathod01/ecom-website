const crypto = require('crypto');

const generateSecretKey = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

const secretKey = generateSecretKey(32); // 32 bytes = 256 bits
console.log('Secret Key:', secretKey);
