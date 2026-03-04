import { useState } from "react";
import {
  useCreateGalleryItemMutation,
  useDeleteGalleryItemMutation,
  useGetGalleryQuery,
  useUpdateGalleryItemMutation,
  type GalleryItem,
} from "../../store/api";
import Input from "../ui/Input";

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
        <Input
          label="Заголовок"
          value={form.title}
          onChange={(v) => setForm({ ...form, title: v })}
        />
        <Input
          label="Картинка (URL)"
          value={form.img}
          onChange={(v) => setForm({ ...form, img: v })}
        />
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
                <button
                  className="text-red-600"
                  onClick={() => deleteItem(g._id)}
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
export default GalleryTab;
