import { api } from 'encore.dev/api';

interface Response {
    data: string;
}

export const greeting = api({
    method: 'GET',
    path: '/greeting',
    expose: true
},
    async ():Promise<Response> => {
        return { data: 'Hello World!' }
    }    
);