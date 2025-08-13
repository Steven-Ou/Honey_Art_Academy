"use client";
// Make sure there is NO "use client" at the top of this file.

import { Studio } from './Studio'

export const dynamic = 'force-static'

// Re-export metadata and viewport from next-sanity/studio
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}