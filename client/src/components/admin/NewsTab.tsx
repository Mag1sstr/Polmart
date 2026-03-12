import { useState, type ChangeEvent } from "react";
import {
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useGetNewsQuery,
  useUpdateNewsMutation,
  type NewsItem,
} from "../../store/api";
import Input from "../ui/Input";
import { objectToFormData } from "../../utils/objectToFormData";

function NewsTab() {
  const { data: news } = useGetNewsQuery();
  const [createNews] = useCreateNewsMutation();
  const [updateNews] = useUpdateNewsMutation();
  const [deleteNews] = useDeleteNewsMutation();

  const empty: Omit<NewsItem, "_id"> = {
    images: [],
    publishedAt: new Date().toISOString().slice(0, 10),
    title: "",
    text: "",
  };
  const [form, setForm] = useState<Omit<NewsItem, "_id">>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [preview, setPreview] = useState<string[]>([]);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const arrayImg = Array.from(files);
    setPreview(arrayImg.map((img) => URL.createObjectURL(img)));
    setForm((prev) => ({ ...prev, images: arrayImg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = objectToFormData(form);

    await (editingId
      ? updateNews({ id: editingId, data: form }).unwrap()
      : createNews(formData).unwrap());
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
        <Input
          label="Заголовок"
          value={form.title}
          onChange={(v) => setForm({ ...form, title: v })}
        />
        <Input
          label="Дата публикации"
          type="date"
          value={form.publishedAt?.slice(0, 10)}
          onChange={(v) => setForm({ ...form, publishedAt: v })}
        />
        {/* <Input
          label="Картинка (URL)"
          value={form.img}
          onChange={(v) => setForm({ ...form, img: v })}
        /> */}

        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Текст</label>
          <textarea
            className="w-full border rounded px-2 py-1 h-24"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
        </div>
        <div className="flex gap-5">
          {preview.map((img) => (
            <img className="w-50 " key={img} src={img} alt="" />
          ))}
        </div>
        <div className="col-span-2 flex gap-2 mt-2">
          <input
            onChange={handleImage}
            className="hidden"
            type="file"
            id="newsImg"
            multiple
          />
          <label
            className="bg-blue-500  text-white grid place-content-center px-4 rounded cursor-pointer"
            htmlFor="newsImg"
          >
            Добавить изображение
          </label>

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
                <button
                  className="text-red-600"
                  onClick={() => deleteNews(n._id)}
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
export default NewsTab;
