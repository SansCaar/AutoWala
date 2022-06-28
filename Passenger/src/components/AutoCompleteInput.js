import { View, TextInput } from "react-native";
import { Menu } from "react-native-paper";
import React, { useState } from "react";

const Autocomplete = ({
  value,
  setValue,
  label,
  data,
  containerStyle,
  onChange: origOnChange,
  icon = "bike",
  style = {},
  menuStyle = {},
  onSuggestionPress,
  ...props
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (text) => {
    return data?.filter((val) => {
      val = val.display_name;
      return val?.toLowerCase()?.indexOf(text?.toLowerCase()) > -1;
    });
  };
  return (
    <View style={[containerStyle, {position:"relative"}]}>
      <TextInput
        onFocus={() => {   
          if (value?.length === 2) {
            setMenuVisible(true);
          }
        }}
        onBlur={() => setMenuVisible(false)}
        style={style}
        onChangeText={(text) => {
          origOnChange(text);
          if (text && text.length > 0) {
            setFilteredData(filterData(text));
          } else if (text && text.length === 0) {
            setFilteredData(data);
          }
          setMenuVisible(true);
          setValue((prev) => ({ ...prev, name: text }));
        }}
        value={value?.name}
        {...props}
      />
      {menuVisible && filteredData && (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderWidth: 2,
            flexDirection: "column",
            borderColor: "grey",
            position:"absolute",
            top:46,
            zIndex:2,
            width:'100%'
          }}
        >
          {filteredData.map((datum, i) => (
            <Menu.Item
              key={i}
              style={[{ width: "100%" }, menuStyle]}
              icon={icon}
              onPress={() => {
                console.log(datum);
                onSuggestionPress(datum);
                setValue((prev) => ({ ...prev, name: value }));
                setMenuVisible(false);
              }}
              title={datum?.display_name}
              noOFLines={1}
              fontSize="16"
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Autocomplete;
