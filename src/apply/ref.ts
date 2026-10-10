import { APPLY } from '../i18n/locale'

export const MAX_REF_LENGTH = 120

/** A short, human-readable source label such as UC or Alianza Emprende. */
export function normalizeRef(value: string | undefined): string | undefined {
  const ref = value?.trim().replace(/\s+/g, ' ').slice(0, MAX_REF_LENGTH).trim()
  return ref || undefined
}

export function refFromSearch(search: string): string | undefined {
  return normalizeRef(new URLSearchParams(search).get('ref') ?? undefined)
}

export function applyHref(search: string): string {
  return pathWithRef(APPLY, refFromSearch(search))
}

export function pathWithRef(path: string, value: string | undefined): string {
  const ref = normalizeRef(value)
  return ref ? `${path}?${new URLSearchParams({ ref })}` : path
}

/** Keep the edited field and URL aligned without dropping other query parameters. */
export function urlWithRef(href: string, value: string | undefined): string {
  const url = new URL(href)
  const ref = normalizeRef(value)
  if (ref) url.searchParams.set('ref', ref)
  else url.searchParams.delete('ref')
  return url.toString()
}
