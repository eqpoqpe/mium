import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { AuthProvider } from "./providers/AuthProvider";
import tokenWord from "./token-word";
import { AppearanceProvider } from "./providers/AppearanceProvider";

function initialAuthToken() {
  return localStorage.getItem(tokenWord.jwt) ?? "";
}

function App() {
  return (
    <AppearanceProvider>
      <AuthProvider initialFn={initialAuthToken}>
        <RouterProvider router={router} />
      </AuthProvider>
    </AppearanceProvider>
  );
}

export default App;