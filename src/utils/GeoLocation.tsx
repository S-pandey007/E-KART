import * as Location from "expo-location";
import { useState } from "react";
import { Alert } from "react-native";

export const useCurrentLocation = () => {
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrentAddress = async () => {
    try {
      setLoading(true);
      setError(null);

      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Location permission is needed to fetch address"
        );
        setError("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;
      setCoords({ latitude, longitude });

     
      const addressArray = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressArray.length > 0) {
        const a = addressArray[0];

        const formattedAddress = {
          street: a.street || a.name || "",
          city: a.city || a.subregion || "",
          district: a.district || "",
          state: a.region || "",
          country: a.country || "",
          pinCode: a.postalCode || "",
          fullAddress: `${a.street || a.name || ""}, ${
            a.city || a.subregion || ""
          }, ${a.region || ""} - ${a.postalCode || ""}`,
        };

        setAddress(formattedAddress);
        return formattedAddress;
      }
    } catch (err) {
      console.error("Location error:", err);
      setError("Failed to fetch address");
    } finally {
      setLoading(false);
    }
  };

  return {
    coords,
    address,
    loading,
    error,
    getCurrentAddress,
  };
};
