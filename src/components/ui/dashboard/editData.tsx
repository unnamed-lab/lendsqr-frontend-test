"use client";
import {
  EyeOutlineIcon,
  UserCancelOutlineIcon,
  UserCheckedOutlineIcon,
} from "@/components/icons/basic";
import { ModalProps } from "@/interfaces/dashboard";
import { IconProps } from "@/interfaces/icons";
import { EditDataItemProps, TUserId } from "@/types/dashboard";
import { useState, useEffect } from "react";

export default function EditData({
  id,
  state,
}: ModalProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    setIsActive(state);
  }, [state, setIsActive]);
  const onScreen = isActive ? "active" : "";

  if (typeof id === "undefined") return;
  return (
    <div className={`app-modal app-modal_edit ${onScreen}`}>
      <EditDataItem
        icon={(props?: IconProps) => <EyeOutlineIcon {...props} />}
        id={id}
        text={"View Detail"}
      />
      <EditDataItem
        icon={(props?: IconProps) => <UserCancelOutlineIcon {...props} />}
        id={id}
        text={"Backlist User"}
      />
      <EditDataItem
        icon={(props?: IconProps) => <UserCheckedOutlineIcon {...props} />}
        id={id}
        text={"Activate User"}
      />
    </div>
  );
}

function EditDataItem({ icon, text, id }: EditDataItemProps) {
  const handleClick = () => {
    console.log("Item Id: ", id);
  };
  return (
    <button className="modal-edit-button" onClick={handleClick}>
      {icon({ width: 24, height: 24 })}
      {text}
    </button>
  );
}
