import { GetFilterMetadataOutput, MemberAPI, SearchMembersOutput } from ".";

export class MemberAPIMock implements MemberAPI {
  async getFilterMetadata(): Promise<GetFilterMetadataOutput> {
    return {
      member: {
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
            name: "디자이너",
          },
          {
            id: 4,
            name: "개발자",
          },
        ],
        tag: [
          {
            id: 1,
            name: "전체",
          },
          {
            id: 2,
            name: "성실함",
          },
          {
            id: 3,
            name: "꼼꼼함",
          },
        ],
        field: [
          {
            id: 1,
            name: "전체",
          },
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
  async searchMembers(): Promise<SearchMembersOutput> {
    return {
      member: [
        {
          id: 1,
          name: "김팀블",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/wesopt29-21638.appspot.com/o/20211224_151914_345381153135.png?alt=media&token=b58ddd85-7cd8-4226-becf-3266a560e8a3",
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
          type: {
            id: 1,
            name: "ISTP",
          },
          tag: [
            {
              id: 1,
              name: "체계적인",
            },
            {
              id: 4,
              name: "계획적인",
            },
          ],
          field: [
            {
              id: 4,
              name: "스포츠",
            },
            {
              id: 6,
              name: "여행",
            },
          ],
        },
      ],
    };
  }
}
