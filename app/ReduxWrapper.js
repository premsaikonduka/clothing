"use client";

import { Provider } from "react-redux";
import store from "./redux-tookit/store";

export default function ReduxWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
