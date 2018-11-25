const datesarray = ["16/6/2013"];
const timearray = ["19:18:00"];
const cityArrayFile = require('./15-cities');
const cityArray = cityArrayFile.indiancities;
const Object = require("./object");
let obj = [], melafiObjectForColumn1 = [];
let mainObjects = [];
let mainObjectTable = [];
let BLANK = "blank";
let start = new Date();
let i, j, k, d;
let NOOFMELAFICPLANETS=3;
async function createObjects() {
    for (i = 0; i < cityArray.length; i++) {
        for (d = 0; d < datesarray.length; d++) {
            for (j = 0; j < timearray.length; j++) {
                obj.push({
                    city: cityArray[i],
                    date: datesarray[d],
                    time: timearray[j]
                })
            }
        }
    }
    for (i = 0; i < obj.length; i++) {
        mainObjects[i] = new Object(obj[i].city, obj[i].date, obj[i].time);
        try {
            mainObjectTable[i] = await mainObjects[i].scrapeTable().then((column) => {
                if (column == null)
                    return BLANK;
                else
                    return column;
            })
            process.stdout.write(">");
        } catch (error) {
            console.log(error);
        }
    }
    let count1;
    for (i = 0; i < mainObjectTable.length; i++) {
        if (mainObjectTable[i] != BLANK) {
            count1 = 0;
            for (j = 0; j < mainObjectTable[i][1].length; j++) {

                if (mainObjectTable[i][1][j].Planet === 'Ketu (Ke)' || mainObjectTable[i][1][j].Planet === 'Rahu (Ra)' || mainObjectTable[i][1][j].Planet === 'Sun (Su)' || mainObjectTable[i][1][j].Planet === 'Saturn (Sa)' || mainObjectTable[i][1][j].Planet === 'Mars (Ma)')
                    count1++;
                if (count1 == NOOFMELAFICPLANETS) {
                    melafiObjectForColumn1.push({
                        city:mainObjectTable[i][1][j].Place,
                        Date:mainObjectTable[i][1][j].Date,
                        Time:mainObjectTable[i][1][j].Time
                    })
                }
            }
            

        }


    }
    process.stdout.write("in column1");
    console.log(JSON.stringify(melafiObjectForColumn1, null, 2));


    end = new Date() - start;
    console.log(end);
}
createObjects()