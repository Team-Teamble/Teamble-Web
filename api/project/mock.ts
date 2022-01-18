import {
  AddMemberToProjectInput,
  AddMemberToProjectOutput,
  CreateProjectOutput,
  GetProjectMetadataOutput,
  GetSearchMetadataOutput,
  ProjectAPI,
  ProjectDetail,
  SearchProjectInput,
  SearchProjectOutput,
} from ".";
import { withLogger } from "../util/logger";

export const ProjectAPIMock = withLogger(
  class ProjectAPIMock implements ProjectAPI {
    async getProjectMetadata(): Promise<GetProjectMetadataOutput> {
      return {
        project: {
          period: [
            {
              id: 1,
              name: "1주 ~ 1개월",
            },
          ],
          position: [
            {
              id: 1,
              name: "기획자",
              positionNum: [
                {
                  id: 1,
                  name: "0",
                },
              ],
            },
          ],
          goal: [
            {
              id: 1,
              name: "프로젝트 개빌",
            },
          ],
          type: [
            {
              id: 1,
              name: "열정적인",
            },
          ],
          field: [
            {
              id: 1,
              name: "여행",
            },
          ],
        },
      };
    }
    async createProject(): Promise<CreateProjectOutput> {
      return {
        project: {
          id: 1,
          title: "프로젝트 제목",
          intro: "프로젝트 한줄소개",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          startDate: "2021-11-37T01:06:14.2472",
          endDate: "2021-11-37T01:06:14.2472",
          area: "서울",
          description: "프로젝트 내용",
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isClosed: false,
          isDeleted: false,
          period: {
            id: 1,
            name: "1주 ~ 1개월",
          },
          position: [
            {
              id: 1,
              name: "기획자",
              positionNum: {
                id: 3,
                name: "2",
              },
            },
          ],
          goal: {
            id: 1,
            name: "프로젝트 개빌",
          },
          type: [
            {
              id: 1,
              name: "열정적인",
            },
          ],
          field: [
            {
              id: 1,
              name: "여행",
            },
          ],
          member: [
            {
              id: 2,
              name: "김팀원",
              photo:
                "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            },
          ],
          user: {
            id: 1,
            name: "박팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          },
        },
      };
    }
    async addMemberToProject(data: AddMemberToProjectInput): Promise<AddMemberToProjectOutput> {
      return {
        member: [
          {
            id: 1,
            name: "김팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          },
        ],
      };
    }
    async getSearchMetadata(): Promise<GetSearchMetadataOutput> {
      return {
        project: {
          period: [
            {
              id: 1,
              name: "전체",
            },
            {
              id: 2,
              name: "1주 ~ 1개월",
            },
            {
              id: 3,
              name: "1개월 ~ 3개월",
            },
          ],
          position: [
            {
              id: 1,
              name: "전체",
            },
            {
              id: 2,
              name: "기획자",
            },
            {
              id: 3,
              name: "개발자",
            },
          ],
          goal: [
            {
              id: 1,
              name: "전체",
            },
            {
              id: 2,
              name: "기획 / 디자인",
            },
            {
              id: 3,
              name: "프로젝트 개발",
            },
            {
              id: 4,
              name: "프로젝트 출시",
            },
          ],
          tag: [
            {
              id: 1,
              name: "전체",
            },
            {
              id: 2,
              name: "열정적인",
            },
            {
              id: 3,
              name: "냉소적인",
            },
            {
              id: 4,
              name: "사려깊은",
            },
            {
              id: 5,
              name: "그냥저냥",
            },
          ],
          field: [
            {
              id: 1,
              name: "전체",
            },
            {
              id: 2,
              name: "여기",
            },
            {
              id: 3,
              name: "저기",
            },
            {
              id: 4,
              name: "어디",
            },
            {
              id: 5,
              name: "거기",
            },
          ],
        },
      };
    }
    async searchProject(data: SearchProjectInput): Promise<SearchProjectOutput> {
      return {
        projectCard: [
          {
            id: 1,
            title: "프로젝트 제목",
            intro: "프로젝트 한줄소개",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            startDate: "2021-11-37T01:06:14.2472",
            endDate: "2021-11-37T01:06:14.2472",
            isClosed: false,
            position: [
              {
                id: 1,
                name: "기획자",
                num: "1",
              },
              {
                id: 2,
                name: "디자이너",
                num: "2",
              },
              {
                id: 3,
                name: "개발자",
                num: "4",
              },
            ],
            user: {
              id: 2,
              name: "김팀블",
              photo:
                "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            },
          },
        ],
      };
    }
    async getProjectDetail(projectId: string): Promise<ProjectDetail> {
      return {
        project: {
          id: 1,
          title: "프로젝트 제목",
          intro: "프로젝트 한줄소개",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          startDate: "2021-11-37T01:06:14.2472",
          endDate: "2021-11-37T01:06:14.2472",
          area: "서울",
          description: "프로젝트 내용",
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isClosed: false,
          isDeleted: false,
          period: {
            id: 1,
            name: "1주 ~ 1개월",
          },
          position: [
            {
              id: 1,
              name: "기획자",
              positionNum: {
                id: 3,
                name: "2",
              },
            },
          ],
          goal: {
            id: 1,
            name: "프로젝트 개빌",
          },
          type: [
            {
              id: 1,
              name: "열정적인",
            },
          ],
          field: [
            {
              id: 1,
              name: "여행",
            },
          ],
          member: [
            {
              id: 2,
              name: "김팀원",
              photo:
                "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            },
          ],
          user: {
            id: 1,
            name: "박팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          },
        },
      };
    }
    async markCompleteProject(projectId: string): Promise<ProjectDetail> {
      return {
        project: {
          id: 1,
          title: "프로젝트 제목",
          intro: "프로젝트 한줄소개",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          startDate: "2021-11-37T01:06:14.2472",
          endDate: "2021-11-37T01:06:14.2472",
          area: "서울",
          description: "프로젝트 내용",
          createdAt: "2021-11-37T01:06:14.2472",
          updatedAt: "2021-11-37T01:06:14.2472",
          isClosed: false,
          isDeleted: false,
          period: {
            id: 1,
            name: "1주 ~ 1개월",
          },
          position: [
            {
              id: 1,
              name: "기획자",
              positionNum: {
                id: 3,
                name: "2",
              },
            },
          ],
          goal: {
            id: 1,
            name: "프로젝트 개빌",
          },
          type: [
            {
              id: 1,
              name: "열정적인",
            },
          ],
          field: [
            {
              id: 1,
              name: "여행",
            },
          ],
          member: [
            {
              id: 2,
              name: "김팀원",
              photo:
                "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            },
          ],
          user: {
            id: 1,
            name: "박팀블",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
          },
        },
      };
    }
  },
);
