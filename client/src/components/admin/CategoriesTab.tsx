import { useState } from "react";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
  type Category,
} from "../../store/api";
import Input from "../ui/Input";

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
        <Input
          label="Название"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />
        <Input
          label="Slug"
          value={form.slug}
          onChange={(v) => setForm({ ...form, slug: v })}
        />
        <Input
          label="Картинка (URL)"
          value={form.img}
          onChange={(v) => setForm({ ...form, img: v })}
        />
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
                <button
                  className="text-red-600"
                  onClick={() => deleteCategory(c._id)}
                >
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
export default CategoriesTab;
