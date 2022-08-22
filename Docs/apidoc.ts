
// @ts-ignore
const apiDocumentation = {
    openapi: '3.0.3',
    info: {
        version: '1.0.0',
        title: 'REST API - Documentation',
        description: 'Description of my API here',
        termsOfService: 'https://mysite.com/terms',
        contact: {
            name: 'Tyomay',
            email: 'abordulanyuk@gmail.com',
            url: '',
        },
    },
    servers: [
        {
            url: 'http://localhost:8000/',
            description: 'Local Server',
        },
    ],
    tags: [
        {
            name: 'Example',
            description: 'Example CRUD',
        },
       ],
    paths: {
        // "/example": {
        //     post: example_post,
        //     get: example_get,
        // },
    },
    components: {
        securitySchemes: {
            token  : {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
        schemas: {
            // example_schema,
        },
    },
};

module.exports = {
    apiDocumentation
};
