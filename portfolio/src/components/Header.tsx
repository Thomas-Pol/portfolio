export const dynamic = "force-dynamic";

import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'


import { getAboutMe } from "./../actions/About";


export async function Header() {

    const headers = await getHeaders()
      const payloadConfig = await config
      const payload = await getPayload({ config: payloadConfig })
      const { user } = await payload.auth({ headers })
    
      const aboutMe = await getAboutMe(payload);
    
      const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

    return (
        <header className="w-screen h-screen bg-[#191C22]">
            <div className="w-screen h-screen flex flex-col">
                <div className="w-full h-1/8 flex bg-[#191C22] justify-between"> 
                    <div className="w-1/10 h-full text-[#FAD7A0] flex justify-center items-center">
                        <h1 className="font-bold text-4xl">TPL</h1>
                    </div>
                    <div className="w-2/10 h-full text-[#FAD7A0] flex justify-center items-center">
                        <button className="w-1/2 h-4/10 rounded-2xl shadow-inner shadow-[#444b5a]/100 bg-[#444b5a]">Contact</button>
                    </div>
                </div>
                <div className="w-full h-7/8">
                    {aboutMe.naam}
                    <p>{aboutMe.bio}</p>
                    <div className="w-full h-1/2 flex justify-center items-center">
                        <Image
                            src={aboutMe.profilePicture.url}
                            alt="Avatar"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </div>
                </div>
                
            
            </div>
            <svg className="waves"
                viewBox="0 24 150 28 "
                preserveAspectRatio="none">
                <defs>
                <path id="gentle-wave"
                d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z" />
                </defs>
                <g className="wave1">
                <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" opacity={0.2}/>  
                </g>
                 <g className="wave2">
                <use xlinkHref="#gentle-wave" x="50" y="9" fill="#fff" opacity={0.5}/>  
                </g>
                 <g className="wave3">
                <use xlinkHref="#gentle-wave" x="50" y="3" fill="#fff" opacity={0.8}/>  
                </g>
                <g className="wave4">
                <use xlinkHref="#gentle-wave" x="50" y="2" fill="#fff"/>  
                </g>
                
            </svg>
        </header>
    );
}