/** @jsx h */
import {h} from 'preact';
import { PageProps, Handlers } from '$fresh/server.ts';

const NAMES = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];

type Data = {
    results: string[];
    query: string;
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
       const url = new URL(req.url);
       const query = (url.searchParams.get('q') ?? '').toLowerCase();
       const results = NAMES.filter(name=>name.toLowerCase().includes(query));
       return ctx.render({results, query});
    }
}

export default function SearchPage({data}: PageProps<Data>){
    const {results, query} = data;
    return (
        <div>
            <form>
                <input type='text' name='q' value={query}/>
                <button type='submit'>Search</button>
            </form>
            <ul>
                {results.map(name=><li key={name}>{name}</li>)}
            </ul>
        </div>
    )
}