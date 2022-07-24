import React from "react";
import { ArchiveIcon, LightBlub } from "../../assets/icon";
import Button from "../atoms/Button";

function SideBar({ className, onChangeContentType, type }) {
  return (
    <div
      className={`header flex justify-between px-6 py-4 bg-tertiary-color ${className}`}
    >
      <h1 className="app-name text-4xl font-bold">Note App</h1>
      <div className="menu mt-9">
        <Button
          icon={<LightBlub className={"h-8 w-8"} title="Content" />}
          title="Content"
          className={
            type !== "archive"
              ? "text-quaternary-color mb-4"
              : "text-base-color mb-4"
          }
          onClick={() => onChangeContentType("content")}
        />
        <Button
          icon={<ArchiveIcon className={"h-8 w-8"} title="Archived" />}
          title="Archived"
          className={
            type === "archive"
              ? "text-quaternary-color mb-4"
              : "text-base-color mb-4"
          }
          onClick={() => onChangeContentType("archive")}
        />
      </div>
    </div>
  );
}

export default SideBar;
