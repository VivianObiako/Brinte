import React from 'react'
import Card from './common/Card'
import { CARDS } from '@/utils/constants/variables'
import SectionHeader from './shared/SectionHeader'

const ResourcesSection = () => {
  return (
    <section className='w-full bg-surface-active py-16 md:py-[128px]'>
        <div className="brite_wrapper">
            <SectionHeader 
                title='Helpful resources'
                description='Find helpful tools, tips, and materials from our community, help center, and docs.'
            />
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <Card
                    {...CARDS[0]}
                    className='bg-purple-400 hover:bg-purple-500'
                />
                <div className='flex flex-col gap-4 w-full items-center'>
                    <Card
                        {...CARDS[1]}
                        className='bg-orange-400 hover:bg-orange-500'
                    />
                    <Card
                        {...CARDS[2]}
                        className='bg-surface-bgInvert hover:bg-tertiary-dim'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ResourcesSection