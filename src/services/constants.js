const { REACT_APP_OWNER_REPO, REACT_APP_REPOSITORY_NAME } = process.env;

export const gitApiBasePath = 'https://api.github.com';
export const repoBasePath = `${gitApiBasePath}/repos/${REACT_APP_OWNER_REPO}/${REACT_APP_REPOSITORY_NAME}`;
export const apiBranchesUrl = `${repoBasePath}/branches`;
export const apiBranchDetails = (branchName) => `${apiBranchesUrl}/${branchName}`;
export const apiBranchCommits = (branchName) => `${repoBasePath}/commits?sha=${branchName}`;
export const apiGetPullRequests = `${repoBasePath}/pulls?state=all`;