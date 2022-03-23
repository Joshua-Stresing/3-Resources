export async function fetchMovies() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/movies?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}