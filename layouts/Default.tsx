import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Default({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-slate-200">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
