const { getAllLaunches, addNewLaunch, existLaunchWithId, abortLaunchById} = require('../../models/launches.model')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    
    const launch = req.body;
    if(!launch.mission || !launch.rocket|| !launch.target || !launch.launchDate) {
        return res.status(400).json({
            error:  'Missing required information',
        });
    }
    if (isNaN(Date.parse(launch.launchDate))) {
        return res.status(400).json({
            error: "Invalid Launch date"
        })
    }
    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    if(!existLaunchWithId(launchId)) {
        return res.status(404).json({
            error: 'Launch not found',
        });
    }
    const aborted = abortLaunchById(launchId)
    
    return res.status(200).json(aborted);
}
module.exports = {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch} 