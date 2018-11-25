const scraper = require('./scraper');
class Object {

    constructor(city, date, time) {
        this.city = city;
        this.date = date;
        this.time = time;


    }
    async scrapeTable() {
        return await scraper.searchByCityDateTime(this.city, this.date, this.time).then((data) => {
            if (data != null) {
                let column1 = [], column2 = [], column3 = [], column4 = [], column5 = [], column6 = [], column7 = [], i, j, k, num;
                const Nakshatra = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashirsha", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati", "Abhijit"];
                i = 0;

                for (k = 0; k < 180; k = k + 12) {
                    i++;
                    num = 0;
                    for (j = 0; j < Nakshatra.length; j++) {
                        if (data[k + 2] == Nakshatra[j]) {
                            num = j + 1;
                        }

                    }
                    if (num == 3 || num == 16 || num == 17 || num == 2) {
                        column1.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }
                    if (num == 4 || num == 15 || num == 18 || num == 1) {
                        column2.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }
                    if (num == 5 || num == 14 || num == 19 || num == 28) {
                        column3.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }
                    if (num == 6 || num == 13 || num == 20 || num == 27) {
                        column4.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }
                    if (num == 7 || num == 12 || num == 21 || num == 26) {
                        column5.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }
                    if (num == 8 || num == 11 || num == 22 || num == 25) {
                        column6.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }
                    if (num == 9 || num == 10 || num == 23 || num == 24) {
                        column7.push({
                            row: i,
                            Planet: data[k + 0],
                            Degrees: data[k + 1],
                            Nakshatra: data[k + 2],
                            Padam: data[k + 3],
                            Nakshatra_Lord: data[k + 4],
                            Full_Degrees: data[k + 5],
                            Place_id: data[k + 6],
                            Place: data[k + 7],
                            Date: data[k + 8],
                            Time: data[k + 9],
                            State: data[k + 10],
                            Country: data[k + 11],
                            Nakshatra_number: num
                        });
                    }

                }
                const columns=[column1,column2,column3,column4,column5,column6,column7];
                return columns;
            }
        });

    }
}
module.exports = Object;