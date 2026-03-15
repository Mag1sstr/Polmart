import { useState } from "react";
import {
  useDeleteConsultMutation,
  useGetConsultsQuery,
  useUpdateConsultMutation,
} from "../../store/api";
import type { IConsult } from "../../types/types";
import Loader from "../ui/Loader";

function ConsultTab() {
  const [editStatus, setEditStatus] = useState<string | null>(null);
  const {
    data: consults,
    isLoading,
    isError,
    isSuccess,
  } = useGetConsultsQuery();
  const [deleteConsult] = useDeleteConsultMutation();
  const [updateConsult] = useUpdateConsultMutation();

  type TConsultStatus = IConsult["status"];

  const status: Record<TConsultStatus, { name: string; color: string }> = {
    new: { name: "Новый", color: "text-green-400" },
    done: { name: "Выполнена", color: "text-green-400" },
  };
  return (
    <section className="bg-white p-4 border">
      <h3 className="font-semibold mb-5">Список заявок</h3>
      {isLoading && <Loader />}
      {!!consults?.length && (
        <div className="">
          <table className="min-w-full text-sm border">
            <thead className="bg-slate-100">
              <tr>
                <th className="border px-2 py-1">Телефон</th>
                <th className="border px-2 py-1">Имя</th>
                <th className="border px-2 py-1">Адрес</th>
                <th className="border px-2 py-1">Статус</th>
                <th className="border px-2 py-1">Действия</th>
              </tr>
            </thead>
            <tbody>
              {consults?.map((p) => (
                <tr key={p._id}>
                  <td className="border px-2 py-1">{p.phone}</td>
                  <td className="border px-2 py-1">{p.name}</td>
                  <td className="border px-2 py-1">{p.address}</td>
                  <td className="border px-2 py-1">
                    <p className={`${status[p.status].color}`}>
                      {status[p.status].name}
                    </p>
                  </td>

                  <td className="border px-2 py-1">
                    <div className="flex gap-5">
                      <div className="relative">
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
                              >
                                {v.name}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        className="text-red-600 cursor-pointer hover:underline"
                        onClick={() => deleteConsult(p._id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isError && <p>Что-то пошло не так.</p>}
      {isSuccess && !consults.length && <p>Нет заявок</p>}
    </section>
  );
}

export default ConsultTab;
