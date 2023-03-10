import { rest } from 'msw';

import { todos, todoDetails } from './data';

export const handlers = [
  // GET 할일 목록
  rest.get('/todos', async (req, res, ctx) => {
    return res(ctx.delay(700), ctx.status(200), ctx.json(todos));
  }),

  rest.get('/todo/:id', async (req, res, ctx) => {
    let targetId = req.params.id;

    if (!targetId) {
      return res(ctx.status(400), ctx.json('id parameter is not found'));
    }

    const target = todoDetails.find((todo) => todo.id === targetId);

    return res(ctx.delay(700), ctx.status(200), ctx.json(target));
  }),
];
