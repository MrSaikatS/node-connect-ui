import ky from "ky";
import { env } from "./env";
import { LoginFormType } from "./types";

export const authLogin = async (loginData: LoginFormType) => {
  const request = await ky.post("login", {
    prefixUrl: `${env.NEXT_PUBLIC_API_URL}/auth`,
    credentials: "include",
    mode: "cors",
    json: {
      email: loginData.email,
      password: loginData.password,
      mode: "session",
    },
  });

  console.log(request);

  const response = await request.json<any>();

  console.log(response);
};
