import { useState } from 'react';

export type State = ReturnType<typeof useState<number>>;

const data = [11, 'hello', 'world', true];
export type Greeting = (typeof data)[number];
