import { authLogout } from "@/utils/apiQueries";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { usePathname, useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { RiDashboardFill } from "react-icons/ri";

const Header = () => {
  const pathname = usePathname();

  const router = useRouter();

  const logoutFunc = async () => {
    const isLogoutSuccess = await authLogout();

    if (isLogoutSuccess) {
      router.replace("/");
    }
  };

  if (pathname !== "/auth/login" && pathname !== "/auth/register") {
    return (
      <>
        <Navbar isBordered>
          <NavbarBrand>
            <Button
              color="primary"
              variant="light"
              className="flex items-center gap-1 text-xl font-semibold"
              onPress={() => router.replace("/")}>
              NodeConnect
            </Button>
          </NavbarBrand>

          <NavbarContent
            justify="end"
            className="hidden gap-0 sm:flex">
            <NavbarItem>
              <Button
                color="primary"
                variant="light"
                className="flex items-center gap-1"
                onPress={() => router.replace("/")}
                startContent={<RiDashboardFill size={24} />}>
                Feed
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                color="secondary"
                variant="light"
                className="flex items-center gap-1"
                onPress={() => router.replace("/profile")}
                startContent={<FaUserCircle size={24} />}>
                Profile
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                color="danger"
                variant="light"
                className="flex items-center gap-1"
                onPress={logoutFunc}
                startContent={<LuLogOut size={24} />}>
                Logout
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent
            justify="end"
            className="gap-2 sm:hidden">
            <NavbarItem>
              <Button
                isIconOnly
                color="primary"
                variant="light"
                className="flex items-center gap-1"
                onPress={() => router.replace("/")}
                startContent={<RiDashboardFill size={24} />}></Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                color="secondary"
                variant="light"
                className="flex items-center gap-1"
                onPress={() => router.replace("/profile")}
                startContent={<FaUserCircle size={24} />}></Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                color="danger"
                variant="light"
                className="flex items-center gap-1"
                onPress={logoutFunc}
                startContent={<LuLogOut size={24} />}></Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </>
    );
  }

  return <></>;
};

export default Header;
