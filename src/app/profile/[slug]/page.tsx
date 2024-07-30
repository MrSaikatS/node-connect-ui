import ProfileDetailsSkeleton from "@/components/ServerComponents/ProfileDetailsSkeleton";
import PublicProfile from "@/components/ServerComponents/PublicProfile";
import { Suspense } from "react";

type PublicProfileProps = Readonly<{
  params: { slug: string };
}>;

const page = ({ params }: PublicProfileProps) => {
  const profileId = params.slug;

  return (
    <>
      <Suspense fallback={<ProfileDetailsSkeleton selfProfile={false} />}>
        <PublicProfile />
      </Suspense>
    </>
  );
};

export default page;
