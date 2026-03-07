import { useState, type ChangeEvent } from "react";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  type Product,
} from "../../store/api";
import Input from "../ui/Input";
import { objectToFormData } from "../../utils/objectToFormData";
import type { ProductFormData } from "../../types/types";

interface IEdit extends ProductFormData {
  _id: string;
}

function ProductsTab() {
  const { data: products } = useGetProductsQuery({});
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const emptyProduct: ProductFormData = {
    title: "",
    description: "",
    discount: 0,
    price: 0,
    class: 0,
    thickness: 0,
    size: "",
    package: 0,
    moistureResistance: false,
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
    category: {
      _id: "",
      name: "",
      slug: "",
      img: "",
    },
    images: [],
  };

  const [form, setForm] = useState<ProductFormData>(emptyProduct);
  const [editingId, setEditingId] = useState<string | null>(null);
  // const [images, setImages] = useState<File[] | null>(null);
  const [preview, setPreview] = useState<string[] | null>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const arrayFiles = Array.from(files);
    setForm((prev) => ({ ...prev, images: arrayFiles }));
    // setPreview([...Array(files?.length)].map((el) => URL.createObjectURL(el)));
    setPreview(arrayFiles.map((image) => URL.createObjectURL(image)));
  };

  const handleChange = (
    field: keyof Omit<Product, "_id">,
    value: string | boolean,
  ) => {
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

    const formData = objectToFormData<ProductFormData>(form);

    if (editingId) {
      await updateProduct({ id: editingId, data: form }).unwrap();
    } else {
      await createProduct(formData).unwrap();
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
      <p>* - Обязательное поле</p>
      <form onSubmit={handleSubmit} className="text-sm">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <Input
            label="Название *"
            value={form.title}
            onChange={(v) => handleChange("title", v)}
          />
          <Input
            label="Цена *"
            type="number"
            value={form.price}
            onChange={(v) => handleChange("price", v)}
          />
          <Input
            label="Описание *"
            value={form.description}
            onChange={(v) => handleChange("description", v)}
          />
          {/* <Input
            label="Категория *"
            value={form.category || ""}
            onChange={(v) => handleChange("category", v)}
          /> */}
          <Input
            label="Страна"
            value={form.country || ""}
            onChange={(v) => handleChange("country", v)}
          />
          <Input
            label="Класс"
            type="number"
            value={form.class || 0}
            onChange={(v) => handleChange("class", v)}
          />
          <Input
            label="Толщина"
            type="number"
            value={form.thickness || 0}
            onChange={(v) => handleChange("thickness", v)}
          />
          <Input
            label="Размер"
            value={form.size || ""}
            onChange={(v) => handleChange("size", v)}
          />
          <Input
            label="Упаковка"
            type="number"
            value={form.package || ""}
            onChange={(v) => handleChange("package", v)}
          />

          <Input
            label="Материал"
            value={form.material || ""}
            onChange={(v) => handleChange("material", v)}
          />
          <Input
            label="Фаска"
            value={form.chamfer || ""}
            onChange={(v) => handleChange("chamfer", v)}
          />
          <Input
            label="Коллекция"
            value={form.collection || ""}
            onChange={(v) => handleChange("collection", v)}
          />
          <Input
            label="Производитель"
            value={form.manufacturer || ""}
            onChange={(v) => handleChange("manufacturer", v)}
          />

          <Input
            label="Рисунок"
            value={form.pattern || ""}
            onChange={(v) => handleChange("pattern", v)}
          />
          <Input
            label="Длина доски (мм)"
            type="number"
            value={form.boardLengthMm || 0}
            onChange={(v) => handleChange("boardLengthMm", v)}
          />
          <Input
            label="Ширина доски (мм)"
            type="number"
            value={form.boardWidthMm || 0}
            onChange={(v) => handleChange("boardWidthMm", v)}
          />
          <Input
            label="Метраж (м2)"
            type="number"
            value={form.areaM2 || 0}
            onChange={(v) => handleChange("areaM2", v)}
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm">Новинка</label>
          <input
            type="checkbox"
            checked={form.isNew}
            onChange={(e) => handleChange("isNew", e.target.checked)}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Влагостойкость</label>
          <input
            type="checkbox"
            checked={form.moistureResistance}
            onChange={(e) =>
              handleChange("moistureResistance", e.target.checked)
            }
          />
        </div>

        <div className="flex gap-2.5">
          {preview &&
            preview.map((image) => (
              <img
                key={image}
                src={image}
                className="w-40 h-40 object-cover rounded"
                alt="product-image"
              />
            ))}
        </div>
        <div className="col-span-2 flex gap-2 mt-2">
          <input
            onChange={handleImage}
            className="hidden"
            id="file"
            type="file"
            multiple
          />
          <label
            htmlFor="file"
            className="bg-blue-500 text-white grid place-content-center px-4 rounded cursor-pointer "
          >
            Добавить изображение
          </label>
          <button
            type="submit"
            className="bg-(--prime) text-white px-4 py-2 rounded cursor-pointer hover:opacity-80"
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
export default ProductsTab;
