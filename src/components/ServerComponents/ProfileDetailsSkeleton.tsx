import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";
import NextImage from "next/image";

type ProfileSkeletonProps = {
  selfProfile: boolean;
};

const ProfileDetailsSkeleton = ({ selfProfile }: ProfileSkeletonProps) => {
  return (
    <>
      <div className="container mx-auto my-4 max-w-screen-lg px-6">
        <Card>
          <CardBody>
            <div className="grid grid-flow-row gap-8 p-4 sm:grid-cols-5">
              <div className="grid place-items-center sm:col-span-2">
                <Skeleton className="rounded-xl">
                  <div className="aspect-square h-[240px] w-[240px]"></div>
                </Skeleton>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:col-span-3">
                <div className="text-center text-4xl font-medium sm:text-left sm:text-6xl">
                  <Skeleton className="rounded-xl">Raju Dutta</Skeleton>
                </div>
                <div className="text-center text-2xl sm:text-left">
                  <Skeleton className="rounded-xl">(YoYo Raju)</Skeleton>
                </div>

                <div className="space-y-2 text-center text-lg sm:max-w-screen-sm sm:text-left">
                  <Skeleton className="rounded-xl">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dis
                  </Skeleton>
                  <Skeleton className="rounded-xl">
                    elementum ex porttitor libero a a litora.
                  </Skeleton>
                </div>

                {selfProfile && (
                  <div className="grid gap-4 sm:grid-flow-col">
                    <Button
                      isLoading
                      size="lg"
                      color="warning"
                      variant="ghost"></Button>
                    <Button
                      isLoading
                      size="lg"
                      color="warning"
                      variant="ghost"></Button>
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

export default ProfileDetailsSkeleton;
