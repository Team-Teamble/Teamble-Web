import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiService, APIService } from "../../api";
import { UnauthorizedError } from "../../api/util/error";

interface APIHookResult<Req extends unknown[], Res> {
  request(...args: Req): Promise<Res | null>;
}

export function useAPI<Req extends unknown[], Res>(
  fn: (api: APIService) => (...args: Req) => Promise<Res>,
): APIHookResult<Req, Res> {
  const router = useRouter();

  const apiRequest = fn(apiService);

  async function request(...args: Req): Promise<Res | null> {
    try {
      const res = await apiRequest(...args);
      return res;
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        router.replace("/login");
        return null;
      } else {
        throw e;
      }
    }
  }

  return {
    request,
  };
}
