export const menuNameItem = (menuName: string) => {
    return menuName;
  };
  
  export const menuItems = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];
  
  export const upperCaseItems = menuItems.map((i) => i.toUpperCase());
  export const lowerCaseItems = menuItems.map((i) => i.toLowerCase());