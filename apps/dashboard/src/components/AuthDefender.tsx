// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { PropsWithChildren } from "react";
import { useAuthContext } from "../providers/AuthProvider";

type AuthDefenderProps = {};

function AuthDefender(props: AuthDefenderProps & PropsWithChildren) {
  const { children } = props;
  const authCtx = useAuthContext();

  return (
    <div>{children}</div>
  );
}

export {
  AuthDefender
};