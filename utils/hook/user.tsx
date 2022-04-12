import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { UnauthorizedError } from "../../api/util/error";
import { useAPIService } from "./api";

const AuthUserContext = createContext<UserInfo | null>(null);

interface UserInfo {
  id: number;
  name: string;
  profilePic: string;
  currentProjectId: number | null;
  isAlarmAvailable?: boolean;
}

interface AuthUserProviderProps {
  children: ReactNode;
}

export function AuthUserProvider(props: AuthUserProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const { apiService, isAuthed } = useAPIService();

  useEffect(() => {
    (async () => {
      if (isAuthed) {
        try {
          const { user } = await apiService.auth.verify();
          setUserInfo({
            currentProjectId: user.projectId,
            id: user.id,
            name: user.name,
            profilePic: user.photo,
            isAlarmAvailable: !user.isChecked,
          });
        } catch (e) {
          if (e instanceof UnauthorizedError) {
            setUserInfo(null);
          } else {
            throw e;
          }
        }
      }
    })();
  }, [isAuthed, apiService.auth]);

  return <AuthUserContext.Provider value={userInfo}>{props.children}</AuthUserContext.Provider>;
}

/**
 * 현재 로그인된 유저를 가져옵니다.
 * @returns 로그인된 유저 정보. 로그인이 안되어 있다면 null
 */
export function useUser() {
  const userContext = useContext(AuthUserContext);

  return userContext;
}
