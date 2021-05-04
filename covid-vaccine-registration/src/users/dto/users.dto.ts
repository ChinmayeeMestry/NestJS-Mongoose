import { from } from "rxjs";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateUsersDTO {

    @IsString({ message: `Your First-Name Should Be String` })
    @IsNotEmpty({ message: `Your First-Name Should Not Be Empty`})
    first_name: String;

    @IsString({ message: `Your Last-Name Should Be String` })
    @IsNotEmpty({ message: `Your Last-Name Should Not Be Empty`})
    last_name: String;
 
    @IsNumber({}, { message: `Your Age Should Be In Number` })
    @IsNotEmpty({ message: `Your Age Should Not Be Empty`})
    age: Number;

    @IsString({ message: `Your Address Should Be String` })
    @IsNotEmpty({ message: `Your Address Should Not Be Empty`})
    address: String;

    @IsString({ message: `Your Mobile Number Should Be String` })
    @IsNotEmpty({ message: `Your Mobile Should Not Be Empty`})
    @MinLength(10, { message: `Your Mobile Number Should Be 10 Digits` })
    @MaxLength(10, { message: `Your Mobile Number Should Be 10 Digits` })
    mobile: String

    @IsString({ message: `Your Aadhar Card Should Be String` })
    @IsNotEmpty({ message: `Your Aadhar Card Should Not Be Empty`})
    aadhar_card: String
}