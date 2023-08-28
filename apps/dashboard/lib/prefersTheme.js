// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.
// prefers-color-scheme
function prefersTheme() {
    // @ts-ignore
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
export { prefersTheme };
