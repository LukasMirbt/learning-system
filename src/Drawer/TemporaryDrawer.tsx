import React, { FunctionComponent } from "react";
import MUITemporaryDrawer from "@material-ui/core/Drawer";
import { useRecoilState, atom } from "recoil";
import { DrawerComponent } from "./Drawer";

export const isDrawerOpenState = atom({
  key: "isDrawerOpen",
  default: false,
});

const TemporaryDrawer: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useRecoilState(isDrawerOpenState);

  return (
    <MUITemporaryDrawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      {DrawerComponent}
    </MUITemporaryDrawer>
  );
};

export default TemporaryDrawer;
