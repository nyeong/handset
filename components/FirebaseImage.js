import React from "react";
import { Image, View, ActivityIndicator } from "react-native";
import firebase from "firebase";
import "firebase/firebase-storage";

firebase.initializeApp({
  apiKey: "AIzaSyC8hnwaYftmPlJ0Vh5WLdwrUuQ97Udjid8",
  storageBucket: "handset-27e90.appspot.com"
});

export default class extends React.Component {
  state = {
    loading: true,
    mounted: true,
    success: false,
    url: ""
  };

  componentDidMount() {
    this.setState({ isMounted: true });
    this.getLoadHttpUrl();
  }

  async getLoadHttpUrl() {
    if (!this.state.mounted) return;
    const ref = firebase.storage().ref(this.props.image_name);
    ref
      .getDownloadURL()
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          url: data,
          loading: false,
          success: true
        }));
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.success)
      return <Image {...this.props} source={{ uri: this.state.url }} />;
    else
      return (
        <View
          {...this.props}
          style={[
            { alignItems: "center", justifyContent: "center" },
            this.props.style
          ]}
        >
          <ActivityIndicator />
        </View>
      );
  }
}
