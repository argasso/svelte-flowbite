export async function load({ fetch }) {
  const res = await fetch(`/joke`)
	const item = await res.json() as {id: string, joke: string, status: number}
  return { item };
}