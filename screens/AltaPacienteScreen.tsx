import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import InputText from "../components/InputText";

export default class AltaPacienteScreen extends React.Component<any, any> {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alta de Pacientes</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.form}>
          <View style={styles.formItem}><InputText type='text' label='Nombre'/></View>
          <View style={styles.formItem}><InputText type='text' label='Apellido'/></View>
          <View style={styles.formItem}><InputText type='text' label='Documento'/></View>
          <View style={styles.formItem}><InputText type='text' label='Fecha de nacimiento' placeholder={'Dia/Mes/Año'}/></View>
          <View style={styles.formItem}><InputText type='textarea' label='Motivo de Consulta' maxlength={ 128 }/></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  form: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  formItem: {
    width: '50%'
  }
});
