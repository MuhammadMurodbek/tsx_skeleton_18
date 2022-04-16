import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// const onClick= (e) => {
// console.log(e)
// }
const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAUbRHtu3k_fg3jDGk_qAatE5jA4bC_ndE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ width:'100%', height: `100%` }} />,
    containerElement: <div style={{width:'100%', height: `100%` }} />,
    mapElement: <div style={{width:'580px', height: `320px` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props:any) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));
export default MyMapComponent
// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
