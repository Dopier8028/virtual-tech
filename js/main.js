<<<<<<< HEAD

=======
/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
<<<<<<< HEAD
    
    function getPageUrl(page) {
        var prefix = window.location.pathname.indexOf('/html/') !== -1 ? '' : 'html/';
        return prefix + page;
    }

    function getRootUrl(page) {
        return window.location.pathname.indexOf('/html/') !== -1 ? '../' + page : page;
    }

});
=======
    });
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
<<<<<<< HEAD
        margin: 4,
=======
        margin: 0,
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
<<<<<<< HEAD
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
=======

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*-------------------
        Language switch
    --------------------- */
    var translationMap = {
        "Home": "Inicio",
        "Shop": "Tienda",
        "Pages": "Páginas",
        "Shop Details": "Detalles de compra",
        "Shoping Cart": "Carrito de compras",
        "Check Out": "Pagar",
        "Checkout": "Pagar",
        "Blog Details": "Detalles del blog",
        "Blog": "Blog",
        "Contact": "Contacto",
        "Contact Us": "Contáctanos",
        "Login": "Iniciar sesión",
        "All departments": "Todas las categorías",
        "All Categories": "Todas las categorías",
        "What do you need?": "¿Qué necesitas?",
        "What do yo u need?": "¿Qué necesitas?",
        "SEARCH": "BUSCAR",
        "Search": "Buscar",
        "support 24/7 time": "soporte 24/7",

"Storage": "Almacenamiento",
    "Speakers and Audio": "Altavoces y Audio",
    "PC Components": "Componentes de PC",
    "Printing": "Impresión",
    "Monitors and Video": "Monitors y Video",
    "Mice and Keyboards": "Teclados y Ratones",
    "Security and Surveillance": "Seguridad y Vigilancia",
    "Software": "Software",
    "Home": "Inicio",
    "Shop": "Tienda",
    "Pages": "Páginas",

        "Technology": "Tecnologia",
        "100% innovation": "100% innovación",
        "Free Pickup and Delivery Available": "Recogida y entrega gratis disponibles",
        "SHOP NOW": "COMPRA YA",
        "Useful Links": "Enlaces útiles",
        "About Us": "Sobre nosotros",
        "About Our Shop": "Sobre nuestra tienda",
        "Secure Shopping": "Compras seguras",
        "Delivery infomation": "Información de entrega",
        "Privacy Policy": "Política de privacidad",
        "Our Sitemap": "Mapa del sitio",
        "Who We Are": "Quiénes somos",
        "Our Services": "Nuestros servicios",
        "Projects": "Proyectos",
        "Innovation": "Innovación",
        "Testimonials": "Testimonios",
        "Join Our Newsletter Now": "Únete a nuestro boletín ahora",
        "Get E-mail updates about our latest shop and special offers.": "Recibe actualizaciones por correo sobre nuestra tienda y ofertas especiales.",
        "Enter your mail": "Introduce tu correo",
        "Subscribe": "Suscribirse",
        "SEND MESSAGE": "ENVIAR MENSAJE",
        "SEND A MESSAGE": "ENVIAR MENSAJE",
        "PLACE ORDER": "REALIZAR PEDIDO",
        "CONTINUE SHOPPING": "CONTINUAR COMPRANDO",
        "APPLY COUPON": "APLICAR CUPÓN",
        "PROCEED TO CHECKOUT": "IR A PAGAR",
        "ADD TO CARD": "AÑADIR AL CARRITO",
        "Add to cart": "Añadir al carrito",
        "Subscribe": "Suscribirse",
        "Address: 60-49 Road 11378 New York": "Dirección: 60-49 Road 11378 New York",
        "Phone: +65 11.188.888": "Teléfono: +65 11.188.888",
        "Email: hello@colorlib.com": "Correo electrónico: hello@colorlib.com",
        "Free Shipping for all Order of $99": "Envío gratis para todos los pedidos de $99",
        "item:": "artículo:",
        "Item:": "Artículo:",
        "Search...": "Buscar...",
        "READ MORE": "LEER MÁS",
        "Search By": "Buscar por",
        "Search by": "Buscar por",
        "Get the newest":"Obtén lo más nuevo ",
        // Cart and Checkout Translations
        "Shopping Cart": "Carrito de compras",
        "Products": "Productos",
        "Price": "Precio",
        "Quantity": "Cantidad",
        "Total": "Total",
        "Subtotal": "Subtotal",
        "Discount Codes": "Códigos de descuento",
        "Enter your coupon code": "Introduce tu código de cupón",
        "Cart Total": "Total del carrito",
        "Update Cart": "Actualizar carrito",
        "Vegetable's Package": "Paquete de verduras",
        "Fresh Garden Vegetable": "Verdura fresca del jardín",
        "Organic Bananas": "Plátanos orgánicos",
        "Crab Pool Security": "Seguridad Crab Pool",
        "Premium Apples": "Manzanas premium",
        "Fresh Tomatoes": "Tomates frescos",
        "Organic Carrots": "Zanahorias orgánicas",
        "Fresh Lettuce": "Lechuga fresca",
        "Organic Oranges": "Naranjas orgánicas",
        "Premium Grapes": "Uvas premium"
    };

    function buildReverseMap(map) {
        var reversed = {};
        Object.keys(map).forEach(function (key) {
            reversed[map[key]] = key;
        });
        return reversed;
    }

    function buildLookup(map) {
        var lookup = {};
        Object.keys(map).forEach(function (key) {
            lookup[key] = map[key];
            lookup[key.trim().toLowerCase()] = map[key];
        });
        return lookup;
    }

    var reverseTranslationMap = buildReverseMap(translationMap);
    var translationLookup = buildLookup(translationMap);
    var reverseTranslationLookup = buildLookup(reverseTranslationMap);

    function translateString(value, map) {
        if (!value || !value.trim()) {
            return null;
        }
        var trimmed = value.trim();
        if (map[trimmed]) {
            return map[trimmed];
        }
        var lower = trimmed.toLowerCase();
        if (map[lower]) {
            return map[lower];
        }
        return null;
    }

    function translateTextNode(node, map) {
        var value = node.nodeValue;
        if (!value || !value.trim()) {
            return;
        }
        var trimmed = value.trim();
        var translated = translateString(trimmed, map);
        if (translated) {
            node.nodeValue = value.replace(trimmed, translated);
        }
    }

    function translateAttribute(element, attributeName, map) {
        var value = element.getAttribute(attributeName);
        if (!value) {
            return;
        }
        var translated = translateString(value.trim(), map);
        if (translated) {
            element.setAttribute(attributeName, translated);
        }
    }

    function translateElementText(element, map) {
        var $element = $(element);
        var textNodes = $element.contents().filter(function () {
            return this.nodeType === Node.TEXT_NODE;
        });
        if (!textNodes.length) {
            return;
        }
        var combinedText = '';
        textNodes.each(function () {
            combinedText += this.nodeValue;
        });
        var translation = translateString(combinedText, map);
        if (!translation) {
            return;
        }
        textNodes.each(function () {
            var value = this.nodeValue;
            if (value && value.trim()) {
                this.nodeValue = translation;
                return false;
            }
        });
    }

    function translatePage(targetLang) {
        var map = targetLang === 'es' ? translationLookup : reverseTranslationLookup;

        document.documentElement.lang = targetLang === 'es' ? 'es' : 'en';
        $('.header__top__right__language').each(function () {
            var languageLabel = $(this).children('div').first();
            if (languageLabel.length) {
                languageLabel.text(targetLang === 'es' ? 'Español' : 'English');
            }
        });

        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        var node;
        while ((node = walker.nextNode())) {
            translateTextNode(node, map);
        }

        $('button, a, span, h1, h2, h3, h4, h5, h6, p, li, label').each(function () {
            translateElementText(this, map);
        });

        $('input[placeholder], textarea[placeholder]').each(function () {
            translateAttribute(this, 'placeholder', map);
        });
    }

    function setLanguage(lang) {
        if (lang !== 'es' && lang !== 'en') {
            lang = 'en';
        }
        translatePage(lang);
        localStorage.setItem('oganiLanguage', lang);
    }

    $('.header__top__right__language ul li a').on('click', function (event) {
        event.preventDefault();
        var selectedLang = $(this).data('lang');
        if (selectedLang === 'es' || selectedLang === 'en') {
            setLanguage(selectedLang);
            return;
        }

        var selectedText = $(this).text().trim().toLowerCase();
        if (selectedText.indexOf('span') === 0 || selectedText.indexOf('esp') === 0) {
            setLanguage('es');
        } else {
            setLanguage('en');
        }
    });

    $(document).ready(function () {
        var savedLanguage = localStorage.getItem('oganiLanguage') || 'en';
        setLanguage(savedLanguage);
    });

    /*-------------------
        Shopping Cart System
    --------------------- */
    
    // Product Database
