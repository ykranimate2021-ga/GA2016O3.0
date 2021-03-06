// Core part of GoAnimate 2016: Offline
const RPC = require("discord-rpc");
require("./server");


// Loads env.json for Wrapper version and build number
const env = Object.assign(process.env,
	require('./env'));
// env.json variables
let version = env.WRAPPER_VER;
let build = env.WRAPPER_BLD;


// Discord rich presence
const rpc = new RPC.Client({
	transport: "ipc"
});
rpc.on("ready", () => {
	// Sets RPC activity
	rpc.setActivity({
		// state: "Video List",
		// disabled until automatic rpc status is done
		details: "Version " + version +", build " + build,
		startTimestamp: new Date(),
		largeImageKey: "icon",
		largeImageText: "GoAnimate 2016: Offline",
		smallImageKey: "GoAnimate 2016: Offline",
		smallImagetext: "GoAnimate 2016: Offline",
	});
	// Logs "Rich presence is on!" in the console
	console.log("Rich presence is on!")
});
// Connects RPC to app
rpc.login({
	clientId: "866340172874383370"
}).catch(
	console.log('RPC connection failed.')
);
