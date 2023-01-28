export function timeFormat(value: number) {
  let formattedValue = value < 10 ? `0${value}` : value
  return String(formattedValue)
}

export function getTimeLeft(ending: string) {
  let startingDate = new Date()
  let endingDate = new Date(ending)
  let timeLeftMS = endingDate.getTime() - startingDate.getTime()
  if (timeLeftMS < 0) {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
    }
  }

  let newDate = new Date(timeLeftMS)
  return {
    hours: timeFormat(newDate.getHours()),
    minutes: timeFormat(newDate.getMinutes()),
    seconds: timeFormat(newDate.getSeconds()),
  }
}
