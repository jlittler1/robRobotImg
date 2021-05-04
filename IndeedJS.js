function uipath_loadScrapeRPAMarketWatchlist() {
    let process_name = "RPAMarketWatchlist_Scrape";
    let arguments = {};
    const robot = UiPathRobot.init();
    robot.getProcesses().then(function (results) {
        if (results.length === 0) {
            showError("Robot not connected to Orchestrator or no processes are available")
        }

	let process = results.find(e => e.name.includes(process_name))

        if (process) {
            console.log("Process is available")
        } else {
            showError("Process not found!")
        }

}
