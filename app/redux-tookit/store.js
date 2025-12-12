"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi"; 

export const store = configureStore({
  reducer: {
    // RTK Query reducer
    [authApi.reducerPath]: authApi.reducer,
  },

  // Required middleware for RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Optional: If you need types later
export default store;
