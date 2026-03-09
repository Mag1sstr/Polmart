import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { logout } from "../../store/adminSlice";
import TabButton from "../ui/TabButton";
import ProductsTab from "./ProductsTab";
import CategoriesTab from "./CategoriesTab";
import NewsTab from "./NewsTab";
import GalleryTab from "./GalleryTab";

type Tab = "products" | "categories" | "news" | "gallery";

function AdminPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("products");
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Админ-панель</h1>
        <button
          className="border px-3 py-1 rounded hover:bg-white hover:text-black transition cursor-pointer"
          onClick={() => dispatch(logout())}
        >
          Выйти
        </button>
      </header>

      <div className="max-w-6xl mx-auto py-6 px-4">
        <div className="mb-4 flex gap-2">
          <TabButton
            label="Продукты"
            isActive={activeTab === "products"}
            onClick={() => setActiveTab("products")}
          />
          <TabButton
            label="Категории"
            isActive={activeTab === "categories"}
            onClick={() => setActiveTab("categories")}
          />
          <TabButton
            label="Новости"
            isActive={activeTab === "news"}
            onClick={() => setActiveTab("news")}
          />
          <TabButton
            label="Галерея"
            isActive={activeTab === "gallery"}
            onClick={() => setActiveTab("gallery")}
          />
        </div>

        {activeTab === "products" && <ProductsTab />}
        {activeTab === "categories" && <CategoriesTab />}
        {activeTab === "news" && <NewsTab />}
        {activeTab === "gallery" && <GalleryTab />}
      </div>
    </div>
  );
}

export default AdminPanel;
