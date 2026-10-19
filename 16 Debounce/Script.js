let timer;

function searchData() {
    clearTimeout(timer);

    timer = setTimeout(() => {
        console.log("Searching...");
    }, 500);
}