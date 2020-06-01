import { mimeDB } from "./mime-db.ts";

export const mimeLookup = (fileExtension: string): string | undefined => {
  return Object.entries(mimeDB).find(([mime, value]) => {
    const extensions = (value as any).extensions ?? []
    return extensions.some((extension: string) => fileExtension.endsWith(extension))
  })?.[0]
}