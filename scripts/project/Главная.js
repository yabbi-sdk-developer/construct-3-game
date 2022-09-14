
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	let item = document.createElement("script");
	item.type = "text/javascript";
	item.src = "//ssp.bestssp.com/s.js?p=192";
	let body = document.querySelector('body')
	body.append(item);
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	
}
