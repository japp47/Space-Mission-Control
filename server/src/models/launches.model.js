const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Zeta',
    rocket: 'Falcon 9',
    launchDate: new Date('December 30, 2030'),
    target: 'Mars',
    customer: ['Japp', 'Nasa'],
    upcoming: true,
    success: true

};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(launch.flightNumber, Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Jappreet', 'NASA'],
        flightNumber: latestFlightNumber,

    }));
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;   
    return aborted;

}

module.exports = {
    existLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById
}