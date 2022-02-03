import axios from 'axios';
import { apiBranchCommits, apiBranchDetails, apiBranchesUrl } from '../constants';

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