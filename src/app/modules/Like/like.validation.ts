import { z } from 'zod';

const LikeValidationSchema = z.object({
  body: z.object({
    userId: z.string({ required_error: 'User ID is required' }),
    postId: z.string({ required_error: 'Post ID is required' }),
  }),
});

export const LikeValidation = {
  LikeValidationSchema,
};