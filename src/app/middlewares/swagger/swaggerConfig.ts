 
import {Options,SwaggerDefinition } from 'swagger-jsdoc';
const swaggerDefinition: SwaggerDefinition= {
    openapi:'3.0.0',
    info: {
        version:'1.0.0', //semantic version
        title: 'API de profesores usando typescript para la UPB',
        description:'En esta API se pueden crear nuevos profesores '
    },
    servers:[
        {
            url:'http://localhost:3000/api'
        }
    ]
};

const swaggerOptions: Options = {

    swaggerDefinition,
    apis:[
        '.src/app/routes/*.ts',
        './src/app/controllers/*.ts',
        '.src/domain/entities/*.ts'
    ]

};

export default swaggerOptions;