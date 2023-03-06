export async function getInfo(url, method = 'GET', body) {
  const options = { method }

  options.headers = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  if (body) {
    options.body = body;
  }

  const response = await fetch(`${url}`, options);

  if (!response.ok) {
    throw new Error("fetch error");
  }

  console.log(response);
  return response.json(response);
}

export async function fetchRepositories(repositories) {
  const data = await getInfo(repositories);

  data.sort((two, one) => (
    (one.watchers_count + one.forks_count + one.stargazers_count) -
    (two.watchers_count + two.forks_count + two.stargazers_count)
  ))

  return data.slice(0, 4);
}
