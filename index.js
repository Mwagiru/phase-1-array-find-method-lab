const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "N/A" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
]
superbowlWin = function(record){
    const result = record.find(record => record.result === "W")
    if(result=== "W"){
        return record.year
    }else{
        return undefined;
    }
}