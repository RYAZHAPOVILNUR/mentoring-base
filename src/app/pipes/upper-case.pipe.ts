import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customUpperCase', // Свойство для ВЕРХНЕГО регистра
    standalone: true,
    pure: true, 
    // pure: true - Чистый пайп, пересчитывается только при изменении значения.
    // pure: false - Нечистый пайп, пересчитывается на каждом цикле обнаружения изменений.
})
export class CustomUpperCasePipe implements PipeTransform {
    transform(text: string | undefined): string | undefined{
        return text?.toUpperCase();
    }
}

// Зачем нужен метод transform - Он выполняет логику преобразования данных. Позволяет абстрагировать повторяющиеся преобразования данных
// (например, верхний регистр, форматирование даты и т.д.) в едином месте. Обеспечивает гибкость и модульность кода, делая его более чистым и читаемым.

// Таким образом, transform — это сердце любого пайпа, выполняющее его основную задачу — изменение данных перед их выводом.
