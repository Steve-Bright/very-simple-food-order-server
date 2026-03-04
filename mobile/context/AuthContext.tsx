import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

interface AuthContextType {
  token: string | null;
  role: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  role: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedToken = await SecureStore.getItemAsync("token");
    const storedRole = await SecureStore.getItemAsync("role");

    if (storedToken && storedRole) {
      setToken(storedToken);
      setRole(storedRole);

      if (storedRole === "admin") {
        router.replace("../admin/home");
      } else {
        router.replace("../user/home");
      }
    } else {
      router.replace("/login");
    }
  };

  const login = async (username: string, password: string) => {
    const response = await fetch(
      "http://192.168.0.245:12345/foodsystem/api/v1/account/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (data.success) {
      const token = data.data.token;
      const role = data.data.account.role;

      await SecureStore.setItemAsync("token", token);
      await SecureStore.setItemAsync("role", role);

      setToken(token);
      setRole(role);

      if (role === "admin") {
        router.replace("../admin/home");
      } else {
        router.replace("../user/home");
      }
    } else {
      alert("Login failed");
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("role");

    setToken(null);
    setRole(null);

    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};