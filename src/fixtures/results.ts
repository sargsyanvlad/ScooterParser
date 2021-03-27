export const inputResult = {
  result: [
    {
      imei: '860861040012977',
      batteryLevel: '86 %',
      odometer: '5600 km',
      time: '2021-01-14T15:05:10'
    },
    {
      imei: '860861040012977',
      batteryLevel: '34 %',
      odometer: '5612 km',
      time: '2021-01-14T18:30:10'
    },
    {
      imei: '860861040012977',
      batteryLevel: '3 %',
      odometer: '5623 km',
      time: '2021-01-14T23:59:10'
    }
  ]
};

export const inputWithErrResult = {
  result: [
    {
      imei: '860861040012977',
      batteryLevel: '86 %',
      odometer: '5600 km',
      time: '2021-01-14T15:05:10'
    },
    {
      NoBattery: '5',
      ECUFailure: '7',
      imei: '860861040012977',
      time: '2021-01-14T15:06:18'
    },
    {
      ECUFailure: '7',
      imei: '860861040012977',
      time: '2021-01-14T15:09:18'
    },
    {
      imei: '860861040012977',
      batteryLevel: '34 %',
      odometer: '5612 km',
      time: '2021-01-14T18:30:10'
    },
    {
      NoBattery: '5',
      ECUFailure: '7',
      Reboot: '8',
      IotError: '10',
      imei: '860861040012977',
      time: '2021-01-14T19:05:10'
    },
    {
      imei: '860861040012977',
      batteryLevel: '3 %',
      odometer: '5623 km',
      time: '2021-01-14T23:59:10'
    }
  ]
}
