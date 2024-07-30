import ky from "ky";
import { toast } from "react-toastify";
import { env } from "./env";
import { LoginFormType } from "./types";
import { fakeApiDelay } from "./helpers";

export const authLogin = async (loginData: LoginFormType) => {
  try {
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

    fakeApiDelay(1000);

    if (request.ok) {
      toast.success("Login Successful");
      return true;
    }
  } catch (error: any) {
    let err = await error.response.json();
    toast.error(err.errors[0].message);
  }
};

export const authLogout = async () => {
  try {
    const request = await ky.post("logout", {
      prefixUrl: `${env.NEXT_PUBLIC_API_URL}/auth`,
      credentials: "include",
      mode: "cors",
      json: {
        refresh_token: "",
        mode: "session",
      },
    });

    fakeApiDelay(1000);

    if (request.ok) {
      toast.success("Login Successful");
      return true;
    }
  } catch (error: any) {
    //
    let err = await error.response.json();
    toast.error(err.errors[0].message);
  }
};
