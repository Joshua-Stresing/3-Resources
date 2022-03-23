export async function fetchDirectors() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/directors?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}