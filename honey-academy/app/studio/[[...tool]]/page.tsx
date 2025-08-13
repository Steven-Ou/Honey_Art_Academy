// NO "use client" in this file

import { metadata, viewport } from 'next-sanity/studio'
import { Studio } from './Studio'

export const dynamic = 'force-static'

// This is a server component, so it CAN export metadata
export { metadata, viewport }

export default function StudioPage() {
  return <Studio />
}