<<<<<<< HEAD
    var allProducts = [];
    var currentProductDetails = null;
    var currentSearchQuery = '';
    var currentSearchCategory = '';
    var MAX_HERO_CATEGORIES = 13;

    var defaultProducts = [
        { id: '1', name: 'Crab Pool Security', description: 'Protect your pool with premium equipment', price: 30.00, image: 'img/featured/feature-1.jpg', category: 'electronics' },
        { id: '2', name: 'Fresh Garden Vegetable', description: 'Healthy ingredients for daily meals', price: 39.00, image: 'img/featured/feature-2.jpg', category: 'vegetables' },
        { id: '3', name: 'Organic Bananas', description: 'Sweet and fresh organic bananas', price: 69.00, image: 'img/featured/feature-3.jpg', category: 'fastfood' },
        { id: '4', name: 'Premium Apples', description: 'Crisp apples for snacks and recipes', price: 55.00, image: 'img/featured/feature-4.jpg', category: 'fruits' },
        { id: '5', name: 'Fresh Tomatoes', description: 'Juicy tomatoes perfect for salads', price: 45.00, image: 'img/featured/feature-5.jpg', category: 'vegetables' },
        { id: '6', name: 'Organic Carrots', description: 'Crunchy carrots straight from the farm', price: 25.00, image: 'img/featured/feature-6.jpg', category: 'vegetables' },
        { id: '7', name: 'Fresh Lettuce', description: 'Green lettuce for healthy meals', price: 15.00, image: 'img/cart/cart-1.jpg', category: 'vegetables' },
        { id: '8', name: 'Organic Oranges', description: 'Citrus fruits full of vitamin C', price: 35.00, image: 'img/cart/cart-2.jpg', category: 'fruits' },
        { id: '9', name: 'Premium Grapes', description: 'Sweet grapes for snacking and desserts', price: 48.00, image: 'img/cart/cart-3.jpg', category: 'fruits' }
    ];

    function getFilteredProducts() {
        return allProducts.filter(function(product) {
            var matchesQuery = true;
            var matchesCategory = true;

            var nameLower = String(product.name || '').toLowerCase();
            var categoryLower = String(product.category || '').toLowerCase();
            var descriptionLower = String(product.description || '').toLowerCase();

            if (currentSearchQuery) {
                var searchLower = currentSearchQuery.toLowerCase();
                var idLower = String(product.id || '').toLowerCase();
                matchesQuery = nameLower.indexOf(searchLower) !== -1 || categoryLower.indexOf(searchLower) !== -1 || descriptionLower.indexOf(searchLower) !== -1 || idLower.indexOf(searchLower) !== -1;
            }

            if (currentSearchCategory) {
                var categoryFilterLower = String(currentSearchCategory).toLowerCase();
                matchesCategory = categoryLower.indexOf(categoryFilterLower) !== -1;
            }

            return matchesQuery && matchesCategory;
        });
    }

    function populateSearchCategories() {
        var select = $('#search-category');
        if (!select.length) {
            return;
        }

        var categories = allProducts.reduce(function(list, product) {
            var category = String(product.category || '').trim();
            if (category && list.indexOf(category) === -1) {
                list.push(category);
            }
            return list;
        }, []);

        categories.sort();

        select.empty();
        select.append('<option value="">All Categories</option>');

        categories.forEach(function(category) {
            select.append($('<option>').attr('value', category).text(category));
        });

        if (currentSearchCategory) {
            select.val(currentSearchCategory);
        }

        if (typeof select.niceSelect === 'function') {
            select.niceSelect('update');
        }
    }

    function updateCategoryActiveState() {
        var selectedCategory = String(currentSearchCategory || '').toLowerCase().trim();
        var allLinks = $('.hero__categories ul li a, .sidebar__item.department-list ul li a');

        allLinks.removeClass('active');

        if (!selectedCategory) {
            allLinks.filter('[data-category=""]').addClass('active');
            return;
        }

        allLinks.filter(function() {
            var linkCategory = String($(this).data('category') || '').toLowerCase().trim();
            return linkCategory === selectedCategory;
        }).addClass('active');
    }

    function populateCategoryMenus() {
        var categories = allProducts.reduce(function(list, product) {
            var category = String(product.category || '').trim();
            if (category && list.indexOf(category) === -1) {
                list.push(category);
            }
            return list;
        }, []);

        categories.sort();
        var heroCategories = categories.slice(0, MAX_HERO_CATEGORIES);

        var heroCategoryItems = '<li><a href="#" data-category="">All Categories</a></li>' + heroCategories.map(function(category) {
            return '<li><a href="#" data-category="' + category + '">' + category + '</a></li>';
        }).join('');

        var sidebarCategoryItems = '<li><a href="#" data-category="">All Categories</a></li>' + categories.map(function(category) {
            return '<li><a href="#" data-category="' + category + '">' + category + '</a></li>';
        }).join('');

        $('.hero__categories ul').each(function() {
            $(this).html(heroCategoryItems);
        });

        $('.sidebar__item.department-list ul').each(function() {
            $(this).html(sidebarCategoryItems);
        });

        updateCategoryActiveState();
    }

    function applyShopGridFilters(page) {
        page = page || 1;
        var filteredProducts = getFilteredProducts();
        renderShopGridProducts(page, 12, filteredProducts);
    }

    function normalizeProduct(prod) {
        return {
            id: String(prod.id),
            name: String(prod.name || 'Producto'),
            description: String(prod.description || ''),
            price: parseFloat(prod.price) || 0,
            image: prod.image || 'img/product/default.jpg',
            category: prod.category || 'other'
        };
    }

    function loadProducts() {
        return apiRequest('products', 'GET')
            .then(function(data) {
                if (data.success && Array.isArray(data.products) && data.products.length) {
                    allProducts = data.products.map(normalizeProduct);
                } else {
                    allProducts = defaultProducts.slice();
                }
                saveProducts();
                renderShopGridProducts();
                populateSearchCategories();
                populateCategoryMenus();
                return allProducts;
            })
            .catch(function(err) {
                console.warn('Error cargando productos del backend', err);
                var saved = localStorage.getItem('oganiProducts');
                if (saved) {
                    try {
                        allProducts = JSON.parse(saved).map(normalizeProduct);
                    } catch (e) {
                        console.warn('Error cargando productos guardados', e);
                        allProducts = defaultProducts.slice();
                    }
                } else {
                    allProducts = defaultProducts.slice();
                }
                renderShopGridProducts();
                populateSearchCategories();
                populateCategoryMenus();
                return allProducts;
            });
=======
    var allProducts = [
        // Featured Products from Home
        { id: 1, name: 'Crab Pool Security', price: 30.00, image: 'img/featured/feature-1.jpg', category: 'electronics' },
        { id: 2, name: 'Fresh Garden Vegetable', price: 39.00, image: 'img/featured/feature-2.jpg', category: 'vegetables' },
        { id: 3, name: 'Organic Bananas', price: 69.00, image: 'img/featured/feature-3.jpg', category: 'fastfood' },
        { id: 4, name: 'Premium Apples', price: 55.00, image: 'img/featured/feature-4.jpg', category: 'fruits' },
        { id: 5, name: 'Fresh Tomatoes', price: 45.00, image: 'img/featured/feature-5.jpg', category: 'vegetables' },
        { id: 6, name: 'Organic Carrots', price: 25.00, image: 'img/featured/feature-6.jpg', category: 'vegetables' },
        { id: 7, name: 'Fresh Lettuce', price: 15.00, image: 'img/cart/cart-1.jpg', category: 'vegetables' },
        { id: 8, name: 'Organic Oranges', price: 35.00, image: 'img/cart/cart-2.jpg', category: 'fruits' },
        { id: 9, name: 'Premium Grapes', price: 48.00, image: 'img/cart/cart-3.jpg', category: 'fruits' }
    ];

    // Load and save products
    function loadProducts() {
        var saved = localStorage.getItem('oganiProducts');
        if (saved) {
            try {
                var savedProducts = JSON.parse(saved);
                savedProducts.forEach(function(prod) {
                    if (!findProductById(prod.id)) {
                        allProducts.push({
                            id: prod.id,
                            name: prod.name,
                            price: parseFloat(prod.price) || 0,
                            image: prod.image || '',
                            category: prod.category || 'other'
                        });
                    }
                });
            } catch (e) {
                console.warn('Error cargando productos guardados', e);
            }
        }
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    }

    function saveProducts() {
        localStorage.setItem('oganiProducts', JSON.stringify(allProducts));
    }

<<<<<<< HEAD
    function renderShopGridProducts(page = 1, productsPerPage = 12, productsToShow) {
        if ($('.product.spad').length === 0) {
            return;
        }

        var gridRow = $('.shop-grid-products');
        if (!gridRow.length) {
            return;
        }

        productsToShow = Array.isArray(productsToShow) ? productsToShow : allProducts;
        var currentProducts = productsToShow;
        var totalProducts = currentProducts.length;
        var totalPages = Math.max(1, Math.ceil(totalProducts / productsPerPage));
        var startIndex = (page - 1) * productsPerPage;
        var endIndex = startIndex + productsPerPage;
        var productsForPage = currentProducts.slice(startIndex, endIndex);

        var html = '';
        productsForPage.forEach(function(product) {
            html += '<div class="col-lg-4 col-md-6 col-sm-6">' +
                    '<div class="product__item" data-product-id="' + product.id + '">' +
                    '<div class="product__item__pic set-bg" data-setbg="' + product.image + '">' +
                    '<a href="' + getPageUrl('shop-details.html?id=' + product.id) + '" class="product__item__pic__link" aria-label="Ver detalles de ' + product.name + '"></a>' +
                    '<span class="product__item__badge">New</span>' +
                    '<ul class="product__item__pic__hover">' +
                    '<li><a href="#" class="favorite-btn" data-product-id="' + product.id + '"><i class="fa fa-heart"></i></a></li>' +
                    '<li><a href="#" class="compare-btn"><i class="fa fa-retweet"></i></a></li>' +
                    '<li><a href="#" class="add-to-cart-btn" data-product-id="' + product.id + '"><i class="fa fa-shopping-cart"></i></a></li>' +
                    '</ul>' +
                    '</div>' +
                    '<div class="product__item__text">' +
                    '<h6><a href="' + getPageUrl('shop-details.html?id=' + product.id) + '">' + product.name + '</a></h6>' +
                    '<div class="product__item__price">' +
                    '<h5>$' + product.price.toFixed(2) + '</h5>' +
                    '</div>' +
                    '<div class="product__item__rating">' +
                    '<span class="icon_star"></span>' +
                    '<span class="icon_star"></span>' +
                    '<span class="icon_star"></span>' +
                    '<span class="icon_star"></span>' +
                    '<span class="icon_star_outline"></span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        });

        if (productsForPage.length === 0) {
            gridRow.html('<div class="col-12"><p>No hay productos que coincidan con tu búsqueda.</p></div>');
        } else {
            gridRow.html(html);
            gridRow.find('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', 'url(' + bg + ')');
            });
        }

        // Update pagination using existing product__pagination container
        var paginationContainer = $('.product__pagination');
        if (paginationContainer.length) {
            var paginationHtml = '';
            
            // Previous button
            if (page > 1) {
                paginationHtml += '<a href="#" class="pagination-btn" data-page="' + (page - 1) + '"><i class="fa fa-long-arrow-left"></i></a>';
            }
            
            // Page numbers
            for (var i = 1; i <= totalPages; i++) {
                var activeClass = (i === page) ? 'active' : '';
                paginationHtml += '<a href="#" class="pagination-btn ' + activeClass + '" data-page="' + i + '">' + i + '</a>';
            }
            
            // Next button
            if (page < totalPages) {
                paginationHtml += '<a href="#" class="pagination-btn" data-page="' + (page + 1) + '"><i class="fa fa-long-arrow-right"></i></a>';
            }
            
            paginationContainer.html(paginationHtml);
            
            // Add click handlers for pagination
            paginationContainer.find('.pagination-btn').on('click', function(e) {
                e.preventDefault();
                var pageNum = parseInt($(this).data('page'));
                renderShopGridProducts(pageNum, productsPerPage, currentProducts);
                // Scroll to top of products
                $('html, body').animate({
                    scrollTop: gridRow.offset().top - 100
                }, 500);
            });
        }

        // Update product count
        var countEl = $('.filter__found h6 span');
        if (countEl.length) {
            countEl.text(totalProducts);
        }
    }

    function loadProductDetails() {
        var urlParams = new URLSearchParams(window.location.search);
        var productId = urlParams.get('id');
        if (!productId) {
            window.location.href = getPageUrl('shop-grid.html');
            return;
        }

        return apiRequest('products?id=' + encodeURIComponent(productId), 'GET')
            .then(function(data) {
                if (data.success && data.product) {
                    renderProductDetails(data.product);
                } else {
                    window.location.href = getPageUrl('shop-grid.html');
                }
            })
            .catch(function(err) {
                console.warn('Error loading product details', err);
                window.location.href = getPageUrl('shop-grid.html');
            });
    }

    function renderProductDetails(product) {
        currentProductDetails = product;

        // Update main image
        $('.product__details__pic__item--large').attr({
            src: product.image,
            alt: product.name
        });

        // Make favorite icon and add-to-cart button aware of this product
        $('.heart-icon').addClass('favorite-btn').attr('data-product-id', product.id);
        $('.primary-btn').attr('data-product-id', product.id);

        // Hide thumbnail slider for a cleaner single-image layout
        $('.product__details__pic__slider').hide();

        // Update product title
        $('.product__details__text h3').text(product.name);

        // Update price
        $('.product__details__price').text('$' + product.price.toFixed(2));

        // Update description tab content using database fields
        $('.product__details__tab__desc').first().html(
            '<h6>Products Information</h6>' +
            '<p>' + (product.description || 'No description available.') + '</p>'
        );
        $('#tabs-2 .product__details__tab__desc').html(
            '<h6>Products Information</h6>' +
            '<p>Category: ' + (product.category || 'N/A') + '</p>' +
            '<p>Product ID: ' + product.id + '</p>' +
            '<p>Stock: ' + (product.stock != null ? product.stock : 'N/A') + '</p>'
        );

        // Update summary paragraph on the main details area if present
        $('.product__details__text p').first().text(product.description || 'No description available.');

        // Update details list with database-backed fields
        $('.product__details__text ul').html(
            '<li><b>Availability</b> <span>' + (product.stock > 0 ? 'In Stock' : 'Out of Stock') + '</span></li>' +
            '<li><b>Category</b> <span>' + (product.category || 'N/A') + '</span></li>' +
            '<li><b>Product Code</b> <span>' + product.id + '</span></li>' +
            '<li><b>Stock</b> <span>' + (product.stock != null ? product.stock : 'N/A') + '</span></li>' +
            '<li><b>Share on</b>' +
                '<div class="share">' +
                    '<a href="#"><i class="fa fa-facebook"></i></a>' +
                    '<a href="#"><i class="fa fa-twitter"></i></a>' +
                    '<a href="#"><i class="fa fa-instagram"></i></a>' +
                    '<a href="#"><i class="fa fa-pinterest"></i></a>' +
                '</div>' +
            '</li>'
        );

        // Update add to cart button
        $('.primary-btn').attr('data-product-id', product.id);

        // Render related products by category
        renderRelatedProducts(product);
    }

    function renderRelatedProducts(currentProduct) {
        var relatedContainer = $('.related-products');
        if (!relatedContainer.length) {
            return;
        }

        if (!currentProduct || !currentProduct.category) {
            relatedContainer.html('<div class="col-12"><p>No hay productos relacionados disponibles.</p></div>');
            return;
        }

        var currentCategory = String(currentProduct.category || '').trim().toLowerCase();
        if (!currentCategory) {
            relatedContainer.html('<div class="col-12"><p>No hay categoría disponible para este producto.</p></div>');
            return;
        }

        var relatedProducts = allProducts.filter(function(product) {
            if (!product.category || product.id === currentProduct.id) {
                return false;
            }
            return String(product.category || '').trim().toLowerCase() === currentCategory;
        });

        if (relatedProducts.length === 0) {
            relatedContainer.html('<div class="col-12"><p>No hay productos relacionados en la misma categoría.</p></div>');
            return;
        }

        relatedProducts = relatedProducts.slice(0, 4);

        var html = '';
        relatedProducts.forEach(function(product) {
            html += '<div class="col-lg-3 col-md-4 col-sm-6">' +
                    '<div class="product__item" data-product-id="' + product.id + '">' +
                    '<div class="product__item__pic set-bg" data-setbg="' + product.image + '">' +
                    '<a href="' + getPageUrl('shop-details.html?id=' + product.id) + '" class="product__item__pic__link" aria-label="Ver detalles de ' + product.name + '"></a>' +
                    '<ul class="product__item__pic__hover">' +
                    '<li><a href="#" class="favorite-btn" data-product-id="' + product.id + '"><i class="fa fa-heart"></i></a></li>' +
                    '<li><a href="#"><i class="fa fa-retweet"></i></a></li>' +
                    '<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>' +
                    '</ul>' +
                    '</div>' +
                    '<div class="product__item__text">' +
                    '<h6><a href="' + getPageUrl('shop-details.html?id=' + product.id) + '">' + product.name + '</a></h6>' +
                    '<h5>$' + product.price.toFixed(2) + '</h5>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        });

        relatedContainer.html(html);
        relatedContainer.find('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }

    function renderFeaturedProducts() {
        var featuredContainer = $('#featured-products');
        if (!featuredContainer.length) {
            return;
        }

        // Get only 24 products for featured section
        var featuredProducts = allProducts.slice(0, 24);
        var html = '';
        featuredProducts.forEach(function(product, index) {
            var mixClasses = 'mix ';
            // Add mix classes based on category (simplified)
            if (product.category) {
                var category = product.category.toLowerCase();
                if (category.includes('vegetable') || category.includes('fruit')) {
                    mixClasses += 'vegetables ';
                }
                if (category.includes('meat')) {
                    mixClasses += 'fresh-meat ';
                }
                if (category.includes('fastfood') || category.includes('food')) {
                    mixClasses += 'fastfood ';
                }
                if (category.includes('orange') || category.includes('fruit')) {
                    mixClasses += 'oranges ';
                }
            }
            html += '<div class="col-lg-3 col-md-4 col-sm-6 ' + mixClasses.trim() + '">' +
                    '<div class="featured__item" data-product-id="' + product.id + '">' +
                    '<div class="featured__item__pic set-bg" data-setbg="' + product.image + '">' +
                    '<a href="' + getPageUrl('shop-details.html?id=' + product.id) + '" class="product__item__pic__link" aria-label="Ver detalles de ' + product.name + '"></a>' +
                    '<ul class="featured__item__pic__hover">' +
                    '<li><a href="#" class="favorite-btn" data-product-id="' + product.id + '"><i class="fa fa-heart"></i></a></li>' +
                    '<li><a href="#"><i class="fa fa-retweet"></i></a></li>' +
                    '<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>' +
                    '</ul>' +
                    '</div>' +
                    '<div class="featured__item__text">' +
                    '<h6><a href="' + getPageUrl('shop-details.html?id=' + product.id) + '">' + product.name + '</a></h6>' +
                    '<h5>$' + product.price.toFixed(2) + '</h5>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
        });

        featuredContainer.html(html);
        featuredContainer.find('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        // Reinitialize mixitup if it exists
        if (typeof mixitup !== 'undefined' && $('.featured__filter').length > 0) {
            var containerEl = document.querySelector('.featured__filter');
            mixitup(containerEl);
        }
    }

    function renderLatestProducts() {
        var latestContainer = $('.latest-products');
        if (!latestContainer.length) {
            return;
        }

        // Get 6 random products for latest products slider
        var latestProducts = allProducts.slice().sort(function() { return 0.5 - Math.random(); }).slice(0, 6);
        var html = '';

        // Group products in pairs for the slider
        for (var i = 0; i < latestProducts.length; i += 3) {
            html += '<div class="latest-prdouct__slider__item">';
            for (var j = i; j < i + 3 && j < latestProducts.length; j++) {
                var product = latestProducts[j];
                html += '<a href="' + getPageUrl('shop-details.html?id=' + product.id) + '" class="latest-product__item" data-product-id="' + product.id + '">' +
                        '<div class="latest-product__item__pic">' +
                        '<img src="' + product.image + '" alt="' + product.name + '">' +
                        '</div>' +
                        '<div class="latest-product__item__text">' +
                        '<h6>' + product.name + '</h6>' +
                        '<span>$' + product.price.toFixed(2) + '</span>' +
                        '</div>' +
                        '</a>';
            }
            html += '</div>';
        }

        latestContainer.html(html);
        latestContainer.trigger('refresh.owl.carousel');
    }

    function renderDiscountProducts() {
        var discountContainer = $('.discount-products');
        if (!discountContainer.length) {
            return;
        }

        // Get 6 random products for discount section
        var discountProducts = allProducts.slice().sort(function() { return 0.5 - Math.random(); }).slice(0, 6);
        var html = '';

        discountProducts.forEach(function(product) {
            html += '<div class="product__discount__item" data-product-id="' + product.id + '">' +
                        '<div class="product__discount__item__pic set-bg" data-setbg="' + product.image + '">' +
                        '<a href="' + getPageUrl('shop-details.html?id=' + product.id) + '" class="product__item__pic__link" aria-label="Ver detalles de ' + product.name + '"></a>' +
                        '<img src="' + product.image + '" alt="' + product.name + '">' +
                        '<div class="product__discount__percent">-20%</div>' +
                        '<ul class="product__item__pic__hover">' +
                        '<li><a href="#" class="favorite-btn" data-product-id="' + product.id + '"><i class="fa fa-heart"></i></a></li>' +
                        '<li><a href="#"><i class="fa fa-retweet"></i></a></li>' +
                        '<li><a href="#" class="add-to-cart-btn" data-product-id="' + product.id + '"><i class="fa fa-shopping-cart"></i></a></li>' +
                        '</ul>' +
                        '</div>' +
                        '<div class="product__discount__item__text">' +
                        '<span>' + (product.category || 'Product') + '</span>' +
                        '<h5><a href="' + getPageUrl('shop-details.html?id=' + product.id) + '">' + product.name + '</a></h5>' +
                        '<div class="product__item__price">$' + product.price.toFixed(2) + ' <span>$' + (product.price * 1.25).toFixed(2) + '</span></div>' +
                        '</div>' +
                    '</div>';
        });

        discountContainer.html(html);
        discountContainer.find('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        if (discountContainer.hasClass('owl-loaded')) {
            discountContainer.trigger('destroy.owl.carousel');
            discountContainer.removeClass('owl-loaded owl-drag');
            discountContainer.find('.owl-stage-outer, .owl-stage, .owl-item').remove();
        }

        discountContainer.owlCarousel({
            loop: true,
            margin: 5,
            items: 3,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {
                0: { items: 1 },
                480: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    }

=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    function normalizeId(value) {
        return String(value);
    }

    function parsePrice(priceText) {
        if (!priceText) {
            return 0;
        }
        var normalized = String(priceText).replace(/,/g, '.').replace(/[^0-9.]/g, '');
        var value = parseFloat(normalized);
        return isNaN(value) ? 0 : value;
    }

    function createStableProductId(name, image) {
        var source = (name || '') + '|' + (image || '');
        var hash = 0;
        for (var i = 0; i < source.length; i++) {
            hash = ((hash << 5) - hash) + source.charCodeAt(i);
            hash |= 0;
        }
        return 'p' + Math.abs(hash);
    }

    function findProductById(productId) {
        return allProducts.find(function(product) {
            return normalizeId(product.id) === normalizeId(productId);
        });
    }

    function findProductByName(name) {
        if (!name) {
            return null;
        }
        var lowerName = String(name).trim().toLowerCase();
        var product = allProducts.find(function(p) {
            return String(p.name).trim().toLowerCase() === lowerName;
        });
        return product ? product.id : null;
    }

    function getProductInfoFromCard(element) {
        var card = element.closest('.product__item, .product__discount__item, .featured__item, .latest-product__item, .product__details__text, .product__details__pic');
<<<<<<< HEAD
        if ((!card || card.length === 0) && element.closest('[data-product-id]').length) {
            var candidate = element.closest('[data-product-id]');
            if (!candidate.is('a')) {
                card = candidate;
            }
        }
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        if (!card || card.length === 0) {
            card = element.closest('[class*="product"], [class*="featured"]');
        }

        var name = card.find('h6 a, h6, .product__details__text h2, .product__details__text h3, .product__details__text h1').first().text().trim();
        if (!name) {
            name = card.find('h5 a, h5').first().text().trim();
        }

        var priceText = card.find('.product__item__price, .product__details__price, .product__item__text h5, .product__discount__item__text .product__item__price, .featured__item__text span, .latest-product__item__text span').first().text().trim();
        priceText = priceText.replace(/<[^>]+>/g, '');
        var price = parsePrice(priceText);

        var image = '';
        var bg = card.find('.set-bg').data('setbg');
        if (bg) {
            image = bg;
        } else if (card.find('img').length > 0) {
            image = card.find('img').first().attr('src');
        }
        if (!image) {
            image = 'img/product/default.jpg';
        }

        var category = card.find('span').first().text().trim() || 'other';
<<<<<<< HEAD
        var id = card.data('product-id');
        if (!id) {
            var idWrapper = element.closest('[data-product-id]');
            if (idWrapper.length) {
                id = idWrapper.data('product-id');
            }
        }
        if (!id) {
            var hrefLink = card.find('a[href*="id="]').first();
            if (hrefLink.length) {
                var href = hrefLink.attr('href');
                var match = href && href.match(/[?&]id=([^&]+)/);
                if (match) {
                    id = decodeURIComponent(match[1]);
                }
            }
        }
        if (!id && name) {
            id = findProductByName(name);
        }
        if (!id) {
            id = createStableProductId(name, image);
        }
=======
        var id = card.data('product-id') || createStableProductId(name, image);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091

        return {
            id: id,
            name: name || 'Producto',
            price: price,
            image: image,
            category: category
        };
    }

    function registerProductFromCard(element) {
        var product = getProductInfoFromCard(element);
        if (!findProductById(product.id)) {
            allProducts.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category
            });
            saveProducts();
        }
        return product;
    }

    function scanPageProducts() {
        $('.product__item, .product__discount__item, .featured__item, .latest-product__item').each(function() {
            registerProductFromCard($(this));
        });
    }

    function getApiBaseUrl() {
        var basePath = window.location.pathname.replace(/\/[^\/]*$/, '');
        return window.location.origin + (basePath === '' ? '' : basePath) + '/api';
    }

    function apiRequest(path, method, body) {
<<<<<<< HEAD
        var query = '';
        var action = path.replace(/^\//, '').split('?')[0];
        if (path.includes('?')) {
            query = '&' + path.split('?').slice(1).join('?');
        }
        var url = getApiBaseUrl() + '/index.php?action=' + action + query;
        if (path.startsWith('cart-remove/')) {
            url = getApiBaseUrl() + '/index.php?action=cart-remove&product_id=' + path.split('/').pop();
        } else if (path.startsWith('favorite-toggle/')) {
=======
        var url = getApiBaseUrl() + '/index.php?action=' + path.replace(/^\//, '').split('/')[0];
        if (path.includes('cart-remove')) {
            url = getApiBaseUrl() + '/index.php?action=cart-remove&product_id=' + path.split('/').pop();
        } else if (path.includes('favorite')) {
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            var parts = path.split('/');
            url = getApiBaseUrl() + '/index.php?action=favorite-toggle&product_id=' + parts[parts.length - 1];
        }
        
        var options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        };
        if (body !== undefined) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options).then(function(response) {
            return response.text().then(function(text) {
                var data;
                try {
                    data = text ? JSON.parse(text) : {};
                } catch (e) {
                    data = { message: text || 'Error parsing response' };
                }
                if (!response.ok) {
                    return Promise.reject(data);
                }
                return data;
            });
        });
    }

    function registerProductFromCard(element) {
        var product = getProductInfoFromCard(element);
        if (!findProductById(product.id)) {
            allProducts.push(product);
            saveProducts();
        }
        apiRequest('products', 'POST', product).catch(function() {
            // ignore backend failures for product registration
        });
        return product;
    }

    function scanPageProducts() {
        $('.product__item, .product__discount__item, .featured__item, .latest-product__item').each(function() {
            registerProductFromCard($(this));
        });
    }

    var authManager = {
        currentUser: null,
        currentUserId: null,

        init: function() {
            var storedUser = localStorage.getItem('currentUser');
            var storedUserId = localStorage.getItem('currentUserId');
            if (storedUser && storedUserId) {
                this.currentUser = storedUser;
                this.currentUserId = parseInt(storedUserId, 10);
            }
        },

<<<<<<< HEAD
verifySession: function() {

    var self = this;

    return apiRequest('status', 'GET')

    .then(function(data) {

        if (data.success && data.user) {
=======
 verifySession: function() {
    var self = this;

    return apiRequest('status', 'GET').then(function(data) {

        if (data && data.success && data.user) {
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091

            self.currentUser = data.user.username;
            self.currentUserId = data.user.id;

            localStorage.setItem('currentUser', data.user.username);
            localStorage.setItem('currentUserId', data.user.id);

<<<<<<< HEAD
            return shoppingCart.syncLocalCartToServer().then(function() {
                return data;
            }).catch(function() {
                return data;
            });

        } else {

            self.currentUser = null;
            self.currentUserId = null;

            localStorage.removeItem('currentUser');
            localStorage.removeItem('currentUserId');
            return data;
        }
=======
            return data;
        }

        self.currentUser = null;
        self.currentUserId = null;

        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserId');

        return data;

    }).catch(function() {

        self.currentUser = null;
        self.currentUserId = null;

        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserId');

        return Promise.resolve(null);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    });
},

        load: function() {
            return this.verifySession();
        },

registerUser: function(username, password) {

    var self = this;

    return apiRequest('register', 'POST', {
        username: username,
        password: password
    })

    .then(function(data) {

        self.currentUser = data.user.username;
        self.currentUserId = data.user.id;

        localStorage.setItem('currentUser', data.user.username);
        localStorage.setItem('currentUserId', data.user.id);

<<<<<<< HEAD
        return shoppingCart.syncLocalCartToServer().then(function() {
            return data;
        });
=======
        return data;
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    });
},

loginUser: function(username, password) {

    var self = this;

    return apiRequest('login', 'POST', {
        username: username,
        password: password
    })

    .then(function(data) {

        self.currentUser = data.user.username;
        self.currentUserId = data.user.id;

        localStorage.setItem('currentUser', data.user.username);
        localStorage.setItem('currentUserId', data.user.id);

<<<<<<< HEAD
        return shoppingCart.syncLocalCartToServer().then(function() {
            return data;
        });
    });
},

        logoutUser: function() {
            return apiRequest('logout', 'POST')
                .catch(function() {
                    // ignore logout failures and clear local session anyway
                })
                .then(function() {
                    this.currentUser = null;
                    this.currentUserId = null;
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('currentUserId');
                }.bind(this));
        },

        isLoggedIn: function() {
            return !!this.currentUser && !!this.currentUserId;
        },

        getHeaderText: function() {
            return this.isLoggedIn() ? 'Hola, ' + this.currentUser : 'Login';
        }
    };

    function refreshAccountHeader() {
        var text = authManager.getHeaderText();
        var href = authManager.isLoggedIn() ? '#' : getPageUrl('login.html');
        $('.header__top__right__auth a, .humberger__menu__wrapper .header__top__right__auth a').each(function() {
=======
        return data;
    });
},

            }


    function refreshAccountHeader() {
        var text = authManager.getHeaderText();
        var href = authManager.isLoggedIn() ? '#' : 'login.html';
        $('.header__top__right__auth a').each(function() {
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            $(this).html('<i class="fa fa-user"></i> ' + text).attr('href', href);
            if (authManager.isLoggedIn()) {
                $(this).off('click').on('click', function(e) {
                    e.preventDefault();
                    authManager.logoutUser().then(function() {
                        localStorage.removeItem('currentUser');
                        localStorage.removeItem('currentUserId');
                        authManager.currentUser = null;
                        authManager.currentUserId = null;
                        refreshAccountHeader();
                        shoppingCart.clearCart();
                        favoritesList.clearFavorites();
                        updateCartDisplay();
                        if (window.location.pathname.includes('login.html')) {
                            refreshLoginPageState();
                        }
                    });
                });
            } else {
                $(this).off('click');
            }
        });
    }

    function showAuthMessagePage(element, message, type) {
        element.removeClass('alert-success alert-danger alert-warning');
        element.addClass(type === 'success' ? 'alert-success' : type === 'warning' ? 'alert-warning' : 'alert-danger');
        element.text(message).show();
    }

<<<<<<< HEAD
    function refreshLoginPageState() {
        if ($('#loginPage').length === 0) {
            return;
        }
        var logged = authManager.isLoggedIn();
        $('#loginPageStatusText').text(logged ? 'Sesión activa como ' + authManager.currentUser : 'Aún no has iniciado sesión.');
        $('#loginPageLogout').toggle(logged);
        
        // Show/hide the tab container
        if (logged) {
            $('#authTabsContainer').slideUp(300);
        } else {
            $('#authTabsContainer').slideDown(300);
        }
    }

=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    function initLoginPage() {
        if ($('#loginPage').length === 0) {
            return;
        }

<<<<<<< HEAD
=======
        function refreshLoginPageState() {
            var logged = authManager.isLoggedIn();
            $('#loginPageStatusText').text(logged ? 'Sesión activa como ' + authManager.currentUser : 'Aún no has iniciado sesión.');
            $('#loginPageLogout').toggle(logged);
            
            // Show/hide the tab container
            if (logged) {
                $('#authTabsContainer').slideUp(300);
            } else {
                $('#authTabsContainer').slideDown(300);
            }
        }

>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        refreshLoginPageState();

        $('#loginForm').on('submit', function(e) {
            e.preventDefault();
            var username = $('#loginUsername').val().trim();
            var password = $('#loginPassword').val().trim();
            if (!username || !password) {
                showAuthMessagePage($('#loginStatus'), 'Completa usuario y contraseña.', 'warning');
                return;
            }
            // Show loading
            $('#loginBtn').prop('disabled', true);
            $('#loginBtnText').text('Iniciando...');
            $('#loginSpinner').show();
            authManager.loginUser(username, password)
                .then(function() {
                    return Promise.all([shoppingCart.loadCart(), favoritesList.loadFavorites()]);
                })
                .then(function() {
                    updateCartDisplay();
                    refreshAccountHeader();
                    refreshLoginPageState();
                    showAuthMessagePage($('#loginStatus'), 'Sesión iniciada correctamente.', 'success');
                    setTimeout(function() {
<<<<<<< HEAD
                        window.location.href = getPageUrl('shop-grid.html');
=======
                        window.location.href = 'shop-grid.html';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                    }, 1200);
                })
                .catch(function(error) {
                    showAuthMessagePage($('#loginStatus'), error.message || 'Usuario o contraseña incorrectos.', 'danger');
                })
                .finally(function() {
                    // Hide loading
                    $('#loginBtn').prop('disabled', false);
                    $('#loginBtnText').text('Entrar');
                    $('#loginSpinner').hide();
                });
        });

        $('#registerForm').on('submit', function(e) {
            e.preventDefault();
            var username = $('#registerUsername').val().trim();
            var password = $('#registerPassword').val().trim();
            if (!username || !password) {
                showAuthMessagePage($('#registerStatus'), 'Completa usuario y contraseña.', 'warning');
                return;
            }
            // Show loading
            $('#registerBtn').prop('disabled', true);
            $('#registerBtnText').text('Registrando...');
            $('#registerSpinner').show();
            authManager.registerUser(username, password)
                .then(function() {
                    return Promise.all([shoppingCart.loadCart(), favoritesList.loadFavorites()]);
                })
                .then(function() {
                    updateCartDisplay();
                    refreshAccountHeader();
                    refreshLoginPageState();
                    showAuthMessagePage($('#registerStatus'), '¡Registro exitoso! Redirigiendo a la tienda...', 'success');
                    // Clear form
                    $('#registerForm')[0].reset();
                    setTimeout(function() {
<<<<<<< HEAD
                        window.location.href = getPageUrl('shop-grid.html');
=======
                        window.location.href = 'shop-grid.html';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                    }, 1200);
                })
                .catch(function(error) {
                    var errorMessage = error.message;
                    if (errorMessage.includes('ya existe')) {
                        errorMessage = 'Este usuario ya está registrado. Intenta con un nombre de usuario diferente.';
                    } else if (errorMessage.includes('incorrectos')) {
                        errorMessage = 'Los datos son incorrectos. Verifica tu información.';
                    } else {
                        errorMessage = errorMessage || 'Error al registrar usuario. Inténtalo de nuevo.';
                    }
                    showAuthMessagePage($('#registerStatus'), errorMessage, 'danger');
                })
                .finally(function() {
                    // Hide loading
                    $('#registerBtn').prop('disabled', false);
                    $('#registerBtnText').text('Registrar');
                    $('#registerSpinner').hide();
                });
        });

        $('#loginPageLogout button').on('click', function() {
            authManager.logoutUser().then(function() {
                return Promise.all([shoppingCart.loadCart(), favoritesList.loadFavorites()]);
            }).then(function() {
                updateCartDisplay();
                refreshAccountHeader();
                refreshLoginPageState();
            });
        });
    }

    // Cart Management
    var shoppingCart = {
        items: [],
<<<<<<< HEAD
        localCartKey: 'oganiGuestCart',

        loadLocalCart: function() {
            var saved = localStorage.getItem(this.localCartKey);
            var cartData = [];
            try {
                cartData = saved ? JSON.parse(saved) : [];
            } catch (e) {
                cartData = [];
            }
            this.items = cartData.map(function(item) {
                var product = findProductById(item.productId);
                if (product) {
                    return {
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: item.quantity
                    };
                }
                return {
                    productId: item.productId,
                    name: item.name || 'Producto',
                    price: parseFloat(item.price) || 0,
                    image: item.image || 'img/product/default.jpg',
                    quantity: item.quantity
                };
            });
            return Promise.resolve(this.items);
        },

        saveLocalCart: function() {
            var savedItems = this.items.map(function(item) {
                return {
                    productId: item.productId || item.product_id,
                    quantity: item.quantity
                };
            });
            localStorage.setItem(this.localCartKey, JSON.stringify(savedItems));
        },

        addLocalItem: function(productId, quantity) {
            quantity = quantity || 1;
            var product = this.getProductById(productId);
            if (!product) {
                return false;
            }
            var existing = this.items.find(function(item) {
                return normalizeId(item.productId || item.product_id) === normalizeId(productId);
            });
            if (existing) {
                existing.quantity = (existing.quantity || 0) + quantity;
            } else {
                this.items.push({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }
            this.saveLocalCart();
            updateCartDisplay();
            return true;
        },

        removeLocalItem: function(productId) {
            this.items = this.items.filter(function(item) {
                return normalizeId(item.productId || item.product_id) !== normalizeId(productId);
            });
            this.saveLocalCart();
            updateCartDisplay();
        },

        updateLocalQuantity: function(productId, quantity) {
            quantity = Math.max(0, quantity);
            var existing = this.items.find(function(item) {
                return normalizeId(item.productId || item.product_id) === normalizeId(productId);
            });
            if (!existing) {
                return false;
            }
            if (quantity === 0) {
                this.removeLocalItem(productId);
                return true;
            }
            existing.quantity = quantity;
            this.saveLocalCart();
            updateCartDisplay();
            return true;
        },

        loadCart: function() {
            if (!authManager.isLoggedIn()) {
                return this.loadLocalCart();
            }
            return apiRequest('cart', 'GET')
                .then(function(data) {
                    var items = data.items || data.cart || [];
                    shoppingCart.items = (items || []).map(function(item) {
=======

        loadCart: function() {
            if (!authManager.isLoggedIn()) {
                this.items = [];
                return Promise.resolve([]);
            }
            return apiRequest('cart', 'GET')
                .then(function(data) {
shoppingCart.items = (data.items || []).map(function(item) {
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                        return Object.assign({}, item, {
                            productId: item.productId || item.product_id
                        });
                    });
                    return shoppingCart.items;
                })
                .catch(function() {
                    shoppingCart.items = [];
                    return shoppingCart.items;
                });
        },

        addItem: function(productId, quantity) {
<<<<<<< HEAD
            quantity = quantity || 1;
            if (!authManager.isLoggedIn()) {
                var added = this.addLocalItem(productId, quantity);
                return Promise.resolve(added);
            }
=======
            if (!authManager.isLoggedIn()) {
                return Promise.resolve(false);
            }
            quantity = quantity || 1;
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            var product = this.getProductById(productId);
            if (!product) {
                return Promise.resolve(false);
            }
            return apiRequest('cart', 'POST', {
                    product_id: productId,
                    quantity: quantity
                })
                .then(function() {
                    return shoppingCart.loadCart();
                })
                .then(function() {
                    updateCartDisplay();
                    return true;
                })
<<<<<<< HEAD
                .catch(function(err) {
                    console.error('Error guardando producto en carrito:', err);
=======
                .catch(function() {
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                    return false;
                });
        },

        removeItem: function(productId) {
            if (!authManager.isLoggedIn()) {
<<<<<<< HEAD
                this.removeLocalItem(productId);
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                return Promise.resolve();
            }
            return apiRequest('cart-remove/' + productId, 'DELETE')
                .then(function() {
                    return shoppingCart.loadCart();
                })
                .then(function() {
                    updateCartDisplay();
                })
                .catch(function() {
                    updateCartDisplay();
                });
        },

        updateQuantity: function(productId, quantity) {
            quantity = Math.max(0, quantity);
            if (!authManager.isLoggedIn()) {
<<<<<<< HEAD
                return Promise.resolve(this.updateLocalQuantity(productId, quantity));
=======
                return Promise.resolve();
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            }
            if (quantity === 0) {
                return this.removeItem(productId);
            }
            return apiRequest('cart', 'POST', {
                    product_id: productId,
                    quantity: quantity
                })
                .then(function() {
                    return shoppingCart.loadCart();
                })
                .then(function() {
                    updateCartDisplay();
                })
                .catch(function() {
                    updateCartDisplay();
                });
        },

        findCartItem: function(productId) {
            return this.items.find(function(item) {
                return normalizeId(item.product_id || item.productId) === normalizeId(productId);
            });
        },

        getProductById: function(productId) {
            return allProducts.find(function(product) {
                return normalizeId(product.id) === normalizeId(productId);
            });
        },

        getTotalPrice: function() {
            return this.items.reduce(function(total, item) {
                return total + (item.price * item.quantity);
            }, 0);
        },

        getItemCount: function() {
            return this.items.reduce(function(count, item) {
                return count + item.quantity;
            }, 0);
        },

        clearCart: function() {
            var removes = this.items.map(function(item) {
                return shoppingCart.removeItem(item.product_id || item.productId);
            });
            return Promise.all(removes).then(function() {
                shoppingCart.items = [];
                updateCartDisplay();
            });
        },

        clear: function() {
            return this.clearCart();
<<<<<<< HEAD
        },

        syncLocalCartToServer: function() {
            if (!authManager.isLoggedIn()) {
                return Promise.resolve();
            }
            var saved = localStorage.getItem(this.localCartKey);
            var items = [];
            try {
                items = saved ? JSON.parse(saved) : [];
            } catch (e) {
                items = [];
            }
            if (!items.length) {
                return Promise.resolve();
            }
            var promises = items.map(function(item) {
                return apiRequest('cart', 'POST', {
                    product_id: item.productId,
                    quantity: item.quantity
                });
            });
            return Promise.all(promises)
                .then(function() {
                    localStorage.removeItem(shoppingCart.localCartKey);
                    return shoppingCart.loadCart();
                })
                .catch(function() {
                    return shoppingCart.loadCart();
                });
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        }
    };

    // Favorites Management
    var favoritesList = {
        items: [],
<<<<<<< HEAD
        details: {},
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091

        loadFavorites: function() {
            if (!authManager.isLoggedIn()) {
                this.items = [];
<<<<<<< HEAD
                this.details = {};
                return Promise.resolve([]);
            }
            return apiRequest('favorites', 'GET')
                .then(function(data) {
                    favoritesList.details = {};
                    favoritesList.items = (data.favorites || []).map(function(item) {
                        var id = normalizeId(item.product_id);
                        favoritesList.details[id] = item;
                        return id;
=======
                return Promise.resolve([]);
            }
            return ClientDB.getFavorites(authManager.currentUserId)
                .then(function(data) {
                    favoritesList.items = (data.favorites || []).map(function(item) {
                        return normalizeId(item.product_id);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                    });
                    return favoritesList.items;
                })
                .catch(function() {
                    favoritesList.items = [];
<<<<<<< HEAD
                    favoritesList.details = {};
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                    return favoritesList.items;
                });
        },

<<<<<<< HEAD
        getFavoriteProduct: function(productId) {
            var id = normalizeId(productId);
            return this.details[id] || findProductById(id);
        },

=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        addItem: function(productId) {
            if (!authManager.isLoggedIn()) {
                return Promise.reject(new Error('login_required'));
            }
<<<<<<< HEAD
            var id = normalizeId(productId);
            if (!id || id === 'favorites' || id === 'cart' || id === 'undefined') {
                return Promise.reject(new Error('invalid_product_id'));
            }
            return apiRequest('favorite-toggle/' + id, 'POST')
                .then(function(data) {
                    if (data.favorite && favoritesList.items.indexOf(id) === -1) {
                        favoritesList.items.push(id);
                        var product = findProductById(id);
                        if (product) {
                            favoritesList.details[id] = {
                                product_id: id,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                category: product.category
                            };
                        }
                    }
                    if (!data.favorite) {
                        delete favoritesList.details[id];
                    }
                    return data;
=======
            return ClientDB.addFavorite(authManager.currentUserId, productId)
                .then(function() {
                    return favoritesList.loadFavorites();
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                });
        },

        removeItem: function(productId) {
            if (!authManager.isLoggedIn()) {
                return Promise.reject(new Error('login_required'));
            }
<<<<<<< HEAD
            var id = normalizeId(productId);
            if (!id || id === 'favorites' || id === 'cart' || id === 'undefined') {
                return Promise.reject(new Error('invalid_product_id'));
            }
            return apiRequest('favorite-toggle/' + id, 'POST')
                .then(function(data) {
                    if (!data.favorite) {
                        favoritesList.items = favoritesList.items.filter(function(item) {
                            return item !== id;
                        });
                        delete favoritesList.details[id];
                    }
                    return data;
=======
            return ClientDB.removeFavorite(authManager.currentUserId, productId)
                .then(function() {
                    return favoritesList.loadFavorites();
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                });
        },

        toggle: function(productId) {
            if (!authManager.isLoggedIn()) {
                return Promise.reject(new Error('login_required'));
            }
            var id = normalizeId(productId);
            var currentlyFavorite = favoritesList.isFavorite(id);
            if (currentlyFavorite) {
<<<<<<< HEAD
                return favoritesList.removeItem(id).then(function(data) {
                    return data.favorite; // false
                });
            }
            return favoritesList.addItem(id).then(function(data) {
                return data.favorite; // true
=======
                return favoritesList.removeItem(id).then(function() {
                    return false;
                });
            }
            return favoritesList.addItem(id).then(function() {
                return true;
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            });
        },

        isFavorite: function(productId) {
            return this.items.indexOf(normalizeId(productId)) > -1;
        },

        clearFavorites: function() {
<<<<<<< HEAD
            favoritesList.items = [];
            return Promise.resolve();
=======
            var removes = this.items.map(function(id) {
                return favoritesList.removeItem(id);
            });
            return Promise.all(removes).then(function() {
                favoritesList.items = [];
            });
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        },

        clear: function() {
            return this.clearFavorites();
        }
    };

<<<<<<< HEAD
=======
    // Initialize database and load data
    initDB().then(function() {
        authManager.init();
        shoppingCart.loadCart();
        favoritesList.loadFavorites();
        loadProducts();
        refreshAccountHeader();
    });
    
    // Update Cart Display in Header
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    function updateCartDisplay() {
        var count = shoppingCart.getItemCount();
        var total = shoppingCart.getTotalPrice();
        var favoritesCount = favoritesList.items.length;
        
        // Update header cart count and total
        $('.header__cart__price span').text('$' + total.toFixed(2));
        $('.header__cart .fa-shopping-bag').siblings('span').text(count);
        $('.header__cart .fa-heart').siblings('span').text(favoritesCount);
        
        // Update humberger cart
        $('.humberger__menu__cart .fa-shopping-bag').siblings('span').text(count);
        $('.humberger__menu__cart .fa-heart').siblings('span').text(favoritesCount);
        
        // Update shopping cart page if on that page
        if ($('.shoping-cart').length > 0) {
            displayShoppingCart();
        }

<<<<<<< HEAD
        // Update checkout page if on that page
        if ($('.checkout').length > 0) {
            displayCheckoutOrder();
        }

=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        updateFavoriteIcons();
    }

    function ensureFavoritesModal() {
        if ($('#favoritesModal').length > 0) {
            return;
        }

        var modalHtml = '<div class="modal fade" id="favoritesModal" tabindex="-1" role="dialog" aria-labelledby="favoritesModalLabel" aria-hidden="true">' +
                        '<div class="modal-dialog modal-lg" role="document">' +
                        '<div class="modal-content">' +
                        '<div class="modal-header">' +
                        '<h5 class="modal-title" id="favoritesModalLabel">Mis Favoritos</h5>' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">' +
                        '<span aria-hidden="true">&times;</span>' +
                        '</button>' +
                        '</div>' +
                        '<div class="modal-body" id="favoritesList"></div>' +
                        '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
        $('body').append(modalHtml);
    }

    function setFavoriteIconState(icon, active) {
        if (active) {
            icon.addClass('favorited');
            icon.closest('a').css('color', '#ff6b6b');
        } else {
            icon.removeClass('favorited');
            icon.closest('a').css('color', '');
        }
    }

    function updateFavoriteIcons() {
<<<<<<< HEAD
        // Update heart icons in product cards
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        $('.product__item, .product__discount__item, .featured__item, .latest-product__item').each(function() {
            var card = $(this);
            var product = getProductInfoFromCard(card);
            var isFav = favoritesList.isFavorite(product.id);
            card.find('i.fa-heart').each(function() {
                setFavoriteIconState($(this), isFav);
            });
        });
<<<<<<< HEAD
        
        // Update favorite buttons in lists
        $('.favorite-btn').each(function() {
            var btn = $(this);
            var productId = btn.data('product-id');
            var isFav = favoritesList.isFavorite(productId);
            if (isFav) {
                btn.addClass('favorited');
                btn.closest('a').css('color', '#ff6b6b');
            } else {
                btn.removeClass('favorited');
                btn.closest('a').css('color', '');
            }
        });
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    }

    function showFavoritesList() {
        if (!authManager.isLoggedIn()) {
            showNotification('Inicia sesión para ver tus favoritos');
            return;
        }

<<<<<<< HEAD
        return favoritesList.loadFavorites().then(function() {
            ensureFavoritesModal();

            var html = '';
            if (favoritesList.items.length === 0) {
                html = '<p>No tienes productos en favoritos</p>';
            } else {
                html = '<div class="row">';
                favoritesList.items.forEach(function(id) {
                    var product = favoritesList.getFavoriteProduct(id);
                    if (product) {
                        html += '<div class="col-md-6 mb-3">' +
                                '<div class="card">' +
                                '<img src="' + product.image + '" class="card-img-top" alt="' + product.name + '">' +
                                '<div class="card-body">' +
                                '<h5 class="card-title">' + product.name + '</h5>' +
                                '<p class="card-text">$' + product.price.toFixed(2) + '</p>' +
                                '<button class="btn btn-primary add-to-cart-from-favorites" data-product-id="' + id + '">Agregar al carrito</button>' +
                                '<button class="btn btn-outline-danger ml-2 remove-from-favorites" data-product-id="' + id + '">Eliminar</button>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                    }
                });
                html += '</div>';
            }
            $('#favoritesList').html(html);
            $('#favoritesModal').modal('show');

            // Attach event handlers to buttons in the modal
            $('.add-to-cart-from-favorites').off('click').on('click', function() {
                var productId = $(this).data('product-id');
                shoppingCart.addItem(productId, 1).then(function() {
                    showNotification('Producto agregado al carrito');
                });
            });

            $('.remove-from-favorites').off('click').on('click', function() {
                var productId = $(this).data('product-id');
                favoritesList.removeItem(productId).then(function() {
                    showFavoritesList();
                    updateCartDisplay();
                });
=======
        ensureFavoritesModal();

        var html = '';
        if (favoritesList.items.length === 0) {
            html = '<p>No tienes productos en favoritos</p>';
        } else {
            html = '<div class="row">';
            favoritesList.items.forEach(function(id) {
                var product = findProductById(id);
                if (product) {
                    html += '<div class="col-md-6 mb-3">' +
                            '<div class="card">' +
                            '<img src="' + product.image + '" class="card-img-top" alt="' + product.name + '">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title">' + product.name + '</h5>' +
                            '<p class="card-text">$' + product.price.toFixed(2) + '</p>' +
                            '<button class="btn btn-primary add-to-cart-from-favorites" data-product-id="' + product.id + '">Agregar al carrito</button>' +
                            '<button class="btn btn-outline-danger ml-2 remove-from-favorites" data-product-id="' + product.id + '">Eliminar</button>' +
                            '</div>' +
                            '</div>' +
                            '</div>';
                }
            });
            html += '</div>';
        }
        $('#favoritesList').html(html);
        $('#favoritesModal').modal('show');

        $('.add-to-cart-from-favorites').off('click').on('click', function() {
            var productId = $(this).data('product-id');
            shoppingCart.addItem(productId, 1).then(function() {
                showNotification('Producto agregado al carrito');
            });
        });

        $('.remove-from-favorites').off('click').on('click', function() {
            var productId = $(this).data('product-id');
            favoritesList.removeItem(productId).then(function() {
                showFavoritesList();
                updateCartDisplay();
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            });
        });
    }

    function attachProductCardHandlers() {
        $(document).on('click', '.product__item__pic__hover a, .product__discount__item__pic__hover a, .featured__item__pic__hover a, .latest-product__item__pic__hover a', function(e) {
            e.preventDefault();
            var icon = $(this).find('i');
            var product = registerProductFromCard($(this));

            if (icon.hasClass('fa-shopping-cart')) {
                shoppingCart.addItem(product.id, 1).then(function(success) {
                    if (success) {
                        showNotification('Producto agregado al carrito: ' + product.name);
                    } else {
                        showNotification('Debes iniciar sesión para agregar productos al carrito');
                    }
                });
            } else if (icon.hasClass('fa-heart')) {
                if (!authManager.isLoggedIn()) {
                    showNotification('Inicia sesión para guardar favoritos');
                    return;
                }
                favoritesList.toggle(product.id).then(function(becameFavorite) {
                    updateCartDisplay();
                    setFavoriteIconState(icon, becameFavorite);
                    showNotification(becameFavorite ? 'Agregado a favoritos: ' + product.name : 'Removido de favoritos: ' + product.name);
                }).catch(function(err) {
                    if (err && err.message === 'login_required') {
                        showNotification('Inicia sesión para guardar favoritos');
                    }
                });
            }
        });
    }

<<<<<<< HEAD
    function attachFavoriteButtonHandlers() {
        $(document).on('click', '.favorite-btn, .heart-icon', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!authManager.isLoggedIn()) {
                showNotification('Inicia sesión para guardar favoritos');
                return;
            }
            
            var btn = $(this);
            var productId = btn.data('product-id');
            
            // If no direct product ID, try to get from card's data attribute
            if (!productId) {
                var card = btn.closest('[data-product-id]');
                if (card.length) {
                    productId = card.data('product-id');
                }
            }
            
            // Validate product ID - must not be generated/fake ID
            if (!productId || productId === 'undefined' || productId === '' || productId === 'favorites' || productId === 'cart') {
                showNotification('Este producto no tiene un ID válido. Asegúrate de estar en una página de producto válida.');
                return;
            }
            
            favoritesList.toggle(productId).then(function(becameFavorite) {
                if (becameFavorite) {
                    btn.addClass('favorited');
                    btn.closest('a').css('color', '#ff6b6b');
                    showNotification('Agregado a favoritos');
                } else {
                    btn.removeClass('favorited');
                    btn.closest('a').css('color', '');
                    showNotification('Removido de favoritos');
                }
                updateCartDisplay();
            }).catch(function(err) {
                if (err && err.message === 'login_required') {
                    showNotification('Inicia sesión para guardar favoritos');
                } else {
                    showNotification('Error al actualizar favorito: ' + (err ? err.message : 'desconocido'));
                }
            });
        });
    }

=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    // Display Shopping Cart Page
    function displayShoppingCart() {
        var tbody = $('.shoping__cart__table tbody');
        var items = shoppingCart.items;
        
        if (items.length === 0) {
            tbody.html('<tr><td colspan="5" style="text-align:center; padding:40px;">Tu carrito está vacío</td></tr>');
            $('.shoping__cart__btns').hide();
            $('.shoping__checkout').html('<h5>Cart Total</h5><ul><li>Subtotal <span>$0.00</span></li><li>Total <span>$0.00</span></li></ul>');
            return;
        }
        
        var html = '';
        items.forEach(function(item) {
            var productId = item.productId || item.product_id;
            var itemTotal = (item.price * item.quantity).toFixed(2);
            html += '<tr data-product-id="' + productId + '">' +
                    '<td class="shoping__cart__item">' +
<<<<<<< HEAD
                    '<img src="' + item.image + '" alt="" style="width:90px;height:90px;object-fit:cover;border-radius:6px;margin-right:20px;">' +
=======
                    '<img src="' + item.image + '" alt="">' +
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                    '<h5>' + item.name + '</h5>' +
                    '</td>' +
                    '<td class="shoping__cart__price">$' + item.price.toFixed(2) + '</td>' +
                    '<td class="shoping__cart__quantity">' +
                    '<div class="quantity">' +
                    '<div class="pro-qty quantity-input" data-product-id="' + productId + '">' +
                    '<input type="text" value="' + item.quantity + '">' +
                    '</div>' +
                    '</div>' +
                    '</td>' +
                    '<td class="shoping__cart__total">$' + itemTotal + '</td>' +
                    '<td class="shoping__cart__item__close">' +
                    '<span class="icon_close remove-from-cart" data-product-id="' + productId + '"></span>' +
                    '</td>' +
                    '</tr>';
        });
        
        tbody.html(html);
        
        // Update totals
        var subtotal = shoppingCart.getTotalPrice();
        var total = subtotal; // Puedes agregar impuestos/envío aquí
        
        $('.shoping__checkout ul').html(
            '<li>Subtotal <span>$' + subtotal.toFixed(2) + '</span></li>' +
            '<li>Total <span>$' + total.toFixed(2) + '</span></li>'
        );
        
        // Rebind quantity handlers
        bindQuantityHandlers();
        bindRemoveHandlers();
    }
<<<<<<< HEAD

    function displayCheckoutOrder() {
        var itemsList = $('.checkout-order-items');
        var subtotalEl = $('.checkout__order__subtotal span');
        var totalEl = $('.checkout__order__total span');
        var items = shoppingCart.items;

        if (items.length === 0) {
            itemsList.html('<li>No items in cart</li>');
            subtotalEl.text('$0.00');
            totalEl.text('$0.00');
            return;
        }

        var html = '';
        var subtotal = 0;
        items.forEach(function(item) {
            var itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            html += '<li>' + item.name + ' <span>$' + itemTotal.toFixed(2) + '</span></li>';
        });

        itemsList.html(html);
        subtotalEl.text('$' + subtotal.toFixed(2));
        totalEl.text('$' + subtotal.toFixed(2)); // Puedes agregar impuestos/envío aquí
    }
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    
    // Bind Quantity Change Handlers
    function bindQuantityHandlers() {
        $('.quantity-input').each(function() {
            var productId = $(this).data('product-id');
            var input = $(this).find('input');
            var currentVal = parseInt(input.val());
            
            $(this).find('.qtybtn').remove();
            $(this).prepend('<span class="dec qtybtn quantity-dec">-</span>');
            $(this).append('<span class="inc qtybtn quantity-inc">+</span>');
        });
        
        $('.quantity-inc').off('click').on('click', function() {
            var input = $(this).siblings('input');
            var productId = $(this).closest('.quantity-input').data('product-id');
            var newVal = parseInt(input.val()) + 1;
            input.val(newVal);
            shoppingCart.updateQuantity(productId, newVal);
        });
        
        $('.quantity-dec').off('click').on('click', function() {
            var input = $(this).siblings('input');
            var productId = $(this).closest('.quantity-input').data('product-id');
            var newVal = Math.max(0, parseInt(input.val()) - 1);
            input.val(newVal);
            shoppingCart.updateQuantity(productId, newVal);
        });
    }
    
    // Bind Remove from Cart Handlers
    function bindRemoveHandlers() {
        $('.remove-from-cart').off('click').on('click', function() {
            var productId = $(this).data('product-id');
            shoppingCart.removeItem(productId);
        });
    }
    
    // Add to Cart - Product Pages
    function initAddToCartButtons() {
        $('.featured__item__pic__hover li:last-child a, .product__item__pic__hover li:last-child a, .latest-product__item__pic__hover li:last-child a').off('click').on('click', function(e) {
            e.preventDefault();
            var product = registerProductFromCard($(this));
            shoppingCart.addItem(product.id, 1).then(function(success) {
                if (success) {
                    showNotification('Producto agregado al carrito: ' + product.name);
                } else {
                    showNotification('Debes iniciar sesión para agregar productos al carrito');
                }
            });
        });
    }
    
    
    // Toggle Favorites - Product Pages
    function initFavoriteButtons() {
        $('.featured__item__pic__hover li:first-child a, .product__item__pic__hover li:first-child a, .latest-product__item__pic__hover li:first-child a').off('click').on('click', function(e) {
            e.preventDefault();
            if (!authManager.isLoggedIn()) {
                showNotification('Inicia sesión para guardar favoritos');
                return;
            }
            var product = registerProductFromCard($(this));
            var icon = $(this).find('i');
            favoritesList.toggle(product.id).then(function(becameFavorite) {
                updateCartDisplay();
                updateFavoriteIcon(icon, becameFavorite);
                showNotification(becameFavorite ? 'Agregado a favoritos: ' + product.name : 'Removido de favoritos: ' + product.name);
            }).catch(function(err) {
                if (err && err.message === 'login_required') {
                    showNotification('Inicia sesión para guardar favoritos');
                }
            });
        });

        updateFavoriteIcons();
    }
    
    // Update Favorite Icon
    function updateFavoriteIcon(icon, isFavorite) {
        if (isFavorite) {
            icon.addClass('favorited');
            icon.closest('a').css('color', '#ff6b6b');
        } else {
            icon.removeClass('favorited');
            icon.closest('a').css('color', 'inherit');
        }
    }
    
    // Show Notification
    function showNotification(message) {
        // Simple notification (puedes mejorar esto con un toast better)
        var notification = $('<div style="position:fixed; top:20px; right:20px; background:#201C80; color:white; padding:15px 20px; border-radius:5px; z-index:9999; animation:slideIn 0.3s ease;">' + message + '</div>');
        $('body').append(notification);
        
        setTimeout(function() {
            notification.fadeOut(function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // Shop Details Page - Add to Cart
    function initShopDetailsAddToCart() {
<<<<<<< HEAD
        $('.product__details__text .primary-btn, .product__details__text a.primary-btn').off('click').on('click', function(e) {
            e.preventDefault();
            
            var productId = $(this).data('product-id') || (currentProductDetails ? currentProductDetails.id : null);
            var quantity = parseInt($('.pro-qty input').val()) || 1;
            var productName = currentProductDetails ? currentProductDetails.name : $('h1, .product__details__text h2').text().trim();

            if (!productId) {
                window.location.href = getPageUrl('shop-grid.html');
                return;
            }

            shoppingCart.addItem(productId, quantity).then(function(success) {
=======
        $('button:contains("ADD TO CARD"), button:contains("ADD TO CART"), button:contains("Añadir al carrito"), button:contains("AÑADIR AL CARRITO")').off('click').on('click', function(e) {
            e.preventDefault();
            
            var productName = $('h1, .product__details__text h2').text().trim();
            var priceText = $('.product__details__price').text().trim();
            var price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            var quantity = parseInt($('.pro-qty input').val()) || 1;
            
            var productId = findProductByName(productName);
            
            var addPromise;
            if (productId) {
                addPromise = shoppingCart.addItem(productId, quantity);
            } else {
                var tempId = allProducts.length + 1;
                allProducts.push({
                    id: tempId,
                    name: productName,
                    price: price,
                    image: $('.product__details__pic__item--large').attr('src') || 'img/product/default.jpg',
                    category: 'other'
                });
                saveProducts();
                addPromise = shoppingCart.addItem(tempId, quantity);
            }
            addPromise.then(function(success) {
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                if (success) {
                    showNotification('Producto agregado: ' + productName + ' (x' + quantity + ')');
                } else {
                    showNotification('Debes iniciar sesión para agregar productos al carrito');
                }
            });
        });
    }
    
    // Checkout Page
    function initCheckout() {
        $('.checkout-btn, button:contains("PLACE ORDER"), button:contains("REALIZAR PEDIDO")').off('click').on('click', function(e) {
            e.preventDefault();
            
            if (shoppingCart.items.length === 0) {
                showNotification('El carrito está vacío');
                return;
            }
            
            // Validar formulario
            var firstName = $('#fname').val();
            var email = $('#email').val();
            var address = $('#address').val();
            
            if (!firstName || !email || !address) {
                showNotification('Por favor completa todos los campos requeridos');
                return;
            }
            
            // Simular procesamiento del pedido
            showNotification('¡Pedido realizado exitosamente! Gracias por tu compra.');
            
            // Limpiar carrito después de compra exitosa
            setTimeout(function() {
                shoppingCart.clear();
<<<<<<< HEAD
                window.location.href = getRootUrl('index.html');
=======
                window.location.href = 'index.html';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            }, 2000);
        });
    }
    
    // Proceed to Checkout Button
    $('.primary-btn.cart-btn-right, .shoping__checkout .primary-btn').off('click').on('click', function(e) {
        if ($(this).text().includes('PROCEED') || $(this).text().includes('IR A')) {
            // Ya funciona con href, no modificar
            return;
        }
    });
    
    // Continue Shopping Button
    $('.primary-btn.cart-btn:not(.cart-btn-right)').off('click').on('click', function(e) {
        if ($(this).text().includes('CONTINUE') || $(this).text().includes('CONTINUAR')) {
            e.preventDefault();
<<<<<<< HEAD
            window.location.href = getPageUrl('shop-grid.html');
=======
            window.location.href = 'shop-grid.html';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        }
    });
    
    
    // Initialize on document ready
    $(document).ready(function() {
<<<<<<< HEAD
        loadProducts().then(function() {
            return authManager.load().catch(function() {
                return Promise.resolve();
            });
        }).then(function() {
            return Promise.all([
                shoppingCart.loadCart(),
                favoritesList.loadFavorites()
            ]);
        }).then(function() {
=======
        loadProducts();
        scanPageProducts();
        authManager.load().then(function() {
            shoppingCart.loadCart();
            favoritesList.loadFavorites();
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            updateCartDisplay();
            refreshAccountHeader();

            initLoginPage();
            attachProductCardHandlers();
<<<<<<< HEAD
            attachFavoriteButtonHandlers();

            // Load product details if on shop-details page
            if (window.location.pathname.includes('shop-details.html')) {
                loadProductDetails();
            }

            // Render featured products if on index page
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
                renderFeaturedProducts();
            }

            // Render latest products if on shop-grid page
            if (window.location.pathname.includes('shop-grid.html')) {
                renderLatestProducts();
                renderDiscountProducts();

                $('#shop-search-form').on('submit', function(e) {
                    e.preventDefault();
                    currentSearchQuery = $('#search-query').val().trim();
                    currentSearchCategory = $('#search-category').val() || '';
                    updateCategoryActiveState();
                    applyShopGridFilters(1);
                });

                $('#search-category').on('change', function() {
                    currentSearchCategory = $(this).val() || '';
                    updateCategoryActiveState();
                    applyShopGridFilters(1);
                });

                $(document).on('click', '.hero__categories ul li a, .sidebar__item.department-list ul li a', function(e) {
                    e.preventDefault();
                    var mappedCategory = $(this).data('category');

                    currentSearchCategory = mappedCategory ? String(mappedCategory) : '';
                    currentSearchQuery = '';
                    $('#search-query').val('');
                    $('#search-category').val(currentSearchCategory);
                    if (typeof $('#search-category').niceSelect === 'function') {
                        $('#search-category').niceSelect('update');
                    }
                    updateCategoryActiveState();
                    applyShopGridFilters(1);
                });
            }
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            initAddToCartButtons();
            initFavoriteButtons();
            initShopDetailsAddToCart();
            initCheckout();
            
            if ($('.shoping-cart').length > 0) {
                displayShoppingCart();
            }
            
            $('.header__cart ul li a, .humberger__menu__cart ul li a').on('click', function(e) {
                if ($(this).find('.fa-shopping-bag').length > 0) {
                    e.preventDefault();
<<<<<<< HEAD
                    window.location.href = getPageUrl('shoping-cart.html');
=======
                    window.location.href = 'shoping-cart.html';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                } else if ($(this).find('.fa-heart').length > 0) {
                    e.preventDefault();
                    showFavoritesList();
                }
            });
<<<<<<< HEAD
        }).catch(function(err) {
            console.warn('Initialization error', err);
            refreshAccountHeader();
=======
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        });
    });

})(jQuery);