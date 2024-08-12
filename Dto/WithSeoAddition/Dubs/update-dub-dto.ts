/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateDubDto extends UpdateDtoWithSeoAddition {
    name: string;
    icon: string;
}

export const updateDubDtoSchema = z.object({
    name: z.string().length(128),
    icon: z.string().length(2048).nullable(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});
