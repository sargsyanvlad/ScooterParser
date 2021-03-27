import ScooterParsing  from './src/ScooterParsing'

const parser = new ScooterParsing();

const res = parser.GetDeviceInformations(`
+IN,DeviceInfo,860861040012977,86,5600,2021-01-14T15:05:10,0035$
AABBAA
+IN,DeviceInfo,860861040012977,34,5612,2021-01-14T18:30:10,0036$
CCDDEE
+IN,DeviceInfo,860861040012977,3,5623,2021-01-14T23:59:10,0037$
FFGGHH`);


console.log(res);
