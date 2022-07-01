/** @jsx h */
import {h} from 'preact';
import { PageProps, Handlers } from '$fresh/server.ts';

type ExtraData = {
    url: string;
}

export const handler: Handlers<ExtraData> = {
    async GET(req, ctx) {
        const resp = await ctx.render({
            url: req.url
        });
        resp.headers.set('X-Custom-Header', "hello");
        return resp;
    }
}

export default function AboutPage({data}: PageProps<ExtraData>){
    return (
        <main>
            <h1> About </h1>
            <p>This is my page {data.url}</p>
        </main>
    )
}