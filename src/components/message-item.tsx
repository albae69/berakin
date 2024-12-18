import dayjs from 'dayjs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function MessageItem({
  name,
  message,
  created_at,
}: {
  name: string
  message: string
  created_at: string
}) {
  return (
    <div className='px-2 mb-2 rounded-md border shadow-sm'>
      <span className='text-[10px] font-medium'>{name ?? ''}</span>
      <p className='text-xs'>{message ?? ''}</p>
      <div className='flex justify-between items-center'>
        <div />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='text-[10px] text-right'>
              {dayjs(created_at ?? new Date()).format('HH:mm')}
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-xs'>
                {dayjs(created_at ?? new Date()).format('DD MMM YYYY HH:mm')}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
