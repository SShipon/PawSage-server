import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TPost } from './post.interface';
import { Post } from './post.modal';

const createPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);

  return result;
};

const getPostsFromDB = async (query: Record<string, unknown>) => {
  const postQuery = new QueryBuilder(Post.find().populate('userId'), query)
    .search(['title', 'content'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await postQuery.modelQuery;
  const meta = await postQuery.countTotal();

  return {
    meta,
    result,
  };
};




export const PostServices = {
  createPostIntoDB,
  getPostsFromDB,
  
};