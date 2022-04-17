import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserWithPasswordHash } from '../../util/database';

export default async function loginHandler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'POST') {
    // make sure data is provided -as string
    if (
      typeof request.body.username !== 'string' ||
      !request.body.username ||
      typeof request.body.password !== 'string' ||
      !request.body.password
    ) {
      response.status(400).json({
        errors: [{ message: 'Please provide a username and a password' }],
      });
      return;
    }

    // get the user info
    const user = await getUserWithPasswordHash(request.body.username);
    if (!user) {
      response.status(401).json({
        errors: [{ message: 'Login information incorrect' }],
      });
      return;
    }
    // check if pw is correct
    const passwordCorrect = await bcrypt.compare(
      request.body.password,
      user.passwordHash,
    );
    if (!passwordCorrect) {
      response.status(401).json({
        errors: [{ message: 'Login information incorrect' }],
      });
      return;
    }
    // session cookie

    //
    response.status(201).json({ user: { username: user.username } });
    return;
  }

  // any method other than POST
  response.status(405).json({
    errors: [{ message: 'Method not supported, try POST instead' }],
  });
}
