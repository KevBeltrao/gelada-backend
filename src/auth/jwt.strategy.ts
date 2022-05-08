import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AwsCognitoConfig } from '../aws/aws-cognito.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authConfig: AwsCognitoConfig) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: authConfig.clientId,
      issuer: authConfig.authority,
      algorithms: ['RS256'],
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${authConfig.authority}/.well-known/jwks.json`,
      }),
    });
  }

  public validate(payload: { sub: string; email: string }): {
    userId: string;
    email: string;
  } {
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}
