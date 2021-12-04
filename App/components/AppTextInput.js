import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Block, Text} from '../theme';
import {SIZES, COLORS} from '../theme/theme';

const AppTextInput = ({
  marginTop = 0,
  onChange = () => {},
  title,
  errors = [],
  ...otherProps
}) => {
  const [text, onChangeText] = useState(null);

  return (
    <Block noflex marginHorizontal={SIZES.spacing32}>
      <Block
        marginTop={marginTop}
        noflex
        style={
          errors.length > 0 ? styles.inputContainerError : styles.inputContainer
        }>
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
      {Array.isArray(errors) ? (
        errors.map(error => (
          <Text marginTop size={12} color={COLORS.error}>
            {error}
          </Text>
        ))
      ) : (
        <Text marginTop size={12} color={COLORS.error}>
          {errors}
        </Text>
      )}
    </Block>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },
  inputContainerError: {
    borderWidth: 1,
    borderColor: COLORS.error,
    borderRadius: SIZES.radius,
  },
  input: {
    height: SIZES.inputHeight,
    fontSize: RFValue(SIZES.font, Dimensions.get('window').height),
    margin: SIZES.spacing6,
  },
});
