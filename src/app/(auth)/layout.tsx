'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [{
  name :"Register",
  href:"/register"
},
{
  name :"Login",
  href:"/login"
},
{
  name :"Forgot Password",
  href:"/forgotpassword"
}

]

export const AuthLayout = ({children} : {children:React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <div>
      { navLinks.map(link => {
       const isActive = pathname === link.href || (pathname.startsWith(link.href) && pathname !== '/') 
     return <Link className={`mx-2 ${isActive ? "font-bold  text-black" : "font-normal text-blue-600"}`} href={link.href}>{link.name}</Link>
      })}
      {children}
    </div>
  )
}

export default AuthLayout
