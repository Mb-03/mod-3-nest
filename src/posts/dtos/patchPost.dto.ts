import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./createPost.dto";
import { IsInt, IsNotEmpty } from "class-validator";

export class patchPostDto extends PartialType(CreatePostDto)  {
    @ApiProperty({
        description: "post id",
        example: 123
    })
    @IsInt()
    @IsNotEmpty()
    id:number;

}