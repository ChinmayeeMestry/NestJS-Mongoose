import {IsNotEmpty, IsString} from 'class-validator'
export class CreateVaccinationRegistrationDTO {

    @IsString({ message: `Your First-Name Should Be String` })
    @IsNotEmpty({ message: `Your First-Name Should Not Be Empty`})
    user_id: String;

    @IsString({ message: `Your First-Name Should Be String` })
    @IsNotEmpty({ message: `Your First-Name Should Not Be Empty`})
    hospital_id: String;


    @IsString({message: "Add date and seat for availability"})
    @IsNotEmpty({ message: `Your date and seat for availability Should Not Be Empty`})
    date_for_vaccination: String;
}