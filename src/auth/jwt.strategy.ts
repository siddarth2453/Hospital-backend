import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Authorization header
      ignoreExpiration: false, // Ensure token expiration is validated
      secretOrKey: 'yourSecretKey', // Replace with an environment variable in production
    });
  }

  async validate(payload: any) {
    // Attach payload (e.g., user details) to the request
    return { userId: payload.sub, username: payload.username, role: payload.role };
  }
}