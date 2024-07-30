import PersonalProfile from "@/components/ServerComponents/PersonalProfile";
import ProfileDetailsSkeleton from "@/components/ServerComponents/ProfileDetailsSkeleton";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<ProfileDetailsSkeleton selfProfile={true} />}>
        <PersonalProfile />
      </Suspense>
    </>
  );
};

export default page;
