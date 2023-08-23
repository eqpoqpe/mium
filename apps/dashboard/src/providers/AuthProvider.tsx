// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { PropsWithChildren } from "react";
import tokenWord from "../token-word";

type AuthProviderProps = {};

function AuthProvider(props: AuthProviderProps & PropsWithChildren) {
  const { children } = props;
  const token = localStorage.getItem(tokenWord.jwt);

  return (
    <div></div>
  );
}

export {
  AuthProvider
};