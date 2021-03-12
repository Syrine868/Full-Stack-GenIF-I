const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE),
  LoadingContainer: LoadingContainer
})(MapContainer)
