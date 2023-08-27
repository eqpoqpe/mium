// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

// @ts-ignore
import { Link, useSearchParams } from "react-router-dom";
import tokenWord from "../../token-word";
import { useEffect, useState } from "react";
import { classNameConcat } from "@eqpoqpe/classname-utils";

function setIntialVariable(key: string, val: string) {
  localStorage.setItem(key, val);
}

function Component() {

  // @ts-ignore
  const [isCompleted, setIsCompleted] = useState(false);
  const [searchParams,] = useSearchParams();
  const apiHost = searchParams.get(tokenWord.initial_api_host) ?? "";
  const lang = searchParams.get(tokenWord.initial_lang) ?? "";

  // later_redirect
  // @ts-ignore
  const laterRedirect = searchParams.get(tokenWord.later_redirect) ?? "";

  useEffect(() => {
    if (apiHost !== "")
      setIntialVariable(tokenWord.api_host, apiHost);

    if (lang !== "")
      setIntialVariable(tokenWord.lang, lang);

    setTimeout(() => {
      setIsCompleted(true);
    }, 1300);
  }, []);

  return (
    <div
      className={classNameConcat([
        "w-full",
        "h-full",
        "flex",
        "dark:bg-stone-900",
        "bg-stone-100",
        isCompleted ? "cursor-pointer" : "cursor-wait"
      ])}
    >
      <Link className={classNameConcat(["w-fit"])} to={laterRedirect} replace={import.meta.env.PROD}>
        <div className={classNameConcat(["w-fit"])}>
          <p className={classNameConcat(["text-lg", "font-bold"])}>continue</p>
        </div>
      </Link>
    </div>
  );
}

export {
  Component
};