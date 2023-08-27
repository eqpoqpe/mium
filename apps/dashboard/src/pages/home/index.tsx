// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { classNameConcat } from "@eqpoqpe/classname-utils";
import EmojilineSvg from "../../assets/emojiline.svg";
import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useAppearanceContext } from "../../providers/AppearanceProvider";

const h1ClassName = classNameConcat([
  "text-neutral-800",
  "text-6xl",
  "font-bold",
  "text-center",
  "my-3",
  "dark:text-white"
]);
const h2ClassName = classNameConcat([
  "text-neutral-800",
  "text-2xl",
  "font-bold",
  "text-center",
  "my-3",
  "max-w-[472px]",
  "dark:text-white"
]);

function Component() {
  const { theme } = useAppearanceContext();

  return (
    <div
      className={classNameConcat([
        "w-full",
        "h-full",
        "flex",
        "flex-col",
        "items-center",
        "overflow-x-hidden",
        "overflow-y-auto",
        "pb-6",
        "dark:bg-neutral-900",
        "child:shrink-0"
      ])}
    >
      <div
        className={classNameConcat([
          "w-fit",
          "mt-[90px]",
          "mb-3",
          "flex",
          "flex-col",
          "items-center",
          "box-content",
          "px-3"
        ])}
      >
        <h1 className={classNameConcat([h1ClassName])}>
          Ideals, Topics, Explores.
        </h1>
        <h2 className={classNameConcat([h2ClassName])}>
          Streamline team collaboration with real-time communication and file sharing.
        </h2>
      </div>
      <div
        className={classNameConcat([
          "w-[510px]",
          "h-[93px]",
          "bg-no-repeat",
          "bg-contain",
          "bg-center"
        ])}
        style={{ backgroundImage: `url(${EmojilineSvg})` }}
      >
      </div>
      <div
        className={classNameConcat(["h-fit", "pt-10"])}
      >
        <button
          className={classNameConcat([
            "dark:bg-neutral-700",
            "bg-neutral-200",
            "box-border",
            "px-3",
            "py-1",
            "rounded-md",
            "text-lg",
            "dark:text-stone-500",
            "text-stone-100",
            "font-medium"
          ])}
          disabled={true}
        >
          Get Started
        </button>
        <p className={classNameConcat(["text-center", "opacity-50", "text-sm", "mt-2"])}>
          <span className={classNameConcat(["border-dotted", "border-b-2", "border-stone-300"])}>coming soon</span>
        </p>
      </div>
      <div
        className={classNameConcat([
          "flex",
          "flex-row",
          "justify-center",
          "mt-[130px]",
          "child:mx-2"
        ])}
      >
        <a href="https://github.com/eqpoqpe/mium">
          <GitHubLogoIcon color={theme === "dark" ? "white" : "black"} width={22} height={22} />
        </a>
        <FigmaLogoIcon color={theme === "dark" ? "white" : "black"} width={22} height={22} />
      </div>
    </div>
  );
}

export { Component };