import { useRef, useState } from "react";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "../../store/api";
import type { IOrder } from "../../types/types";
import Loader from "../ui/Loader";
import { useClickOutside } from "../../hooks/useClickOutside";

function OrderTab() {
  const [editStatus, setEditStatus] = useState<string | null>(null);
  const editMenuRef = useRef<HTMLDivElement>(null);

  const { data: orders, isLoading, isError, isSuccess } = useGetOrdersQuery();
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder, { isLoading: isUpdateLoading }] =
    useUpdateOrderMutation();

  type TStatus = IOrder["status"];
  const status: Record<TStatus, { name: string; color: string }> = {
    new: { name: "Новый", color: "text-green-400" },
    cancelled: { name: "Отменён", color: "text-red-400" },
    confirmed: { name: "Подтверждён", color: "text-green-500" },
    done: { name: "Выполнен", color: "text-green-600" },
  };

  const handleDelete = (id: string) => {
    deleteOrder(id);
  };
  useClickOutside(editMenuRef, () => {
    setEditStatus(null);
  });
  return (
    <section className="p-4 border bg-white">
      <h3 className="font-semibold mb-5">Список заказов</h3>
      {isLoading && <Loader />}
      {isUpdateLoading && <Loader />}
      {!!orders?.length && (
        <div className="">
          <table className="min-w-full text-sm border">
            <thead className="bg-slate-100">
              <tr>
                <th className="border px-2 py-1">Телефон</th>
                <th className="border px-2 py-1">Почта</th>
                <th className="border px-2 py-1">Название</th>
                <th className="border px-2 py-1">Цена</th>
                <th className="border px-2 py-1">Кол-во</th>
                <th className="border px-2 py-1">Сумма</th>
                <th className="border px-2 py-1">Дата</th>
                <th className="border px-2 py-1">Статус</th>
                <th className="border px-2 py-1">Действия</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((p) => (
                <tr key={p._id}>
                  <td className="border px-2 py-1">{p.phone}</td>
                  <td className="border px-2 py-1">{p.email}</td>
                  <td className="border px-2 py-1">{p.name}</td>
                  <td className="border px-2 py-1">{p.product_price}</td>
                  <td className="border px-2 py-1">{p.product_count}</td>
                  <td className="border px-2 py-1">
                    {p.product_price * p.product_count}
                  </td>
                  <td className="border px-2 py-1">
                    {new Date(p.created_at).toLocaleDateString()}
                  </td>
                  <td className={`border px-2 py-1`}>
                    <p className={`${status[p.status].color}`}>
                      {status[p.status].name}
                    </p>
                  </td>

                  <td className="border px-2 py-1 space-x-2">
                    <div
                      onClick={(e) => e.stopPropagation()}
                      ref={editMenuRef}
                      className="relative"
                    >
                      <button
                        onClick={() => setEditStatus(p._id)}
                        className="text-blue-600 cursor-pointer hover:underline"
                      >
                        Изменить статус
                      </button>
                      {editStatus === p._id && (
                        <div className="absolute top-full left-0 w-60 py-3 bg-white shadow-2xl border z-20 rounded flex flex-col">
                          {Object.entries(status).map(([key, v]) => (
                            <p
                              className="p-3 transition-all hover:bg-(--prime) hover:text-white cursor-pointer"
                              key={key}
                              onClick={() => {
                                updateOrder({
                                  id: p._id,
                                  data: {
                                    status: key as TStatus,
                                  },
                                }).then(() => {
                                  setEditStatus(null);
                                });
                              }}
                            >
                              {v.name}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      className="text-red-600"
                      onClick={() => handleDelete(p._id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isError && <p>Что-то пошло не так.</p>}
      {isSuccess && !orders.length && <p>Нет заказов</p>}
    </section>
  );
}

export default OrderTab;
