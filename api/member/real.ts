import { MemberAPI } from ".";
import { Session } from "../util/axios";

export function createMemberAPIReal(session: Session): MemberAPI {
  return {
    async getFilterMetadata() {
      const res = await session.request.get("member/metadata");
      return res.data.data;
    },
    async searchMembers(data) {
      const res = await session.request.post("member", data);
      return res.data.data;
    },
  };
}
