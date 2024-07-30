import { fakeApiDelay } from "@/utils/helpers";
import ProfileDetails from "./ProfileDetails";

const PublicProfile = async () => {
  await fakeApiDelay(2000);

  return (
    <>
      <ProfileDetails selfProfile={false} />
    </>
  );
};

export default PublicProfile;
