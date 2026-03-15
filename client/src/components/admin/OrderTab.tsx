import { useDeleteOrderMutation, useGetOrdersQuery } from "../../store/api";
import type { IOrder } from "../../types/types";
import Loader from "../ui/Loader";

function OrderTab() {
  const { data: orders, isLoading, isError, isSuccess } = useGetOrdersQuery();
  const [deleteOrder] = useDeleteOrderMutation();

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
  return (
    <section className="p-4 border bg-white">
      <h3 className="font-semibold mb-5">Список заказов</h3>
      {isLoading && <Loader />}
      {!!orders?.length && (
        <div className="overflow-x-auto">
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
                    <button className="text-blue-600">Изменить статус</button>
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
