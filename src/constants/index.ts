

export const RequestStatus = {
    RequestFailed: {
        StatusCode: 500,
        StausText:"Something went wrong",
    },
    RequestDone: {
        StatusCode: 200,
        StausText:"Ok",
    },
    RequestNotFound: {
        StatusCode: 404,
        StausText:"Request not found",
    },
};

export const SwaggerApiConfig = {
    Version:'1.0',
    Title:'Nest.js - Backend Api Starter Kit',
    Description:'Nest.js - Backend Api Starter Kit Project for quick starting code',
    DocumentPath:'api',
    Tags: {
        Posts:"Posts",
        Users:"Users"
    }
};