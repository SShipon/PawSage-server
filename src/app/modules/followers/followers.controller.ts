import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FollowersServices } from './followers.service';


const following = catchAsync(async (req, res) => {
  const result = await FollowersServices.followingIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Following successfully',
    data: result,
  });
});



export const FollowersController = {
  following,

};