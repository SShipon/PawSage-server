/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TFollowers } from './followers.interface';
import { Followers } from './followers.model';


const followingIntoDB = async (payload: TFollowers) => {
  const isFollowersExist = await Followers.findOne({
    followerId: payload.followerId,
    userId: payload.userId,
  });

  if (isFollowersExist) {
    throw new AppError(
      httpStatus.ALREADY_REPORTED,
      'You already follow this user',
    );
  }

  const result = await Followers.create(payload);

  return result;
};



export const FollowersServices = {
  followingIntoDB,

};