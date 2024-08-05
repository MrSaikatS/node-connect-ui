"use client";

import { RegisterFormType } from "@/utils/types";
import { registerSchema } from "@/utils/zodSchemas";
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

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  const userRegisterFn = async (registerData: RegisterFormType) => {
    // const isLoginSuccess = await authLogin(loginData);
    // reset();
    // if (isLoginSuccess) {
    //   router.replace("/");
    // }
  };

  return (
    <>
      <Card>
        <CardBody>
          <form
            onSubmit={handleSubmit(userRegisterFn)}
            className="grid min-h-[300px] gap-4"
            noValidate>
            <Input
              isRequired
              color="primary"
              variant="bordered"
              label="First Name"
              {...register("first_name")}
              errorMessage={errors.first_name?.message}
              isInvalid={!!errors.first_name?.message}
            />

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
              Register
            </Button>

            <Link
              href={"/auth/login"}
              className="py-1 text-center text-xl underline">
              Allready have an account?
            </Link>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisterForm;
