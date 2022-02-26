class dataEntry {
    constructor(header, data) {
    for (let i = 0; i < header.length; i++) {
      this[header[i]] = data[i];
    }
  }
}

function splitDataIntoArrayOfObjs(dataArray, header) {
  let outData = [];
  for (let entry of dataArray) {
    Logger.log(entry);
    let dataLine = new dataEntry(header, entry);
    outData.push(dataLine);
  }
  return outData;
}

function turnArrayOfObjsIntoData(objArray) {
  let keys = [];
  for (let key in objArray[0]) {
    Logger.log(key);
    keys.push(key);
  }

  let outData = [];
  for (let entry of objArray) {
    let singleEntry = [];
    for (let key of keys) {
      singleEntry.push(entry[key]);
    }
    outData.push(singleEntry);
  }
  return outData;
}

function checkForAndAddCommit() {
  let worksheet = SpreadsheetApp.getActiveSpreadsheet();

  let sheet = worksheet.getSheetByName("commitLog");

  let baseData = sheet.getDataRange().getValues();
  Logger.log(baseData);

  let headers = baseData.shift();

  let objArray = splitDataIntoArrayOfObjs(baseData, headers);

  let commits = [];
  for (let entry of objArray) {
    commits.push(entry["commit_sha"]);
  }

  if (commits.includes(GITHUB_DATA.commit_sha)) {
    Logger.log("Commit already there");
  } else {
    objArray.push(GITHUB_DATA);
  }

  Logger.log(turnArrayOfObjsIntoData(objArray));
}
