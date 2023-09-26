import React, { FC, useEffect, useState } from "react";
import {
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineSetting,
} from "react-icons/ai";
import { ISetting } from "@/components/Workspace/Playground/Playground";
import SettingsModal from "@/components/Modals/SettingsModal/SettingsModal";

type PreferenceNavProps = {
  settings: ISetting;
  setSettings: React.Dispatch<React.SetStateAction<ISetting>>;
};
const PreferenceNav: FC<PreferenceNavProps> = ({ settings, setSettings }) => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const handleFullscreen = async () => {
    if (fullscreen) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
    setFullscreen((prevState) => !prevState);
  };

  useEffect(() => {
    function exitHandler() {
      if (!document.fullscreenElement) {
        setFullscreen(false);
        return;
      }
      setFullscreen(true);
    }

    if (document.addEventListener) {
      document.addEventListener("fullscreenchange", exitHandler);
      document.addEventListener("webkitfullscreenchange", exitHandler);
      document.addEventListener("mozfullscreenchange", exitHandler);
      document.addEventListener("MSFullscreenchange", exitHandler);
    }
  }, [fullscreen]);

  return (
    <div className="flex items-center justify-between bg-dark-layer-2 h-11 w-full">
      {/* Language Supported */}
      <div className="flex items-center text-white">
        <button className="ml-2 flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        {/* Settings */}
        <button
          className="preferenceBtn group"
          onClick={() => {
            setSettings((prevState) => ({
              ...prevState,
              settingsModalISOpen: !prevState.settingsModalISOpen,
            }));
          }}
        >
          <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
            <AiOutlineSetting />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>
        {/*FullScreen Support*/}
        <button className="preferenceBtn group" onClick={handleFullscreen}>
          <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
            {!fullscreen ? (
              <AiOutlineFullscreen />
            ) : (
              <AiOutlineFullscreenExit />
            )}
          </div>
          <div className="preferenceBtn-tooltip">Full Screen</div>
        </button>
      </div>
      {settings.settingsModalISOpen && (
        <SettingsModal settings={settings} setSettings={setSettings} />
      )}
    </div>
  );
};

export default PreferenceNav;
