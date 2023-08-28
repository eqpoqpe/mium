const tokenWord = ({
  jwt: "__TOKEN",
  api_host: "__API_HOST",
  initial_api_host: "api_host",
  lang: "__LANG", /* en, ja, zh_hans, zh_hant */
  initial_lang: "lang", /* only for `initial_setup` */
  invitation_code: "invitation_code", /* provider mode or organization */
  later_redirect: "later_redirect",
  theme: "__APPEARANCE_THEME" /* dark, light, auto */
} as { [key: string]: string });

export default tokenWord;