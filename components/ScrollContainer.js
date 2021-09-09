import React, { useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";

const ScrollContainer = ({
  refreshFn,
  loading,
  children,
  contentContainerStyle,
}) => {
  const [refresh, setRefresh] = useState(false);
  const onRefresh = async () => {
    setRefresh(true);
    await refreshFn();
    setRefresh(false);
  };
  return (
    <ScrollView
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
      }}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refresh}
          tintColor={"white"}
          enabled={false}
        />
      }
      {...contentContainerStyle}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </ScrollView>
  );
};

export default ScrollContainer;
