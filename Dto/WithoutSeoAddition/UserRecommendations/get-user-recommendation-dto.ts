/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetUserDto } from "../../Users/get-user-dto";
import { GetAnimeDto } from "../../WithSeoAddition/Animes/get-anime-dto";

export interface GetUserRecommendationDto {
    user: GetUserDto;
    anime: GetAnimeDto;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
