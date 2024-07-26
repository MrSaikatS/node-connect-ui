import { cookies } from "next/headers";

const page = () => {
  const cookieStore = cookies();

  console.log(cookieStore.getAll());

  return (
    <>
      <div className=""></div>
    </>
  );
};

export default page;
