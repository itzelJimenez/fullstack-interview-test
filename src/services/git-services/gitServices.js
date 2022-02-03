import axios from 'axios';
import { apiBranchCommits, apiBranchDetails, apiBranchesUrl, apiGetPullRequests, repoBasePath } from '../constants';

export const axiosInstance = axios.create({baseURL: apiBranchesUrl});


export const getBranches = async() => {
    const { data } = await axiosInstance.get(apiBranchesUrl);
    return data;
}

export const getBranchDetails = async(branchName) => {
    const { data } = await axiosInstance.get(apiBranchDetails(branchName));
    return data;
}

export const getBranchCommits = async(branchName) => {
    const { data } = await axiosInstance.get(apiBranchCommits(branchName));
    return data;
}

export const getPullRequests = async() => {
    const { data } = await axiosInstance.get(apiGetPullRequests);
    return data;
}

export const getRepositoryDetails = async() => {
    const { data } = await axiosInstance.get(repoBasePath);
    return data;
}