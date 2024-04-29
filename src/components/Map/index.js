import { GoogleMap, Marker, useLoadScript } from "../../../node_modules/@react-google-maps/api";

const Map = () => {
    const libraries = ["places"];

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFn64sgCcfalskP4E55PP2CoEE8qo1a8Y',
        libraries,
    });

    const center = {
        lat: 42.21808015246766, // default latitude
        lng: -88.3173911825845, // default longitude
    };

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    const mapContainerStyle = {
        width: '40vw',
        height: '40vh',
        minWidth: '600px',
        borderRadius: '15px'
    };

    return(
        <>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={19}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </>
    );
}

export default Map;
