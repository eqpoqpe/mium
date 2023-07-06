import { ServerResult } from "../../types";

async function performAction<T>(action: () => Promise<any>): Promise<ServerResult<T | {}>> {
  const result: ServerResult<T | {}> = { error: "block" };
  let searchResult;

  try {
    searchResult = await action();
  } catch (error) {
    result.error = "block";
  }

  if (!!searchResult) {
    result.data = searchResult;
  }

  return result;
}

export {
  performAction
};