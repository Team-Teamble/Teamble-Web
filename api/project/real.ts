import { ProjectAPI } from ".";
import { Session } from "../util/axios";

export function createProjectAPIReal(session: Session): ProjectAPI {
  const request = session.request;

  return {
    async getProjectMetadata() {
      const res = await request.get("project/metadata");
      return res.data.data;
    },
    async createProject(data) {
      const res = await request.post("project", data);
      return res.data.data;
    },
    async addPictureToProject(projectId, data) {
      const formData = new FormData();
      formData.append("photo", data.photo);

      const res = await request.post(`project/photo/${projectId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data.data;
    },
    async addMemberToProject(data) {
      const res = await request.post("project/member", data);
      return res.data.data;
    },
    async getSearchMetadata() {
      const res = await request.get("project/search/metadata");
      return res.data.data;
    },
    async searchProject(data) {
      const res = await request.post("project/search", data);
      return res.data.data;
    },
    async getProjectDetail(projectId) {
      const res = await request.get(`project/${projectId}`);
      return res.data.data;
    },
    async markCompleteProject(projectId) {
      const res = await request.delete(`project/${projectId}`);
      return res.data.data;
    },
  };
}
