import { rest } from 'msw';

import todos from './data';

export const handlers = [
  // GET 할일 목록
  rest.get('/todos', async (req, res, ctx) => {
    await sleep(200);

    return res(ctx.status(200), ctx.json(todos));
  }),
];

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
