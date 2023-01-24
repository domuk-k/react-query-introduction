import { rest } from 'msw';

import { todos, todoDetails } from './data';

const LIMIT_DEFAULT = 10;

export const handlers = [
  // GET 할일 목록
  rest.get('/todos', async (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('limit') ?? LIMIT_DEFAULT);
    const offset = Number(req.url.searchParams.get('offset') ?? 0);

    const paginatedTodos = todos.slice(offset, offset + limit);

    return res(
      ctx.delay(700),
      ctx.status(200),
      ctx.json({ totalCount: todos.length, todos: paginatedTodos })
    );
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
