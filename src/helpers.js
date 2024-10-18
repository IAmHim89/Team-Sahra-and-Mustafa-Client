let APIURL;
if (window.location.hostname.includes("localhost")) {
  APIURL = "http://localhost:8080";
} else if (
  window.location.hostname.includes(
    "https://team-sahra-and-mustafa-client.vercel.app"
  )
) {
  APIURL = "https://team-sahra-and-mustafa-server.vercel.app";
}

export default APIURL;
