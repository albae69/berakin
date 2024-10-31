import supabase from '@/utils/supabase'
import { useEffect, useState } from 'react'
import { Message } from 'types'
import { useStore } from '@/store/store'
import { formatDate } from '@/utils/formatDate'

export function useMessage() {
  const store = useStore((state) => state)

  const [messages, setMessages] = useState<Message[]>([])

  const groupedByDate = <Record<string, Message[]>>{}

  for (let i = 0; i < messages.length; i++) {
    const current = messages[i]
    const date = formatDate(current.created_at)

    if (!groupedByDate[date]) {
      groupedByDate[date] = []
    }
    groupedByDate[date].push(current)
  }

  const data = Object.keys(groupedByDate).map((k) => {
    return groupedByDate[k]
  })

  async function getMessage() {
    const { data } = await supabase
      .from('messages')
      .select('*, users(name)')
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

  return { messages, sendMessage, data }
}
