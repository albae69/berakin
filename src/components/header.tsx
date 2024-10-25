import { Link } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useIsLogin from '@/utils/useIsLogin'

export default function Header() {
  const { isLogin } = useIsLogin()

  return (
    <header className='flex items-center justify-between p-4'>
      <Link to={isLogin ? '/home' : '/'}>
        <h1 className='text-2xl font-bold text-black'>Berakin 💩</h1>
      </Link>

      {isLogin && (
        <DropdownMenu>
          <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link to='/chat'>
              <DropdownMenuItem className='cursor-pointer'>
                Chat
              </DropdownMenuItem>
            </Link>
            <Link to='/explore'>
              <DropdownMenuItem className='cursor-pointer'>
                Eksplore
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => {
                localStorage.clear()
                window.location.replace('/')
              }}
            >
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  )
}
