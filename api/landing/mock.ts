import { LandingAPI, TopProjectsOutput } from ".";
import { withLogger } from "../util/logger";

export const LandingAPIMock = withLogger(
  class LandingAPIMock implements LandingAPI {
    async topProjects(): Promise<TopProjectsOutput> {
      return {
        topProject: [
          {
            id: 1,
            title: "같이 팀블 개발하실 분 구해요",
            intro: "우리 같이 팀블할래?",
            photo:
              "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            startDate: "2021-11-37T01:06:14.2472",
            endDate: "2021-11-37T01:06:14.2472",
            isClosed: false,
            position: [
              {
                id: 1,
                name: "기획자",
                num: 2,
              },
              {
                id: 2,
                name: "디자이너",
                num: 2,
              },
              {
                id: 3,
                name: "개발자",
                num: 5,
              },
            ],
            user: {
              id: 7,
              name: "김팀블",
              photo:
                "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
            },
          },
        ],
      };
    }
  },
);
