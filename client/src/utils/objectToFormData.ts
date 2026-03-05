// export const objectToFormData = (obj: Record<string, any>): FormData => {
//   const formData = new FormData();

//   for (const key in obj) {
//     if (!obj.hasOwnProperty(key)) continue;

//     const value = obj[key];

//     if (value === null || value === undefined) continue;

//     if (Array.isArray(value)) {
//       // если массив, проверяем тип элементов
//       value.forEach((item) => {
//         if (item instanceof File) {
//           formData.append(key, item); // файл
//         } else {
//           formData.append(key, String(item)); // обычные массивные значения
//         }
//       });
//     } else if (value instanceof File) {
//       formData.append(key, value); // файл
//     } else {
//       formData.append(key, String(value)); // всё остальное
//     }
//   }

//   return formData;
// };
export function objectToFormData<T extends Record<string, unknown>>(
  obj: T,
): FormData {
  const formData = new FormData();

  for (const key in obj) {
    const value = obj[key];

    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item instanceof File) {
          formData.append(key, item);
        } else {
          formData.append(key, String(item));
        }
      });
    } else if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, String(value));
    }
  }

  return formData;
}
