import {IsArray, IsNotEmpty, IsString} from 'class-validator'
export class CreateHospitalDTO {

    @IsString({ message: `Your First-Name Should Be String` })
    @IsNotEmpty({ message: `Your First-Name Should Not Be Empty`})
    name: String;

    @IsString({ message: `Your First-Name Should Be String` })
    @IsNotEmpty({ message: `Your First-Name Should Not Be Empty`})
    address: String;


    @IsArray({message: "Add date and seat for availability"})
    @IsNotEmpty({ message: `Your date and seat for availability Should Not Be Empty`})
    availability: Array<{date: String, seats: Number}>;
    // availability: Array<Object>;
}