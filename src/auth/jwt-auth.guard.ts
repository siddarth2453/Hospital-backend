import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add custom authentication logic here if needed
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Customize how errors or unauthenticated requests are handled
    if (err || !user) {
      throw err || new Error('Unauthorized');
    }
    return user;
  }
}