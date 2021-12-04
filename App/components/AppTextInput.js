import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Block} from '../theme';
import {SIZES, COLORS} from '../theme/theme';

const AppTextInput = ({
  marginTop = 0,
  onChange = () => {},
  title,
  ...otherProps
}) => {
  const [text, onChangeText] = useState(null);

  return (
    <Block marginTop={marginTop} noflex style={styles.inputContainer}>
      <TextInput
        placeholder={title}
        style={styles.input}
        onChangeText={value => {
          onChangeText(value);
          onChange(value);
        }}
        value={text}
        {...otherProps}
      />
    </Block>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: SIZES.spacing32,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },
  input: {
    height: SIZES.inputHeight,
    fontSize: RFValue(SIZES.font, Dimensions.get('window').height),
    margin: SIZES.spacing6,
  },
});
