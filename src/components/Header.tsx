import logo from "../assets/images/disneyLogo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { IconType } from "react-icons";
import { useEffect, useRef, useState } from "react";

export type Menu = {
  name: string;
  icon: IconType;
};

const menu: Menu[] = [
  {
    name: "HOME",
    icon: HiHome,
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    name: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    name: "SERIES",
    icon: HiTv,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (event: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };

    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose)
    }
  }, []);

  return (
    <section className="flex items-center justify-between w-full p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-20 md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem item={item} />
          ))}
        </div>
        <div className="flex gap-8 md:hidden">
          {menu.map(
            (item, index: number) => index < 3 && <HeaderItem item={item} />
          )}
          <div className="md:hidden" ref={dropDownRef}>
            <div onClick={() => setToggle((prev) => !prev)}>
              <HeaderItem item={{ icon: HiDotsVertical, name: "" }} />
            </div>
            {toggle ? (
              <div className="absolute bg-[#121212] border border-gray-700 mt-3 rounded p-3 px-5 flex flex-col gap-3 z-10">
                {menu.map(
                  (item, index: number) =>
                    index >= 3 && <HeaderItem item={item} index={index} />
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </section>
  );
};

export default Header;
