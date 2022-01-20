import {
  DeletePokeProject,
  DeletePokeUser,
  GetPokeProject,
  GetPokeUser,
  PokeAPI,
  PokeProject,
  PokeUser,
  ProjectPokeDelete,
  UserPokeDelete,
} from ".";
import { withLogger } from "../util/logger";

export const PokeAPIMock = withLogger(
  class PokeAPIMock implements PokeAPI {
    async pokeUser(): Promise<PokeUser> {
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
          area: "서울/경기",
          intro: "유저 한줄소개",
          description: "유저 내용",
          isChecked: true,
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
    async pokeProject(): Promise<PokeProject> {
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
          area: "서울/경기",
          intro: "유저 한줄소개",
          description: "유저 내용",
          isChecked: false,
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isClosed: false,
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
    async getPokeUser(userId: number): Promise<GetPokeUser> {
      return {
        user: {
          id: 1,
          isChecked: true,
        },
        memberCard: [
          {
            id: 1,
            name: "김팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["기획자", "디자이너"],
            type: "ISTP",
            tag: ["체계적인", "계획적인"],
            field: ["스포츠", "여행"],
          },
          {
            id: 2,
            name: "박현지",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["개발자", "디자이너"],
            type: "ISFP",
            tag: ["킹받음", "솝됐음"],
            field: ["스포츠", "여행"],
          },
          {
            id: 3,
            name: "정세연",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["개발자", "기획지"],
            type: "INTP",
            tag: ["체계적인", "계획적인"],
            field: ["Type", "Next"],
          },
        ],
      };
    }

    async getPokeProject(userId: number): Promise<GetPokeProject> {
      return {
        user: {
          id: 2,
          isChecked: true,
        },
        memberCard: [
          {
            id: 1,
            name: "김팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["기획자", "디자이너"],
            type: "ISTP",
            tag: ["체계적인", "계획적인"],
            field: ["스포츠", "여행"],
          },
          {
            id: 2,
            name: "심유나",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["개발자", "디자이너"],
            type: "ESFJ",
            tag: ["체계적인", "계획적인"],
            field: ["스포츠", "여행"],
          },
        ],
      };
    }
    async deletePokeUser(data: UserPokeDelete): Promise<DeletePokeUser> {
      return {
        memberCard: [
          {
            id: 1,
            name: "김팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["기획자", "디자이너"],
            type: "ISTP",
            tag: ["체계적인", "계획적인"],
            field: ["스포츠", "여행"],
          },
          {
            id: 2,
            name: "박현지",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["개발자", "디자이너"],
            type: "ISFP",
            tag: ["킹받음", "솝됐음"],
            field: ["스포츠", "여행"],
          },
        ],
      };
    }

    async deletePokeProject(data: ProjectPokeDelete): Promise<DeletePokeProject> {
      return {
        memberCard: [
          {
            id: 1,
            name: "김팀블22222",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            position: ["기획자", "디자이너"],
            type: "ISTP",
            tag: ["체계적인", "계획적인"],
            field: ["스포츠", "여행"],
          },
        ],
      };
    }
  },
);
