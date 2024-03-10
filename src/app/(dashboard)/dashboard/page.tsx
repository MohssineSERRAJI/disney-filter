import { redirect } from 'next/navigation'

import { DashboardHeader } from '@/components/dashboard/header'
import { DashboardShell } from '@/components/dashboard/shell'
import { EmptyPlaceholder } from '@/components/shared/empty-placeholder'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/session'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Panel" text="Create and manage content.">
        <Button>Fake button</Button>
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any content yet. Start creating content.
          </EmptyPlaceholder.Description>
          <Button variant="outline">Fake button</Button>
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
