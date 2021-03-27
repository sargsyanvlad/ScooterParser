export namespace iScooter {
  export interface Out {
    imei: string
    batteryLevel: string
    odometer: string
    time: string
  }
  export interface Result {
    result: iScooter.BuildMatchRes
  }

  export interface BuildMatch {
    imei: string
    time: string
    [key: string]: any
  }

  export interface BuildMatchRes extends Array<BuildMatch>{}

}
