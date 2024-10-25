import supabase from '@/utils/supabase'
import { useEffect, useState } from 'react'
import { Message } from 'types'
import { useStore } from '@/store/store'

export function useMessage() {
  const store = useStore((state) => state)

  const [messages, setMessages] = useState<Message[]>([])

  async function getMessage() {
    const { data } = await supabase
      .from('messages')
      .select('*, users(*)')
      .order('created_at', { ascending: true })
    setMessages(data!)
  }

  async function sendMessage(message: string) {
    const res = await supabase.from('messages').insert([
      {
        user_id: store.user?.id,
        message: message,
      },
    ])
    console.log('res send message', res)
  }

  // subscribe to realtime event
  supabase
    .channel('chat')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'messages' },
      async (payload) => {
        console.log('Change received!', payload)
        await getMessage()
      }
    )
    .subscribe()

  useEffect(() => {
    ;(async () => {
      await getMessage()
    })()
  }, [])

  return { messages, sendMessage }
}
