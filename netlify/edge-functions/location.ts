import type { Context } from "https://edge-bootstrap.netlify.app/v1/index.ts"

export default (_request: Request, context: Context) => {
	console.log('In edge function');

	const ip = context.ip
	const city = context.geo.city
	const country = context.geo.country?.name

	return Response.json({ ip, city, country });
};

// export const config = { path: "/location" }