import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeDollarSign,
  Bike,
  BookHeart,
  BriefcaseBusiness,
  Calendar,
  ClockIcon,
  Cpu,
  FlaskRound,
  HeartPulse,
  Scale,
} from "lucide-react";

const categories = [
  { name: "Technology", totalPosts: 10, icon: Cpu },
  { name: "Business", totalPosts: 5, icon: BriefcaseBusiness },
  { name: "Finance", totalPosts: 8, icon: BadgeDollarSign },
  { name: "Health", totalPosts: 12, icon: HeartPulse },
  { name: "Lifestyle", totalPosts: 15, icon: BookHeart },
  { name: "Politics", totalPosts: 20, icon: Scale },
  { name: "Science", totalPosts: 25, icon: FlaskRound },
  { name: "Sports", totalPosts: 30, icon: Bike },
];

const MainBlog = () => {
  return (
    <div className="flex flex-col gap-12 px-6 xl:px-0 py-10 lg:py-16 max-w-7xl mx-auto">
      {/* Sidebar Categories */}
      <aside className="sticky w-full sm:w-sm md:w-md lg:w-xl xl:max-w-10/12  mx-auto">
         <h3 className="text-3xl  font-semibold tracking-tight text-center py-2.5">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-4 mt-4 ">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="flex flex-col items-center justify-between gap-2 bg-muted p-3 rounded-md transition hover:bg-muted/70 dark:hover:bg-muted/40"
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
                <Badge className="px-2 rounded-full bg-foreground/10 text-foreground">
                  {category.totalPosts}
                </Badge>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[...Array(8)].map((_, i) => (
    <Card
      key={i}
      className="sm:items-center shadow-sm overflow-hidden rounded-md border border-border/40 hover:shadow-md transition"
    >
      {/* Thumbnail */}
      <div className="shrink-0 aspect-video sm:w-56 sm:aspect-square bg-muted rounded-lg" />

      {/* Blog Content */}
      <CardContent className="px-0 sm:px-6 py-4 flex flex-col">
        <div className="flex items-center gap-6">
          <Badge className="bg-primary/10 text-primary shadow-none">
            Technology
          </Badge>
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight hover:text-primary cursor-pointer">
          A beginner&apos;s guide to blockchain for engineers
        </h3>

        <p className="mt-2 text-muted-foreground line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          consequatur minus dicta accusantium quos, ratione suscipit id
          adipisci voluptatibus. Nulla sint repudiandae fugiat tenetur
          dolores.
        </p>

        <div className="mt-4 flex items-center gap-6 text-muted-foreground text-sm font-medium">
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4" /> 5 min read
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Nov 20, 2024
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

    </div>
  );
};

export default MainBlog;
