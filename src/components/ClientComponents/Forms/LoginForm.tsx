"use client";

import { authLogin } from "@/utils/apiQueries";
import { LoginFormType } from "@/utils/types";
import { loginSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const userLoginFn = async (loginData: LoginFormType) => {
    const isLoginSuccess = await authLogin(loginData);

    reset();

    if (isLoginSuccess) {
      router.replace("/profile");
    }
  };

  return (
    <>
      <Card>
        <CardBody>
          <form
            onSubmit={handleSubmit(userLoginFn)}
            className="grid min-h-[300px] gap-4"
            noValidate>
            <Input
              isRequired
              color="primary"
              variant="bordered"
              label="Email"
              {...register("email")}
              errorMessage={errors.email?.message}
              isInvalid={!!errors.email?.message}
            />

            <Input
              isRequired
              color="primary"
              variant="bordered"
              label="Password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? (
                    <RiEye2Line size={20} />
                  ) : (
                    <RiEyeCloseLine size={20} />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              {...register("password")}
              errorMessage={errors.password?.message}
              isInvalid={!!errors.password?.message}
            />

            <Divider />

            <Button
              fullWidth
              type="submit"
              size="lg"
              color="primary"
              variant="ghost"
              isLoading={isSubmitting}>
              Login
            </Button>

            <Link
              href={"/register"}
              className="py-1 text-center text-xl underline">
              Create new account
            </Link>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginForm;
