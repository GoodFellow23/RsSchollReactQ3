import * as React from "react";
import { axiosInstance } from '../Services/api';

export const Api = (searchValue, apiKey, startDate, endDate, sortBy, lang, pageSize, page) => {
    return  axiosInstance.get(
        `v2/everything?q=${searchValue}&apiKey=${apiKey}&from=${startDate}&to=${endDate}&sortBy=${sortBy}&language=${lang}&pageSize=${pageSize}&page=${page}`
    )
};
