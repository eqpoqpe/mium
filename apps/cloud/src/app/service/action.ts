type ActionResult<T> = {
  result?: T;
  error?: any;
};

async function performAction<T>(action: () => Promise<any>): Promise<ActionResult<T | {}>> {
  const searchResult: ActionResult<T> = {};

  try {
    searchResult.result = await action();
  } catch (error) {
    searchResult.error = error;
  }

  return searchResult;
}

export {
  performAction
};