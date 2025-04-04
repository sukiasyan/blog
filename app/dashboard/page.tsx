import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

export default async function Dashboard() {

  return (
      <div>
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-xl font-medium">Your Blog Article</h2>
          <Link className={buttonVariants()} href="/dashboard/create">Create Post</Link>
        </div>
      </div>
  )
}