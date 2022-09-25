// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.87, 2.35],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });

    var myPlacemark = new ymaps.Placemark([48.87, 2.35], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/mdi_location_on.svg',
      iconImageSize: [48, 48],
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}
