const getGithubRepositories = async () => {
  try {
    const response = await fetch('https://api.github.com/users/chatacks/repos');
    if (!response.ok) return response.statusText;

    const repositories = await response.json();
    return repositories;
  } catch (error) {
    console.error(error);
  }
};

export default getGithubRepositories;
