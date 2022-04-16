import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getUserByUsername } from '../../util/database';

export default async function registerHandler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'POST') {
    // check if the username is unique
    if (await getUserByUsername(request.body.username)) {
      response
        .status(409)
        .json({ errors: [{ message: 'This username is already taken' }] });
      return;
    }

    // hash the password
    const passwordHash = await bcrypt.hash(request.body.password, 12);

    // create the user in the db
    const user = await createUser(request.body.username, passwordHash);

    response.status(201).json({ user: user });
    return;
  }

  // any method other than POST
  response.status(405).json({
    errors: [{ message: 'Method not supported, try POST instead' }],
  });
}
