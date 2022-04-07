import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { TailSpin } from "react-loader-spinner";
const App = lazy(() => import("./App"));
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <TailSpin color="#00BDD3" height={80} width={80} />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
