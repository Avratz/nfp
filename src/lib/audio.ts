export function newAudio(src: string) {
  const audio = new Audio(src)
  audio.load()
  return audio
}
