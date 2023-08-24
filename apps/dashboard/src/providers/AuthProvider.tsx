// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { PropsWithChildren, createContext, useContext, useState } from "react";

type AuthContext = {
  token: string;
};

type AuthProviderProps = {
  initialFn?: () => string;
};

const authContext = createContext<AuthContext | undefined>(undefined);

function AuthProvider(props: AuthProviderProps & PropsWithChildren) {
  const { children, initialFn } = props;
  const [authToken, setAuthToken] = useState(initialFn ?? "");

  return (
    <authContext.Provider value={{ token: authToken }}>
      {children}
    </authContext.Provider>
  );
}

function useAuthContext() {
  return useContext(authContext);
}

export {
  AuthProvider,
  useAuthContext
};