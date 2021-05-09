import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Text, View} from "./Themed";

interface InputProps {
  type: string;
  label: string;
  value?: any;
  disabled?: boolean;
  placeholder?: string;
  maxlength?: number;
}

interface InputState {
  value: any;
  disabled: boolean;
  label: string;
  type: string;
  placeholder: string;
  maxlength: number;
}

export default class InputText extends React.Component<InputProps, InputState> {
  // Define props like angular class? maybe?
  constructor(props: InputProps) {
    const { type, label } = props;
    let { placeholder, value, disabled, maxlength } = props;
    // defaulting here, need to check if there is a proper way to do this
    placeholder = placeholder ? placeholder : '';
    disabled = !!disabled;
    value = value ? value : null;
    maxlength = maxlength ? maxlength : 32;
    // Always pass props
    super(props);
    this.state = { value , disabled, label, type, placeholder, maxlength };

    this.onChange = this.onChange.bind(this);
  }

  // React life cycle -> afterViewInit
  componentDidMount() {  }
  // React life cycle -> onDestroy
  componentWillUnmount() {  }

  onChange(event: any) {
    // Dont know what this event is
    this.setState({ value: event.target.value , disabled: event.target.disabled })
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    //TODO: Check textinput documentation
    // https://reactnative.dev/docs/textinput
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{ this.props.label }</Text>
        <View style={styles.input}>
          <input
            hidden={ this.state.type === 'textarea'}
            type={ this.props.type }
            value={ this.state.value }
            onChange={ this.onChange }
            disabled={ this.state.disabled }
            placeholder={ this.state.placeholder }
            maxLength={ this.state.maxlength }
          />

          <textarea
            hidden={ this.state.type !== 'textarea'}
            value={ this.state.value }
            onChange={ this.onChange }
            disabled={ this.state.disabled }
            placeholder={ this.state.placeholder }
            style={{ resize: 'none' }}
            maxLength={ this.state.maxlength }
          />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  label: {
    fontSize: 12
  },
  input: {
    width: 150
  }
});
