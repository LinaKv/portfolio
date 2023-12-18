import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/ActionButton";
import Switch from "@/components/switch/Switch";
import { useMyContext } from "@/context/MyContext";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const { language } = useMyContext();

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full bg-gray-50 py-6 drop-shadow lg:inset-x-0  lg:mx-auto lg:w-2/4`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Link
              name="FRONTEND DEVELOPER"
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} min-w-[551px] gap-8 text-sm`}>
                  <Link
                    name={language ? "Домой" : "Home"}
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    name={language ? "Скиллы" : "Skills"}
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    name={language ? "Проекты" : "Portfolio"}
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    name={language ? "Опыт работы" : "Experience"}
                    page="Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    name={language ? "Резюме" : "CV"}
                    page="CV"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Switch />
                </div>
                <div className={`${flexBetween}  gap-8`}>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    {language ? "Связаться со мной" : "Connect with me"}
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* {Mobile menu} */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-500 drop-shadow-xl">
          {/*close icon  */}
          <div className="flex  justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu */}
          <div className="ml-5 flex h-4/5 flex-col justify-between">
            <div
              className=" flex flex-col items-start gap-10 text-2xl"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Link
                name={language ? "Домой" : "Home"}
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                name={language ? "Скиллы" : "Skills"}
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                name={language ? "Проекты" : "Portfolio"}
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                name={language ? "Опыт работы" : "Experience"}
                page="Experience"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                name={language ? "Резюме" : "CV"}
                page="CV"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                name={language ? "Связаться со мной" : "Connect with me"}
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="mt-20">
              <Switch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
