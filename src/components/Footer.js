import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()}&copy; &nbsp;All Rights Reserved</span>
            <div className='flex items-center'>
                Developed By &nbsp;<span className='text-dark underline underline-offset-2'>MaduFrank</span>
            </div>
            <Link href='/'>Talk to me</Link>
        </Layout>
    </footer>
  )
}

export default Footer