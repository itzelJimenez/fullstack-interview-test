import axios from 'axios';
import { apiBranchDetails, apiBranchesUrl } from '../constants';

export const axiosInstance = axios.create({baseURL: apiBranchesUrl});


export const getBranches = async() => {
    const { data } = await axiosInstance.get(apiBranchesUrl);
    return data;
}

export const getBranchDetails = async() => {
    const { data } = await axiosInstance.get(apiBranchDetails);
    return data;
}