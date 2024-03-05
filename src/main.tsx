import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext.tsx";
import { ThemeProvider } from "@ui5/webcomponents-react";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Loading from "./components/Loading.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
	<ErrorBoundary fallback={<Loading />}>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<BrowserRouter>
					<SidebarProvider>
						<App />
					</SidebarProvider>
				</BrowserRouter>
			</ThemeProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</ErrorBoundary>
	</StrictMode>
);
