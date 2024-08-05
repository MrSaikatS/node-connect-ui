import RegisterForm from "@/components/ClientComponents/Forms/RegisterForm";

const page = () => {
  return (
    <>
      <div className="grid h-dvh place-items-center">
        <div className="max-w-[350px]">
          <div className="mb-6 text-center text-3xl font-semibold">
            Welcome To NodeSocial
          </div>

          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default page;
