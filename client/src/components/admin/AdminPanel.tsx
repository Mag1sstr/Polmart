import { useState } from "react";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useGetGalleryQuery,
  useCreateGalleryItemMutation,
  useUpdateGalleryItemMutation,
  useDeleteGalleryItemMutation,
  
} from "../../store/api";
import type {
  Product,
  Category,
  NewsItem,
  GalleryItem,
} from "../../store/api";
import { useAppDispatch } from "../../hooks";
import { logout } from "../../store/adminSlice";

type Tab = "products" | "categories" | "news" | "gallery";

function AdminPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("products");
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Админ-панель</h1>
        <button
          className="border px-3 py-1 rounded hover:bg-white hover:text-black transition"
          onClick={() => dispatch(logout())}
        >
          Выйти
        </button>
      </header>

      <div className="max-w-6xl mx-auto py-6 px-4">
        <div className="mb-4 flex gap-2">
          <TabButton label="Продукты" isActive={activeTab === "products"} onClick={() => setActiveTab("products")} />
          <TabButton
            label="Категории"
            isActive={activeTab === "categories"}
            onClick={() => setActiveTab("categories")}
          />
          <TabButton label="Новости" isActive={activeTab === "news"} onClick={() => setActiveTab("news")} />
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

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`px-4 py-2 rounded-t ${
        isActive ? "bg-white border border-b-0" : "bg-slate-200 hover:bg-slate-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ProductsTab() {
  const { data: products } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const emptyProduct: Omit<Product, "_id"> = {
    price: 0,
    class: 0,
    thickness: 0,
    size: "",
    package: 0,
    moistureResistance: "",
    material: "",
    chamfer: "",
    collection: "",
    manufacturer: "",
    country: "",
    pattern: "",
    isNew: false,
    boardLengthMm: 0,
    boardWidthMm: 0,
    areaM2: 0,
    pricePer: "",
    category: "",
  };

  const [form, setForm] = useState<Omit<Product, "_id">>(emptyProduct);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (field: keyof Omit<Product, "_id">, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]:
        typeof prev[field] === "number"
          ? Number(value)
          : typeof prev[field] === "boolean"
            ? Boolean(value)
            : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateProduct({ id: editingId, data: form }).unwrap();
    } else {
      await createProduct(form).unwrap();
    }
    setForm(emptyProduct);
    setEditingId(null);
  };

  const startEdit = (p: Product) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...rest } = p;
    setForm(rest);
    setEditingId(p._id);
  };

  return (
    <div className="bg-white border rounded-b p-4 space-y-6">
      <h2 className="text-lg font-semibold">Продукты</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-sm">
        <Input
          label="Цена"
          type="number"
          value={form.price}
          onChange={(v) => handleChange("price", v)}
        />
        <Input
          label="Класс"
          type="number"
          value={form.class}
          onChange={(v) => handleChange("class", v)}
        />
        <Input
          label="Толщина"
          type="number"
          value={form.thickness}
          onChange={(v) => handleChange("thickness", v)}
        />
        <Input label="Размер" value={form.size} onChange={(v) => handleChange("size", v)} />
        <Input
          label="Упаковка"
          type="number"
          value={form.package}
          onChange={(v) => handleChange("package", v)}
        />
        <Input
          label="Влагостойкость"
          value={form.moistureResistance}
          onChange={(v) => handleChange("moistureResistance", v)}
        />
        <Input
          label="Материал"
          value={form.material}
          onChange={(v) => handleChange("material", v)}
        />
        <Input label="Фаска" value={form.chamfer} onChange={(v) => handleChange("chamfer", v)} />
        <Input
          label="Коллекция"
          value={form.collection}
          onChange={(v) => handleChange("collection", v)}
        />
        <Input
          label="Производитель"
          value={form.manufacturer}
          onChange={(v) => handleChange("manufacturer", v)}
        />
        <Input
          label="Страна"
          value={form.country}
          onChange={(v) => handleChange("country", v)}
        />
        <Input
          label="Рисунок"
          value={form.pattern}
          onChange={(v) => handleChange("pattern", v)}
        />
        <Input
          label="Длина доски (мм)"
          type="number"
          value={form.boardLengthMm}
          onChange={(v) => handleChange("boardLengthMm", v)}
        />
        <Input
          label="Ширина доски (мм)"
          type="number"
          value={form.boardWidthMm}
          onChange={(v) => handleChange("boardWidthMm", v)}
        />
        <Input
          label="Метраж (м2)"
          type="number"
          value={form.areaM2}
          onChange={(v) => handleChange("areaM2", v)}
        />
        <Input
          label="Цена за"
          value={form.pricePer}
          onChange={(v) => handleChange("pricePer", v)}
        />
        <Input
          label="Категория (id, опционально)"
          value={form.category || ""}
          onChange={(v) => handleChange("category", v)}
        />
        <div className="flex items-center gap-2">
          <label className="text-sm">Новинка</label>
          <input
            type="checkbox"
            checked={form.isNew}
            onChange={(e) => handleChange("isNew", e.target.checked)}
          />
        </div>
        <div className="col-span-2 flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-(--prime) text-white px-4 py-2 rounded hover:opacity-80"
          >
            {editingId ? "Сохранить изменения" : "Создать продукт"}
          </button>
          {editingId && (
            <button
              type="button"
              className="px-4 py-2 rounded border"
              onClick={() => {
                setEditingId(null);
                setForm(emptyProduct);
              }}
            >
              Отмена
            </button>
          )}
        </div>
      </form>

      <div className="space-y-2">
        <h3 className="font-semibold">Список продуктов</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead className="bg-slate-100">
              <tr>
                <th className="border px-2 py-1">Название (рисунок)</th>
                <th className="border px-2 py-1">Цена</th>
                <th className="border px-2 py-1">Класс</th>
                <th className="border px-2 py-1">Размер</th>
                <th className="border px-2 py-1">Действия</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((p) => (
                <tr key={p._id}>
                  <td className="border px-2 py-1">{p.pattern}</td>
                  <td className="border px-2 py-1">{p.price}</td>
                  <td className="border px-2 py-1">{p.class}</td>
                  <td className="border px-2 py-1">{p.size}</td>
                  <td className="border px-2 py-1 space-x-2">
                    <button
                      className="text-blue-600"
                      onClick={() => startEdit(p)}
                    >
                      Редактировать
                    </button>
                    <button
                      className="text-red-600"
                      onClick={() => deleteProduct(p._id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CategoriesTab() {
  const { data: categories } = useGetCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const empty: Omit<Category, "_id"> = { name: "", slug: "", img: "" };
  const [form, setForm] = useState<Omit<Category, "_id">>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateCategory({ id: editingId, data: form }).unwrap();
    } else {
      await createCategory(form).unwrap();
    }
    setForm(empty);
    setEditingId(null);
  };

  const startEdit = (c: Category) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...rest } = c;
    setForm(rest);
    setEditingId(c._id);
  };

  return (
    <div className="bg-white border rounded-b p-4 space-y-6">
      <h2 className="text-lg font-semibold">Категории</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 text-sm">
        <Input label="Название" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
        <Input label="Slug" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} />
        <Input label="Картинка (URL)" value={form.img} onChange={(v) => setForm({ ...form, img: v })} />
        <div className="col-span-3 flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-(--prime) text-white px-4 py-2 rounded hover:opacity-80"
          >
            {editingId ? "Сохранить изменения" : "Создать категорию"}
          </button>
          {editingId && (
            <button
              type="button"
              className="px-4 py-2 rounded border"
              onClick={() => {
                setEditingId(null);
                setForm(empty);
              }}
            >
              Отмена
            </button>
          )}
        </div>
      </form>

      <div className="space-y-2">
        <h3 className="font-semibold">Список категорий</h3>
        <ul className="space-y-1 text-sm">
          {categories?.map((c) => (
            <li
              key={c._id}
              className="flex items-center justify-between border px-2 py-1 rounded"
            >
              <span>
                {c.name} ({c.slug})
              </span>
              <span className="space-x-2">
                <button className="text-blue-600" onClick={() => startEdit(c)}>
                  Редактировать
                </button>
                <button className="text-red-600" onClick={() => deleteCategory(c._id)}>
                  Удалить
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NewsTab() {
  const { data: news } = useGetNewsQuery();
  const [createNews] = useCreateNewsMutation();
  const [updateNews] = useUpdateNewsMutation();
  const [deleteNews] = useDeleteNewsMutation();

  const empty: Omit<NewsItem, "_id"> = {
    img: "",
    publishedAt: new Date().toISOString().slice(0, 10),
    title: "",
    text: "",
  };
  const [form, setForm] = useState<Omit<NewsItem, "_id">>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await (editingId
      ? updateNews({ id: editingId, data: form }).unwrap()
      : createNews(form).unwrap());
    setForm(empty);
    setEditingId(null);
  };

  const startEdit = (n: NewsItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...rest } = n;
    setForm(rest);
    setEditingId(n._id);
  };

  return (
    <div className="bg-white border rounded-b p-4 space-y-6">
      <h2 className="text-lg font-semibold">Новости</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3 text-sm">
        <Input label="Заголовок" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
        <Input
          label="Дата публикации"
          type="date"
          value={form.publishedAt?.slice(0, 10)}
          onChange={(v) => setForm({ ...form, publishedAt: v })}
        />
        <Input label="Картинка (URL)" value={form.img} onChange={(v) => setForm({ ...form, img: v })} />
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Текст</label>
          <textarea
            className="w-full border rounded px-2 py-1 h-24"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
        </div>
        <div className="col-span-2 flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-(--prime) text-white px-4 py-2 rounded hover:opacity-80"
          >
            {editingId ? "Сохранить изменения" : "Создать новость"}
          </button>
          {editingId && (
            <button
              type="button"
              className="px-4 py-2 rounded border"
              onClick={() => {
                setEditingId(null);
                setForm(empty);
              }}
            >
              Отмена
            </button>
          )}
        </div>
      </form>

      <div className="space-y-2">
        <h3 className="font-semibold">Список новостей</h3>
        <ul className="space-y-1 text-sm">
          {news?.map((n) => (
            <li
              key={n._id}
              className="flex items-center justify-between border px-2 py-1 rounded"
            >
              <div>
                <div className="font-medium">{n.title}</div>
                <div className="text-xs text-slate-500">
                  {new Date(n.publishedAt).toLocaleDateString()}
                </div>
              </div>
              <span className="space-x-2">
                <button className="text-blue-600" onClick={() => startEdit(n)}>
                  Редактировать
                </button>
                <button className="text-red-600" onClick={() => deleteNews(n._id)}>
                  Удалить
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GalleryTab() {
  const { data: items } = useGetGalleryQuery();
  const [createItem] = useCreateGalleryItemMutation();
  const [updateItem] = useUpdateGalleryItemMutation();
  const [deleteItem] = useDeleteGalleryItemMutation();

  const empty: Omit<GalleryItem, "_id"> = {
    img: "",
    title: "",
    date: new Date().toISOString().slice(0, 10),
  };
  const [form, setForm] = useState<Omit<GalleryItem, "_id">>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await (editingId
      ? updateItem({ id: editingId, data: form }).unwrap()
      : createItem(form).unwrap());
    setForm(empty);
    setEditingId(null);
  };

  const startEdit = (g: GalleryItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...rest } = g;
    setForm(rest);
    setEditingId(g._id);
  };

  return (
    <div className="bg-white border rounded-b p-4 space-y-6">
      <h2 className="text-lg font-semibold">Галерея</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 text-sm">
        <Input label="Заголовок" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
        <Input label="Картинка (URL)" value={form.img} onChange={(v) => setForm({ ...form, img: v })} />
        <Input
          label="Дата"
          type="date"
          value={form.date?.slice(0, 10)}
          onChange={(v) => setForm({ ...form, date: v })}
        />
        <div className="col-span-3 flex gap-2 mt-2">
          <button
            type="submit"
            className="bg-(--prime) text-white px-4 py-2 rounded hover:opacity-80"
          >
            {editingId ? "Сохранить изменения" : "Создать элемент"}
          </button>
          {editingId && (
            <button
              type="button"
              className="px-4 py-2 rounded border"
              onClick={() => {
                setEditingId(null);
                setForm(empty);
              }}
            >
              Отмена
            </button>
          )}
        </div>
      </form>

      <div className="space-y-2">
        <h3 className="font-semibold">Список</h3>
        <ul className="space-y-1 text-sm">
          {items?.map((g) => (
            <li
              key={g._id}
              className="flex items-center justify-between border px-2 py-1 rounded"
            >
              <div>
                <div className="font-medium">{g.title}</div>
                <div className="text-xs text-slate-500">
                  {new Date(g.date).toLocaleDateString()}
                </div>
              </div>
              <span className="space-x-2">
                <button className="text-blue-600" onClick={() => startEdit(g)}>
                  Редактировать
                </button>
                <button className="text-red-600" onClick={() => deleteItem(g._id)}>
                  Удалить
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-medium">{label}</label>
      <input
        className="w-full border rounded px-2 py-1 text-sm"
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default AdminPanel;

