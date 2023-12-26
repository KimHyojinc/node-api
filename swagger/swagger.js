const swaggerAutogen = require('swagger-autogen')({ language: 'ko' });

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "api.kimchair.dmonster.kr/api",
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
    "../routes/front/*.js", "../routes/mng/*.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);