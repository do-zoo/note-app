import React from "react";
import { ArchiveIcon, CloseIcon, IconMenu, LightBlub } from "../../assets/icon";
import Button, { ButtonIcon } from "../atoms/Button";

function SideBar({
  className,
  onChangeContentType,
  type,
  isSideBarOpen,
  onClickSideBar,
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 min-h-screen px-2 md:px-6 py-4 bg-tertiary-color w-auto ${className}`}
    >
      <div
        className={`top flex justify-between relative w-full ${
          isSideBarOpen && "pt-6"
        }`}
      >
        <div
          className={`app-name ${isSideBarOpen ? "pr-8" : "md:block hidden"}`}
        >
          <h1 className="text-4xl font-bold">Note App</h1>
        </div>

        {isSideBarOpen ? (
          <ButtonIcon
            icon={<CloseIcon className={"h-6 w-6"} title="Close" />}
            className={
              "absolute -right-1 -top-3 text-quaternary-color mb-4 px-2 py-2 md:px-4 md:py-2 md:hidden"
            }
            onClick={onClickSideBar}
          />
        ) : (
          <ButtonIcon
            icon={<IconMenu className={"h-8 w-8"} title="Menu" />}
            className={
              "text-quaternary-color mb-4 px-2 py-2 md:px-4 md:py-2 md:hidden"
            }
            onClick={onClickSideBar}
          />
        )}
      </div>
      <div className="menu mt-9">
        <Button
          icon={<LightBlub className={"h-8 w-8"} title="Content" />}
          title="Content"
          className={
            type !== "archive"
              ? "text-quaternary-color mb-4 px-2 py-2 md:px-4 md:py-2"
              : "text-base-color mb-4 px-2 py-2 md:px-4 md:py-2"
          }
          mdHidden={!isSideBarOpen}
          onClick={() => onChangeContentType("unarchive")}
        />
        <Button
          icon={<ArchiveIcon className={"h-8 w-8"} title="Archived" />}
          title="Archived"
          className={
            type === "archive"
              ? "text-quaternary-color mb-4 px-2 py-2 md:px-4 md:py-2"
              : "text-base-color mb-4 px-2 py-2 md:px-4 md:py-2"
          }
          mdHidden={!isSideBarOpen}
          onClick={() => onChangeContentType("archive")}
        />
      </div>
    </div>
  );
}

export default SideBar;
