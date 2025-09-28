import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size={"default"}> <Search /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Find Anything</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input id="name-1" name="name" placeholder="Search here ..." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Search</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
