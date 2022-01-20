import { PokeAPI } from ".";
import { Session } from "../util/axios";

export function createPokeAPI(session: Session): PokeAPI {
  return {
    async pokeUser() {
      const res = await session.request.post("user/poke-user");
      return res.data.data;
    },
    async pokeProject() {
      const res = await session.request.post("user/poke-project");
      return res.data.data;
    },
    async getPokeUser(userId) {
      const res = await session.request.get(`user/poke-user/${userId}`);
      return res.data.data;
    },
    async getPokeProject(userId) {
      const res = await session.request.get(`user/poke-project/${userId}`);
      return res.data.data;
    },
    async deletePokeUser(data) {
      const res = await session.request.delete(`user/poke-user/${data.userId}/${data.pokingUserId}`);
      return res.data.data;
    },
    async deletePokeProject(data) {
      const res = await session.request.delete(`user/poke-project/${data.projectId}/${data.pokingUserId}`);
      return res.data.data;
    },
  };
}
