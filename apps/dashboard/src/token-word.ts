// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

const tokenWord = ({
  jwt: "__TOKEN",
  api_host: "__API_HOST",
  initial_api_host: "api_host",
  lang: "__LANG",
  initial_lang: "lang",
  invitation_code: "invitation_code",
  later_redirect: "later_redirect",
  theme: "__APPEARANCE_THEME"
} as { [key: string]: string });

export default tokenWord;