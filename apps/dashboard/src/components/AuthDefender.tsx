// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { PropsWithChildren, ReactNode } from "react";
import { useAuthContext } from "../providers/AuthProvider";

type AuthDefenderProps = {
  fallback?: ReactNode;
};

function AuthDefender(props: AuthDefenderProps & PropsWithChildren) {
  const { children } = props;
  
  // @ts-ignore
  const authCtx = useAuthContext();

  return (
    <div>{children}</div>
  );
}

export {
  AuthDefender
};