const { REACT_APP_OWNER_REPO, REACT_APP_REPOSITORY_NAME } = process.env;

export const gitApiBasePath = 'https://api.github.com';
export const apiBranchesUrl = `${gitApiBasePath}/repos/${REACT_APP_OWNER_REPO}/${REACT_APP_REPOSITORY_NAME}/branches`;
export const apiBranchDetails = (branchName) => `${apiBranchesUrl}/${branchName}`;