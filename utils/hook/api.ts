import { useRouter } from "next/router";
import { useState } from "react";
import { apiService, APIService } from "../../api";
import { UnauthorizedError } from "../../api/util/error";

interface APIHookResult<Req extends unknown[], Res> {
  request(...args: Req): Promise<Res | null>;
  data: Res | null;
  loading: boolean;
}

export function useAPI<Req extends unknown[], Res>(
  fn: (api: APIService) => (...args: Req) => Promise<Res>,
): APIHookResult<Req, Res> {
  const router = useRouter();
  const [data, setData] = useState<Res | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const apiRequest = fn(apiService);

  async function request(...args: Req): Promise<Res | null> {
    setLoading(true);
    try {
      const res = await apiRequest(...args);
      setData(res);
      return res;
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        router.replace("/login");
        return null;
      } else {
        throw e;
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    request,
    data,
    loading,
  };
}
