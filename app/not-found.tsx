import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className={cn("flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-2")}>
      <h2 className={cn("text-2xl font-semibold")}>Not Found</h2>
      <p className={cn("text-muted-foreground")}>Could not find requested resource</p>
    </div>
  )
}
