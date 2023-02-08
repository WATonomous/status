export default async function fetcher(...args) {
  args[0] = 'https://healthchecks.io/api' + args[0];

  args[1] = {
    ...args[1],
    headers: {
      Accept: 'application/json',
      'X-Api-Key': 'UQU87W-Evubk4ncV7wzd0Ih2jqynk-uo',
    },
  };

  const res = await fetch(...args);
  return res.json();
}
