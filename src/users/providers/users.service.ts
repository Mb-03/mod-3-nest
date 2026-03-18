import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";


@Injectable()
export class UsersService {
    public findAll(getUsersParamDto: GetUsersParamDto, limit: number, page: number) {}

    public findOne(id : number) {
        return {
            id: 123,
            name: "name"
        }
    }
}