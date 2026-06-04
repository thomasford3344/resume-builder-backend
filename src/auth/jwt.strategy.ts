import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UsersService } from '../users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: { _id: string; email: string }) {
    const user = await this.usersService.find({
      // id
      _id: payload._id,
      email: payload.email,
    });
    if (user)
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        template: user.template,
      };
    else throw new UnauthorizedException();
  }
}
