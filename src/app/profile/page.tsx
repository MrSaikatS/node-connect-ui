import PersonalProfile from "@/components/ServerComponents/PersonalProfile";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PersonalProfile />
      </Suspense>
    </>
  );
};

export default page;
