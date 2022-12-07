const useData = dataJson => {
    fetch(dataJson)
        .then(response => response.json())
        .then(data => {
            percentageChartGenerator(data)
            singleVote(data)
            tableGenerator(data)
        })
}