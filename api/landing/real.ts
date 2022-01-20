import { parseISO } from "date-fns";
import { LandingAPI, TopProjectsOutput } from ".";
import { Session } from "../util/axios";

export function createLandingAPIReal(session: Session): LandingAPI {
  return {
    async topProjects() {
      const res = await session.request.get("project/top");
      const data = res.data.data;
      return data;
    },
  };
}
