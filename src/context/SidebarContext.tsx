import { FC, ReactNode, createContext, useState } from "react";
import { SidebarContextType } from "../utils/types";

export const SidebarContext = createContext<SidebarContextType | undefined>(
	undefined
);

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

	return (
		<SidebarContext.Provider
			value={{ isSidebarCollapsed, setSidebarCollapsed }}>
			{children}
		</SidebarContext.Provider>
	);
};
