import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';

type JwtPayload = {
  id: number;
};

declare module 'express-serve-static-core' {
  interface Request {
    user?: Record<string, any>;
  }
}

export const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Usuário não autorizado!' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { id } = jwt.verify(token, 'cangame123') as JwtPayload;

    const user = await UserRepository.getUserById(id);

    if (!user) {
      return res.status(400).json({ error: 'Não autorizado' });
    }

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    return next();
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return res.status(401).json({ message: 'Token inválido' });
  }
};
