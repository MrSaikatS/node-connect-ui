import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

type ProfileDetailsProps = {
  selfProfile: boolean;
};

const ProfileDetails = ({ selfProfile }: ProfileDetailsProps) => {
  return (
    <>
      <div className="container mx-auto my-4 max-w-screen-lg px-6">
        <Card>
          <CardBody>
            <div className="grid grid-flow-row gap-8 p-4 sm:grid-cols-5">
              <div className="grid place-items-center sm:col-span-2">
                <Image
                  isBlurred
                  as={NextImage}
                  src={"/50955.jpg"}
                  alt="50955"
                  width={"240"}
                  height={"240"}
                  className="aspect-square"
                />
              </div>

              <div className="flex flex-col justify-center gap-3 sm:col-span-3">
                <div className="text-center text-4xl font-medium sm:text-left sm:text-6xl">
                  Raju Dutta
                </div>
                <div className="text-center text-2xl sm:text-left">
                  (YoYo Raju)
                </div>

                <div className="text-center text-lg sm:max-w-screen-sm sm:text-left">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Dis
                  elementum ex porttitor libero a a litora.
                </div>

                {selfProfile && (
                  <div className="grid gap-4 sm:grid-flow-col">
                    <Button
                      size="lg"
                      color="warning"
                      variant="ghost">
                      Change Profile Picture
                    </Button>
                    <Button
                      size="lg"
                      color="warning"
                      variant="ghost">
                      Edit Profile Details
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ProfileDetails;
