import { Header } from "./Header";

export function Layout({children}) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-8" >

      <Header />
     {children}

    </div>
  )
}