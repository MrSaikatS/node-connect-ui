import LoginForm from "@/components/ClientComponents/Forms/LoginForm";

const page = () => {
  return (
    <>
      <div className="grid h-dvh place-items-center">
        <div className="max-w-[350px]">
          <div className="mb-6 text-center text-3xl font-semibold">
            Welcome To NodeSocial
          </div>

          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default page;
