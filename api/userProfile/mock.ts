import {
  GetMetadataOutput,
  GetUserProfileByIdOutput,
  UpdateProfileOutput,
  UpdateProfilePictureInput,
  UpdateProfilePictureOutput,
  UserProfileAPI,
} from ".";

export class UserProfileMock implements UserProfileAPI {
  async getProfileById(userId: number): Promise<GetUserProfileByIdOutput> {
    return {
      user: {
        id: userId,
        idFirebase: "ehxIllyXpcSXANkvEUYUqI2kCaZ2",
        name: "김팀블",
        email: "teamble@gmail.com",
        phone: "010-1234-5678",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
        university: "팀블대학교",
        major: "컴퓨터공학과",
        area: "서울/경기",
        intro: "유저 한줄소개",
        description: "유저 내용",
        isChecked: false,
        createdAt: "2021-11-37T01:06:14.2472",
        updatedAt: "2021-11-37T01:06:14.2472",
        isDeleted: false,
        projectId: 1,
        type: {
          id: 3,
          name: "정열적인 빨강",
        },
        tag: [
          {
            id: 1,
            name: "성실함",
          },
          {
            id: 3,
            name: "꼼꼼함",
          },
        ],
        position: [
          {
            id: 1,
            name: "기획자",
          },
        ],
        field: [
          {
            id: 1,
            name: "O2O",
          },
          {
            id: 3,
            name: "반려동물",
          },
        ],
      },
    };
  }
  async getMetadata(): Promise<GetMetadataOutput> {
    return {
      user: {
        position: [
          {
            id: 2,
            name: "기획자",
          },
          {
            id: 3,
            name: "개발자",
          },
          {
            id: 4,
            name: "디자이너",
          },
        ],
        type: [
          {
            id: 1,
            name: "정열적인 빨강이",
          },
          {
            id: 2,
            name: "느긋한 초록이",
          },
        ],
        field: [
          {
            id: 2,
            name: "O2O",
          },
          {
            id: 3,
            name: "여행",
          },
        ],
      },
    };
  }
  async updateProfile(userId: number): Promise<UpdateProfileOutput> {
    return {
      user: {
        id: 1,
        idFirebase: "ehxIllyXpcSXANkvEUYUqI2kCaZ2",
        name: "김팀블",
        email: "teamble@gmail.com",
        phone: "010-1234-5678",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
        university: "팀블대학교",
        major: "컴퓨터공학과",
        area: "서울이에요",
        intro: "개발자 팀블입니다.",
        description: "저는 김팀블인데, 개발을 좋아해요. 근데 API 명세서 만드는건 좀 힘들어요.",
        isChecked: true,
        createdAt: "2021-11-37T01:06:14.2472",
        updatedAt: "2021-11-37T01:06:14.2472",
        isDeleted: false,
        projectId: 1,
        type: {
          id: 2,
          name: "정열적인 빨강",
        },
        tag: [
          {
            id: 1,
            name: "성실함",
          },
          {
            id: 3,
            name: "꼼꼼함",
          },
        ],
        position: [
          {
            id: 1,
            name: "기획자",
          },
          {
            id: 2,
            name: "디자이너",
          },
        ],
        field: [
          {
            id: 1,
            name: "O2O",
          },
          {
            id: 3,
            name: "반려동물",
          },
        ],
      },
    };
  }
  async updateProfilePicture(userId: number, data: UpdateProfilePictureInput): Promise<UpdateProfilePictureOutput> {
    return {
      userPhoto:
        "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
    };
  }
}
