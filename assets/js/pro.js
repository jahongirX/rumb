$(document).ready(function () {
  // menu toggle
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(" nav.menu").toggleClass("active");
  });
  // swiper
  // product slide 1
  var swiper = new Swiper(".TopProduct", {
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlide: true,
    navigation: {
      nextEl: ".btn_next",
      prevEl: ".btn_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 25,
      },
    },
  });
  // statistic slide 2
  var sviper = new Swiper(".statistic_diogram", {
    spaceBetween: 20,
    mousewheel: true,
    slidesPerView: 15,

    navigation: {
      nextEl: ".next_btn",
      prevEl: ".prev_btn",
    },
    breakpoints: {
      0: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 8,
      },
      992: {
        slidesPerView: 10,
      },
      1024: {
        slidesPerView: 12,
      },
      1200: {
        slidesPerView: 15,
      },
    },
  });
  //   slider 3 cotact section
  var sviper3 = new Swiper(".slides_contact", {
    spaceBetween: 25,
    slidesPerView: 4,
    navigation: {
      nextEl: ".next_contact_btn",
      prevEl: ".prev_contact_btn",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  //слайер для tour.page
  const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
    // ищем слайдер превью по селектору
    // задаем параметры
    direction: "vertical", // вертикальная прокрутка
    slidesPerView: 2, // показывать по 3 превью
    spaceBetween: 10, // расстояние между слайдами
    navigation: {
      // задаем кнопки навигации
      nextEl: ".slider__next", // кнопка Next
      prevEl: ".slider__prev", // кнопка Prev
    },
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    breakpoints: {
      // условия для разных размеров окна браузера
      0: {
        // при 0px и выше
        direction: "horizontal", // горизонтальная прокрутка
      },
      768: {
        // при 768px и выше
        direction: "vertical", // вертикальная прокрутка
      },
    },
  });
  // Инициализация слайдера изображений
  const sliderImages = new Swiper(".slider__images .swiper-container", {
    // ищем слайдер превью по селектору
    // задаем параметры
    direction: "vertical", // вертикальная прокрутка
    slidesPerView: 1, // показывать по 1 изображению
    spaceBetween: 10, // расстояние между слайдами
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    navigation: {
      // задаем кнопки навигации
      nextEl: ".slider__images .swiper-button-next", // кнопка Next
      prevEl: ".slider__images .swiper-button-prev", // кнопка Prev
    },
    grabCursor: true, // менять иконку курсора
    thumbs: {
      // указываем на превью слайдер
      swiper: sliderThumbs, // указываем имя превью слайдера
    },
    breakpoints: {
      // условия для разных размеров окна браузера
      0: {
        // при 0px и выше

        direction: "horizontal", // горизонтальная прокрутка
        slidesPerView: 3, // показывать по 1 изображению
      },
      568: {
        slidesPerView: 1, // показывать по 1 изображению

        direction: "vertical", // вертикальная прокрутка
      },
    },
  });
  // фунция для показа количество картинок в карусели

  function countNumberSlideimages() {
    $(".sl").each(function (e, index) {
      let number = $(this).find("img").length;
      $(".slider_number").html(`+${number}`);
    });
  }
  countNumberSlideimages();
  //hide full content
  $(".items_news").css({
    display: "none",
  });
  // show full content
  $(".news_all").on("click", function (e) {
    e.preventDefault();
    $(this).css({
      display: "none",
    });
    $(".items_news").css({
      display: "block",
    });
  });

  //   slider stop function
  $(".product_alls").on("click", function (e) {
    swiper = "stop";
    console.log(swiper);
    $(".btn_next").css({
      display: "none",
    });
    $(".btn_prev").css({
      display: "none",
    });
    e.preventDefault();
    $(".slide_contents").removeClass("swiper-wrapper");
    $(".del_slide").removeClass("swiper-initialized");
    $(".slide_contents").addClass("active");
    $(this).css({
      display: "none",
    });
  });

  // section product_all content
  $(".contents_all").on("click", function (e) {
    e.preventDefault();
    $(this).css({
      display: "none",
    });
    $(".none_content").css({
      display: "flex",
    });
  });
  // tooltip
  const tooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const toltiContent = [...tooltip].map((tool) => new bootstrap.Tooltip(tool));

  // toru section
  $(".drop_search").css({
    transform: "rotate(0)",
  });
  $("#search").focus(function () {
    console.log("jhgfdxcg");
    $(".drop_search").css({
      transform: "rotate(180deg)",
    });
  });
  // nice-select  для кастомизаций селектов

  let selects = $(".n_select");

  selects.niceSelect();

  $('.filter_item').on('click',function(e){
    e.preventDefault();console.log($(this).find(".nice-select"))
    // $(this).find('.nice-select').addClass('open')
  })
  // фунцкия  ссылки для выпадающего селекта

  $(".option").on("click", function (e) {
    window.location = $(this).data("value") + ".html";
  });

  // фунцкия для звезд(оценка)

  $(".rating__input").each(function (i, element) {
    let currentVaue = $(element).val();
    let stars = $(element).parent().find(".rating__icon");
    // stars.each(function(index,item){
    //   $(item).removeClass('fa-regular');
    // })

    let counter = 0;
    stars.each(function (index, item) {
      if (currentVaue == counter) {
        return false;
      } else {
        $(item).addClass("active");
      }

      counter++;
      console.log(item);
    });
  });
  let calendars = document.querySelectorAll(".calendar");
  console.log(calendars);
  if (calendars) {
    calendars.forEach(function (item, index) {
      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">  <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0)" fill="#E5EDFE"/> <path d="M14.1859 21.0045C14.0568 21.131 13.8924 21.2 13.6986 21.2C13.3112 21.2 13 20.901 13 20.5215C13 20.3318 13.0822 20.1593 13.2172 20.0271L17.3268 16.0943L13.2172 12.1729C13.0822 12.0407 13 11.8625 13 11.6785C13 11.299 13.3112 11 13.6986 11C13.8924 11 14.0568 11.069 14.1859 11.1955L18.7534 15.5653C18.9178 15.7148 18.9941 15.8988 19 16.1C19 16.3012 18.9178 16.4737 18.7534 16.629L14.1859 21.0045Z" fill="#011927"/></svg>`;
      let exampleDates = [
        "2024-01-10",
        "2024-01-12",
        "2024-01-16",
        "2024-01-18",
        "2024-01-21",
        "2024-01-24",
        "2024-01-27",
      ];
      new AirDatepicker(item, {
        nextHtml: svg,
        multipleDates: true,
        selectedDates: [exampleDates],
      });
    });
  }

  // для правильной верстки
  let tHeight = $(".tour_title").height() - 30;
  if ($(window).width() >= 1024) {
    $(".tour_details").css("margin-top", -tHeight);
  }

  let dHeight = $(".description_calendar").height();
  let dWidth = $(".description_calendar").width();
  if ($(window).width() >= 576) {
    let hh = 25 + dHeight;

    let m = `calc(100% + ${hh}px)`;

    console.log(m);
    $(".description_call").css({
      top: hh,
      width: dWidth,
    });
  }

  //  console.log( $('#lightgallery'))

  // для фиксирования кнопок в tour.html

  let contactsBlock = $(".contacts_block .buttons");
  if (contactsBlock.length) {
    let offsetC = contactsBlock.offset();
    let sticky = offsetC.top;
    console.log($(window).scrollTop);
    if ($(window).width() <= 576) {
      $(window).on("scroll", function (e) {
        // alert(1)
        if ($(window).scrollTop() > sticky) {
          contactsBlock.addClass("fixed");
        } else {
          contactsBlock.removeClass("fixed");
        }
      });
    }
  }

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Custom options for the first gallery
  });
  let checker = $(".slider-range-1");
  if (checker.length) {
    function initializeSlider(
      sliderId,
      inputMinId,
      inputMaxId,
      initialMin,
      initialMax
    ) {
      $("#" + sliderId).slider({
        range: true,
        min: initialMin,
        max: initialMax,
        values: [initialMin, initialMax],
        slide: function (event, ui) {
          $("#" + inputMinId).val(ui.values[0]);
          $("#" + inputMaxId).val(ui.values[1]);
        },
      });

      $("#" + inputMinId).val($("#" + sliderId).slider("values", 0));
      $("#" + inputMaxId).val($("#" + sliderId).slider("values", 1));

      $("#" + inputMinId).on("input", function () {
        var minValue = parseInt($(this).val());
        var maxValue = parseInt($("#" + inputMaxId).val());
        $("#" + sliderId).slider("values", 0, minValue);
      });

      $("#" + inputMaxId).on("input", function () {
        var minValue = parseInt($("#" + inputMinId).val());
        var maxValue = parseInt($(this).val());
        $("#" + sliderId).slider("values", 1, maxValue);
      });
    }

    initializeSlider("slider-range-1", "input-min-1", "input-max-1", 1, 25);
    initializeSlider(
      "slider-range-2",
      "input-min-2",
      "input-max-2",
      9000,
      150000
    );
  }
  // search page

  function initializeSwiper(containerId) {
    var swiper = new Swiper(`.${containerId}`, {
      // ищем слайдер превью по селектору
      // задаем параметры
      direction: "horizontal", // вертикальная прокрутка
      slidesPerView: 4, // показывать по 1 изображению
      spaceBetween: 10, // расстояние между слайдами
      mousewheel: true, // можно прокручивать изображения колёсиком мыши

      grabCursor: true, // менять иконку курсора
      breakpoints: {
        // условия для разных размеров окна браузера
        0: {
          // при 0px и выше

          direction: "horizontal", // горизонтальная прокрутка
          slidesPerView: 2.5, // показывать по 1 изображению
        },
        568: {
          slidesPerView: 3, // показывать по 1 изображению

          direction: "horizontal", // вертикальная прокрутка
        },
        778: {
          slidesPerView: 4, // показывать по 1 изображению

          direction: "horizontal", // вертикальная прокрутка
        },
      },
      // задаем кнопки навигации
      navigation: {
        nextEl: ".result_slider .swiper-button-next",
        prevEl: ".result_slider .swiper-button-prev",
      },
    });
  }

  initializeSwiper("search-result-slider1");
  initializeSwiper("search-result-slider2");
  initializeSwiper("search-result-slider3");

  $(".filter_togler").on("click", function (e) {
    e.preventDefault();
    $("html").toggleClass("ov");
    $(".filter_block").toggleClass("active");
  });
  console.log($(".filter_togler").offset());
  // firm page


  
  function initializeSwiper(containerId) {
    var swiper = new Swiper(`.${containerId}`, {
      // ищем слайдер превью по селектору
      // задаем параметры
      direction: "horizontal", // вертикальная прокрутка
      slidesPerView: 4, // показывать по 1 изображению
      spaceBetween: 20, // расстояние между слайдами
      mousewheel: true, // можно прокручивать изображения колёсиком мыши

      grabCursor: true, // менять иконку курсора
      breakpoints: {
        // условия для разных размеров окна браузера
        0: {
          // при 0px и выше

          direction: "horizontal", // горизонтальная прокрутка
          slidesPerView: 2.5, // показывать по 1 изображению
        },
        568: {
          slidesPerView: 3, // показывать по 1 изображению

          direction: "horizontal", // вертикальная прокрутка
        },
        778: {
          slidesPerView: 4, // показывать по 1 изображению

          direction: "horizontal", // вертикальная прокрутка
        },
      },
      // задаем кнопки навигации
      navigation: {
        nextEl: ".result_slider .swiper-button-next",
        prevEl: ".result_slider .swiper-button-prev",
      },
    });
  }

  initializeSwiper("tour_block");
});
