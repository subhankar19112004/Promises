function download(url) {
    return new Promise(function exec(res, rej) {
        console.log("started downloading data from ", url);
        setTimeout(function () {
            let data = "some data from " + url;
            console.log("downloaded data from", url);
            res(data);
        }, 3000);
    });
}

function writeFile(data, fileName) {
    return new Promise(function exec(res, rej) {
        console.log("started writing ", data, "to file");
        setTimeout(function () {
            console.log("wrote data to", fileName);
            let uploadStatus = "success";
            res(uploadStatus);
        }, 2000);
    });
}

function upload(fileName, url) {
    return new Promise(function exec(res, rej) {
        console.log("started uploading data from", fileName, "to", url);
        setTimeout(function () {
            console.log("uploaded is done");
            let uploadStatus = "success";
            res(uploadStatus);
        }, 3000);
    });
}

//using .then() chaining here but there are various ways to write

download("https://example.com")
    .then(function (value) {
        console.log("Downloaded data is", value);
        return writeFile(value, "output.txt");
    })
    .then(function g(value) {
        console.log("file written", value)
        return upload(value, "https://example.com/upload");
    })

    .then(function (value) {
        console.log("upload is done", value);
    })