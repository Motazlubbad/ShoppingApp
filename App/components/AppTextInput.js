import React, {useState} from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Block, Text} from '../theme';
import {SIZES, COLORS} from '../theme/theme';
import {useTranslation} from 'react-i18next';
import MaskInput from 'react-native-mask-input';

const AppTextInput = ({
  marginTop = 0,
  onChange = () => {},
  title,
  noMargin = false,
  errors = [],
  isMasked = false,
  mask,
  ...otherProps
}) => {
  const [text, onChangeText] = useState(null);
  const {t} = useTranslation();

  return (
    <Block noflex marginHorizontal={noMargin ? 0 : SIZES.spacing32}>
      <Block
        marginTop={marginTop}
        noflex
        style={
          errors.length > 0 ? styles.inputContainerError : styles.inputContainer
        }>
        {isMasked ? (
          <MaskInput
            placeholder={title}
            style={styles.input}
            onChangeText={value => {
              onChangeText(value);
              onChange(value);
            }}
            value={text}
            autoCapitalize="none"
            {...otherProps}
            mask={mask}
            {...otherProps}
          />
        ) : (
          <TextInput
            placeholder={title}
            style={styles.input}
            onChangeText={value => {
              onChangeText(value);
              onChange(value);
            }}
            value={text}
            autoCapitalize="none"
            {...otherProps}
          />
        )}
      </Block>
      {Array.isArray(errors) ? (
        errors.map(error => (
          <Text marginTop size={12} color={COLORS.error}>
            {t(error)}
          </Text>
        ))
      ) : (
        <Text marginTop size={12} color={COLORS.error}>
          {t(errors)}
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
