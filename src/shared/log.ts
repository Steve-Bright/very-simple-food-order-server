// export async function createLogFile() {
//     try {
//     const file = await open("access.log", "wx");
//     await file.write("Hello world\n");
//     await file.close();
//     } catch (err) {
//     if (err.code === "EEXIST") {
//         console.log("File already exists");
//     } else {
//         throw err;
//     }
//     }
// }