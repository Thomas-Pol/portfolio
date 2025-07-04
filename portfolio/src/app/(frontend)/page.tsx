// app/your-path/page.tsx (example)

export const dynamic = "force-dynamic";

import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import { getAboutMe } from "../../actions/About";

import ProjectsScroll from "@/components/ProjectsScroll";

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const aboutMe = await getAboutMe(payload)
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div>
      <ProjectsScroll />
    </div>
  )
}
