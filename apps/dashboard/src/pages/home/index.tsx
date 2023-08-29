// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { classNameConcat } from "@eqpoqpe/classname-utils";
import EmojilineSvg from "../../assets/emojiline.svg";
import { FigmaLogoIcon, GitHubLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import MiumLogo from "../../components/icon/MiumLogo";

const pageContentClassName = classNameConcat([
  "text-neutral-800",
  "font-bold",
  "text-center",
  "my-3"
]);

function Component() {
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
        "pt-10",
        "pb-6",
        "child:shrink-0"
      ])}
    >
      <div
        className={classNameConcat([
          "w-fit",
          "mb-3",
          "flex",
          "flex-col",
          "items-center",
          "box-content",
          "px-3"
        ])}
      >
        <h1 className={classNameConcat([pageContentClassName, "text-6xl"])}>
          Ideals, Topics, Explores.
        </h1>
        <h2 className={classNameConcat([pageContentClassName, "text-2xl", "max-w-[472px]"])}>
          Streamline team collaboration with real-time communication and file sharing.
        </h2>
      </div>
      <div
        className={classNameConcat([
          "w-[510px]",
          "h-[93px]",
          "bg-no-repeat",
          "bg-contain",
          "bg-center",
          "relative"
        ])}
        style={{ backgroundImage: `url(${EmojilineSvg})` }}
      >
        <MiumLogo
          className={classNameConcat([
            "w-[63px]",
            "h-[63px]",
            "bg-no-repeat",
            "bg-contain",
            "bg-center",
            "absolute",
            "top-[50%]",
            "left-[50%]",
            "translate-x-[-50%]",
            "translate-y-[-50%]"
          ])}
        />
      </div>
      <div
        className={classNameConcat(["h-fit", "pt-10"])}
      >
        <button
          className={classNameConcat([
            "bg-neutral-200",
            "box-border",
            "px-3",
            "py-1",
            "rounded-md",
            "text-lg",
            "text-stone-100",
            "font-medium"
          ])}
          disabled={true}
        >
          Get Started
        </button>
        <p
          className={classNameConcat([
            "text-center",
            "opacity-50",
            "text-sm",
            "mt-3",
            "text-stone-900",
            "flex",
            "flex-row",
            "items-center",
            "child:mx-1"
          ])}
        >
          <RocketIcon width={20} height={20} />
          <span className={classNameConcat(["border-dotted", "border-b-2", "border-stone-300"])}>
            coming soon
          </span>
        </p>
      </div>
      <div
        className={classNameConcat([
          "flex",
          "flex-row",
          "justify-center",
          "mt-[230px]",
          "child:mx-2"
        ])}
      >
        <a href="https://github.com/eqpoqpe/mium">
          <GitHubLogoIcon color="black" width={22} height={22} />
        </a>
        <FigmaLogoIcon color="black" width={22} height={22} />
      </div>
    </div>
  );
}

export { Component };