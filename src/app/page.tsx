import Index from "./pages/Index";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Index />
      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{
          background: "rgba(12, 18, 36, 0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(34, 211, 238, 0.35)",
          color: "#dfe7ff",
          borderRadius: "14px",
        }}
      />
    </>
  );
}
