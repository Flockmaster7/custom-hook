interface EventType {
  [key: string]: FunctionType[]
}

type FunctionType = (...args: any[]) => void | any

export default function useEvent() {
  class MyEvent {
    private events: EventType

    constructor() {
      this.events = {}
    }

    public on(type: string, ...args: FunctionType[]) {
      if (this.events.hasOwnProperty(type)) {
        this.events[type].concat([...args])
      } else {
        this.events[type] = [...args]
      }
      return () => {
        args.forEach((fn) => {
          this.off(type, fn)
        })
      }
    }

    public off(type: string, fn: FunctionType) {
      if (!this.events.hasOwnProperty(type)) return
      const targetIndex = this.events[type].findIndex(
        (item: any) => item === fn
      )
      this.events[type].splice(targetIndex, 1)
    }

    public emit(type: string, ...args: any[]) {
      if (!this.events.hasOwnProperty(type)) return
      this.events[type].forEach((fn: FunctionType) => {
        fn(...args)
      })
    }
  }

  return new MyEvent()
}
