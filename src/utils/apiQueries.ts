import ky, { HTTPError } from "ky";
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
    //
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();
      toast.error(errorJson.errors[0].message);
    } else {
      toast.error("Network Error");
    }
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
      toast.success("Logout Successful");
      return true;
    }
  } catch (error: any) {
    //
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorResponse = httpError.response;

      if (errorResponse.status === 400 || errorResponse.status === 401) {
        toast.success("Already logged out");
        return true;
      }

      const errorJson = await errorResponse.json<any>();
      toast.error(errorJson.errors[0].message);
    } else {
      toast.error("Network Error");
    }
  }
};
