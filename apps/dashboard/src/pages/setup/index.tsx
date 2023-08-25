// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { useSearchParams } from "react-router-dom";
import tokenWord from "../../token-word";
import { useEffect } from "react";

function Component() {
  const [searchParams,] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get(tokenWord.api_host));
  }, []);

  return (
    <div></div>
  );
}

export {
  Component
};