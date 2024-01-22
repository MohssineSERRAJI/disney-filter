import { Button } from '@/components/ui/button'
import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { CardSkeleton } from '@/components/shared/card-skeleton'

export default function DashboardLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="..." text="........">
        <Button>Fake button</Button>
      </DashboardHeader>
      <div className="divide-border-200 divide-y rounded-md border">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
