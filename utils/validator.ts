import { z } from 'zod';

export const validateProfile = (data: any) => {
  const schema = z.object({
    type: z.enum(['pink', 'blue']),
    role: z.string(),
    name: z.string(),
    position: z.string(),
    company: z.string(),
  });

  return schema.safeParse(data).success;
};
