import { SetMetadata } from '@nestjs/common';

export const IS_PIBLIC_KEY = 'isPublic';

export const Public = () => SetMetadata(IS_PIBLIC_KEY, true);