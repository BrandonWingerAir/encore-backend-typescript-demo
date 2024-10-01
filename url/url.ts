import { api } from 'encore.dev/api';
import { randomBytes } from 'node:crypto';

interface UrlResponse {
    id: string;
    url: string;
}

interface UrlParams {
    url: string;
}

export const shorten = api({
    method: 'POST',
    path: '/url',
    expose: true
},
    async({ url }: UrlParams): Promise<UrlResponse> => {
        const id = randomBytes(6).toString('base64url');

        return { id, url }
    }
);