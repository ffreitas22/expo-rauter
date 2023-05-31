import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Principal",
        }}
      />
      <Drawer.Screen
        name="telaA"
        options={{
          drawerLabel: "Tela A",
          title: "Bem-vindo Tela A",
        }}
      />
      <Drawer.Screen
        name="telaB"
        options={{
          drawerLabel: "Tela B",
          title: "Bem-vindo Tela B",
        }}
      />
    </Drawer>
  );
}