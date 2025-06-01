import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Skeleton className="h-10 w-64 mx-auto mb-12" />

      <div className="space-y-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border border-amber-100 rounded-lg overflow-hidden">
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          ))}
      </div>
    </div>
  )
}
