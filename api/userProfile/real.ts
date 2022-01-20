import { UpdateProfileInput, UpdateProfilePictureInput, UserProfileAPI } from ".";
import { Session } from "../util/axios";

export function createUserProfileReal(session: Session): UserProfileAPI {
  return {
    async getProfileById(userId: number) {
      const res = await session.request.get(`user/profile/${userId}`);

      return res.data.data;
    },
    async getMetadata() {
      const res = await session.request.get("user/profile/metadata");

      return res.data.data;
    },
    async updateProfile(userId: number, data: UpdateProfileInput) {
      const res = await session.request.put(`user/profile/${userId}`, data);
      return res.data.data;
    },
    async updateProfilePicture(userId: number, data: UpdateProfilePictureInput) {
      const res = await session.request.post(
        `user/profile/photo/${userId}`,
        {
          photo: data.photo,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return res.data.data;
    },
  };
}
