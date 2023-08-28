import en from "./en.json";
import ja from "./ja.json";
import zh_hans from "./zh-hans.json";
import zh_hant from "./zh-hant.json";

const locales = [
  {
    tag: "en",
    resource: en
  },
  {
    tag: "ja",
    resource: ja
  },
  {
    tag: "zh_hans",
    resource: zh_hans
  },
  {
    tag: "zh_hant",
    resource: zh_hant
  }
] as const;

export {
  locales
};