import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get()
    showAuth(): string {

        return 'Authentification approved';

    }

    @Post()
    create(): string {
        return 'Authentification added';

    }
}
