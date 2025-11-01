"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
export default function NavBar(){
  const [open,setOpen]=useState(false);
  const nav=[{href:"/solutions",label:"Solutions"},{href:"/technology",label:"Technology"},{href:"/cases",label:"Case Studies"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];
  return (<header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
    <div className="container-xl py-3 flex items-center justify-between">
      <Link className="flex items-center gap-3" href="/"><Image src="/logo.png" alt="Kadmos Energy" width={44} height={44}/><span className="font-semibold text-slate-900">Kadmos Energy</span></Link>
      <nav className="hidden md:flex items-center gap-8">{nav.map(n=>(<Link key={n.href} href={n.href} className="text-slate-700 hover:text-kadmos-blue transition">{n.label}</Link>))}<Link href="/contact" className="px-4 py-2 rounded-xl bg-kadmos-blue text-white hover:opacity-90">Book a call</Link></nav>
      <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu"><Menu/></button>
    </div>
    {open&&(<div className="md:hidden border-t border-slate-200 bg-white"><div className="container-xl py-4 flex flex-col gap-4">{nav.map(n=>(<Link key={n.href} href={n.href} className="text-slate-700" onClick={()=>setOpen(false)}>{n.label}</Link>))}<Link href="/contact" className="px-4 py-2 rounded-xl bg-kadmos-blue text-white w-max" onClick={()=>setOpen(false)}>Book a call</Link></div></div>)}
  </header>);
}
