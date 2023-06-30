"use client"
import Card from '@/components/Card'
import { poesias } from '@/data/mock'
import { Poesia } from '@/types/Poesia'
import Image from 'next/image'
import { List } from 'postcss/lib/list'
import { useEffect, useState } from 'react'

export default function Home() {

  const [list, setList] = useState<Poesia[]>([])

  useEffect(() => {
    setList(poesias)
  }, [])

  return (
    <div className="tw-bg-gray-400">

      <header className='tw-bg-gray-800'>
        <h1>Água de Coco e Poesia</h1>
      </header>

      <main className='tw-container tw-mx-auto tw-bg-[#131836] tw-p-4'>
        <div>Poesias</div>
        <ul className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-2'>
          {list.map((poesia, index) => (
            <pre key={poesia.id} style={{fontFamily: "sans-serif"}} className='tw-text-sm tw-h-52 tw-overflow-y-clip tw-border-2 tw-border-gray-300 tw-rounded-tl-lg tw-rounded-br-lg'><Card id={poesia.id} title={poesia.title} body={poesia.body} /></pre>
            ))}
        </ul>

        <div>
          <div>Título</div>
        </div>
      </main>


      <input type="color" name="color" id="color" />


    </div>
  )
}
