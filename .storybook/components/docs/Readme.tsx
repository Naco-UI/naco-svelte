import React, { useMemo } from 'react'
import { Markdown } from '@storybook/addon-docs'
import readmeContents from '../../../README.md?raw'

declare let NACO_VERSION: string

const versionBadgeRe = /\[!\[version\](.*)\)/
const githubTagPrefix = 'https://github.com/Naco-UI/svelte-naco/releases/tag'
const nonTagBadges = ['main', 'preview', 'dev']

function getTagBadge(version: string, link: boolean): string {
  const badge = `<span class="version-badge">${version}</span>`
  if (link) {
    return `<a class="version-link" href="${githubTagPrefix}/${version}">${badge}</a>`
  } else {
    return badge
  }
}

export function Readme() {
  const content = useMemo(() => {
    const version = NACO_VERSION
    let badgeReplacement
    if (nonTagBadges.includes(version)) {
      badgeReplacement = getTagBadge(version, false)
    } else {
      badgeReplacement = getTagBadge(version, true)
    }
    return readmeContents.replace(versionBadgeRe, badgeReplacement)
  }, [])
  return <Markdown>{content}</Markdown>
}
