export const introduccionContent = [
    // Introduccion 
    {
        type: 'section',
        title: 'Introduccion',
        showInIndex: true,
        
        blocks: [
            {
                type: 'text',
                title: 'Introducción al contenido de estudio de Vidón Bar',
                showInIndex: false,
                content: `En esta sección encontrarás la base común que todo el equipo de Vidón Bar debe conocer. Desde nuestra filosofía de servicio hasta las normas generales de conducta y presentación personal, este módulo sienta las bases para brindar una experiencia coherente y profesional, sin importar el área en la que te desempeñes.`
            }
        ]
    },

    {
        type: 'section',
        title: 'Carta',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Tablas y Entradas',
                columns: ['Producto', 'Descripción', 'Precio'],
                showInIndex: true,
                data: [
                    ['Rabas', 'Para dos personas', '$17.400'],
                    ['Entradita', 'Panes con mayonesas caseras saborizadas', '$2.500'],
                    ['Tablita', 'Salame, queso, pan y aceitunas', '$8.200'],
                    ['Tabla Fría', 'Jamón cocido, jamón crudo, salame, mortadela, bondiola, queso, roquefort, pan y aceitunas', '$22.100'],
                    ['Tabla Caliente', 'Rabas, pinchos de pollo y ternera, milanesitas, salchichas, papas fritas, queso cheddar y pan', '$29.400'],
                    ['Tabla Vidón', 'Rabas, pinchos de pollo y ternera, milanesitas, salchichas, papas fritas, patitas de pollo, queso cheddar, jamón cocido, jamón crudo, salame, queso, mortadela, bondiola, roquefort, pan y aceitunas', '$38.900']
                ]
            },
            {
                type: 'table',
                title: '¿Unas papas?',
                showInIndex: true,
                columns: ['Variedad', 'Precio'],
                data: [
                    ['Clásicas', '$10.200'],
                    ['Con Huevo', '$11.000'],
                    ['Con Cheddar', '$11.900'],
                    ['Con Cheddar y Panceta', '$12.800'],
                    ['Vidón (huevo, crema, panceta, cheddar, provenzal)', '$13.500'],
                    ['Provenzal (salchichas, ajo, perejil y cheddar)', '$11.900']
                ]
            },
            {
                type: 'table',
                title: 'Ensaladas',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Completa', 'Lechuga, tomate, huevo, cebolla, repollo y zanahoria', '$9.500'],
                    ['Caesar', 'Lechuga, croutones, queso, pollo, salsa caesar', '$9.500'],
                    ['Vidón', 'Rúcula, lechuga, tomate, jamón cocido, palmitos, champiñones, huevo y queso', '$9.500']
                ]
            },
            {
                type: 'table',
                title: 'Lomos',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Lomo Completo', 'Pan, lechuga, tomate, queso, jamón cocido y huevo', '$16.500'],
                    ['Lomo Vidón', 'Lomo completo más palmitos y morrones', '$17.700'],
                    ['Lomo Americano', 'Lomo completo más cheddar y panceta', '$17.700'],
                    ['Lomo Mejicano', 'Lomo completo más cebolla, pimiento y picante', '$17.700'],
                    ['Lomo Vegetariano', 'Bife de mix de vegetales, lechuga, tomate y rúcula – opcional queso y huevo', '$14.500']
                ]
            },
            {
                type: 'table',
                title: 'Hamburguesas',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Argenta', 'Doble hamburguesa, lechuga, huevo, jamón cocido, queso', '$13.700'],
                    ['Yankee', 'Doble hamburguesa, queso cheddar y panceta', '$13.700'],
                    ['Vidón', 'Doble hamburguesa, tomate, lechuga, queso, panceta y huevo', '$13.700'],
                    ['Vegetariana', 'Doble hamburguesa de vegetales, lechuga, tomate, queso y huevo', '$13.200']
                ]
            },
            {
                type: 'table',
                title: 'Tostados y Sándwiches',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Tostado', 'Jamón cocido y queso', '$10.300'],
                    ['Primavera', 'Jamón cocido, queso, lechuga y tomate', '$10.900'],
                    ['Crudo', 'Jamón crudo y queso', '$11.200'],
                    ['Crudo Primavera', 'Jamón crudo, queso, lechuga y tomate', '$11.200'],
                    ['Especial', 'Jamón crudo, queso, tomate, rúcula, queso parmesano', '$11.200'],
                    ['Choripán', 'Tomate, lechuga, chori y chimichurri', '$13.700'],
                    ['De Mila', 'Mila, lechuga, tomate, jamón cocido, queso y huevo', '$17.000'],
                    ['Vegetariano', 'Lechuga, tomate, rúcula, palmitos, morrones y champiñones', '$14.200'],
                    ['De Bondiola', 'Pan ciabatta, bondiola braseada con verduras, lechuga, tomate, salsa criolla, queso y mostaza', '$17.400'],
                    ['Pollo Crispy', 'Pan ciabatta, pollo rebozado crocante, lechuga, tomate, mostaza, huevo', '$17.400']
                ]
            },
            {
                type: 'table',
                title: 'Pizzas',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', '1/2', 'Entera'],
                data: [
                    ['Muzzarella', '', '$8.300', '$16.500'],
                    ['Especial', 'Jamón cocido y morrones', '$9.100', '$18.100'],
                    ['Napolitana', 'Tomate en rodajas', '$9.100', '$18.100'],
                    ['Fugazzeta', 'Cebolla salteada', '$9.100', '$18.100'],
                    ['Con Huevo', 'Huevo duro rallado', '$9.100', '$18.100'],
                    ['De la Casa', 'Jamón cocido, cebolla, queso cheddar', '$9.100', '$18.100'],
                    ['Champiñón', 'Champiñones en trozos', '$11.200', '$22.300'],
                    ['Palmitos', 'Palmitos en trozos, jamón cocido, salsa golf', '$11.200', '$22.300'],
                    ['Rúcula', 'Jamón crudo, rúcula, queso', '$9.100', '$19.700'],
                    ['Vidón', 'Rúcula, tomate, ajo, queso', '$9.100', '$19.700'],
                    ['Cuatro Quesos', 'Muzarella, roquefort, parmesano, provolone', '$9.100', '$19.700'],
                    ['Pizza Integral', 'Masa de harina integral, berenjenas, zucchini salteados y queso rallado', '$6.100', '$12.800']
                ]
            },
            {
                type: 'text',
                title: 'Opción apta para celíacos',
                showInIndex: true,
                content: 'Esta semana — $12.500'
            },
            {
                type: 'text',
                title: 'Menú infantil',
                showInIndex: true,
                content: 'Patitas con papas fritas — $8.900'
            },
            {
                type: 'table',
                title: 'Ensaladas',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Completa', 'Lechuga, tomate, huevo, cebolla, repollo y zanahoria', '$9.500'],
                    ['Caesar', 'Lechuga, croutones, queso, pollo, salsa caesar', '$9.500'],
                    ['Vidón', 'Rúcula, lechuga, tomate, jamón cocido, palmitos, champiñones, huevo y queso', '$9.500']
                ]
            },
            {
                type: 'table',
                title: 'Postres',
                showInIndex: true,
                columns: ['Variedad', 'Precio'],
                data: [
                    ['Chocotorta', '$5.600'],
                    ['Choco Oreo', '$5.600'],
                    ['Helado', '$5.600']
                ]
            },
            {
                type: 'table',
                title: 'Desayunos y Meriendas',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Clásica', 'Café, infusión o jugo, 2 medialunas o tostadas con manteca y mermelada', '$5.300'],
                    ['Saludable', 'Café, infusión o jugo, tostadas de pan integral con palta, huevo duro, queso crema, mermelada sin azúcar y mix de frutas', '$8.400'],
                    ['Vidón', 'Café, infusión o jugo, 2 medialunas, queso crema, mermelada, manteca, frutas, jugo natural, sándwich de jamón y queso', '$6.900']
                ]
            },
            {
                type: 'table',
                title: 'Bebidas sin alcohol',
                showInIndex: true,
                columns: ['Variedad', 'Precio'],
                data: [
                    ['Agua sin gas (Bonaqua)', '$3.500'],
                    ['Agua con gas (Bonaqua)', '$3.500'],
                    ['Aquarius', '$3.500'],
                    ['Gaseosa 350cc (línea Coca-Cola)', '$3.700'],
                    ['Coca Cola 1.25L', '$6.900'],
                    ['Licuados', '$4.200'],
                    ['Jugos', '$5.000'],
                    ['Limonada vaso', '$3.500'],
                    ['Limonada 1L', '$6.900'],
                    ['Jaras naturales', '$7.000'],
                    ['Speed', '$5.100']
                ]
            },
            {
                type: 'table',
                title: 'Bebidas con alcohol',
                showInIndex: true,
                columns: ['Variedad', 'Precio'],
                data: [
                    ['Fernet Branca con Coca', '$7.800'],
                    ['Campari Tónic', '$5.200'],
                    ['Campari Orange', '$7.100'],
                    ['Gancia Batido o Hibiscus', '$7.100'],
                    ['Cuba Libre (Havana)', '$7.100'],
                    ['Gin Tonic (Beefeater, pan, etc.)', '$6.100'],
                    ['Malibú con naranja', '$7.800'],
                    ['Seronva Sáb. con Speed', '$7.900'],
                    ['Seronva con Speed', '$7.800'],
                    ['Absolut con Speed', '$10.700'],
                    ['Smirnoff Sáb. con Speed', '$7.500'],
                    ['Baileys', '$8.900'],
                    ['Jägermeister con Speed', '$11.600'],
                    ['Tequila José Cuervo', '$7.100'],
                    ['Carpano Pomelo', '$5.600'],
                    ['Borghetti Frozen', '$5.200'],
                    ['Pem Tonic (Punt e Mes con tónica)', '$5.200']
                ]
            },
            {
                type: 'table',
                title: 'Vinos Cafayate',
                showInIndex: true,
                columns: ['Variedad', 'Precio'],
                data: [
                    ['Blanco', '$14.300'],
                    ['Dulce', '$14.300'],
                    ['Tinto', '$14.300'],
                    ['Reserva', '$17.400'],
                    ['Copa Reserva', '$3.500'],
                    ['Santa Julia Lata', '$2.500']
                ]
            },
            {
                type: 'table',
                title: 'Cervezas',
                showInIndex: true,
                columns: ['Variedad', 'Presentación', 'Precio'],
                data: [
                    ['Quilmes Clásica', '330', '$3.800'],
                    ['Quilmes Clásica', '500', '$6.300'],
                    ['Quilmes Clásica', 'Litro', '$7.500'],
                    ['Quilmes Familia (IPA, Stout)', 'Litro', '$9.800'],
                    ['Quilmes Sin Alcohol Lata', '', '$5.400'],
                    ['Budweiser', '330', '$3.800'],
                    ['Budweiser', 'Litro', '$9.100'],
                    ['Andes Origen (Rubia, Roja, IPA)', '', '$9.800'],
                    ['Stella Artois', '330', '$5.900'],
                    ['Stella Artois', 'Litro', '$11.200'],
                    ['Stella Artois Noire Lata', '', '$5.900'],
                    ['Corona', '', '$7.600'],
                    ['Patagonia', '500', '$9.400'],
                    ['Patagonia', 'Pinta', '$11.200']
                ]
            },
            {
                type: 'table',
                title: 'Espumantes',
                showInIndex: true,
                columns: ['Variedad', 'Presentación', 'Precio'],
                data: [
                    ['Chandon Extra Brut', '187', '$9.500'],
                    ['Chandon Extra Brut', 'Botella', '$27.800'],
                    ['Chandon Délice', '187', '$9.500'],
                    ['Chandon Délice', 'Botella', '$27.800'],
                    ['Chandon Apéritif', '187', '$9.500'],
                    ['Chandon Apéritif', 'Botella', '$27.800'],
                    ['New Age Botella', '', '$20.300'],
                    ['Mumm Botella', '', '$20.300'],
                    ['De la casa', '', '$10.400'],
                    ['Santa Julia (Chenin – Rose - Malbec)', '', '$15.400']
                ]
            },
            {
                type: 'table',
                title: 'Tragos Clásicos',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['Mojito', '', '$7.100'],
                    ['Gin Tonic Beefeater', '', '$8.300'],
                    ['Fernet Branca con Coca', '', '$7.800'],
                    ['Mint Tonic', 'Brancamenta + tónica', '$3.800'],
                    ['Negroni', 'Gin London dry, Campari, Vermouth Rosso + rodaja de naranja', '$7.800'],
                    ['Gancia Batido o Hibiscus', '', '$7.100'],
                    ['Campari Spritz', 'Campari, Espumante Demi sec, Soda y media rodaja de naranja', '$7.100'],
                    ['Campari Tonic', 'Campari, tónica y rodaja de limón', '$5.200'],
                    ['Carpano Originale', 'Carpano Rosso, soda y con pincho de aceituna', '$5.600'],
                    ['Cynar 70 Pomelo', 'Cynar, gaseosa de pomelo, rodaja de pomelo', '$6.300'],
                    ['Cynar 70 Julep', 'Cynar 70, menta, azúcar negra y jugo de pomelo', '$6.300'],
                    ['Caipirinha o Caipiroska', '', '$7.100'],
                    ['Seronva con Speed', '', '$7.800'],
                    ['Seronva Sáb. con Speed', '', '$7.900'],
                    ['Carpano Orange', 'Carpano Rosso, soda y rodaja de naranja', '$5.600'],
                    ['Aperol Spritz', 'Aperol, espumante demi sec, soda y media rodaja de naranja', '$8.000'],
                    ['Absolut con Speed', '', '$10.700'],
                    ['Daikiris', 'Frutilla, frutos rojos y maracuyá', '$7.100'],
                    ['Ramazzotti (Spritz/Tonic)', '', '$5.900']
                ]
            },
            {
                type: 'table',
                title: 'Whiskies',
                showInIndex: false,
                columns: ['Variedad', 'Precio'],
                data: [
                    ['Chivas Regal', '$8.600'],
                    ['Johnnie Walker Blue Label', '$43.900'],
                    ['Johnnie Walker Black Label', '$9.700'],
                    ['Johnnie Walker Red Label', '$8.600'],
                    ['Jameson', '$6.500'],
                    ['Jack Daniel´s', '$9.700'],
                    ['Ballantine’s', '$8.600']
                ]
            },
            {
                type: 'table',
                title: 'Latas',
                showInIndex: false,
                columns: ['Variedad', 'Presentación', 'Precio'],
                data: [
                    ['Goose Island IPA', '473cc', '$3.400'],
                    ['Michelob ultra', '410cc', '$3.400'],
                    ['Temple', '473cc', '$3.400']
                ]
            },
            {
                type: 'table',
                title: 'Gin Tonic (por marca) Vaso',
                showInIndex: true,
                columns: ['Marca', 'Precio'],
                data: [
                    ['Beefeater', '$8.300'],
                    ['Spirito Blu', '$5.300'],
                    ['Merle', '$6.800'],
                    ['Bosque', '$6.500'],
                    ['Brighton', '$6.800']
                ]
            },
            {
                type: 'table',
                title: 'Tragos – Los Nuestros',
                showInIndex: true,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['TODO AL 7 🟢', 'Vodka Seronva, Absolut de mango, Sprite', '$8.200'],
                    ['La Vidoneta', 'Gin Beefeater, vodka Seronva, sweet apple pear, manzana', '$5.200'],
                    ['Margarita Cuervo', 'Tequila José Cuervo, Triple sec, jugo de limón y sal', '$5.200'],
                    ['2007', 'Jameson, Carpano Bianco, Gin Beefeater, naranja y miel', '$5.000'],
                    ['Trago de la Semana', 'Preguntá qué te toca hoy', '$4.500'],
                    ['Copa Glam', 'Tía María y helado de crema americana', '$8.200'],
                    ['25 Rosas', 'Vodka Seronva wild berries, frutillas, gaseosa de pomelo', '$8.200'],
                    ['La Bomba', 'Helado de chocolate, Tía María, Absolut de vainilla, Bon o Bon, crema', '$8.200'],
                    ['Jugo de los Dioses 1Ltr', 'Vino con Prity', '$7.600'],
                    ['La Pócima', '6 tubos de ensayo con trago misterioso', '$7.600']
                ]
            },
            {
                type: 'list',
                title: 'Promos',
                showInIndex: false,
                items: [
                    '10 pizzas + 10 Quilmes clásica 1L — $239.100',
                    'Botella de Absolut + 6 Speed — $91.000',
                    'Botella de Fernet Branca + 2 Cocas — $53.500',
                    'Botella de Gin Beefeater + 6 Tónicas o Pomelo — $55.400',
                    'Botella de Spirito Blu + 4 Tónicas — $32.800',
                    'Chandon + 2 Speed — $33.800',
                    'Botella Campari + 2 Jugos — $37.200',
                    'Botella Seronva Saborizado + 6 Speed — $37.500'
                ]
            },
            {
                type: 'list',
                title: 'Sabores Seronva',
                showInIndex: false,
                items: [
                    'Wild Berries',
                    'Fresh Citrus',
                    'Tropical Passion',
                    'Sweet Apple Pear'
                ]
            },
            {
                type: 'text',
                title: 'Promo cerveza + fernet',
                showInIndex: true,
                content: 'Pedí tu botella de Fernet + 2 cocas por $53.500. ¡Si no la terminas, la guardas! A la jarra te la llevás: Normal — $20.500 / Personalizada — $25.200'
            },

        ]
    },
    {
        type: 'section',
        title: 'Menú del Día – VIDÓN BAR',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Incluye',
                showInIndex: false,
                content: 'Todos los menús incluyen bebida si se consumen en el bar.'
            },
            {
                type: 'list',
                title: 'Guarnición a elección',
                showInIndex: false,
                items: [
                    'Papas fritas',
                    'Ensalada',
                    'Puré de papa',
                    'Puré mixto',
                    'Puré de calabacín'
                ]
            },
            {
                type: 'table',
                title: 'Platos principales',
                showInIndex: true,
                columns: ['Plato', 'Descripción', 'Precio'],
                data: [
                    ['Roll de pollo con salsa', 'Roll de pollo con jamón, queso, pimientos y cebolla. Salsa al verdeo o al roquefort.', '$6500'],
                    ['Filet de merluza rebozada', '', '$6500'],
                    ['Bifecitos de entrecot', '', '$6500'],
                    ['Bondiola braseada de cerdo', '', '$6500'],
                    ['Ensalada de mediodía', 'Repollo blanco y morado, huevo duro, tomate, lechuga, quinoa, garbanzos, champignones, rúcula, zanahoria, semillas de sésamo y salsa de remolacha.', '$5500']
                ]
            },
            {
                type: 'table',
                title: 'Milanesas (variedad disponible)',
                showInIndex: false,
                columns: ['Tipo', 'Precio', 'Adicional'],
                data: [
                    ['Milanesas con guarnición a elección', '$5500', 'Variedad especial: +$1000']
                ]
            },
            {
                type: 'list',
                title: 'Variedad de milas – Adicional ($)',
                showInIndex: false,
                items: [
                    'Napolitana: salsa, muzzarella, jamón cocido y tomate.',
                    'Especial: muzzarella, jamón cocido y morrones.',
                    'Vidón: queso cheddar, panceta y cebolla de verdeo.',
                    'Fugazzeta: muzzarella, cebolla común y cebolla de verdeo.',
                    'Cuatro quesos: muzzarella, sardo, tybo y azul.',
                    'A caballo: con huevo frito.',
                    'A la suiza: muzzarella y jamón crudo.',
                    'Con champignones: muzzarella y champignones salteados.'
                ]
            },
            {
                type: 'table',
                title: 'Milanesas con guarnición a elección',
                showInIndex: false,
                columns: ['Tipo', 'Precio'],
                data: [
                    ['De berenjena', '$5500'],
                    ['De pollo', '$5500'],
                    ['De ternera', '$6500']
                ]
            },
            {
                type: 'table',
                title: 'Wraps (con papas)',
                showInIndex: false,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['De jamón y queso (frío)', 'Jamón cocido, rúcula, lechuga, tomate, zanahoria, repollo, huevo duro y queso tybo.', '$5500'],
                    ['De jamón crudo y queso (frío)', 'Jamón crudo, rúcula, lechuga, tomate, zanahoria, repollo, huevo duro y queso tybo.', '$5500'],
                    ['De pollo (frío)', 'Rúcula, lechuga, tomate, zanahoria, repollo, huevo duro y queso tybo.', '$5500'],
                    ['Veggie (frío)', 'Zuchini y berenjena salteados, rúcula, lechuga, tomate, zanahoria, repollo, huevo duro y queso tybo.', '$5500']
                ]
            },
            {
                type: 'table',
                title: 'Burritos (con papas)',
                showInIndex: false,
                columns: ['Variedad', 'Descripción', 'Precio'],
                data: [
                    ['De ternera (caliente)', 'Ternera, tomate, pimientos (rojo y verde), cebolla, queso cheddar y papas fritas.', '$5500'],
                    ['De pollo (caliente)', 'Pollo, tomate, pimientos (rojo y verde), cebolla, huevo duro y queso tybo.', '$5500'],
                    ['De cerdo (caliente)', 'Bondiola braseada en hebras, tomate, pimientos (rojo y verde), cebolla, repollo y queso tybo.', '$5500'],
                    ['Veggie (caliente)', 'Zuchini y berenjena salteados, pimientos, cebolla, huevo duro y queso tybo.', '$5500']
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Notificación de Políticas de la Empresa',
        showInIndex: true,
        blocks: [
            {
                type: 'list',
                title: '1. POLÍTICAS GENERALES',
                showInIndex: true,
                items: [
                    'Solo se dan 15 minutos de tolerancia en la entrada y solo dos veces al mes.',
                    'Prohibido comer, mascar chicle, beber o fumar en áreas visibles al cliente.',
                    'Las quejas del cliente deben derivarse al Encargado o Franquiciado, salvo casos previstos en el manual de atención.',
                    'Objetos olvidados deben entregarse al encargado inmediatamente.',
                    'No jugar ni hacer bromas durante la jornada.',
                    'Solo el encargado coordina horarios.',
                    'El uniforme debe colocarse en el local, nunca llegar uniformado.',
                    'Prohibido el uso del celular durante el trabajo.',
                    'Las notificaciones deben hacerse al teléfono fijo y al encargado.',
                    'Al llegar: primero cambiarse, luego fichar.',
                    'Al salir: primero fichar, luego cambiarse o realizar actividades personales.',
                    'Ningún empleado puede decir “NO” a un cliente. Solo el encargado puede hacerlo.',
                    'Cena: antes de las 21:30 hs.'
                ]
            },
            {
                type: 'list',
                title: '2. POLÍTICAS POR PUESTO DE TRABAJO',
                showInIndex: true,
                items: [
                    'ENCARGADOS: Comunicar novedades. No retar empleados frente a otros. Prohibido el acceso de personas ajenas a barra/caja. No usar la compu con fines personales. No modificar precios/consumos. Al cobrar con tarjeta: pedir DNI. Entregar ticket + promo al cerrar cuenta. Garantizar cumplimiento de políticas. Comunicar a superiores cualquier eventualidad.',
                    'BARMAN: Preparar productos según manual. Respetar el orden de pedidos. Mantener barra limpia y ordenada. Informar faltantes al encargado. Evitar tareas que no correspondan. Hacer lo que se le requiera desde la Encargaduría.',
                    'MOZOS: No mostrarse cansado o malhumorado. No recostarse ni apoyarse. No gritar, silbar o correr. No usar apodos. No entablar conversaciones con clientes salvo que ellos lo inicien. No escribir apoyado en la mesa. No pedir propina. Atender siempre al cliente, llegando o yéndose. Uniforme obligatorio.',
                    'ENCARGADO DE COCINA: Informar novedades sobre platos. No retar empleados frente a otros. Supervisar protocolos y orden del sector. Organizar horarios. Garantizar calidad e higiene. Usar uniforme adecuado.',
                    'AUXILIARES DE COCINA: Seguir protocolos. Mantener limpieza. No salir de cocina con delantal. Colaborar con limpieza al cierre. Informar faltantes. Usar uniforme adecuado.'
                ]
            },
            {
                type: 'text',
                title: '3. REGLAMENTO INTERNO DE TRABAJO',
                showInIndex: true,
                content: `3.1 Objeto: Guía de conducta. Define lo que se puede y no se puede hacer. La empresa espera orden, equidad y disciplina.
3.2 Principio de Buena Fe: La relación laboral se basa en la confianza. Si se rompe, es difícil de recomponer.`
            },
            {
                type: 'list',
                title: '3.3 Obligaciones y Prohibiciones',
                showInIndex: true,
                items: [
                    'Mantener limpia el área de trabajo.',
                    'Respetar confidencialidad (recetas, técnicas).',
                    'Usar y cuidar el uniforme y herramientas.',
                    'Informar enfermedades contagiosas.',
                    'No realizar actos que comprometan la seguridad.',
                    'Prohibido sustraer elementos del local.',
                    'No vender, rifar o realizar actividades ajenas durante la jornada.',
                    'Trato respetuoso entre compañeros.',
                    'Cumplir medidas de seguridad e higiene.',
                    'Participar de capacitaciones fuera del horario si se asignan.',
                    'No fumar en áreas visibles.',
                    'Informar cambios de domicilio.'
                ]
            },
            {
                type: 'list',
                title: '3.4 Sanciones Disciplinarias',
                showInIndex: true,
                items: [
                    'Apercibimiento verbal',
                    'Apercibimiento escrito',
                    'Suspensión',
                    'La lista de prohibiciones no es exhaustiva.'
                ]
            },
            {
                type: 'list',
                title: '3.5 Contrato de Trabajo',
                showInIndex: true,
                items: [
                    'Existe relación laboral cuando se trabaja bajo dependencia y se cobra por ello.',
                    'No hace falta un contrato escrito para que existan derechos y obligaciones.'
                ]
            },
            {
                type: 'list',
                title: '3.6 Edad Mínima de Admisión',
                showInIndex: true,
                items: [
                    'Solo pueden trabajar personas mayores de 18 años.',
                    'Se menciona el marco legal: Ley 26.390.'
                ]
            },
            {
                type: 'table',
                title: '4. VACACIONES',
                showInIndex: true,
                columns: ['Antigüedad', 'Días corridos'],
                data: [
                    ['< 5 años', '14 días'],
                    ['5–10 años', '21 días'],
                    ['10–20 años', '28 días'],
                    ['> 20 años', '35 días']
                ]
            },
            {
                type: 'list',
                title: 'Vacaciones - Condiciones',
                showInIndex: true,
                items: [
                    'Deben empezar un lunes.',
                    'Se toman entre el 1 de octubre y el 30 de abril.',
                    'Deben pedirse antes del 30 de noviembre.',
                    'No se otorgan vacaciones en: Vacaciones de invierno, Navidad, Semana Santa, Todo diciembre.',
                    'En conflictos: prioridad al más antiguo.'
                ]
            },
            {
                type: 'list',
                title: '5. LICENCIAS (Con goce de sueldo)',
                showInIndex: true,
                items: [
                    'Matrimonio: 10 días',
                    'Nacimiento hijo: 2 días',
                    'Fallecimiento: Padres/hijos/pareja: 3 días (+2 si es a más de 500 km), Hermanos/abuelos: 1 día',
                    'Exámenes (media o universidad): 2 días por examen, máx. 10 por año',
                    'Elecciones: hasta 2 días (más si es fuera del país)',
                    'Cargos electivos: reserva del puesto hasta 30 días después',
                    'Donación de sangre: 1 día',
                    'Citaciones judiciales: presentar documentación'
                ]
            },
            {
                type: 'list',
                title: 'Licencias por maternidad',
                showInIndex: true,
                items: [
                    '45 días antes y 45 días después del parto (puede optarse por 30/60).',
                    'Garantía de estabilidad.',
                    'Posibilidad de excedencia (3 a 6 meses).',
                    'Derecho a pausas de lactancia (2 de 30 minutos por día, hasta 1 año).'
                ]
            },
            {
                type: 'list',
                title: 'Licencias sin goce de sueldo',
                showInIndex: true,
                items: [
                    'No se otorgan.'
                ]
            },
            {
                type: 'list',
                title: '6. FERIADOS',
                showInIndex: true,
                items: [
                    'El franquiciado reconoce 10 feriados pagos.',
                    'El local permanece cerrado el 25 de diciembre y el 1 de enero.',
                    'Si un feriado cae durante vacaciones, se suma un día o se paga extra.',
                    'Feriados religiosos no son pagos, pero pueden concederse como franco.'
                ]
            },
            {
                type: 'list',
                title: '7. AUSENCIAS',
                showInIndex: true,
                items: [
                    'Ausencias sin aviso se consideran faltas injustificadas.',
                    'Enfermedad: debe comunicarse y ser certificada.',
                    'Certificados válidos: solo los del médico enviado por el franquiciado.',
                    'Impuntualidades: deben justificarse.',
                    'Toda ausencia debe registrarse y documentarse.'
                ]
            },
            {
                type: 'list',
                title: '8. DESCUENTOS Y BENEFICIOS A EMPLEADOS',
                showInIndex: true,
                items: [
                    'Al finalizar la jornada, pueden pagar “precio amigo” previamente acordado.',
                    'Incluye la promoción de fernet.',
                    'Aplica si asisten al bar con amigos.'
                ]
            },
            {
                type: 'list',
                title: '9. POLÍTICAS Y NOTIFICACIONES ADICIONALES',
                showInIndex: true,
                items: [
                    'El empleado autoriza a VIDÓN BAR® / BUENA VIDA® a usar material (cámaras, grabaciones, fotos, etc.) con fines formativos y públicos.',
                    'El empleado firma aceptando que leyó y se compromete a cumplir con todo lo expuesto.'
                ]
            }
        ]
    },
]
// Salon
// Introduccion 
export const salonContent = [
    {
        type: 'section',
        title: 'Introduccion',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Formación en Salón y Atención al Cliente',
                showInIndex: false,
                content: `En esta sección vas a desarrollar las habilidades necesarias para ofrecer un servicio de salón impecable. Abordamos desde el protocolo de recepción de clientes y manejo de reservas, hasta técnicas de atención en mesa, conocimiento del menú, maridaje y dinámicas de equipo. La clave está en generar experiencias memorables para cada persona que visita Vidón Bar.`
            },
        ]
    },
    {
        type: 'section',
        title: '1. INTRODUCCIÓN',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: '1.1. Acerca de esta guía',
                showInIndex: true,
                content: `Esta guía rápida contiene una síntesis de los procesos principales que deben realizar los mozos. Este material tiene como principal objetivo brindar soporte a las dudas que pudieran surgir durante la gestión cotidiana.
Los mozos, como parte esencial de VIDÓN BAR / BUENA VIDA, están autorizados para sugerir cualquier mejora que consideren importante para la calidad del servicio. Al final de esta guía encontrarán una ficha destinada para tal fin.`
            },
            {
                type: 'list',
                title: '1.2. Funciones de los mozos',
                showInIndex: true,
                items: [
                    'Apertura del local (armado de vereda, organización funcional de mesas, limpieza de las mismas).',
                    'Fajinar cubiertos y doblar servilletas, proveerse de instrumentos (destapadores, lapicera, etc.).',
                    'Atención al cliente (carta y recomendaciones, toma el pedido, lo lleva, mantiene la mesa en orden y la limpia al final).',
                    'Llevar la cuenta al cliente cuando lo solicita y cobrar en caja.',
                    'Reorganización del sector donde atiende, acomodar y limpiar mesas.',
                    'Realización de tareas de limpieza diaria (ver planilla de puntos).',
                    'Lavado continuo de vasos.',
                    'Recepción de clientes y ubicación en mesas acordes a la cantidad de personas.',
                    'Cierre del bar (lavado de vasos restantes, acomodar mesas, entrar la vereda).',
                    'Control de calefactores y luces (prender a la entrada y apagar a la salida).'
                ]
            }
        ]
    },
    // Procedimientos Operativos
    {
        type: 'section',
        title: '2. PROCEDIMIENTOS OPERATIVOS',
        showInIndex: true,
        blocks: [
            {
                type: 'list',
                title: '2.1. Procedimiento de apertura del bar',
                showInIndex: false,
                items: [
                    'Dirigirse al sector asignado por el encargado para comenzar a preparar las mesas.',
                    'Consultar con el personal de cocina cualquier novedad que afecte al servicio (por ejemplo, faltantes de insumos).',
                    'Organizar y limpiar las mesas.',
                    'Fajinar la vajilla.',
                    'Revisar la disponibilidad de elementos necesarios para el servicio (abridores, saleros, servilleteros, vinagreros, trapos, delantales, cartas, posa vasos, juegos, instrumentos, elementos del baño, etc.).',
                    'Verificar el mantenimiento general del local y dar aviso al encargado ante cualquier desperfecto, anotando en planilla y llevando al depósito destinado.'
                ]
            },
            {
                type: 'sublist',
                title: 'A. Limpiar vasos restantes de la noche anterior',
                showInIndex: false,
                items: [
                    'Echar detergente en el limpiador de vasos.',
                    'Agregar agua.',
                    'Limpiar uno por uno.',
                    'Enjuagar y colocar boca abajo sobre una bandeja.',
                    'Llevar a la barra para que el barman los acomode.'
                ]
            },
            {
                type: 'sublist',
                title: 'B. Fajinar cubiertos',
                showInIndex: false,
                items: [
                    'Colocar todos los cubiertos sobre una bandeja.',
                    'Rociar con una mezcla de 2/3 agua y 1/3 alcohol.',
                    'Secar con servilletas de papel.',
                    'Dejar secar sobre una servilleta desplegada.',
                    'Fajinar colocando el cuchillo sobre el extremo de una servilleta, dar una vuelta y colocar el tenedor encima.',
                    'Continuar enrollando, dejar un extremo libre.',
                    'Mojar ese extremo con el líquido fajinador y cerrar presionando.'
                ]
            },
            {
                type: 'sublist',
                title: 'C. Doblar servilletas',
                showInIndex: false,
                items: [
                    'Colocar una servilleta sobre la mesa.',
                    'Doblarla por la mitad en diagonal.',
                    'Repetir con otras 4 servilletas.',
                    'Doblar todas juntas por la mitad.',
                    'Separarlas desde la servilleta del medio.',
                    'Juntar nuevamente y colocarlas en servilleteros.',
                    'Llenar dos cajas con servilletas dobladas para reponer durante la noche.'
                ]
            },
            {
                type: 'sublist',
                title: 'D. Ordenar juegos e instrumentos',
                showInIndex: false,
                items: [
                    'Cuando el encargado lo indique, revisar cada juego para verificar que esté sano y completo.',
                    'El armario debe estar ordenado y contener solo juegos en buen estado.',
                    'Notificar cualquier daño al encargado y registrarlo en la planilla correspondiente.'
                ]
            },
            {
                type: 'table',
                title: '2.3. Procedimiento de limpieza',
                showInIndex: false,
                columns: ['Sector / Equipo', 'Frecuencia', 'Tipo / Descripción'],
                data: [
                    ['Pisos', 'Todos los días', 'Levantar sillas, barrer y baldear con agua y lavandina.'],
                    ['Pisos', 'Constantemente', 'Limpiar cada vez que se derramen bebidas.'],
                    ['Mesas', 'Constantemente', 'Rociar con agua y lavandina. Pasar trapo tras cada cliente.'],
                    ['Sifón de bacha', 'Cada 15 días', 'Desarmar y quitar restos.'],
                    ['Cañerías', '1 vez por mes', 'Lavado preventivo con soda cáustica o destapa cañerías.'],
                    ['Estantes con decoración', '1 vez por semana', 'Limpiar adornos y estantes con trapo húmedo.'],
                    ['Estantes con botellas', '1 vez por semana', 'Limpiar botellas y estantes con trapo húmedo.']
                ]
            }
        ]
    },
    // Atención al cliente y ventas
    {
        type: 'section',
        title: '3. ATENCIÓN AL CLIENTE Y VENTAS',
        blocks: [
            {
                type: 'text',
                title: '3.1. Políticas generales',
                showInIndex: true,
                content: `El bar debe estar en perfectas condiciones antes de la llegada de clientes. Cualquier desperfecto debe ser notificado al franquiciado.
Instrumentos musicales: 2 guitarras (eléctrica, electroacústica o criolla), 1 cajón peruano, 1 cajón cubano, 1 triángulo, 1 órgano o piano, 2 micrófonos (para ocasiones especiales).
Juegos de mesa disponibles: 5 mazos de Truco, 5 mazos de Póker, 5 Jengas, 3 Jengas gigantes, Papas o Pingüino, Burako, Cubo Mágico, Dados, Damas, Dama China, Crucigrama Change, Abre Cabeza, Dominó, Juego de la Oca, Juegos para Tomar, Estanciero, Ajedrez, T.E.G., Tabú, 4 en línea, Sexionary.
Reglas: Se debe entregar DNI para retirar juegos. El local debe exhibir un afiche con los juegos disponibles.
Biblioteca: Debe haber libros y revistas en buen estado para entretenimiento de clientes.`
            },
            {
                type: 'table',
                title: '3.2. Perfil de clientes habituales',
                showInIndex: true,
                columns: ['Perfil', 'Características', 'Sugerencias'],
                data: [
                    ['Amarrete', 'Quiere pagar menos, dice ser amigo del dueño, menciona que es su cumpleaños.', 'Comentar que el sistema no distingue precios. No comprometer al encargado.'],
                    ['Quiere seguir tomando fuera de horario', 'Insiste tras el horario permitido.', 'No vender alcohol. No llamar al encargado. Resolver con firmeza.'],
                    ['Grupo de cumpleaños', 'Gran consumo, larga estadía.', 'Ofrecer promociones, juegos, atención constante.'],
                    ['Grupo previo al boliche', 'Poco tiempo, buscan tragos fuertes.', 'Ofrecer Absolut, juegos, buen trato para que se queden. Regalar shot Toc Toc.'],
                    ['Parejas', '1 o 2 personas.', 'Promociones de comida y bebida, atención sin molestar. Entregar promociones al devolver el cambio.'],
                    ['Deportistas', 'Quieren algo rápido y llenador.', 'Ofrecer Coca-Cola grande, lomitos, y luego promoción de Fernet.']
                ]
            },
            {
                type: 'list',
                title: '3.4. Recepción y saludo inicial (Correcto)',
                showInIndex: true,
                items: [
                    'Con actitud positiva, amabilidad, respeto.',
                    'Sonreír, mirar a los ojos.',
                    'Ejemplo: "Buenas noches, ¿Cómo andan? ¿Cuántos van a ser hoy?"',
                    'Si ingresan después de la 1 AM: "Buenas noches, recuerden que la cocina está siempre abierta."'
                ]
            },
            {
                type: 'list',
                title: 'Incorrecto',
                showInIndex: false,
                items: [
                    '"Ya no hay lugar..."',
                    'Uso de lenguaje excesivamente informal, incluso con amigos.'
                ]
            },
            {
                type: 'table',
                title: '3.5. Venta sugestiva / adicional',
                showInIndex: false,
                columns: ['Si compra...', 'Ofrecer...'],
                data: [
                    ['Pizza', 'Cerveza'],
                    ['Fajitas', 'Vino o cerveza'],
                    ['Cerveza', 'Pizza o picada'],
                    ['Trago', 'Tragos suaves o dulces'],
                    ['Espumante / New Age', 'Speed'],
                    ['Vodka', 'Speed o promo botella'],
                    ['Fernet', 'Botella con Coca-Cola'],
                    ['Dr. Lemon, Mojito, Smirnoff Ice', 'Papas fritas o rabas'],
                    ['Jamón y queso', 'Preguntar por maní, ofrecer picada'],
                    ['Tostados', 'Papas fritas'],
                    ['Luego de comer', 'Ofrecer postres o tragos helados'],
                    ['Papas fritas', 'Con huevo y aderezo']
                ]
            },
            {
                type: 'table',
                title: '3.6. Situaciones frecuentes en la atención al cliente',
                showInIndex: true,
                columns: ['Situación', 'Recomendación'],
                data: [
                    ['Demora en pedido', 'Pedir disculpas. Ofrecer promoción para futura visita.'],
                    ['Cliente alcoholizado y violento', 'Explicar que no se puede seguir vendiendo por política del bar.'],
                    ['Corte de luz', 'Iluminar con velas, ticket manual, mantener el servicio.'],
                    ['Falta de mercadería', 'Acudir a segunda opción. No quedarse sin stock.'],
                    ['Cerveza sin gas o caliente', 'Cambiarla.'],
                    ['Pelea entre clientes', 'Separar mesas. Avisar que el bar es un lugar de disfrute. Si continúa, llamar a la policía.'],
                    ['Discusión mozo-cliente', 'El mozo llama al encargado, quien se encarga de resolver y cambia al mozo.'],
                    ['Discusión entre mozos', 'El encargado interviene y luego habla con ellos.'],
                    ['El cliente siempre debe retirarse habiendo pasado un buen momento.', '']
                ]
            },
            {
                type: 'list',
                title: '3.7. Procedimiento de atención al cliente que deja su botella',
                showInIndex: true,
                items: [
                    'Luego de que el cliente pide su botella favorita, se carga en el sistema para que el barman prepare el pedido.',
                    'El mozo entrega la botella con todos los elementos (Coca-Cola, hielo, sorbetes, servilletas).',
                    'Ofrece juegos de mesa.',
                    'Explica al cliente que si no termina la botella, VIDÓN BAR la identifica y guarda hasta su próxima visita.',
                    '⚠️ IMPORTANTE: Nunca servir en el vaso del cliente.',
                    '⚠️ Los mozos deben estar atentos ante cualquier pedido adicional del cliente (más hielo, Coca-Cola, etc.).',
                    'Cuando el cliente se retira, el mozo pide los datos para cargar en el sistema y así identificar su botella.',
                    'Carga los datos del cliente en el sistema.',
                    'Identifica la botella con el nombre del cliente.',
                    'Consulta si los elementos de la mesa los pasan juntos.',
                    'Cobra la totalidad del valor de la botella y del consumo en mesa.',
                    'Explica al cliente que VIDÓN BAR conserva su botella hasta su próxima visita.',
                    'Despide cordialmente al cliente, agradeciendo su visita.',
                    'Ordena la botella en el estante de botellas de clientes.',
                    'Acomoda la mesa para el siguiente cliente.',
                    '✅ Ver instructivo de uso del sistema.',
                    '💬 Speech sugerido: “Gracias chicos, que les vaya bien, ¡nos vemos la próxima!”'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Momentos de la Verdad en la Atención al Cliente',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Introducción',
                showInIndex: true,
                content: `Los momentos críticos de la verdad son los que requieren una atención y una dedicación que, si no son manejados correctamente, conducen al descontento, pérdida de confianza y posible pérdida del cliente. Varían de acuerdo a la naturaleza del servicio ofrecido.
En gastronomía, los momentos de la verdad se dividen en cuatro momentos críticos, donde podemos ganar o perder un cliente dependiendo de qué tan bien se efectúen los pasos:`
            },
            {
                type: 'list',
                title: '1. Momento de la verdad #1: BIENVENIDA',
                showInIndex: false,
                items: [
                    'Que alguien le indique dónde se puede sentar.',
                    'Que se lo salude cordialmente.',
                    'Es muy importante no hacerle sentir al cliente que molesta al ingresar al local.'
                ]
            },
            {
                type: 'list',
                title: '2. Momento de la verdad #2: PRIMER PEDIDO',
                showInIndex: false,
                items: [
                    'Llevar a tiempo la carta.',
                    'No esperar a que el cliente llame para pedir.',
                    'Anotar siempre todos los productos que el cliente solicite.',
                    'Informar desde un principio sobre los modos de pago y las promociones o beneficios disponibles según el método de pago.',
                    'Anticiparse a necesidades como: llevar cenicero si el cliente tiene cigarrillos sobre la mesa, servilletas, aderezos.',
                    'Estar atento a los tiempos de demora en la atención y los pedidos.'
                ]
            },
            {
                type: 'list',
                title: '3. Momento de la verdad #3: ATENCIÓN CONSTANTE',
                showInIndex: false,
                items: [
                    'Limpiar platos o vasos vacíos.',
                    'Ofrecer postre o café.',
                    'Ofrecer los valores agregados del bar disponibles, como cartas, juegos de mesa, jenga.',
                    'Anticiparse a las necesidades del cliente para que este llegue al elíxir en la atención.'
                ]
            },
            {
                type: 'list',
                title: '4. Momento de la verdad #4: DESPEDIDA',
                showInIndex: false,
                items: [
                    'Ser claro desde el principio sobre los modos de pago y beneficios disponibles.',
                    'Ser rápido, tanto al entregar la cuenta como al hacer el seguimiento de la misma.',
                    'Estar atento a cuándo el cliente ya está listo para pagar.',
                    'Recordar devolver tarjeta o dar el vuelto, si corresponde.',
                    'Comunicar promociones futuras o invitar a eventos próximos del bar, por ejemplo: Lunes de truco, Martes de olimpiadas, Miércoles de karaoke y 2x1, Jueves de bandas, peñas o DJ los fines de semana.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Generadores de Valor',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Guardado de botellas',
                showInIndex: false,
                content: `Un cliente que compra la botella de fernet (o cualquier botella) y no la termina, la guarda en el bar. Se le asigna un número a la botella (en la tapa) y se le da una tarjetita al cliente con ese número y datos del cliente, solo con esa tarjeta puede volver a pedir su botella. Además, se cargan los datos del cliente en el sistema: nombre, DNI, teléfono y fecha en que dejó la botella. La botella se guarda un mínimo de 6 meses.`
            },
            {
                type: 'text',
                title: 'Jarra de vidón y jarra personalizada',
                showInIndex: false,
                content: `El cliente compra la jarra, viene llena de fernet, y la recarga al precio del artículo fernet con coca. Se la puede llevar a la casa y, si vuelve y trae la jarra, cada recarga se cobra al precio del fernet con coca.`
            },
            {
                type: 'text',
                title: 'Juegos de mesa',
                showInIndex: false,
                content: `Debe haber en el bar juegos de mesa (además de cartas y jengas) a disposición de los clientes, y además debemos ofrecerlos, fundamentalmente en la tercera etapa de la atención al cliente y momentos de la verdad.`
            },
            {
                type: 'text',
                title: 'Ruleta de premios',
                showInIndex: false,
                content: `Tenemos una ruleta de premios. A cada cliente que compre una botella lo hacemos tirar y se gana algo para consumir en el bar o algo de otro comercio.`
            },
            {
                type: 'list',
                title: 'Miércoles de 2x1',
                showInIndex: false,
                items: [
                    'Fernet con coca',
                    'Gancia',
                    'Campari orange o tonic',
                    'Gin tonic con Príncipe de los Apóstoles y Brighton',
                    'Mojito',
                    'Daikiris',
                    'Cuba libre',
                    'Chopp Quilmes'
                ],
                description: 'Los miércoles durante todo el turno estos artículos están a 2x1.'
            },
            {
                type: 'list',
                title: 'Horarios 2x1 todos los días (16 a 20 hs)',
                showInIndex: false,
                items: [
                    'Fernet con coca',
                    'Gancia',
                    'Campari orange o tonic',
                    'Gin tonic con Príncipe de los Apóstoles y Brighton',
                    'Mojito',
                    'Daikiris',
                    'Cuba libre',
                    'Quilmes de litro',
                    'Chopp Quilmes',
                    'Patagonia After Office'
                ]
            },
            {
                type: 'text',
                title: 'Jueves de bandas',
                showInIndex: false,
                content: 'Los jueves tenemos música en vivo en el patio principal.'
            },
            {
                type: 'text',
                title: 'Martes música a la carta',
                showInIndex: false,
                content: 'Los martes la música la eligen los clientes. Se les pregunta artistas, géneros o canciones y se arma una lista para esa noche. Dar la lista de temas en la caja.'
            },
            {
                type: 'text',
                title: 'Pintura de uñas para usar',
                showInIndex: false,
                content: 'Tenemos en el bar un kit de uñas, pinturas, make up y demás, a disposición de los clientes que quieran usarlo. Ofrecer sobre todo en horarios de merienda, en mesas que hacen previa, etc.'
            },
            {
                type: 'text',
                title: 'Instrumentos musicales',
                showInIndex: false,
                content: 'Tenemos un piano, guitarras, cajones y más, a disposición de los clientes. No solo ofrecerlos, sino también fomentar su uso. Se puede pedir DNI a quien lo use para que lo devuelva en condiciones.'
            },
            {
                type: 'text',
                title: 'Libros para leer e intercambiar',
                showInIndex: false,
                content: 'Tenemos una biblioteca a disposición en la entrada, para leer en el lugar o intercambiar libros. Un cliente puede dejar el suyo y llevarse uno a elección.'
            },
            {
                type: 'text',
                title: 'Juego de mates para usar gratis',
                showInIndex: false,
                content: 'El juego de mate en Vidón NO se cobra, puede incluir cualquier merienda que el cliente pida, pero también pueden pedir un juego de mate sin necesidad de consumir nada más.'
            },
            {
                type: 'text',
                title: 'Espacio coworking',
                showInIndex: false,
                content: 'En Vidón debe haber espacios preparados para el trabajo en equipo, con enchufes, iluminación y demás comodidades. El espacio está en Diegui.'
            },
            {
                type: 'text',
                title: 'Membresía de desayunos',
                showInIndex: false,
                content: 'Existe un artículo que se llama desayuno mensual. Un cliente paga ese monto, y por todo un mes puede desayunar o merendar una merienda clásica todos los días del mes (una vez por día). Si quiere otra de las dos meriendas existentes, debe cargar el artículo “desayuno extra” y especificar.'
            },
            {
                type: 'text',
                title: 'Merchandising',
                showInIndex: false,
                content: 'En la entrada tenemos nuestro mueble con merch. Cada artículo existe en el sistema para su venta a clientes.'
            },
            {
                type: 'text',
                title: 'Quinto menú es gratis',
                showInIndex: false,
                content: 'Tenemos un folleto donde se indica que el quinto almuerzo es gratis. Se sella y se firma cada almuerzo desde el primero al cuarto para que el quinto sea gratis. No es válido para delivery.'
            },
            {
                type: 'list',
                title: 'Promo cumple',
                showInIndex: false,
                items: [
                    'Combo Quilmes',
                    'Combo 1',
                    'Combo 2'
                ],
                description: 'Actualmente tenemos tres promos pensadas para distintos grupos de personas.'
            },
            {
                type: 'text',
                title: 'Miércoles de karaoke',
                showInIndex: false,
                content: 'Todos los miércoles se debe generar un karaoke en un momento determinado de la noche y en el patio principal. Se puede incentivar aprovechando el 2x1 de todo el día.'
            },
            {
                type: 'text',
                title: 'Cocina abierta todo el tiempo',
                showInIndex: false,
                content: 'La cocina debe estar abierta siempre que el bar también lo esté.'
            },
            {
                type: 'text',
                title: 'Show de luces y sonido',
                showInIndex: false,
                content: 'Todas las noches, en horario pico, se apagan las luces del bar (o del espacio principal) y se hace un show con alguna canción de moda y luces intermitentes.'
            },
            {
                type: 'text',
                title: 'Tiro al aro por premio',
                showInIndex: false,
                content: 'En el sector jardín hay un aro de básquet y una pelota. Durante cada noche se debe hacer jugar a los clientes por diferentes premios.'
            },
            {
                type: 'text',
                title: 'Menú celíacos',
                showInIndex: false,
                content: 'Hay una opción para celíacos, tratada según bromatología e higiene y seguridad.'
            },
            {
                type: 'text',
                title: 'Carta Braille',
                showInIndex: false,
                content: 'Para personas no videntes tenemos carta Braille. Se encuentra en la biblioteca del bar.'
            },
            {
                type: 'text',
                title: 'Venta de voucher (gift card)',
                showInIndex: false,
                content: 'Vendemos ambas opciones. Decir que sí al cliente y solicitarlo en la caja. Suele darse cuando el cliente quiere hacerle un regalo a alguien o pagar por adelantado.'
            },
            {
                type: 'text',
                title: 'Pet friendly',
                showInIndex: false,
                content: 'Somos pet friendly. Recibimos mascotas en todos los sectores. Debemos entregar agua a la mascota, algún juego y el merchandising de Vidón de regalo.'
            },
            {
                type: 'text',
                title: 'Entretenimiento para niños',
                showInIndex: false,
                content: 'Tenemos una caja para niños con juegos. Se debe ofrecer siempre que haya un niño en el bar.'
            },
            {
                type: 'text',
                title: 'Feria de artesanías',
                showInIndex: false,
                content: 'Todos los sábados realizamos ferias en los sectores jardín y Diegui. Cada feriante tiene una consumición de invitación. Se debe invitar a los clientes a visitarla.'
            },
            {
                type: 'text',
                title: 'Partidos de fútbol en pantalla',
                showInIndex: false,
                content: 'Pasamos todos los partidos que el cliente desee. Les decimos que sí y lo solicitamos al encargado. Tenemos pantallas y televisores en patio, juegos y cuadros. Una vez que el partido termina se debe cambiar la pantalla (solicitar al encargado). Los partidos pueden tener sonido.'
            },
            {
                type: 'text',
                title: 'Cine Vidón: películas o series',
                showInIndex: false,
                content: 'Lo realizamos en Diegui cualquier día de semana. Armamos todo como si fuera un cine, se pasa una peli o serie clásica o de moda. Hacemos pochoclos e invitamos con un vale trago a los que se quedan.'
            },
            {
                type: 'text',
                title: 'Comidas típicas en épocas especiales',
                showInIndex: false,
                content: 'En fechas patrias hacemos locro para comer en el bar o para delivery. Solemos organizar una peña el mismo día y después un bingo.'
            },
            {
                type: 'text',
                title: 'Noche retro',
                showInIndex: false,
                content: 'Se realizan las vísperas de feriado. Suena música retro, nos disfrazamos y ofrecemos entretenimiento a los clientes.'
            },
            {
                type: 'text',
                title: 'Peña de folclore',
                showInIndex: false,
                content: 'Realizamos una peña cada domingo. Hay banda, comida casera tipo guiso, empanadas, humita, etc., y finalizamos con un bingo.'
            },
            {
                type: 'text',
                title: 'Influencer en los bares',
                showInIndex: false,
                content: 'Solemos tener influencers para hacer campañas por las redes. Hacemos canje con ellos: los invitamos y ellos nos realizan contenido. Corroborar el arreglo con el encargado en dicho caso.'
            },
            {
                type: 'text',
                title: 'Lunes de torneos',
                showInIndex: false,
                content: 'Todos los lunes realizamos cualquier torneo. El primordial es el de truco. La inscripción es gratuita, se juega en parejas y hay premios.'
            }
        ]
    },
    {
        type: 'section',
        title: 'Atención al Cliente',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Bienvenidos!',
                showInIndex: false,
            },
            {
                type: 'text',
                title: '¿SABEN CÓMO EMPEZÓ...?',
                showInIndex: true,
                content: `Hoy repasamos los inicios...
En el año 2007, en el corazón de Alta Córdoba, con la idea de concretar un patio cervecero para disfrutar compartiendo entre amigos, nacía lo que hoy es VIDÓN BAR.
Amistad, trato desestructurado, alegría, era lo que se respiraba en el lugar.
Con el tiempo, VIDÓN BAR trascendió Alta Córdoba a punto tal que hoy es un ícono de la noche cordobesa.
A los 10 años de Vidón, se suma a la familia la sucursal de Nueva Córdoba, teniendo una gran aceptación en el público estudiantil y la zona.
Posicionando la marca y reafirmando que Vidón se convertía en el lugar de la BUENA VIDA en la ciudad de Córdoba.
En noviembre del 2019 se inaugura la 3ra sucursal de Vidón Bar, superando las expectativas y llevando la buena vida a la zona NORTE.`
            },
            {
                type: 'list',
                title: 'Nuestra historia en fechas',
                showInIndex: true,
                items: [
                    '2007 – NACE VIDÓN',
                    '2014 – AMPLIACIÓN CON SISTEMA DE FRANQUICIAS',
                    '2017 – APERTURA VIDÓN NVA CBA',
                    '2019 – APERTURA VIDÓN CERRO'
                ]
            },
            {
                type: 'list',
                title: 'Valores organizacionales',
                showInIndex: true,
                items: [
                    'Amabilidad y cortesía',
                    'Respeto',
                    'Compañerismo',
                    'Honestidad y transparencia',
                    'Responsabilidad',
                    'Proactividad',
                    'Puntualidad',
                    'Gentileza y cordialidad',
                    'Confianza'
                ]
            },
            {
                type: 'text',
                title: 'Misión',
                showInIndex: true,
                content: `Trabajamos para que todos los clientes que vienen a nuestro bar se sientan como en su casa, su club, en un ambiente desestructurado, relajado.
Que cada visita sea inolvidable, divertida y agradable, teniendo un sentido de pertenencia.
Apostamos también para que nuestra oferta de productos tenga la más alta calidad a un precio razonable, acompañada con la mejor atención de nuestro personal.`
            },
            {
                type: 'text',
                title: 'Visión',
                showInIndex: true,
                content: `Ser el bar referente en los principales barrios tradicionales en la ciudad de Córdoba y en las principales ciudades del país, a través de socios estratégicos, mediante una sólida red de franquicias que se sostengan en el tiempo.`
            },
            {
                type: 'list',
                title: 'Nuestro valor agregado',
                showInIndex: true,
                items: [
                    'Bebida personalizada',
                    'Eventos',
                    'Propuestas novedosas',
                    'After office',
                    'Instrumentos musicales',
                    'Cocina siempre abierta',
                    'Juegos de mesa',
                    'Reciclado'
                ]
            },
            {
                type: 'list',
                title: '¿Quiénes son nuestros clientes?',
                showInIndex: true,
                items: [
                    'Grupos de amigos que se reúnen',
                    'Grupos que se reúnen posterior a realizar actividades deportivas',
                    'Grupos que se reúnen luego del trabajo o el estudio',
                    'Personas solas',
                    'Grupo de cumpleaños o eventos',
                    'Grupos de trabajo o estudio',
                    'Parejas',
                    'Delivery'
                ]
            },
            {
                type: 'list',
                title: '¿Cómo son nuestros clientes? (Perfiles)',
                showInIndex: true,
                items: [
                    'Amarrete',
                    'Largoooo',
                    'Cumple o festejo',
                    'Parejas',
                    'Deportistas',
                    'Cliente COVID'
                ]
            },
            {
                type: 'list',
                title: 'Situaciones críticas',
                showInIndex: true,
                items: [
                    'Demora del pedido',
                    'Corte de luz',
                    'Faltante de mercadería',
                    'Pelea entre mesas',
                    'Clientes disconformes con la comida/bebida',
                    'Cliente que no quiere cumplir el protocolo'
                ]
            },
            {
                type: 'text',
                title: 'Perfil: Amarrete',
                showInIndex: true,
                content: `Cliente que quiere pagar menos de lo que vale su consumo.
Dice que es amigo del dueño.
Afirma que es cliente frecuente y merece un descuento.
Menciona que es su cumpleaños y que quiere que le regalemos algo.
Sugerencias para la atención: Comentar que el sistema no distingue precios.`
            },
            {
                type: 'text',
                title: 'Perfil: Largoooo – Quiere seguir tomando fuera de horario',
                showInIndex: true,
                content: `Cliente que luego de finalizar el horario de venta de bebidas alcohólicas insiste en seguir comprando.
Siempre pide hablar con el encargado o dueño para acceder a su pedido.
Está terminantemente prohibido vender alcohol luego del horario permitido (según legislación de la plaza).
El vendedor deberá resolver esta situación sin llamar al encargado.`
            },
            {
                type: 'text',
                title: 'Perfil: Cumpleaños – Grupo que festeja cumple o alguna celebración',
                showInIndex: true,
                content: `Permanecen mucho tiempo en el bar.
Grupo de clientes de gran consumo.
No miden lo que consumen.
Sugerencias para la atención:
• Ofrecer juegos de mesa o instrumentos
• Ofrecer promociones de cumpleaños y fernet
• Atender de forma personalizada y constante
• Consultar si quieren que les lleven bebidas en la medida que se terminan, sin preguntar nuevamente`
            },
            {
                type: 'text',
                title: 'Perfil: Parejas',
                showInIndex: true,
                content: `Grupo de 1 o 2 parejas que acuden al bar para comer y tomar algo.
Por lo general no permanecen hasta muy tarde.
Sugerencias para la atención:
• Ofrecer promociones de comida y bebida vigente
• Ofrecer juegos
• Permanecer atentos a cualquier pedido adicional sin interrumpir demasiado
• Siempre al devolver el cambio, entregar promociones para futuras visitas`
            },
            {
                type: 'text',
                title: 'Perfil: Grupos de deportistas',
                showInIndex: true,
                content: `Grupo de varones o mujeres que se acercan al bar con la intención de tomar algo rápido y comer algo llenador.
Sugerencias para la atención:
• Ofrecer Coca-Cola grande
• Siempre se debe ofrecer lomitos con papas fritas
• Luego de comer, intentar vender la promoción de fernet (la compra de la botella garantizará el regreso)`
            },
            {
                type: 'text',
                title: 'Perfil: Grupos con ganas de bolichear',
                content: `Grupo de varones o mujeres que se acercan al bar en busca de divertirse y llenar el vacío de la falta de boliches y fiestas.
Sugerencias para la atención:
• Ofrecer Absolut o bebidas fuertes
• Ofrecer juegos de mesa o instrumentos
• Regalar el shot de Toc Toc para incentivar mayor consumo dentro del bar`
            },
            {
                type: 'list',
                title: 'El ABC de la atención al público vidonero',
                showInIndex: true,
                items: [
                    'Recibir al cliente – Saludo inicial',
                    'Tomar el pedido + Venta sugestiva',
                    'Solicitud de adicional',
                    'Entrega de cuenta y saludo final'
                ]
            },
            {
                type: 'text',
                title: 'Venta sugerida',
                showInIndex: true,
                content: 'Porque somos los que vamos a hacer que cada cliente pase en Vidón un momento único y que nos vuelva a elegir otra vez.'
            },
            {
                type: 'list',
                title: '¿Por qué necesitamos conocer todo esto?',
                showInIndex: false,
                items: [
                    'Un poco de historia',
                    'El presente y el norte hacia donde vamos',
                    'Puesta en común de nuestro tipo de clientes',
                    'Cómo mejorar la atención',
                    'Qué nos llevamos de esta jornada'
                ]
            },
            {
                type: 'text',
                title: '¡Manos a la obra!',
                showInIndex: false,
                content: 'Gracias por participar de la jornada.'
            }
        ]
    },
]
//falta agregar el showInIndex en cada bloque que lo requiera de cocina
export const cocinaContent = [
    // Cocina
    {
        type: 'section',
        title: 'Introduccion',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Formación en Cocina',
                showInIndex: false,
                content: `Este módulo está diseñado para potenciar tus habilidades culinarias dentro del entorno dinámico de Vidón Bar. Aprenderás desde normas de higiene, manipulación de alimentos y organización del área, hasta técnicas de cocción, conservación, y elaboración de nuestros platos más representativos. Todo lo necesario para lograr excelencia y consistencia en cada preparación.`
            },
        ]
    },
    {
        type: 'section',
        title: 'Bolognesa',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Insumo', 'Cantidad'],
                data: [
                    ['Carne molida (pasada una sola vez)', '1000'],
                    ['Cebolla blanca', '1000'],
                    ['Sal', '10'],
                    ['Pimienta', '2'],
                    ['Vino blanco', '50']
                ]
            },
            {
                type: 'list',
                title: 'Protocolo de preparación / elaboración (paso a paso)',
                showInIndex: false,
                items: [
                    'Cortar la cebolla en brunoise, saltearla con aceite neutro hasta transparentar y caramelizar bien, desglasar con el vino blanco.',
                    'Sumar la carne picada y revolver para mezclar bien todo.',
                    'Cocinarlo hasta que la carne esté bien cocida, revolviendo de vez en cuando para una cocción pareja.',
                    'Una vez cocida la carne, condimentar y reservar para fraccionar.',
                    'Una vez fría la preparación, fraccionar en porciones de 100 grs.',
                    'Al momento del pedido, a la carne picada se le suma la salsa filetto para terminar de formar la salsa bolognesa.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Guiso de Lentejas',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Insumo', 'Cantidad'],
                data: [
                    ['Cebolla', '800'],
                    ['Pimiento rojo', '250'],
                    ['Zanahoria', '400'],
                    ['Zapallo', '500'],
                    ['Lenteja', '1000'],
                    ['Chorizo', '600'],
                    ['Carne de vaca', '750'],
                    ['Panceta', '150'],
                    ['Tomate', '500'],
                    ['Ají molido + pimienta + laurel', '2 + 2 + 10 hojas'],
                    ['Sal', '40']
                ]
            },
            {
                type: 'list',
                title: 'Protocolo de preparación / elaboración (paso a paso)',
                showInIndex: false,
                items: [
                    'Cortar en brunoise los vegetales.',
                    'Cortar en cubos de 1 cm la panceta y la carne de vaca.',
                    'Marcar el chorizo y cortarlo en rodajas.',
                    'Saltear la carne y la panceta y reservar aparte. En la misma olla, saltear los vegetales, sumar la sal y deglasar con vino blanco (100 ml).',
                    'Sumar la carne y el chorizo marcado y cortado en rodajas, agregar 3 litros de agua, el tomate fresco cortado en brunoise o el tomate triturado, sumar la lenteja, pimienta y ají.',
                    'Aparte, cocinar el zapallo y hacerlo puré.',
                    'Cuando la lenteja esté al dente, sumar el puré de zapallo.',
                    'Cuando la lenteja esté cocida, sacarla de la olla y esparcirla en una placa para frenar la cocción. Una vez fría, fraccionar en porciones de 600 grs.',
                    'Se puede freezar por 30 días. Para regenerar se puede usar microondas y olla. Agregar agua de ser necesario para que no quede tan seca.',
                    'Al emplatar, terminar con perejil fresco picado.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Mayonesa casera a base de Huevo en Polvo',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Ingrediente', 'Cantidad', 'x10'],
                data: [
                    ['Huevo en polvo', '10 grs', '50'],
                    ['Agua fría (para hidratar el huevo)', '50 grs', '500'],
                    ['Mostaza', '30 grs', '300'],
                    ['Sal', '15 grs', '150'],
                    ['Pimienta', '2 grs', '20'],
                    ['Limón exprimido (Fruta)', '50 grs', '500'],
                    ['Aceite', '1000 grs', '10'],
                    ['Agua fría (para "estirar")', '200 grs', '2000']
                ]
            },
            {
                type: 'list',
                title: 'Procedimiento',
                showInIndex: false,
                items: [
                    'Pesar todos los ingredientes.',
                    'Hidratar el huevo con el agua fría y revolver hasta obtener una preparación homogénea.',
                    'Adicionar la mostaza, la sal y la pimienta y procesar.',
                    'Agregar el aceite en forma de hilo, emulsionando todos los ingredientes.',
                    'Cuando la preparación esté "saturada" agregar el limón.',
                    'Agregar más aceite hasta saturar nuevamente.',
                    'Ir alternando el agregado de agua y aceite hasta agotar los insumos.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Mayonesa casera a base de Leche Entera',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Ingrediente', 'Cantidad', 'x10 kilos'],
                data: [
                    ['Leche entera', '100 grs', '1000'],
                    ['Agua fría (para hidratar el huevo)', '50 grs', '500'],
                    ['Mostaza', '30 grs', '300'],
                    ['Sal', '20 grs', '200'],
                    ['Pimienta', '2 grs', '20'],
                    ['Limón exprimido (Fruta)', '100 grs', '1000'],
                    ['Aceite', '1000 grs', '10000'],
                    ['Agua fría (para "estirar")', '200 grs', '2000']
                ]
            },
            {
                type: 'list',
                title: 'Procedimiento',
                showInIndex: false,
                items: [
                    'Pesar todos los ingredientes.',
                    'Colocar la leche en un recipiente y sumarle la mostaza, sal y pimienta y procesar.',
                    'Agregar el aceite en forma de hilo hasta saturar la preparación.',
                    'Adicionar el limón.',
                    'Agregar más aceite hasta saturar nuevamente.',
                    'Ir alternando el agregado de agua y aceite hasta agotar los insumos.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Pesto de Rúcula',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Insumo', 'Cantidad'],
                data: [
                    ['Rúcula', '150 grs'],
                    ['Queso Parmesano', '50'],
                    ['Sal', '5'],
                    ['Pimienta', '1'],
                    ['Aceite Neutro', '100']
                ]
            },
            {
                type: 'list',
                title: 'Protocolo de preparación / elaboración (paso a paso)',
                showInIndex: false,
                items: [
                    'Blanquear y saltear la rúcula antes de procesarla.',
                    'En una licuadora, procesar la rúcula junto con el parmesano, sal y pimienta.',
                    'Ir incorporando el aceite de a poco hasta que la rúcula empiece a procesarse. Una vez que esté bien molida, sumar el resto del aceite.',
                    'Guardar en mamadera para usar como salsa para decorar y potenciar los platos.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Polenta a la Chapa',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Definición en carta',
                showInIndex: false,
                content: 'Polenta Crocante / Polenta a la Chapa'
            },
            {
                type: 'text',
                title: 'Recomendaciones para la utilización de los insumos',
                showInIndex: false,
                content: 'Calentarla 2 minutos.'
            },
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Insumo', 'Cantidad'],
                data: [
                    ['Polenta Prestopronta Marca ARCOR', '960'],
                    ['Agua caliente', '1800'],
                    ['Leche', '1000'],
                    ['Sal', '50'],
                    ['Caldo de verdura', '50'],
                    ['Manteca', '200'],
                    ['Tomillo', '30'],
                    ['Pimienta', '5']
                ]
            },
            {
                type: 'list',
                title: 'Protocolo de preparación / elaboración (paso a paso)',
                showInIndex: false,
                items: [
                    'Calentar la leche junto con el agua, sumar la manteca, la sal y los demás condimentos.',
                    'Cuando rompa hervor, agregar la polenta presto pronta en forma de lluvia para que no se formen grumos y revolver sobre el fuego por 2 minutos.',
                    'Colocar la preparación en una placa enfilmada y que quede de dos centímetros de espesor.',
                    'Cuando la polenta en la placa esté tibia, ponerla en la heladera unas horas para que se enfríe y quede sólida, luego desmoldar y cortar en rectángulos de 20 cm x 10 cm (500g aprox).',
                    'Enfilmar los rectángulos y guardar en heladera (72 hs) o en freezer (30 días).',
                    'Para regenerar, precalentar muy bien la plancha y agregar un chorrito de aceite y colocarla sin moverla por 8 minutos.',
                    'Luego darla vuelta y calentarla 2 minutos más.',
                    'Emplatar con la cara más tostada hacia abajo, sumar la bolognesa, el queso parmesano o sardo y decorar con el pesto de rúcula.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Salsa Bechamel / Salsa Blanca',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Insumo', 'Cantidad'],
                data: [
                    ['Manteca', '50 grs'],
                    ['Harina blanca 000 o 0000', '50 grs'],
                    ['Leche', '600 grs'],
                    ['Sal', '15 grs'],
                    ['Pimienta', '2 grs'],
                    ['Nuez moscada', '1 grs']
                ]
            },
            {
                type: 'list',
                title: 'Protocolo de preparación / elaboración (paso a paso)',
                showInIndex: false,
                items: [
                    'En una sartén u olla, a fuego bajo, poner la manteca. Una vez derretida, incorporar la harina y cocinar revolviendo hasta que cambie de color.',
                    'Una vez cocida la harina, incorporar paulatinamente la leche caliente. Es importante agregar de a poco mientras se integra para evitar la formación de grumos.',
                    'Cuando se haya incorporado toda la leche, salpimentar y agregar la nuez moscada.',
                    'Calentar previamente la leche ayuda a terminar la salsa más rápido.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Salsa Filetto',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Insumos / Ingredientes',
                showInIndex: false,
                columns: ['Insumo', 'Cantidad'],
                data: [
                    ['Tomate', '1000 grs'],
                    ['Cebolla', '150 grs'],
                    ['Ajo', '1 gr'],
                    ['Sal', '15 grs'],
                    ['Pimienta', '1 gr'],
                    ['Aceite', '25 grs'],
                    ['Vino blanco', '50 ml'],
                    ['Tomillo', '5 grs'],
                    ['Laurel', '2 hojas']
                ]
            },
            {
                type: 'list',
                title: 'Protocolo de preparación / elaboración (paso a paso)',
                showInIndex: false,
                items: [
                    'El tomate puede ser fresco, perita en lata o triturado. Tener en cuenta el nivel de acidez de cada uno para controlar el sabor al final.',
                    'Cortar la cebolla en brunoise y cocinarla en la olla junto con el aceite. Cuando haya transparentado, incorporar el ajo picado y seguir cocinando todo hasta que esté bien rehogado.',
                    'Deglasar con el vino blanco, evaporar el alcohol y agregar el tomate.',
                    'Cocinar por 40 minutos aproximadamente y rectificar los condimentos. Justo antes de apagar el fuego, incorporar la pimienta.',
                    'Separar 2 tercios de la preparación para mixearla y volver a juntar todo. Agregar el laurel y el tomillo.',
                    'Si está muy ácida, se pueden incorporar unas cucharaditas de azúcar para enmascarar ese sabor ácido y dejar una salsa más amigable.',
                    'Otra forma de controlar esa acidez es usar bicarbonato de sodio como regulador del pH.'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'INSTRUCTIVO - Procesos de Cocina',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: '1.1. OBJETO',
                showInIndex: true,
                content: `Este instructivo tiene como objetivo, estandarizar los procesos de cocina, para trasladar toda nuestra experiencia y buenas prácticas, a los ENCARGADOS Y AUXILIARES, con el propósito de hacer eficientes los tiempos de producción, manteniendo la calidad de nuestros productos.`
            },
            {
                type: 'text',
                title: '1.2. ALCANCE',
                showInIndex: true,
                content: `MÓDULO FULL: Dirección, Responsables de Franquicia, Encargado de Cocina, Auxiliares de Cocina.
MÓDULO POR TEMPORADA: Encargado de Cocina, Auxiliares de Cocina.`
            },
            {
                type: 'text',
                title: '1.3. POLÍTICAS ESPECÍFICAS',
                showInIndex: true,
                content: `POLÍTICA DE ESTÁNDARES DE PRODUCCIÓN (OBLIGATORIA)
Cuando hablamos de estándares de producción nos referimos a la elaboración de nuestros productos (Tragos y comidas).
1. Los productos deberán ser elaborados bajos las indicaciones de las fichas de elaboración de productos.
2. Está terminantemente prohibido vender productos que no estén contemplados en las fichas de elaboración.
3. Los productos deberán ser entregados al cliente a la temperatura indicada.
4. Deberán mantenerse los preceptos de limpieza, seguridad e higiene.
5. Manejar SIEMPRE el stock de insumos con la consigna rotativa de PRIMEROS ENTRADOS = PRIMEROS SALIDOS (P.E.P.S.).
6. Mantener la temperatura adecuada en las cámaras de refrigeración o freezers con un programa de mantenimiento preventivo.`
            },
            {
                type: 'text',
                title: 'POLÍTICA DE ORGANIZACIÓN DE LA PRODUCCIÓN',
                showInIndex: true,
                content: `OBLIGATORIA
Es indispensable mantener una buena organización en nuestra área de horneado/producción, de esta forma ayudaremos enormemente a simplificar el trabajo y coordinación de las tareas y a mantener un ámbito de trabajo armonioso y agradable.
1. Conocer acabadamente nuestra oferta (La Carta).
2. Conocer profundamente el contenido de nuestras Fichas Técnicas de Productos y consultarlas, sin temor, ante cualquier duda.
3. Todos los pedidos deberán ser horneados en el orden en que se produjo el ingreso de la comanda.
4. Manejar máximos y mínimos de materia prima (insumos e ingredientes).
5. Mantener los preceptos de higiene y seguridad en el área de Producción.
6. Contar con todo el equipo y utensilios de producción y velar por su mantenimiento y preservación.
7. Tomar en consideración la cantidad de producción que se realiza (fundamentalmente los ingredientes para las distintas variedades de pizzas) en base a historial para evitar merma.`
            },
            {
                type: 'text',
                title: 'POLÍTICA DE EQUIPOS Y HERRAMIENTAS DE TRABAJO',
                showInIndex: true,
                content: `OBLIGATORIA
Área de Cámaras | Freezers:
El área de cámaras deberá estar perfectamente limpia con las temperaturas adecuadas y todo ordenado. Deberá estar dividida y siempre contará con las siguientes áreas:
• Almacenamiento de “Congelados” y divididos entre ellos.
• Almacenamiento de “refrigerados”.
• Almacenamiento de “Enfriamiento” para lo de uso diario.
Deberá de etiquetarse con el nombre del producto y la fecha de ingreso, con el cual sabremos específicamente el tiempo de recepción y estadía en las cámaras.`
            },
            {
                type: 'text',
                title: 'RECOMENDACIONES PARA EVITAR INTOXICACIÓN ALIMENTARIA',
                showInIndex: true,
                content: `OBLIGATORIA
Una intoxicación alimentaria es una enfermedad muy desagradable que generalmente ocurre dentro de las primeras 36 horas después de la ingesta de alimentos contaminados con microorganismos o sustancias tóxicas. Los síntomas incluyen: náuseas, vómitos, dolor abdominal y diarrea.
Los agentes responsables pueden ser: bacterias o sus toxinas, virus, sustancias químicas, metales, venenos vegetales, alimentos para bacterias.
La intoxicación alimentaria por causa bacteriana es la más frecuente y puede causar la muerte.
Las bacterias necesitan para crecer: temperatura, alimento, humedad y tiempo. Si estas condiciones son óptimas una sola bacteria puede reproducir 16 millones de bacterias en solo 8 horas.
Condiciones ambientales respecto a la reproducción bacteriana:
• TEMPERATURA: óptima a 37°C.
• ALIMENTO: prefieren alimentos ricos en proteínas y agua.
• HUMEDAD: óptima entre 50% y 100%.
• TIEMPO: en condiciones óptimas, una sola bacteria puede producir 16 millones en 8 horas.
Para evitar esto es conveniente controlar estos factores trabajando en forma ordenada en un sector limpio, seco y utilizando desinfectantes.
LOS ALIMENTOS CONTAMINADOS QUE PUEDEN CAUSAR UNA INTOXICACIÓN O INFECCIÓN GRAVE NO NECESARIAMENTE PRESENTAN ASPECTO, OLOR O GUSTO DESAGRADABLE.
POLÍTICA: ES OBLIGATORIO QUE EL FRANQUICIADO CUENTE CON EL ASESORAMIENTO Y CUMPLA CON LAS INSTRUCCIONES DE UNA BROMATÓLOGA EN CUANTO AL MANEJO, MANIPULACIÓN Y PREPARADO DE ALIMENTOS.`
            },
            {
                type: 'text',
                title: '1.4. PRE-PRODUCCIÓN',
                showInIndex: true,
                content: `Uno de los aspectos diferenciales de nuestra cocina es la velocidad con que entregamos los pedidos. Esto solo es posible a través de una gestión ordenada de todos los procesos de PRE-PRODUCCIÓN. Se establece un esquema semanal de elaboración de PRE-ELABORADOS para ahorrar pasos y mantener calidad y frescura.
La clasificación de tablas por colores le permitirá evitar la contaminación cruzada. RESPETE SIEMPRE LA CLASIFICACIÓN DESCRIPTA EN EL GRAFICO SUPERIOR.`
            },
            {
                type: 'table',
                title: 'Cronograma semanal de pre-elaborados',
                showInIndex: true,
                columns: ['Día de la semana', 'Pre-elaborado a producir', 'Stock crítico (mínimo indispensable)'],
                data: [
                    ['Lunes', '', '120 unidades por semana'],
                    ['Martes', 'Dos cajones de pollo', 'Entre 16 y 18 pollos'],
                    ['Miércoles', 'Queso Tybo', '1'],
                    ['', 'Jamón cocido', '1'],
                    ['', 'Salame de Milán', '1/2'],
                    ['Jueves', '', '6 kg'],
                    ['', '', '20 porciones'],
                    ['', '', '2 por porción'],
                    ['Todos los días', 'Tomate', '2 kg'],
                    ['', 'Lechuga', '1 kg'],
                    ['', 'Cebolla', '3 kg'],
                    ['', 'Mayonesa', '1 pote por día']
                ]
            },
            {
                type: 'list',
                title: 'Ejemplo de pre-elaboración',
                showInIndex: false,
                items: [
                    'Lomo: Limpiar la grasa, quitar el cordón y la cabeza, quitar membrana y cortar venas. Cortar medallones de 3 cm aprox. Colocar el medallón sobre un folex y colocar en la prensa. Prensar y envolver en el resto del folex para almacenar.',
                    'Pollo: Colocar el pollo sobre la tabla amarilla. Cortarlo por presas. Quitarle la piel. Quitarle el hueso.',
                    'Tomate: Colocar el tomate sobre la tabla verde. Cortar en rodajas de 5mm aprox. Guardar en el tupper.'
                ]
            },
            {
                type: 'text',
                title: '1.5. ALMACENAMIENTO',
                showInIndex: true,
                content: `EN FREEZER: Panceta, fiambre entero y cortado, lomo y pollo prensado, carne para fajitas, carne, milanesas de pollo, rabas/mejillones/camarones.
EN CÁMARA DE FRÍO:
A. Queso, jamón, salsa, aderezos, tupper con fiambres, discos de tacos, salame colonia, huevos hervidos.
B. Pan, mayonesa, jamón, queso (cortado), palmitos, morrones, roquefort, champignon, atún, cebolla cocinada, escabeche.
C. Masa de pizza, muzzarella, discos de fajitas.
D. Verduras (tomate, cebolla, lechuga, repollo, limón, rúcula, zanahoria).`
            },
            {
                type: 'text',
                title: '1.6. RECOMENDACIONES PARA LA UTILIZACIÓN DEL HORNO',
                showInIndex: true,
                content: `Uno de los quemadores debe permanecer apagado, salvo en los momentos de mayor demanda o exceso de pedidos. Este sector del horno se puede utilizar para mantener caliente los productos.
A. TERMINACIÓN: La zona superior del horno se utiliza para terminar de calentar la pizza antes de llevarla a la mesa.
B. COCCIÓN BASE: La zona media se utiliza para cocinar la pre-pizza con la muzzarella, antes de agregarle los ingredientes finales.
C. FUEGO FUERTE: La zona de abajo solo se debe utilizar en los momentos de mayor demanda y siempre se deberá tener cuidado para que no se quemen las pizzas.`
            },
            {
                type: 'table',
                title: '1.7. ESQUEMA DE LIMPIEZA DE COCINA',
                showInIndex: true,
                columns: ['Sector/Equipo', 'Frecuencia', 'Tipo/Descripción'],
                data: [
                    ['Plancha', 'Día de por medio', 'Rasquetear con espátula'],
                    ['Detrás y debajo del horno', '2 veces por semana', 'Limpiar con desengrasante'],
                    ['Cambiar aceite de freidora', '1 vez al mes', 'Vaciar el aceite en el balde especial'],
                    ['Heladeras', '1 vez por semana', 'Limpiar con trapo limpio y húmedo'],
                    ['Extractor', '1 vez cada 6 meses', 'Desarmar y limpiar paletas'],
                    ['Piso', '2 veces por día', 'Barrer y pasar trapo con lavandina a la 1:00 am. Barrer y pasar trapo con detergente antes de cerrar'],
                    ['Mesada', 'Constantemente', 'Mantener libre de suciedad, restos de comida, envoltorios y envases'],
                    ['Máquina de fiambre', '1 vez por semana', 'Rasquetear y limpiar con trapo húmedo'],
                    ['Microondas', '1 vez por semana', 'Rasquetear y limpiar con trapo húmedo'],
                    ['Prensa', '1 vez por semana', 'Rasquetear y limpiar con trapo húmedo'],
                    ['Balanza', 'Al terminar de usar', 'Limpiar con trapo húmedo'],
                    ['Sifón de bacha', 'Cada 15 días', 'Desarmar y quitar restos de comida o suciedad'],
                    ['Cañerías', '1 vez por mes', 'Lavado preventivo con soda cáustica o destapa cañerías']
                ]
            },
            {
                type: 'text',
                title: 'POLÍTICA DE CONTROL DE PLAGAS',
                showInIndex: true,
                content: `OBLIGATORIA
EL FRANQUICIADO deberá contratar una empresa especializada en control de plagas, y el asesoramiento de un profesional BROMATÓLOGO.
Deberá realizar mensualmente el DESINSECTADO, DESINFECTADO Y DESRATIZADO.`
            },
            {
                type: 'text',
                title: '1.8. RESUMEN DE PROCESOS DIARIOS DE COCINA',
                showInIndex: true,
                content: `El siguiente diagrama busca sintetizar los procesos antes mencionados, con el objetivo de ser colocado a la vista de todos los responsables de las tareas en la cocina y así poder recordar rápidamente las tareas necesarias para una gestión eficiente de la misma.`
            },
            {
                type: 'text',
                title: '1.9. MANTENIMIENTO DE LA COCINA',
                showInIndex: true,
                content: `Más allá del esquema de limpieza enunciado anteriormente el ENCARGADO DE LA COCINA deberá pintar las paredes al menos dos veces por año. Será responsabilidad de todos los AUXILIARES DE COCINA notificar al ENCARGADO DE LA COCINA o Franquiciado cualquier desperfecto que pudiera presentarse en los equipos de cocina.`
            }
        ]
    },
    {
        type: 'section',
        title: 'INSTRUCTIVO - Manejo de Alimentos',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Introducción',
                showInIndex: false,
                content: `La seguridad alimenticia depende de cada una de las áreas de trabajo que intervienen con la operación, desde la recepción de las materias primas, almacenaje, flujo interno, preparación y servicio al cliente, lo cual nos indica que el eficaz manejo de estos insumos es una tarea que involucra a todos aquellos que interactuamos de una forma directa o indirecta con estos procesos. Por tal razón en VIDÓN BAR® este documento brinda las herramientas necesarias para poder desarrollar estas actividades conforme a procedimientos escritos y lograr una mejora continua en el manejo higiénico de los alimentos.`
            },
            {
                type: 'text',
                title: 'Propósito',
                showInIndex: false,
                content: `Este instructivo establece métodos para el desarrollo de buenas prácticas en el manejo higiénico de los alimentos e higiene personal, a la vez de brindar una guía sobre recepción segura de insumos para producción.`
            },
            {
                type: 'list',
                title: 'Definiciones',
                showInIndex: true,
                items: [
                    'Alimentos potencialmente peligrosos: Son aquellos que en razón de su composición o sus características físicas, químicas o biológicas pueden favorecer el crecimiento de microorganismos y la formación de sus toxinas, por lo que representan un riesgo para la salud humana. Requieren condiciones especiales de conservación, almacenamiento, transporte, preparación y servicio; éstos son: pescados, lácteos, carne y sus productos y huevo entre otros.',
                    'Alimentos preparados: Son aquellos que se someten a un procedimiento mecánico como picado, mezclado entre otros; físico-químico como calor húmedo o seco, de fritura, enfriamiento o congelación para su consumo.',
                    'Desinfección: Reducción del número de microorganismos presentes en una superficie o alimento vegetal, a un nivel que no dé lugar a contaminación nociva, mediante agentes químicos, métodos físicos o ambos.',
                    'Escamocheo: Acción de eliminar todos los residuos alimenticios de los platos, cubiertos, utensilios y recipientes.',
                    'Higiene de los alimentos: Son las medidas necesarias que se realizan durante el proceso de los alimentos y que aseguren la inocuidad de los mismos.',
                    'Inertes: Características de un material de no modificar las propiedades físicas, químicas o biológicas al contacto con cualquier sustancia que se presente en sus diferentes estados.',
                    'Inocuo: Aquello que no causa daño.',
                    'Manipulación de los alimentos: El conjunto de las operaciones empleadas en la preparación de alimentos.',
                    'Proceso: conjunto de actividades relativas a la obtención, elaboración, fabricación, preparación, conservación, mezclado, acondicionamiento, envasado, manipulación, transporte, distribución, almacenamiento y expendio o suministro al público, de alimentos.',
                    'Signos de descongelamiento: Presencia de líquidos o líquido congelado en el fondo del empaque o cartón que contiene a los alimentos y se caracterizan por la aparición de cristales grandes de hielo que indican que el alimento ha sido descongelado y vuelto a congelar.',
                    'Sistema PEPS (primeras entradas-primeras salidas): Serie de operaciones que consiste en rotular, etiquetar o marcar con cualquier otro método los alimentos con la fecha de ingreso al almacén y colocar la mercadería conforme a dicha fecha, de tal manera que se asegure la rotación de los mismos.',
                    'Superficies vivas: Las áreas del cuerpo humano que entran en contacto con el equipo, utensilios y alimentos durante su preparación y consumo.',
                    'Superficie limpia: Aquella que se encuentra de forma visible libre de cualquier sustancia o materia diferente al material intrínseco del que está hecha.'
                ]
            },
            {
                type: 'text',
                title: 'Simbología',
                showInIndex: true,
                content: `Observar | Medir tiempo | Registro | Temperatura | Lavar manos | Desinfectar`
            },
            {
                type: 'text',
                title: 'Contaminación Cruzada',
                showInIndex: true,
                content: `Las bacterias también las podemos propagar por medio de la contaminación cruzada, la cual la podemos interpretar como la transferencia de substancias o microorganismos dañinos a la comida por medio de:
• Manos que tocan alimentos crudos y que después tocan alimentos cocidos y listos para el consumo humano.
• Superficies de contacto con comida que tocan los alimentos crudos y que no están limpias ni desinfectadas y que después tocan alimentos que están listos para consumirse.
• Trapos, fibras, esponjas, etc., que tocan alimentos crudos, equipo o utensilios que no están limpios ni desinfectados y que después se usan en superficies, equipo y utensilios para alimentos que están listos para consumirse.
• Alimentos crudos o contaminados que tocan o se derraman sobre alimentos cocinados o listos para el consumo humano.
Las superficies de contacto con comida incluyen cualquier superficie de equipo o utensilio que entre en contacto normal con comida o que puede gotear o derramarse en alimento o en superficies que normalmente entran en contacto con comida.`
            },
            {
                type: 'text',
                title: 'Concepto de Limpio vs. Desinfectado',
                showInIndex: true,
                content: `Limpio significa libre de mugre visible.
Desinfectado significa que está libre de niveles dañinos de contaminación.

La comida, equipo y los utensilios limpios no siempre están desinfectados, por ejemplo un inserto para baño maría puede verse muy limpio, más sin embargo puede ser portador de bacterias y químicos dañinos. Después de ser lavada, enjuagada, sumergida en una solución de yodo y secada al aire, el mismo inserto puede presentar algunas manchas o marcas de agua, pero ahora sí esta desinfectada.
El objetivo final de una desinfección es utilizar el calor y/o químicos que destruyan el 99.99% de microorganismos causantes de enfermedades en superficies de contacto con comida.`
            },
            {
                type: 'list',
                title: 'Factores frecuentes de brotes de enfermedades transmitidas por alimentos',
                showInIndex: true,
                items: [
                    'El no enfriar los alimentos adecuadamente.',
                    'El no calentar o cocinar los alimentos correctamente.',
                    'Empleados infectados que tienen una mala higiene en su hogar y en su trabajo.',
                    'Preparar alimentos con un día o más por adelantado antes de servirse.',
                    'Agregar ingredientes crudos o contaminados a los alimentos cocidos sin darles el tiempo necesario para su cocción.',
                    'Dejar que los alimentos pasen demasiado tiempo por temperaturas que son favorables a la reproducción de bacterias.',
                    'El no recalentar alimentos cocinados a temperaturas que maten a las bacterias.',
                    'La contaminación cruzada de alimentos cocidos por alimentos crudos, equipo mal lavado o mal desinfectado, o por personal que maneja de manera equivocada el alimento.'
                ],
                description: `Todos estos factores se pueden dividir en tres categorías:
1. Mal manejo de tiempos y temperaturas.
2. Mala higiene personal.
3. Contaminación cruzada.`
            }
        ]
    },
    {
        type: 'section',
        title: 'INSTRUCTIVO - Manejo de Alimentos (Continuación)',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: '¿Cómo se realiza el proceso de lavado, enjuague y desinfectado?',
                content: `Este procedimiento se va a efectuar en un sistema de fregadero de tres compartimientos, el cual nos va a ayudar a realizarlo con mayor facilidad para materias primas como frutas y verduras; y sobre todo para platos, utensilios y en partes de equipo desarmable. Este procedimiento se efectúa de la siguiente manera:

a) Quitar desechos y enjuagar los artículos antes de lavarlos.
b) Lavar los artículos en el primer compartimiento en una solución de agua con detergente a por lo menos 40 ºC. Utilizar un cepillo o fibra para quitar bien la mugre.
c) Enjuagar en el segundo compartimiento con agua limpia y transparente a una temperatura aproximada de 50 ºC. Eliminar cualquier vestigio de comida o detergente que le quede al artículo.
d) Desinfectar en el tercer compartimiento sumergiendo los artículos en una solución de agua y yodo a una temperatura aproximada de 24 ºC.
e) Dejar que los artículos se escurran y sequen en un área ventilada.`
            },
            {
                type: 'text',
                title: 'Higiene en el personal de trabajo',
                showInIndex: true,
                content: `El personal de trabajo dentro de las instalaciones es el factor más importante en el buen manejo de los alimentos, pero antes de comenzar a realizar estas actividades tenemos que ver por nuestra propia higiene personal ya que es vital para la seguridad y salubridad alimenticia. Las enfermedades se pueden propagar por medio de casi cualquier parte del cuerpo, por lo tanto, es responsabilidad de cada uno de nosotros.`
            },
            {
                type: 'text',
                title: 'Uniforme oficial de cocina',
                showInIndex: true,
                content: `En nuestro Local el uso del uniforme es de gran importancia para mantener el sistema de higiene en cada uno de nosotros, dándonos orden y limpieza en el trabajo diario.
JOYERÍA: Todos los anillos, pulseras, relojes, collares, etc., no se utilizan ya que nos pueden ocasionar quemaduras, se pueden atorar en el equipo ocasionando accidentes, pueden causar infecciones o enfermedades ya que son difíciles de limpiar y además tenemos latente un riesgo de contaminación física en los alimentos que se preparan.`
            },
            {
                type: 'list',
                title: 'Lavado de manos',
                showInIndex: true,
                items: [
                    'Para secarse, despachar el papel.',
                    'Enjabonar las manos hasta el codo.',
                    'Lavarse las manos empezando en el antebrazo con el cepillo durante 20 segundos.',
                    'Enjuagar.',
                    'Secar.',
                    'Utilizar desinfectante tocando el despachador con el papel.',
                    'Dejar secar el desinfectante.'
                ],
                description: `Este procedimiento se tiene que aplicar después de:
• Cada cambio de alimento.
• Al lavar maquinaria, pero sin salir de la zona de horneado.
• Estornudar.
• Toser.
• Ir al baño.
• Tocar el cabello.
• Fumar.
• Comer.`
            },
            {
                type: 'list',
                title: 'Cuidado de manos',
                showInIndex: true,
                items: [
                    'Mantener uñas cortas y limpias, no utilizar esmalte para uñas, ni uñas postizas.',
                    'No tocar con nuestras manos el cabello ni la piel, especialmente llagas, cortadas o infecciones.',
                    'Cubrir correctamente todas las cortadas con vendajes y guantes de plástico.',
                    'Lavar las manos antes de ponerse los guantes.',
                    'Cambiar de guantes cada vez que se cambie de alimento.',
                    'Cambiar los guantes tan pronto como se ensucien o rasguen y antes de comenzar una tarea diferente.'
                ]
            },
            {
                type: 'text',
                title: 'Personal enfermo o accidentado',
                showInIndex: true,
                content: `Es importante que cualquier persona que va a desarrollar actividades en la preparación, elaboración y servicio de alimentos informe al responsable de área algún problema de salud o accidente antes de comenzar sus labores, al igual que si esto llega a suceder durante el día con la finalidad de evitar una contaminación biológica en las materias primas y alimentos ya procesados. Las personas que sufren algún tipo de herida en la piel tienen que realizarse una buena curación de su herida, quemadura, llaga, etc., y taparse el área afectada; las curitas o vendajes tienen que estar limpios, secos y prevenir que las heridas supuren, los guantes de plástico a prueba de agua y desechables tienen que usarse sobre estos vendajes (esto solamente si el Franquiciado o Encargado permite que continúe trabajando).

También es importante que las personas que tienen alguna enfermedad que no afecta biológicamente a los alimentos y que pueden trabajar en cocinas tengan sus medicinas lejos de estas áreas y las almacenen junto con sus objetos personales.`
            },
            {
                type: 'list',
                title: 'Recepción de mercadería segura',
                showInIndex: true,
                items: [
                    'Inspeccionar la materia prima inmediatamente al llegar el proveedor.',
                    'Verificar los sellos en la materia prima en la que así este especificado.',
                    'Tomar muestras en varios lados en los productos que vienen en grandes cantidades o en varios paquetes individuales.',
                    'Verificar fechas de vencimiento.',
                    'Cambiar la materia prima de las cajas originales del proveedor a las cajas del Local antes de ir al depósito. (Ver código de colores de cajas para materia prima).',
                    'Materias primas que necesiten ser lavadas, enjuagadas, desinfectadas y secadas, aplicarles este procedimiento antes de trasladar al almacén.',
                    'Trasladar los artículos rápidamente al depósito. No dejarlos en el área de recepción ni en los pasillos.',
                    'Rechazar las materias primas que no cumplen con las especificaciones de recepción de mercadería.'
                ],
                description: `Es importante que el área de recepción de mercadería todos los días se mantenga limpia y ordenada para que el proceso de recepción se realice efectivamente antes, durante y después de cada jornada de trabajo.`
            },
            {
                type: 'text',
                title: 'Código de colores de cajas para materia prima',
                showInIndex: true,
                content: `Todas las cajas que se utilizan para el trasporte interno de la materia prima comenzando el turno, durante el turno y al final de éste se tienen que limpiar con una solución de detergente, agua y cloro.`
            }
        ]
    },
    {
        type: 'section',
        title: 'Recepción de mercadería específica',
        showInIndex: true,
        blocks: [
            {
                type: 'table',
                title: 'Alimentos en Tetra-Pack',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Productos ultra pasteurizados se pueden recibir a temperatura ambiente.', 'Productos abiertos, con fisuras.'],
                    ['Empaques bien cerrados, sin fisuras.', '']
                ]
            },
            {
                type: 'table',
                title: 'Alimentos enlatados',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Latas en buen estado, sin golpes, abolladuras, oxido.', 'Latas que presenten golpes, abolladuras por mal manejo y oxido.'],
                    ['Todas las latas que se reciben tienen que presentar etiqueta de identificación del producto.', 'Todos las latas que no presenten dicha etiqueta.']
                ]
            },
            {
                type: 'table',
                title: 'Alimentos secos',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Se reciben en paquetes secos, bien cerrados, sin orificios o roturas.', 'Paquetes abiertos, con humedad, orificios o roturas.'],
                    ['Sin ningún tipo de moho o contaminación de insectos.', 'Alimentos que presenten moho o algún tipo e insecto.']
                ]
            },
            {
                type: 'table',
                title: 'Frutas y verduras',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Frutas y verduras en buen estado, buena coloración sin ningún tipo de plaga.', 'Frutas y verduras con golpes, decoloración y con algún tipo de plaga presente.']
                ]
            },
            {
                type: 'table',
                title: 'Huevos',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Olor agradable característico de huevo.', 'Olores desagradables.'],
                    ['Las yemas tienen que resaltar y estar firmes.', 'Yemas descoloridas y flácidas.'],
                    ['Las claras deben envolver bien la yema y estar bien adheridas.', 'Claras demasiado líquidas sin envolver bien a la yema.']
                ]
            },
            {
                type: 'table',
                title: 'Pescados frescos y congelados',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Sin olor fuerte a pescado.', 'Olor fuerte a amoniaco.'],
                    ['Ojos brillantes, claros y resaltantes.', 'Ojos hundidos, nublados o con color rojo alrededor.'],
                    ['Textura de la carne y la barriga firme y que se retracten al tacto.', 'Branquias secas, carne suave y que se hunda al oprimirla quedando la marca impresa del dedo en el pescado.']
                ]
            },
            {
                type: 'table',
                title: 'Mariscos frescos y congelados',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Conchas cerradas.', 'Conchas parcialmente abiertas o totalmente abiertas.']
                ]
            },
            {
                type: 'table',
                title: 'Aves frescas',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Carne sin decoloraciones.', 'Color morado verdoso o una decoloración verde alrededor del cuello y puntas de las alas obscurecidas.'],
                    ['Textura firme y se retracta al tacto.', 'Textura pegajosa bajo las alas y por las coyunturas, carne suave y bofa.'],
                    ['Olor normal a pollo crudo.', 'Olor anormal.']
                ]
            },
            {
                type: 'table',
                title: 'Carne de cerdo',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Carne con color rosado y grasa blanca.', 'Carne con presencia de manchas cafés, verdes o moradas.'],
                    ['Textura firme y que se retracte al tacto.', 'Textura bofa o flácida, que no se retracte al tacto.'],
                    ['', 'Textura demasiado babosa o pegajosa.'],
                    ['Sin rastros de parásitos.', 'Cualquier indicio de parásitos, insectos o larvas.'],
                    ['Empaques limpios y en buen estado.', 'Empaques sucios, rasgados o rotos.']
                ]
            },
            {
                type: 'table',
                title: 'Carne vacuna fresca o congelada',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Carne con color rosado y grasa blanca.', 'Carne con presencia de manchas cafés, verdes o moradas.'],
                    ['Textura firme y que se retracte al tacto.', 'Textura bofa o flácida, que no se retracte al tacto.'],
                    ['', 'Textura demasiado babosa o pegajosa.'],
                    ['Sin rastros de parásitos.', 'Cualquier indicio de parásitos, insectos o larvas.'],
                    ['Con olor característico de carne en buen estado.', 'Olor a rancio y a descomposición.'],
                    ['Empaques limpios y en buen estado.', 'Empaques sucios, rasgados o rotos.']
                ]
            },
            {
                type: 'table',
                title: 'Carne de res (vaca)',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 6 ºC.'],
                    ['Si el producto se recibe congelado a –18 ºC', 'Temperatura mayor a –15 ºC en el interior del producto.'],
                    ['Carne con color rojo cerezo brillante.', 'Carne con presencia de manchas cafés, verdes, moradas o puntos negros o blancos.'],
                    ['Textura firme.', 'Textura bofa o flácida.'],
                    ['', 'Textura demasiado babosa, pegajosa o seca.'],
                    ['Sin rastros de parásitos.', 'Cualquier indicio de parásitos, insectos o larvas.'],
                    ['Empaques limpios y en buen estado.', 'Empaques sucios, rasgados o rotos.'],
                    ['Si es carne importada con sellos correspondiente a la importación, empaquetada al alto vacío.', 'Si no tiene sellos y empaque sin alto vacío.']
                ]
            },
            {
                type: 'table',
                title: 'Embutidos',
                showInIndex: true,
                columns: ['ACEPTAR', 'RECHAZAR'],
                data: [
                    ['Temperatura de recepción de 4 ºC.', 'Temperatura mayor a 4 ºC.'],
                    ['Empacados al alto vacío porcionado y en empaque original.', 'Sin empaque al alto vacío, en grandes cantidades y en empaques no originales.']
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Productos Congelados y Almacenamiento',
        showInIndex: true,
        blocks: [
            {
                type: 'list',
                title: 'Verificación de productos congelados',
                items: [
                    'Envolturas herméticamente cerradas o envolturas que cubren perfectamente bien al producto.',
                    'Que no contenga cristales de hielo grandes.',
                    'Sin áreas de hielo sólido.',
                    'Sin partes de alimento decolorados o seco.',
                    'No debe tener productos y cartones deformados.',
                    'No debe presentar rastros de haber sido descongelado y vuelto a congelar.',
                    'Sin ningún rastro de insectos en estado de congelación.'
                ]
            },
            {
                type: 'text',
                title: 'Almacenamiento de materias primas',
                showInIndex: true,
                content: `El almacenamiento de las materias primas después de la recepción debe ejecutarse de manera rápida y efectiva para asegurar la calidad de los productos. Depósitos, cámaras de refrigeración, cámaras de congelación, refrigeradores en cocinas, etc., deben mantener un programa de inspección y mantenimiento constante. La medición y registro de las temperaturas de los almacenes y de los productos son parte integral del sistema de calidad en el buen manejo de materias primas.

En las áreas de almacenamiento de materias primas NO se pueden almacenar artículos de limpieza, ya que representan un riesgo químico. Para estos productos existen armarios cerrados con llave y alejados de las áreas de preparación y almacenamiento de alimentos.

Por ningún motivo se deben utilizar recipientes de químicos vacíos para guardar comida ni colocar químicos en recipientes de comida usados.`
            },
            {
                type: 'list',
                title: 'Unidades de refrigeración: buenas prácticas',
                showInIndex: true,
                items: [
                    'Utilizar las unidades de refrigeración solamente para almacenamiento de materias primas potencialmente peligrosas.',
                    'Monitoreo constante de temperaturas. Cada unidad debe estar equipada y en funcionamiento con termómetro con exactitud de ± 1.5 ºC.',
                    'Colocar dentro de las unidades suficientes repisas tipo parrilla.',
                    'Permitir que el aire circule alrededor de los alimentos; evitar la sobrecarga ya que esto fuerza la unidad de enfriamiento.',
                    'Mantener la puerta de la unidad cerrada y abrirla por periodos cortos de tiempo.',
                    'Contar con un programa de mantenimiento para que las unidades se mantengan limpias y desinfectadas.'
                ]
            },
            {
                type: 'text',
                title: 'Almacenamiento en refrigeración: Carnes (ave, cerdo, carnes rojas, pescado, etc.)',
                showInIndex: true,
                content: `La carne debe recibirse refrigerada y/o congelada a las temperaturas indicadas, por lo tanto el traslado de recepción al almacén debe desarrollarse rápidamente para no ganar temperatura.

Puntos importantes para un almacenamiento efectivo de carne:
• El almacén debe recibir las carnes de ave y cerdo en cajas de color AMARILLO.
• El almacén debe recibir las carnes rojas en cajas de color ROJO.
• El almacén debe recibir los pescados y mariscos en cajas de color AZUL.
• Guardar dentro de refrigeración a 4ºC en la sección destinada a las carnes rojas para mantener esta temperatura en el interior del producto hasta su uso.
• Si el producto va a ser porcionado se etiqueta una vez que esto haya sucedido, pero si el producto se almacena entero debe entrar a la unidad con su respectiva etiqueta de identificación y en empaque al alto vacío bien cerrado y sin roturas.
• Si el producto se almacena en congelación debe ser a –18ºC y empacado de igual manera para evitar que el frío queme el alimento y disminuya su calidad.
• Nunca recongelar productos descongelados sino hasta haber sido cocidos.
• Colocar los alimentos crudos debajo de los alimentos cocidos para evitar contaminación cruzada.
• Verificar constantemente que las carnes rojas NO tengan manchas verdes o moradas, textura bofa o flácida, pegajosa, babosa o seca y olor a descomposición; en caso de presentar estas características, desechar inmediatamente.
• Dar rotación efectiva (Sistema PEPS).

Es importante NO romper en ningún momento la cadena del frío, es decir, que los productos no se saquen de su ambiente frío y se dejen por periodos largos de tiempo fuera de una temperatura de 4 ºC.`
            }
        ]
    },
    {
        type: 'section',
        title: 'Almacenamiento de Lácteos, Frutas, Verduras y Secos',
        showInIndex: true,
        blocks: [
            {
                type: 'text',
                title: 'Productos lácteos',
                showInIndex: true,
                content: `Al recibir productos lácteos en el almacén, deben estar dentro de cajas de color blanco.

El almacenamiento de productos lácteos ultra pasteurizados en empaque Tetra-Pak® pueden o no almacenarse en refrigeración, pero deben refrigerarse a 4ºC al momento de ser abiertos.

Los productos lácteos frescos deben trasladarse rápidamente al almacén después de su recepción y guardarse a 4ºC, aplicando rotación (PEPS) para asegurar su calidad y alejados de alimentos con olores fuertes como pescado o camarón.`
            },
            {
                type: 'text',
                title: 'Frutas y verduras',
                showInIndex: true,
                content: `Las frutas y verduras que pasan al almacén deben haber sido previamente lavadas y desinfectadas en el área de recepción de mercadería.

Deben almacenarse dentro de bolsas o cajas plásticas para conservar frescura, limpieza y orden, dentro de las unidades refrigerantes a 4ºC. Estos productos se sacan de refrigeración solo cuando van a ser utilizados.`
            },
            {
                type: 'text',
                title: 'Productos secos y enlatados',
                showInIndex: true,
                content: `Los productos secos como frutas secas, leguminosas, cereales, arroz, azúcar, harina, etc., deben mantenerse intactos y secos para conservar su calidad. Pueden almacenarse por periodos largos, pero hay que evitar altos niveles de humedad que favorecen el crecimiento bacteriano.

Los productos enlatados deben almacenarse en lugares secos para evitar la oxidación. No almacenar latas golpeadas o abolladas, ya que pueden favorecer el crecimiento de la bacteria clostridium botulinum, que es fatal.

Puntos importantes para el almacenamiento de productos secos y enlatados:
• Guardar estos alimentos en racks al menos a 15 cm del piso y fuera de la luz solar.
• Temperatura de almacenamiento: 10 ºC a 25 ºC.
• Área ventilada y libre de plagas.
• Todos los productos deben estar etiquetados.
• Aplicar rotación efectiva (Sistema PEPS).`
            },
            {
                type: 'text',
                title: 'Preparación y servicio de alimentos: Reglas de tiempo-temperatura',
                showInIndex: true,
                content: `La mayoría de los alimentos están en mayor riesgo durante la preparación y servicio. Al descongelarse, cocinarse, exhibirse, servirse, enfriarse y recalentarse pueden pasar varias veces por la zona de peligro de temperatura (4 ºC a 60 ºC).

Cada vez que se manipula alimento, existe riesgo de contaminación cruzada por otros alimentos, manos, tablas o utensilios.

Evitar que los alimentos potencialmente peligrosos permanezcan más de 4 horas en total en la zona de peligro de temperatura.

¡Hay que mantener los alimentos calientes: calientes; y los fríos: fríos!`
            },
            {
                type: 'list',
                title: 'Código de colores para tablas de cortar o picar',
                showInIndex: true,
                items: [
                    'Azul: pescados y mariscos',
                    'Verde: verduras',
                    'Blanco: frutas',
                    'Amarillo: pollo y cerdo',
                    'Rojo: carnes rojas',
                    'Marrón: panificados'
                ]
            }
        ]
    },
    {
        type: 'section',
        title: 'Métodos Seguros de Descongelamiento, Preparación y Servicio',
        showInIndex: true,
        blocks: [
            {
                type: 'list',
                title: 'Métodos seguros de descongelamiento',
                showInIndex: true,
                items: [
                    'a) Dentro de un refrigerador (para cualquier tipo de alimento): Guardar los alimentos crudos en las repisas más bajas para prevenir que goteen sobre la comida. Permitir que las materias primas grandes como asados de carne se descongelen por un día o más.',
                    'b) En agua (solo para alimentos empacados al alto vacío): Bajo el chorro de agua a una temperatura de 20ºC o menos. El producto debe descongelarse en dos horas aproximadamente para poder ser preparado y cocido. Mantener el producto dentro de su empaque original. Usar un recipiente grande, limpio y desinfectado. Utilizar un chorro de agua con suficiente presión para llenar el recipiente rápidamente. Retirar el alimento tan pronto se descongele y desinfectar nuevamente el recipiente.',
                    'c) En horno de microondas (para cualquier tipo de alimento): Utilizar este método solo si a la materia prima se le va a aplicar inmediatamente algún método de cocción para terminar su proceso de cocimiento.'
                ]
            },
            {
                type: 'list',
                title: 'Preparación de los alimentos',
                showInIndex: true,
                items: [
                    'Utilizar recetas detalladas en ingredientes, controles de tiempo y temperatura, procedimientos e instrucciones.',
                    'Mantener una correcta higiene personal.',
                    'Utilizar utensilios que estén adecuadamente limpios y desinfectados.',
                    'Refrigerar las materias primas antes de prepararlas o que intervengan en el procedimiento.',
                    'Utilizar tablas para cortar o picar según código de colores, previamente lavadas y desinfectadas para evitar contaminación cruzada.',
                    'Utilizar frutas y verduras previamente lavadas y desinfectadas.'
                ]
            },
            {
                type: 'list',
                title: 'Servicio',
                showInIndex: true,
                items: [
                    'Mantener una excelente higiene personal.',
                    'Usar adecuadamente utensilios limpios y desinfectados.',
                    'Nunca tocar las áreas de vasos, copas, tazas, platos y cubiertos que tocan la comida.',
                    'Nunca colocar un vaso o plato sobre otro antes de servirse.'
                ]
            }
        ]
    },
]
