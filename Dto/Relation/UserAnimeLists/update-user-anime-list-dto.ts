/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";

export interface UpdateUserAnimeListDto extends ModelDto {
    userId: string;
    animeId: string;
    isFavorite: boolean;
}