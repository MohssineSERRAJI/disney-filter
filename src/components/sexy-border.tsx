import { cn } from '@/lib/utils'

export function SexyBorder({
  children,
  className,
  offset = 100,
  from = '#a855f7cc',
  via = '#da6cae',
  to = '#3778ff',
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  offset?: number
  from?: string
  via?: string
  to?: string
}) {
  return (
    <div
      className={cn(
        `relative flex overflow-hidden rounded-md p-[2px]`,
        className
      )}
    >
      <div className="relative z-10 w-full">{children}</div>
      <div
        style={{
          bottom: `-${offset}px`,
          left: `-${offset}px`,
          right: `-${offset}px`,
          top: `-${offset}px`,
        }}
        className={
          `absolute m-auto aspect-square animate-spin-slow rounded-full bg-gradient-to-r` +
          ` from-[${from}] via-[${via}] to-[${to}]`
        }
      />
    </div>
  )
}
