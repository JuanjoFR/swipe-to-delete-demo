import * as React from "react";
import { Image, StyleSheet } from "react-native";
import Box from "./box";

type Props = {
  data: Array<{
    id: string;
    source: Array<{
      uri: string;
    }>;
  }>;
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    borderRadius: 50
  }
});

function AvatarsList({ data }: Props): JSX.Element {
  return (
    <Box
      flexDirection="row"
      height={20}
      // style={{ flex: 1, backgroundColor: "tomato" }}
    >
      {data.map(
        (item, index): JSX.Element => (
          <Image
            key={item.id}
            source={item.source}
            width={20}
            height={20}
            style={[
              styles.image,
              {
                left: index * 10,
                zIndex: data.length - index
              }
            ]}
          />
        )
      )}
    </Box>
  );
}

export default AvatarsList;
