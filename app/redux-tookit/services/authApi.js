import { REGISTER_CUSTOMER } from "@/app/utils/endPoint";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../common/headers";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,

  endpoints: (builder) => ({
    registerCustomer: builder.mutation({
      query: (body) => ({
        url: REGISTER_CUSTOMER,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hook
export const { useRegisterCustomerMutation } = authApi;
