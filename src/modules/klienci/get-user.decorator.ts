import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Klienci } from "./klienci.entity";

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): Klienci => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});