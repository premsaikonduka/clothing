import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    }
});