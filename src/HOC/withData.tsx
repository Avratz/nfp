import { ComponentType } from 'react'

type Request = () => Promise<any>

function getData(requests: Request[]) {
  return Promise.all(requests.map((request) => request()))
}

export type WithDataProps = {
  requests: Request[]
} & Record<string, any>

export function withData<T extends WithDataProps>(
  Component: ComponentType<Omit<T, 'requests'>>,
) {
  return async function WithDataComponent({
    requests,
    ...props
  }: Omit<T, 'data'>) {
    const data = await getData(requests)

    return <Component {...(props as T)} data={data} />
  }
}
