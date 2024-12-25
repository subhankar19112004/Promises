function download(url, callback) {
    console.log("Download from", url);
    setTimeout(() => {
        console.log("Download is done...");
        let downloadedData = "some data";
        callback?.(downloadedData);
    }, 3000);
}
function writeFile(data, fileName, callback) {
    //filename tells the name of the file to be created in which data will be written
    setTimeout(() => {
        console.log("writting to file", fileName, "is done");
        let status = "success";
        callback?.(status);
    }, 2000);
}
function upload(fileName, url, callback) {
    //fileName tells the name of the file to be uploaded
    console.log("uploading file", fileName, "to", url);
    setTimeout(() => {
        console.log("upload is done");
        let uploadStatus = "success";
        callback?.(uploadStatus);
    }, 3000);
}
function process(){
    download("https://example.com", (data)=>{
        writeFile(data, "file.txt", (status)=>{
            upload("file.txt", "https://example.com", (uploadStatus)=>{
                console.log("All done....");
            });
        });
    });
}
process();
//this is the example of a callbackhell