"use client";
import { ModalProps } from "@/interfaces/dashboard";
import { useState, useEffect } from "react";
import ModalBackdrop from "./modalBackdrop";

export default function FilterData({ state }: ModalProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => setIsActive((prev) => !prev);
  useEffect(() => {
    setIsActive(state);
  }, [state, setIsActive]);
  const onScreen = isActive ? "active" : "";

  return (
    <div>
      <div className={`app-modal app-modal_edit ${onScreen}`}>Filter Items</div>
      <ModalBackdrop state={isActive} handler={handleClick} />
    </div>
  );
}
