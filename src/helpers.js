let APIURL = "https://team-sahra-and-mustafa-server.vercel.app";
if (window.location.hostname.includes("localhost")) {
  APIURL = "http://localhost:8080";
} else if (window.location.hostname.includes("team-sahra-and-mustafa-client")) {
  APIURL = "https://team-sahra-and-mustafa-server.vercel.app";
}

export default APIURL;
