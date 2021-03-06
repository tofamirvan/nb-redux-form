import React from 'react';
import {
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  formMessage: {
    marginLeft: 15,
    color: '#d9534e',
  },
  labelHelper: {
    color: "#575757"
  }
});

const NBTextInput = ({
  input,
  label,
  secureTextEntry,
  keyboardType,
  onSubmit,
  getRef,
  disabled,
  autoFocus,
  returnKeyType,
  autoCapitalize,
  fixedLabel,
  inlineLabel,
  floatingLabel,
  stackedLabel,
  style,
  prefix,
  placeholder,
  maxLength,
  meta: { touched, error },
}) => (
    <View style={styles.container}>
      <Text style={styles.labelHelper}>{prefix && (label)}</Text>
      <Item
        fixedLabel={fixedLabel}
        inlineLabel={inlineLabel}
        floatingLabel={floatingLabel}
        stackedLabel={stackedLabel}
        disabled
        error={!!(touched && error)}>
        <Label style={
          prefix &&
          { paddingBottom: 3 }
        }>
          {
            prefix ?
              prefix
              : label ?
                error ?
                  `${label} *`
                  : label
                : null
          }
        </Label>
        <Input
          {...input}
          value={input.value.toString()}
          disabled={disabled || false}
          getRef={c => (typeof (getRef) === 'function' ? getRef(c) : null)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onSubmitEditing={onSubmit}
          onChangeText={input.onChange}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          maxLength={maxLength}
          style={
            disabled ? { color: 'grey', style } : style
          }
        />
      </Item>
      <Text style={styles.formMessage} note>
        {touched && error ? error : ''}
      </Text>
    </View>
  );

NBTextInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  onSubmit: PropTypes.func,
  getRef: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  returnKeyType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  maxLength: PropTypes.number
};

NBTextInput.defaultProps = {
  label: null,
  secureTextEntry: false,
  keyboardType: 'default',
  onSubmit: null,
  getRef: null,
  disabled: false,
  autoFocus: false,
  returnKeyType: 'done',
  autoCapitalize: 'none',
  prefix: ''
};

export default NBTextInput;