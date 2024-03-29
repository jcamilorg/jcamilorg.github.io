import Link from "next/link";

export default function Header() {
  const handleOnClick = (event: any) => {
    const menu = document.querySelector("#menu");
    menu?.classList.toggle("hidden");
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">@jcamilorg</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleOnClick}
          id="btn-header"
          className="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="menu"
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden "
      >
        <div className="lg:flex-grow text-center">
          <Link
            href="/"
            className="px-10 block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
          >
            Inicio
          </Link>
          <Link
            href="/proyectos"
            className="px-10 block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
          >
            Proyectos
          </Link>
          <Link
            href="/contacto"
            className="px-10 block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4"
          >
            Contacto
          </Link>
        </div>
        <div>
          <a
            href="mailto:juancamilorg64@gmail.com"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0"
          >
            Email ✉
          </a>
        </div>
      </div>
    </nav>
  );
}
