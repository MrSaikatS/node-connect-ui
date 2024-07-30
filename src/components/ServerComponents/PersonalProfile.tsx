import { fakeApiDelay } from "@/utils/helpers";
import ProfileDetails from "./ProfileDetails";

const PersonalProfile = async () => {
  await fakeApiDelay(2000);

  return (
    <>
      <ProfileDetails selfProfile={true} />
    </>
  );
};

export default PersonalProfile;
