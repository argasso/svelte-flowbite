export default () => new Response("Hello world").json;

export const config = { path: "/hello" };