// Copyright (c) 2023 Ryan Martin
// This code is licensed under MPL-2.0 license.

import { Transform } from "stream";

type TransformCallback = (error?: Error | null, data?: any) => void;

class SSEStream extends Transform {
  constructor() {
    super({
      writableObjectMode: true,
    });
  }

  _transform(data: string, encoding: BufferEncoding, callback: TransformCallback) {
    this.push(`data: ${JSON.stringify(data)}\n\n`);
    callback();
  }
}

export {
  SSEStream
};