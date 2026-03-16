import { Body, Controller, Get, Headers, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {


    @Post()
    public createUser(
        @Body() request: any,
        @Headers() headers: any
    ) {
        

        return "post request sent"
    }


    @Get("/:id{/:optional}")
    public getUser(
        @Param() param: {id: string; optinal?:string},
        @Query() query: Record<string, string>
    ) {
        return `user ${param.id}`
    }
}
