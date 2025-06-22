import Image from "next/image";
import Index from "./pages/Index";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <Index />
      <ToastContainer />
    </div>
  );
}
