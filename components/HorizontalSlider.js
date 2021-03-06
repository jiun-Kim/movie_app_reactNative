import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";

export default ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginBottom: 40 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 30 }}
    >
      {children}
    </ScrollView>
  </>
);
