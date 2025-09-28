
import { SearchBar } from "@/components/ui/searchbar"
import Logo from "../components/ui/Logo"
import MainMenu from "../components/ui/MainMenu"
import { Button } from "../components/ui/button"
import { ModeToggle } from "../components/ui/mode-toggle"

const Navbar = () => {
  return (
     <div className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border-b border-amber-700/50 dark:border-slate-700/70 fixed top-0 inset-x-0 h-20 z-50">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
           <Logo />
              <MainMenu/>
          <div className="flex items-center gap-3">

              <SearchBar />
              
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              Sign In
            </Button>
          
           <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
