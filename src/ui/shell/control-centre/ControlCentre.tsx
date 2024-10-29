import Clock from "@/ui/components/clock/Clock";
import Divider from "@/ui/components/divider/Divider";
import IconButton from "@/ui/components/icon-button/IconButton";
import MenuIcon from "@/ui/icons/MenuIcon";
import styles from "@/ui/shell/control-centre/ControlCentre.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function ControlCentre() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div
      className={clsx(
        styles["control-centre"],
        menuOpened && styles["--opened"],
      )}
    >
      <div className={styles["control-centre__wrapper"]}>
        {/* Icon to open menu */}
        <div className={styles["control-centre__menu-button"]}>
          <IconButton
            onClick={() => setMenuOpened(!menuOpened)}
            className="!w-10"
          >
            <MenuIcon className="!w-7" />
          </IconButton>
        </div>

        {/* Logo */}
        <div className={styles["control-centre__logo"]}>
          <img
            alt="App icon"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-igor-9557f.appspot.com/o/favicons%2Flighteam.svg?alt=media"
          />
          <p>Igor Dantas</p>
          <Divider type="vertical" className="max-lg:hidden" />
        </div>

        {/* Menu */}
        {/* <div
        className={`text-white absolute lg:static left-1 top-11 transition-opacity duration-300 lg:!opacity-100 lg:!pointer-events-auto ${!menuOpened ? "opacity-0 pointer-events-none" : ""}`}
      >
        <Menu
          focusedApp={focusedApp}
          onMenuSelected={() => setMenuOpened(false)}
        />
        <div className="flex flex-col items-center lg:hidden px-1.5">
          <Divider />
          <IconButton
            icon="close"
            color="white"
            size="1.75rem"
            onClick={closeApp}
          />
        </div>
      </div>*/}

        <div className="flex-1"></div>

        {/*     <div className="items-center hidden lg:flex">
         Language selection
        <Divider type="vertical" />
        <button className="hover:bg-white/20 px-3 py-0.5 mr-0.5 rounded-sm font-bold text-white text-xs cursor-pointer">
          POR
        </button>
        <Divider type="vertical" />
      </div>*/}

        {/* Clock */}
        <Clock className={styles["control-centre__clock"]} />

        {/* App Controls */}
        {/*  {hasMaximizedApp && (
        <div id="appControls" className="hidden lg:flex items-center">
          <Divider type="vertical" />
          <WindowControl
            onMaximize={vm.restoreAppSize}
            onMinimize={vm.minimizeCurrentApp}
            onClose={vm.closeCurrentApp}
          />
        </div>
      )}*/}
      </div>
    </div>
  );
}
