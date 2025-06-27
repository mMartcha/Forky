import auth from "@react-native-firebase/auth";
import { Button, Linking, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function App() {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
        
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.version}>Versão: 1.0.0</Text>
      <Text style={styles.sectionTitle}>Desenvolvedores:</Text>
      <Text style={styles.text}>• Marcello Stefenon Filho</Text>
      <Text style={styles.text}>• Guilherme Almeida Franciosi</Text>
      <Text style={styles.text}>• Vinifius Fauth Artuso</Text>
      <Text style={styles.text}>• Henrique Tres Terra</Text>


      <Text style={styles.sectionTitle}>Contato:</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@culinariaforky.com')}>
        <Text style={[styles.text, styles.link]}>contato@culinariaforky.com</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/mMartcha/Forky')}>
        <Text style={[styles.text, styles.link]}>GitHub do Projeto</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Descrição:</Text>
      <Text style={styles.text}>
        O Forky é um aplicativo de culinária desenvolvido para facilitar o acesso a receitas, compartilhar experiências e conectar amantes da gastronomia. Aqui você encontra receitas, pode adicionar suas próprias criações e interagir com outros usuários!
      </Text>

      <Text style={styles.sectionTitle}>Ajuda:</Text>
      <Text style={styles.text}>
        Para dúvidas, sugestões ou suporte, entre em contato pelo e-mail acima.
      </Text>
        <Button title="Logout" onPress={() => auth().signOut()} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ff6347",
    textAlign: "center",
  },
  version: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 4,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#444",
    marginBottom: 4,
  },
  link: {
    color: "#ff6347",
    textDecorationLine: "underline",
  }
});