// const fs = require('fs');


// const students = {
//     boys: [
//         { E_Num: "developer", group: 0 },
//         { E_Num: "E/21/005", group: 4 },
//         { E_Num: "E/21/006", group: 2 },
//         { E_Num: "E/21/007", group: 7 },
//         { E_Num: "E/21/009", group: 9 },
//         { E_Num: "E/21/017", group: 7 },
//         { E_Num: "E/21/024", group: 1 },
//         { E_Num: "E/21/031", group: 7 },
//         { E_Num: "E/21/036", group: 2 },
//         { E_Num: "E/21/039", group: 3 },
//         { E_Num: "E/21/045", group: 7 },
//         { E_Num: "E/21/049", group: 5 },
//         { E_Num: "E/21/050", group: 8 },
//         { E_Num: "E/21/054", group: 6 },
//         { E_Num: "E/21/055", group: 2 },
//         { E_Num: "E/21/065", group: 7 },
//         { E_Num: "E/21/067", group: 6 },
//         { E_Num: "E/21/077", group: 8 },
//         { E_Num: "E/21/087", group: 1 },
//         { E_Num: "E/21/124", group: 9 },
//         { E_Num: "E/21/130", group: 6 },
//         { E_Num: "E/21/137", group: 5 },
//         { E_Num: "E/21/138", group: 1 },
//         { E_Num: "E/21/141", group: 5 },
//         { E_Num: "E/21/148", group: 8 },
//         { E_Num: "E/21/152", group: 5 },
//         { E_Num: "E/21/156", group: 8 },
//         { E_Num: "E/21/157", group: 3 },
//         { E_Num: "E/21/188", group: 2 },
//         { E_Num: "E/21/198", group: 5 },
//         { E_Num: "E/21/200", group: 7 },
//         { E_Num: "E/21/214", group: 5 },
//         { E_Num: "E/21/217", group: 6 },
//         { E_Num: "E/21/220", group: 1 },
//         { E_Num: "E/21/226", group: 4 },
//         { E_Num: "E/21/231", group: 5 },
//         { E_Num: "E/21/245", group: 6 },
//         { E_Num: "E/21/253", group: 1 },
//         { E_Num: "E/21/254", group: 3 },
//         { E_Num: "E/21/269", group: 3 },
//         { E_Num: "E/21/277", group: 3 },
//         { E_Num: "E/21/283", group: 8 },
//         { E_Num: "E/21/287", group: 4 },
//         { E_Num: "E/21/292", group: 3 },
//         { E_Num: "E/21/325", group: 5 },
//         { E_Num: "E/21/328", group: 9 },
//         { E_Num: "E/21/335", group: 2 },
//         { E_Num: "E/21/336", group: 8 },
//         { E_Num: "E/21/339", group: 4 },
//         { E_Num: "E/21/342", group: 1 },
//         { E_Num: "E/21/350", group: 9 },
//         { E_Num: "E/21/353", group: 6 },
//         { E_Num: "E/21/356", group: 3 },
//         { E_Num: "E/21/361", group: 2 },
//         { E_Num: "E/21/371", group: 3 },
//         { E_Num: "E/21/386", group: 4 },
//         { E_Num: "E/21/391", group: 1 },
//         { E_Num: "E/21/395", group: 9 },
//         { E_Num: "E/21/407", group: 2 },
//         { E_Num: "E/21/410", group: 9 },
//         { E_Num: "E/21/412", group: 4 },
//         { E_Num: "E/21/413", group: 4 },
//         { E_Num: "E/21/415", group: 6 },
//         { E_Num: "E/21/417", group: 9 },
//         { E_Num: "E/21/428", group: 6 },
//         { E_Num: "E/21/433", group: 7 },
//         { E_Num: "E/21/442", group: 1 },
//         { E_Num: "E/21/444", group: 8 },
//         { E_Num: "E/21/452", group: 9 }
//     ],
//     girls: [
//         { E_Num: "E/21/019", group: 4 },
//         { E_Num: "E/21/052", group: 7 },
//         { E_Num: "E/21/068", group: 8 },
//         { E_Num: "E/21/096", group: 2 },
//         { E_Num: "E/21/106", group: 4 },
//         { E_Num: "E/21/113", group: 7 },
//         { E_Num: "E/21/126", group: 8 },
//         { E_Num: "E/21/127", group: 1 },
//         { E_Num: "E/21/140", group: 3 },
//         { E_Num: "E/21/180", group: 5 },
//         { E_Num: "E/21/193", group: 2 },
//         { E_Num: "E/21/196", group: 6 },
//         { E_Num: "E/21/206", group: 8 },
//         { E_Num: "E/21/229", group: 9 },
//         { E_Num: "E/21/289", group: 1 },
//         { E_Num: "E/21/302", group: 2 },
//         { E_Num: "E/21/362", group: 3 },
//         { E_Num: "E/21/363", group: 4 },
//         { E_Num: "E/21/372", group: 5 },
//         { E_Num: "E/21/375", group: 6 },
//         { E_Num: "E/21/416", group: 7 },
//         { E_Num: "E/21/453", group: 8 }
//     ]
// };


// // Convert the students object to JSON
// const studentsJSON = JSON.stringify(students);

// // Encode the JSON string to Base64
// const encodedStudents = Buffer.from(studentsJSON).toString('base64');

// // Write the encoded content to a file
// fs.writeFileSync('encodedStudents.js', `export const encodedStudents = '${encodedStudents}';`);

// console.log("Encoded content saved to 'encodedStudents.js'");
