import { rest } from 'msw';
import { baseUrl } from '../constants/index';
import { route } from '../utils';

export const handlers = [
  rest.post(`${baseUrl}posts`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          title: 'My website freezes after ...?',
          id: 'xg98gg',
          selftext: 'What trying to do:I work for a TV station as a broadcast Technician.What try',
          url: 'https://www.reddit.com/r/javascript/comments/',
          score: 55,
          num_comments: 3,
        },
        {
          title: 'My website',
          id: 'xg97gg',
          selftext: 'What trying to do:I work for a TV station as a broadcast Technician.What try',
          url: 'https://www.reddit.com/r/javascript/comments/',
          score: 55,
          num_comments: 3,
        },
      ])
    )
  ),

  rest.post(`${baseUrl}comments`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          author: 'simon',
          body: 'It will load the image only at the point when you assign an src to it, browsers do that.',
          id: 'xf458l5',
          score: 18,
          created_utc: 1643379472,
          replies: '',
        },
      ])
    )
  ),

  rest.get(`${baseUrl}save`, (req, res, ctx) =>
    res(
      ctx.json([
        {
          id: 's89yy0',
          title: 'My review and comparison !',
          author: 'Samar04',
          selftext: '',
          url: 'https://blog.crankshafttech.com/2022/01/banglejs2-hands-.html',
          score: 8,
          num_comments: 2,
          createdAt: '2022-02-12T20:59:23.000Z',
          updatedAt: '2022-02-12T20:59:23.000Z',
          userEmail: '6227968@gmail.com',
        },
        {
          id: 's8xqcv',
          title: '[AskJS] What are the most common interview questions for frontend?',
          author: 'yasu7',
          selftext: 'Wondering what people have seen lately, any framework',
          url: 'https://www.reddit.com/r/javascript/comments/s8xqcv/',
          score: 102,
          num_comments: 72,
          createdAt: '2022-02-14T14:46:07.000Z',
          updatedAt: '2022-02-14T14:46:07.000Z',
          userEmail: '6227968@gmail.com',
        },
      ])
    )
  ),

  rest.post(`${baseUrl}api/auth/${route.logIn}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({ name: 'Simon', email: '6227968@gmail.com', phone: '+375296227968', accessToken: 'token' })
    )
  ),

  rest.post(`${baseUrl}api/auth/${route.signUp}`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        accessToken: 'token',
        dataValues: {
          name: 'Simon',
          email: '6227968@gmail.com',
          phone: '+375296227968',
          city: 'минск',
          address: 'ул.седых 32-40',
          password: '$2a$08$Elf.fNT/YLIJ42fJVgwlZ.sSL/dDQFsjODxPKNb0/tBvO9UCSVZaC',
        },
      })
    )
  ),
];
