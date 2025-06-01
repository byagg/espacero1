import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Skeleton className="h-10 w-64 mx-auto mb-12" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Skeleton className="h-[300px] w-full mb-8" />
          <Skeleton className="h-[300px] w-full" />
        </div>

        <div>
          <Skeleton className="h-[500px] w-full" />
        </div>
      </div>
    </div>
  )
}
