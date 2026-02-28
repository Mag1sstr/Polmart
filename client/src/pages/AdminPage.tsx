import { useState } from "react";
import { useCheckAdminMutation } from "../store/api";
import { useAppSelector } from "../hooks";
import AdminPanel from "../components/admin/AdminPanel";

function AdminPage() {
  const isAuthenticated = useAppSelector((state) => state.admin.isAuthenticated);
  const [checkAdmin, { isLoading, error }] = useCheckAdminMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await checkAdmin({ username, password }).unwrap();
    } catch {
      // ошибка покажется через error
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4"
        >
          <h1 className="text-2xl font-semibold text-center">Вход в админ-панель</h1>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Логин</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Пароль</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {error && (
            // @ts-expect-error rtk-query error shape
            <p className="text-red-600 text-sm">{error?.data?.message || "Неверные данные"}</p>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-(--prime) text-white py-2 rounded hover:opacity-80 disabled:opacity-60"
          >
            {isLoading ? "Проверка..." : "Войти"}
          </button>
        </form>
      </div>
    );
  }

  return <AdminPanel />;
}

export default AdminPage;

