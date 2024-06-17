import { DirectoryPointer, MenuContainer, TypeDropdown } from "./sidebar";

export default function SideNavigation() {
  return (
    <aside className="sidebar">
      <TypeDropdown />
      <DirectoryPointer />
      <MenuContainer />
    </aside>
  );
}
