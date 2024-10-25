import Header from '@/components/header'
import { MessageItem } from '@/components/message-item'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useMessage } from '@/hooks/use-message'
import { useStore } from '@/store/store'
import useIsLogin from '@/utils/useIsLogin'
import { createFileRoute } from '@tanstack/react-router'
import { Send } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Message } from 'types'

export const Route = createFileRoute('/chat')({
  component: Chat,
})

function Chat() {
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const store = useStore((state) => state)

  const { isLogin } = useIsLogin()
  const { user } = store
  const { messages, sendMessage } = useMessage()

  useEffect(() => {
    if (!isLogin) {
      window.location.replace('/')
      return
    }
  }, [])

  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <>
      <Header />

      <section className='p-4 h-[calc(100vh-5rem)] relative'>
        <h3 className='mb-2 text-sm'>
          Halo <strong>{user?.name}</strong>, gabut? chatting bareng yang lain
          aja disini!
        </h3>

        <div className='h-[84%] mb-4 p-2 border overflow-y-scroll rounded-md'>
          {messages?.map((item: Message) => (
            <MessageItem
              key={item.id}
              name={item.users!.name}
              created_at={item.created_at}
              message={item.message}
            />
          ))}
          <div ref={messagesRef} />
        </div>
        <form
          className='flex items-center gap-2 absolute left-0 bottom-0 right-0 px-4'
          onSubmit={(e) => {
            e.preventDefault()
            if (inputRef.current != null) {
              if (inputRef?.current!.value != '') {
                sendMessage(inputRef?.current!.value)
              }
              inputRef.current.value = ''
            }
          }}
        >
          <Input ref={inputRef} className='w-full' placeholder='Message' />
          <Button className='w-[50px]' type='submit'>
            <Send />
          </Button>
        </form>
      </section>
    </>
  )
}
