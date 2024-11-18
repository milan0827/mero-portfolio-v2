import { createContext, ReactNode, SetStateAction, useState } from "react";

type SidebarState = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
  isProjectSidebarOpen: boolean;
  setIsProjectSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarState>({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
  isProjectSidebarOpen: false,
  setIsProjectSidebarOpen: () => {},
});

function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProjectSidebarOpen, setIsProjectSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isProjectSidebarOpen,
        setIsProjectSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarContext, SidebarProvider };
