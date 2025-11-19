// Datos del itinerario
const itineraryData = [
  {
    date: '7 diciembre',
    day: 'Sábado',
    city: 'Bruselas',
    activities: [
      {
        time: '20:15',
        title: 'Vuelo Zaragoza - Bruselas Charleroi',
        description: 'Salida desde Zaragoza',
        icon: '✈️',
        type: 'transport',
        details: {
          address: 'Aeropuerto de Zaragoza',
          notes: 'Vuelo 20:15 - 22:20. Llegar con 2 horas de antelación.',
          links: []
        }
      },
      {
        time: '22:20',
        title: 'Llegada a Bruselas Charleroi',
        description: 'Aterrizaje en Charleroi',
        icon: '🛬',
        type: 'transport',
        details: {
          address: 'Aeropuerto Brussels South Charleroi',
          notes: 'Recoger equipaje y dirigirse a la parada de autobús.',
          links: []
        }
      },
      {
        time: '22:40',
        title: 'Autobús Charleroi - Bruselas Midi',
        description: 'Traslado al centro de Bruselas',
        icon: '🚌',
        type: 'transport',
        details: {
          address: 'Charleroi Airport → Brussels Midi Station',
          notes: 'Autobús directo al centro. Duración aproximada 1 hora.',
          links: []
        }
      },
      {
        time: '23:45',
        title: 'Check-in Hotel Holiday Inn Express',
        description: 'Hotel Holiday Inn Express Brussels Grand-Place',
        icon: '🏨',
        type: 'hotel',
        details: {
          address: 'Rue du Marché aux Poulets 20, 1000 Bruselas',
          notes: 'Check-in disponible 24h. Hotel cerca de Grand Place.',
          links: ['https://www.ihg.com']
        }
      },
      {
        time: '00:30',
        title: 'Paseo nocturno por Grand Place',
        description: 'Primera toma de contacto con Bruselas',
        icon: '🌙',
        type: 'suggestion',
        details: {
          address: 'Grand Place, 1000 Bruselas',
          notes: 'La Grand Place está iluminada de noche y es espectacular. A solo 5 minutos del hotel.',
          links: ['https://www.visitbrussels.be']
        }
      }
    ]
  },
  {
    date: '8 diciembre',
    day: 'Domingo',
    city: 'Bruselas',
    activities: [
      {
        time: '09:00',
        title: 'Desayuno en el hotel',
        description: 'Desayuno incluido',
        icon: '☕',
        type: 'food',
        details: {
          address: 'Hotel Holiday Inn Express',
          notes: 'Desayuno buffet incluido en la reserva.',
          links: []
        }
      },
      {
        time: '10:00',
        title: 'Visita al Atomium',
        description: 'Icono de Bruselas y Mini-Europe',
        extendedDescription: 'El Atomium es el símbolo icónico de Bruselas: una estructura monumental de 102 metros que representa una célula de hierro magnificada 165 millones de veces. Consta de 9 esferas huecas de 18 metros de diámetro interconectadas por tubos. En el interior encontrarás exposiciones interactivas que exploran la ciencia, la tecnología y la historia del monumento. Desde las esferas superiores disfrutarás de vistas panorámicas espectaculares de Bruselas. La experiencia es única y perfecta para fotografías. Estima 2-3 horas de visita incluyendo la subida y exposiciones.',
        icon: '⚛️',
        type: 'activity',
        details: {
          address: 'Square de l\'Atomium, 1020 Bruselas',
          notes: 'Estructura emblemática de la Expo 58. Entrada: 16€. Metro línea 6 (Heysel). También puedes visitar Mini-Europe (parque de miniaturas) junto al Atomium.',
          links: ['https://atomium.be', 'https://minieurope.com']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401522/search_images/799c8f4a186d712b156996b6a2d6de97251b83c8.jpg', caption: 'Vista frontal del Atomium con su arquitectura futurista de esferas metálicas' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401522/search_images/782bee86414c894526dc3fbcfcd702a80afaf844.jpg', caption: 'El Atomium bajo cielo despejado, rodeado de verde' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763313612/search_images/e6f14472d5f2e76b801eaf11508fd4d197b80484.jpg', caption: 'Detalle de las esferas interconectadas del monumento' }
        ]
      },
      {
        time: '13:15',
        title: 'Mini-Europe',
        description: 'Parque de maquetas de monumentos europeos',
        extendedDescription: 'Mini-Europe es el parque de maquetas más fascinante de Europa, situado junto al Atomium. Pasearéis entre réplicas detalladas de los monumentos más icónicos del continente, desde la Torre Eiffel al Big Ben, pasando por el Coliseo y la Acrópolis. Cada miniatura está construida con increíble precisión a escala 1:25 y muchas tienen efectos interactivos: trenes que circulan, erupciones del Vesubio, caída del Muro de Berlín. Es ideal para fotos originales y creativas, y para imaginar futuros viajes juntos por Europa. Todo está rodeado de jardines cuidados que realzan la experiencia.',
        icon: '🏰',
        type: 'activity',
        details: {
          address: 'Bruparck, Avenue du Football 1, 1020 Bruselas',
          notes: 'Parque temático con más de 350 maquetas de monumentos europeos. Entrada: 15€. Perfecto para visitar después del Atomium.',
          links: ['https://minieurope.com']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/a64f4f06f53b03b2587650767e39f728ad2c09c0.jpg', caption: 'Maqueta del Atomium en Mini-Europe, Bruselas' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/8f5d53364771282762b4a489ab9327bccb2a65af.jpg', caption: 'Miniatura de la Torre Eiffel con el Atomium real al fondo' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/c8ee4563e83d42c0800bca24c8af59172a0c2c77.jpg', caption: 'Réplica miniatura de catedral europea y más monumentos en Mini-Europe' }
        ]
      },
      {
        time: '14:30',
        title: 'Galeries Royales Saint-Hubert',
        description: 'Galerías comerciales históricas elegantes',
        extendedDescription: 'Las Galerías Reales Saint-Hubert son la galería comercial cubierta más elegante y antigua de Bruselas, inaugurada en 1847. Sus techos de vidrio permiten que la luz natural inunde los pasillos, creando una atmósfera luminosa y sofisticada. Aquí encontrarás boutiques gourmet, chocolaterías históricas de fama mundial, joyerías refinadas y cafeterías con encanto parisino. La arquitectura neoclásica con detalles dorados te transporta al siglo XIX. Es el lugar perfecto para un paseo romántico entre vitrinas, comprar chocolate belga artesanal o refugiarte del frío en una cafetería con vistas al interior de la galería.',
        icon: '🏛️',
        type: 'activity',
        details: {
          address: 'Galerie du Roi, 1000 Bruselas',
          notes: 'Galerías comerciales cubiertas del siglo XIX, las más antiguas de Europa. Perfectas para pasear, tomar algo y comprar chocolate de calidad.',
          links: ['https://www.grsh.be']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408091/search_images/4aaf4af7cff6f3e538aeea1605b8ab610b0db88e.jpg', caption: 'Escaparate de chocolatería gourmet en las Galerías Royales' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408092/search_images/c59ad15312449de0f14028cd03ec4b10810d6f3e.jpg', caption: 'Galería llena de luz natural y comercios de alto nivel' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408092/search_images/a3a721fddf18e5ee244b7524395c28fc35c0115a.jpg', caption: 'Vista interior de la galería con tiendas iluminadas y arquitectura clásica' }
        ]
      },
      {
        time: '14:00',
        title: 'Grand Place y Mercado Navideño',
        description: 'Plaza central de Bruselas - Patrimonio UNESCO',
        extendedDescription: 'La Grand Place es una de las plazas más bellas de Europa, rodeada de arquitectura medieval y barroca deslumbrante. En diciembre, se transforma en un espectáculo navideño: gigantescos árboles de Navidad iluminados, mercados de artesanía, puestos de comida típica, pista de patinaje sobre hielo, y decoraciones extraordinarias. Por la noche, los edificios históricos se iluminan creando una atmósfera mágica. Recorre a pie Manneken Pis, la Catedral, las Galerías Saint-Hubert, y la zona de compras. Perfecto para fotos nocturnas.',
        icon: '🏰',
        type: 'activity',
        details: {
          address: 'Grand Place, 1000 Bruselas',
          notes: 'Considerada una de las plazas más bellas del mundo. Rodeada de edificios gremiales y el Ayuntamiento.',
          links: ['https://www.visitbrussels.be/en/visitors/see-do/attractions/grand-place']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401573/search_images/395836c7f2730eba177cfd993b07d1fd44289cfd.jpg', caption: 'Grand Place decorada con árbol de Navidad gigante y luces festivas' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401573/search_images/bd0f43704c9ce3f49c741936d1e4e88cc41ccf3d.jpg', caption: 'Mercado navideño con luces azules iluminando los edificios históricos' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401573/search_images/aa8cada342985ee4ac4739a21ac8a640ee78f360.jpg', caption: 'Ambiente festivo de la Grand Place en noche de Navidad' }
        ]
      },
      {
        time: '16:00',
        title: 'Pista de Patinaje sobre Hielo',
        description: 'Patinaje navideño en Bruselas',
        extendedDescription: 'Una tradición belga en Navidad que no te puedes perder. Patinar juntos sobre hielo, en pleno mercado navideño de Bruselas, rodeados de decoración festiva, luces de colores y música navideña, es una de las experiencias más románticas en pareja que ofrece la ciudad. La pista puede estar al aire libre en una plaza central o cubierta según el clima. Las luces navideñas, el bullicio alegre del mercado, las risas compartidas y el frío que invita a abrazarse crean recuerdos imborrables. Perfecto para desconectar y disfrutar del espíritu navideño europeo.',
        icon: '⛸️',
        type: 'activity',
        details: {
          address: 'Place Sainte-Catherine o Grand Place (según ubicación temporal)',
          notes: 'Pista de patinaje sobre hielo temporal durante la temporada navideña. Alquiler de patines incluido. Precio: 8-10€.',
          links: ['https://www.plaisirsdhiver.be']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408295/search_images/da843ab1a64950239e252811a90cbde14c6a63d0.jpg', caption: 'Pista cubierta para patinar sobre hielo en Bruselas con decoración navideña' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408294/search_images/862b1dddeea50cd7e6891ac7689dd280e7b56345.jpg', caption: 'Rink nocturno al aire libre en plaza central de Bruselas rodeado de luces' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408295/search_images/d65694b36db1a7ffaa58e32de8ad2c91a917e625.jpg', caption: 'Ambiente festivo y familiar en la pista de patinaje navideña' }
        ]
      },
      {
        time: '18:30',
        title: 'Manneken Pis',
        description: 'Estatua icónica de Bruselas',
        extendedDescription: 'La estatua más irreverente y querida de Bruselas: un niño orinando en una fuente, símbolo del humor belga y el espíritu libre de la ciudad. Aunque su tamaño es sorprendentemente pequeño (apenas 61 cm), siempre está rodeada de una multitud de curiosos. El Manneken Pis tiene más de 400 años de historia y una tradición única: viste diferentes disfraces según la temporada, festividades o eventos especiales (trajes folclóricos, uniformes deportivos, atuendos temáticos). Es un ícono del folklore belga y perfecto para una foto divertida e icónica. Busca también sus "hermanas" Jeanneke Pis y Zinneke Pis en otros puntos de la ciudad.',
        icon: '👦',
        type: 'activity',
        details: {
          address: 'Rue de l\'Étuve 46, 1000 Bruselas',
          notes: 'Pequeña estatua de bronce muy famosa (61 cm). A 5 minutos de Grand Place. Suele estar vestida con trajes temáticos.',
          links: []
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408071/search_images/9d77d937b77ef875c143e13cc8a8676fe26830a9.jpg', caption: 'La clásica estatua del Manneken Pis en su fuente' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408072/search_images/5d73c81886b2ae089f8673ed346fc70322ed73c1.jpg', caption: 'Manneken Pis vestido de futbolista, tradición belga' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408071/search_images/fa597c3d8f28fd0d8355bd17dd554fd6f34a1f05.jpg', caption: 'Manneken Pis con disfraz tematizado y fondo de piedra' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408072/search_images/aa856a1710e348ca059a9cf013f9ca6b91cfbc14.jpg', caption: 'Detalle de la fuente del Manneken Pis funcionando' }
        ]
      },

      {
        time: '20:00',
        title: 'Cena y degustación en Delirium Café',
        description: 'Pub con más de 2000 cervezas',
        extendedDescription: 'Delirium Café es una leyenda mundial: el bar con la mayor selección de cervezas del mundo (más de 2,000 variedades). Su interior es único, con el techo y las paredes completamente cubiertas de etiquetas de cervezas y temas de decoración cervecera. El ambiente es acogedor y vibrante, perfecto para degustar auténticas cervezas belgas: Trappist, Abbey, Lambic y artesanales. El personal es muy experimentado y te puede asesorar. Perfecto para pasar una velada cultural y gastronómica. Pide recomendaciones según tus preferencias (ligera, fuerte, afrutada, etc.).',
        icon: '🍺',
        type: 'food',
        details: {
          address: 'Impasse de la Fidélité 4, 1000 Bruselas',
          notes: 'Famoso pub con récord Guinness de variedad de cervezas. Prueba las cervezas belgas típicas como Duvel, Chimay o Delirium Tremens.',
          links: ['https://www.deliriumcafe.be']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401572/search_images/ba6ead0277980d13e8e43d37677e9475254aed83.jpg', caption: 'Interior de Delirium Café con el techo cubierto de etiquetas de cervezas' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401572/search_images/14cb404e78a2c080bb839db29e69af5df289b89a.jpg', caption: 'Ambiente acogedor y concurrido del bar famoso por su colección cervecera' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401572/search_images/a1b2704ce4c4341c5496e4c83bfe9edb6a445314.jpg', caption: 'Decoración única: paredes y techo repletos de trays y memorabilia de cerveza' }
        ]
      }
    ]
  },
  {
    date: '9 diciembre',
    day: 'Lunes',
    city: 'Gante',
    activities: [
      {
        time: '09:00',
        title: 'Tren Bruselas Central - Gante',
        description: 'Excursión de un día a Gante',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Brussels Central → Gent-Sint-Pieters',
          notes: 'Trenes cada 30 minutos. Duración: 30 minutos. Comprar billete en estación o app SNCB.',
          links: ['https://www.belgiantrain.be']
        }
      },
      {
        time: '10:00',
        title: 'Korenmarkt',
        description: 'Plaza central de Gante',
        icon: '🏛️',
        type: 'activity',
        details: {
          address: 'Korenmarkt, 9000 Gante',
          notes: 'Plaza histórica en el corazón de Gante. Punto de inicio perfecto para explorar la ciudad.',
          links: []
        }
      },
      {
        time: '10:30',
        title: 'Graslei y Korenlei',
        description: 'Muelles medievales junto al río',
        extendedDescription: 'Gante es una ciudad medieval de cuento de hadas. La joya es el área de Graslei y Korenlei, con edificios históricos de fachadas escalonadas reflejándose en el agua del canal. Visita el Campanario Belfort (sube a la azotea para vistas de 360°), la Catedral de San Bavón (con obras maestras de arte flamenco), el Castillo de los Condes de Flandes. Recorre el barrio bohemio de Patershol con sus calles estrechas, tiendas de artesanía y cafés. Prueba los "cuberdons", un dulce típico local que solo se vende aquí. Es perfecta para fotos y paseos tranquilos por los canales.',
        icon: '🌊',
        type: 'activity',
        details: {
          address: 'Graslei, 9000 Gante',
          notes: 'Los muelles más pintorescos de Gante con casas gremiales medievales. Perfecto para fotos.',
          links: []
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401522/search_images/524058dd3f7b17e9ccc499efef9bd4fa0db876b7.jpg', caption: 'Graslei de Gante: edificios medievales reflejados en el canal al atardecer' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401523/search_images/939c0361a66213a9d798efd1834a56f271ec4766.jpg', caption: 'Graslei iluminado durante la hora azul, con botes reflectados en el agua' }
        ]
      },
      {
        time: '11:00',
        title: 'Puente de San Miguel',
        description: 'Mejor vista panorámica de Gante',
        icon: '🌉',
        type: 'activity',
        details: {
          address: 'Sint-Michielsbrug, 9000 Gante',
          notes: 'Vista icónica con las tres torres de Gante: San Nicolás, Belfort y San Bavón.',
          links: []
        }
      },
      {
        time: '11:30',
        title: 'Catedral de San Bavón',
        description: 'Hogar del retablo de Van Eyck',
        extendedDescription: 'La Catedral de San Bavón es una obra maestra del arte gótico belga, con una historia de más de mil años. Su interior alberga uno de los tesoros artísticos más importantes del mundo: "La Adoración del Cordero Místico" de los hermanos Van Eyck (1432), considerada una de las obras cumbre del arte flamenco. Los vitrales, la cripta romana, el púlpito barroco tallado en mármol y madera, y la arquitectura imponente hacen de esta catedral un lugar imprescindible para los amantes del arte y la historia. La entrada incluye acceso al retablo (con audioguía) y a las diferentes capillas. Dedica al menos una hora para apreciar todos los detalles.',
        icon: '⛪',
        type: 'activity',
        details: {
          address: 'Sint-Baafsplein, 9000 Gante',
          notes: 'Impresionante catedral gótica del siglo XIII. Alberga "La Adoración del Cordero Místico" de Van Eyck. Entrada: 12€ (incluye audioguía).',
          links: ['https://www.sintbaafskathedraal.be']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408295/search_images/e6749ce9883602b4a54c10ce3bef93c861f74149.jpg', caption: 'Interior gótico de la Catedral de San Bavón con vidrieras' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408294/search_images/eb07044235720df49b0ca4682c46af852dfd02d2.jpg', caption: 'Fachada neogótica de la Catedral de San Bavón' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408294/search_images/041a5ea037973492f53ab37c6e822ef668f1cbbd.jpg', caption: 'Catedral con monumento en la plaza frente a ella' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408294/search_images/06674b65b8e994709d27f4d467add2c4134a1bcb.jpg', caption: 'Vista exterior de las torres y arquitectura gótica' }
        ]
      },
      {
        time: '13:00',
        title: 'Almuerzo en Gante',
        description: 'Gastronomía local',
        icon: '🍽️',
        type: 'food',
        details: {
          address: 'Zona Korenmarkt',
          notes: 'Prueba los cuberdons (dulces cónicos típicos) o waterzooi (guiso típico de Gante).',
          links: []
        }
      },
      {
        time: '14:30',
        title: 'Castillo de los Condes de Flandes (Gravensteen)',
        description: 'Fortaleza medieval fortificada',
        extendedDescription: 'El Castillo de los Condes de Flandes (Gravensteen) es una fortaleza medieval del siglo XII increíblemente bien conservada, rodeada por un foso con agua. Fue residencia de los Condes de Flandes y centro de poder durante la Edad Media. Al visitarlo, recorrerás mazmorras auténticas, salas de tortura con instrumentos originales, la sala del conde, las murallas defensivas con almenas y torres. Desde lo alto de las torres tendrás vistas panorámicas espectaculares de Gante y sus tres torres emblemáticas. El ambiente medieval es palpable en cada rincón. Incluye audioguía y exposiciones sobre la vida en el castillo. Ideal para fotos y para transportarse al medievo.',
        icon: '🏰',
        type: 'activity',
        details: {
          address: 'Sint-Veerleplein 11, 9000 Gante',
          notes: 'Castillo del siglo XII muy bien conservado, con mazmorras, sala de torturas y vistas desde las torres. Entrada: 12€. Visita aproximada 1.5 horas.',
          links: ['https://www.historischehuizen.stad.gent']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/85c6ba2344282efd4f7189d3fa3c1e97cd72d84e.jpg', caption: 'Castillo Gravensteen reflejado en el agua, fortaleza medieval' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/8c0a77b4313eda6ade2eac806d250aff0ec8f956.jpg', caption: 'Foto panorámica del Castillo Gravensteen en día soleado' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/27d1b83163c2164c03b757901cdff01dadec680b.jpg', caption: 'Vista del castillo rodeado por el foso de agua y vegetación' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/204b05031d4e8477c68bfe3981815c813a575bc5.jpg', caption: 'Torres fortificadas y murallas del Castillo de los Condes' }
        ]
      },
      {
        time: '16:30',
        title: 'Barrio de Patershol',
        description: 'Calles medievales empedradas',
        icon: '🏘️',
        type: 'activity',
        details: {
          address: 'Patershol, 9000 Gante',
          notes: 'Encantador barrio medieval con callejones adoquinados, restaurantes acogedores y tiendas artesanales.',
          links: []
        }
      },
      {
        time: '18:00',
        title: 'Cuberdons - dulce típico',
        description: 'Compra de dulces locales',
        icon: '🍬',
        type: 'food',
        details: {
          address: 'Groentenmarkt (varios puestos)',
          notes: 'Los cuberdons son dulces cónicos rellenos de jarabe. Solo se encuentran frescos en Gante.',
          links: []
        }
      },
      {
        time: '19:30',
        title: 'Regreso a Bruselas',
        description: 'Tren Gante - Bruselas',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Gent-Sint-Pieters → Brussels Central',
          notes: 'Trenes frecuentes hasta tarde. Duración: 30 minutos.',
          links: []
        }
      }
    ]
  },
  {
    date: '10 diciembre',
    day: 'Martes',
    city: 'Brujas',
    activities: [
      {
        time: '08:30',
        title: 'Tren Bruselas Central - Brujas',
        description: 'Excursión de un día a Brujas',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Brussels Central → Brugge',
          notes: 'Trenes cada hora. Duración: 1 hora. Brujas es Patrimonio de la Humanidad UNESCO.',
          links: ['https://www.belgiantrain.be']
        }
      },
      {
        time: '10:00',
        title: 'Lago del Amor (Minnewater)',
        description: 'Romántico lago y parque',
        icon: '💙',
        type: 'activity',
        details: {
          address: 'Minnewater, 8000 Brujas',
          notes: 'Lago pintoresco con cisnes. Entrada perfecta a Brujas desde la estación.',
          links: []
        }
      },
      {
        time: '10:30',
        title: 'Begijnhof',
        description: 'Beaterio histórico - UNESCO',
        icon: '🏡',
        type: 'activity',
        details: {
          address: 'Begijnhof 30, 8000 Brujas',
          notes: 'Tranquilo complejo del siglo XIII donde vivían las beguinas. Patrimonio UNESCO. Entrada gratuita.',
          links: []
        }
      },
      {
        time: '11:30',
        title: 'Grote Markt',
        description: 'Plaza Mayor de Brujas',
        icon: '🏛️',
        type: 'activity',
        details: {
          address: 'Markt, 8000 Brujas',
          notes: 'Plaza central rodeada de edificios coloridos y el campanario Belfort.',
          links: []
        }
      },
      {
        time: '12:00',
        title: 'Belfort (Campanario)',
        description: 'Torre medieval con vistas panorámicas',
        extendedDescription: 'Brujas es la más romántica de las ciudades belgas, perfecta para parejas. Recorre sus canales en bote, admira el Campanario Belfort en la Plaza Mayor, explora el Begijnhof (convento medieval rodeado de jardines). La Basílica de la Santa Sangre alberga una de las reliquias más veneradas de Europa. Visita la Iglesia de Nuestra Señora y el Museo Groeninge. Cada esquina es una postal: casas de colores, puentes arqueados, reflejos en el agua. Prueba los gofres belgas frescos y el chocolate artesanal. Atardecer junto a los canales es mágico.',
        icon: '🗼',
        type: 'activity',
        details: {
          address: 'Markt 7, 8000 Brujas',
          notes: 'Campanario del siglo XIII. 366 escalones hasta la cima. Entrada: 12€. Vistas espectaculares.',
          links: ['https://www.museabrugge.be']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401521/search_images/cca3944ab153d082baf7c0cf18cfe825eed6510c.jpg', caption: 'Campanario de Brujas (Belfort) con su arquitectura gótica medieval' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401521/search_images/3303ec71e2376db47fd7ab4933d19478cf4d7240.jpg', caption: 'Torre Belfort dominando la plaza, con la arquitectura característica de Brujas' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401521/search_images/2a070d52f96925b357187e0c2af8aeefb61edd58.jpg', caption: 'Canales románticos de Brujas reflejando las torres y casas históricas' }
        ]
      },
      {
        time: '13:00',
        title: 'Almuerzo en Brujas',
        description: 'Gofres y especialidades belgas',
        icon: '🧇',
        type: 'food',
        details: {
          address: 'Zona Markt',
          notes: 'Prueba los auténticos gofres belgas (waffles). Recomendado: Chez Albert o Lizzie\'s Wafels.',
          links: []
        }
      },
      {
        time: '14:30',
        title: 'Plaza Burg',
        description: 'Plaza histórica con edificios emblemáticos',
        icon: '🏰',
        type: 'activity',
        details: {
          address: 'Burg, 8000 Brujas',
          notes: 'Plaza con el Ayuntamiento gótico y la Basílica de la Santa Sangre.',
          links: []
        }
      },
      {
        time: '15:00',
        title: 'Basílica de la Santa Sangre',
        description: 'Iglesia con reliquia sagrada venerada',
        extendedDescription: 'La Basílica de la Santa Sangre es uno de los lugares de peregrinación más importantes de Europa. Esta iglesia de doble nivel combina arquitectura románica (capilla inferior del siglo XII) y gótica (capilla superior renacentista del siglo XVI). La reliquia que da nombre a la basílica es un frasco de cristal que supuestamente contiene gotas de la sangre de Jesucristo, traída desde Tierra Santa durante las Cruzadas. La capilla superior, ricamente decorada con frescos, vitrales y oros, contrasta con la sobriedad románica de la capilla inferior. Cada viernes se puede venerar la reliquia. La fachada exterior es una joya de esculturas doradas y detalles artísticos. Entrada gratuita, pero se agradece donativo.',
        icon: '⛪',
        type: 'activity',
        details: {
          address: 'Burg 13, 8000 Brujas',
          notes: 'Iglesia románica/gótica del siglo XII que alberga una reliquia venerada de la sangre de Cristo. Entrada gratuita (donativo bienvenido).',
          links: ['https://www.holyblood.com']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408107/search_images/9294203c4ac975b67d614537ad0e3eb80a6d0f72.jpg', caption: 'Fachada artística de la Basílica de la Santa Sangre con esculturas doradas' }
        ]
      },
      {
        time: '16:00',
        title: 'Paseo por los canales',
        description: 'Opcional: tour en barco',
        icon: '🚤',
        type: 'activity',
        details: {
          address: 'Varios embarcaderos en el centro',
          notes: 'Tour de 30 minutos por los canales de Brujas. Precio: 12€. Muy recomendable para ver la ciudad desde otra perspectiva.',
          links: []
        }
      },
      {
        time: '17:00',
        title: 'Chocolaterías artesanales',
        description: 'Degustación de chocolate belga',
        icon: '🍫',
        type: 'food',
        details: {
          address: 'Varias tiendas en centro histórico',
          notes: 'Brujas es famosa por su chocolate. Visita The Chocolate Line, Dumon o Sukerbuyc.',
          links: ['https://www.thechocolateline.be']
        }
      },
      {
        time: '19:00',
        title: 'Regreso a Bruselas',
        description: 'Tren Brujas - Bruselas',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Brugge → Brussels Central',
          notes: 'Trenes cada hora hasta tarde. Duración: 1 hora.',
          links: []
        }
      }
    ]
  },
  {
    date: '11 diciembre',
    day: 'Miércoles',
    city: 'Amberes',
    activities: [
      {
        time: '09:00',
        title: 'Check-out Hotel Brussels',
        description: 'Dejar equipaje y partir hacia Amberes',
        icon: '🏨',
        type: 'hotel',
        details: {
          address: 'Holiday Inn Express Brussels Grand-Place',
          notes: 'Check-out antes de las 11:00. Llevar equipaje a Amberes.',
          links: []
        }
      },
      {
        time: '10:00',
        title: 'Tren Bruselas Central - Amberes',
        description: 'Traslado a Amberes',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Brussels Central → Antwerpen-Centraal',
          notes: 'Trenes frecuentes. Duración: 45 minutos. La estación de Amberes es una joya arquitectónica.',
          links: []
        }
      },
      {
        time: '11:00',
        title: 'Estación Central de Amberes',
        description: 'Considerada la estación más bella del mundo',
        extendedDescription: 'Amberes es la capital de los diamantes belgas y puerto histórico. La Estación Central es una joya arquitectónica en sí misma: un palacio de hierro y cristal del siglo XIX con cúpulas impresionantes. Visita la Catedral de Nuestra Señora (donde Rubens pintó sus obras maestras), la Grote Markt con el Ayuntamiento, y el Castillo Steen junto al río Escalda. Pasea por el barrio de Joyeros, donde verás tiendas especializadas. La atmósfera es más industrial y moderna que las otras ciudades, pero con un encanto único. Camina por los muelles para ver barcos históricos.',
        icon: '🏛️',
        type: 'activity',
        details: {
          address: 'Koningin Astridplein 27, 2018 Amberes',
          notes: 'Arquitectura espectacular. Dedica tiempo a admirar la sala principal con su cúpula.',
          links: []
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401548/search_images/e5b3a666730ca205537f0e3de32a913ef30dee1e.jpg', caption: 'Estación Central de Amberes: interior impresionante con arquitectura de palacio' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401548/search_images/58beace04c6df654d899511fd550e3e10a59ff0f.jpg', caption: 'Grand hall de la Estación con escalinatas y bóvedas arquitectónicas' }
        ]
      },
      {
        time: '12:00',
        title: 'Catedral de Nuestra Señora',
        description: 'Catedral gótica con obras de Rubens',
        icon: '⛪',
        type: 'activity',
        details: {
          address: 'Groenplaats 21, 2000 Amberes',
          notes: 'Torre más alta de Bélgica (123m). Alberga cuatro obras maestras de Rubens. Entrada: 8€.',
          links: ['https://www.dekathedraal.be']
        }
      },
      {
        time: '13:30',
        title: 'Grote Markt de Amberes',
        description: 'Plaza del Ayuntamiento con fuente de Brabo',
        icon: '⛲',
        type: 'activity',
        details: {
          address: 'Grote Markt, 2000 Amberes',
          notes: 'Hermosa plaza rodeada de casas gremiales. La fuente representa la leyenda del gigante Antigoon.',
          links: []
        }
      },
      {
        time: '14:00',
        title: 'Almuerzo en Amberes',
        description: 'Gastronomía local',
        icon: '🍽️',
        type: 'food',
        details: {
          address: 'Zona Grote Markt',
          notes: 'Prueba las "Antwerpse handjes" (galletas en forma de mano) o especialidades flamencas.',
          links: []
        }
      },
      {
        time: '15:00',
        title: 'Castillo Het Steen',
        description: 'Castillo medieval junto al río Escalda',
        icon: '🏰',
        type: 'activity',
        details: {
          address: 'Steenplein 1, 2000 Amberes',
          notes: 'Fortaleza del siglo XIII, el edificio más antiguo de Amberes. Vistas del río.',
          links: []
        }
      },
      {
        time: '15:45',
        title: 'Barrio de los Diamantes',
        description: 'Centro mundial del comercio de diamantes',
        icon: '💎',
        type: 'activity',
        details: {
          address: 'Diamantkwartier, cerca de la estación',
          notes: 'Amberes comercializa el 84% de los diamantes en bruto del mundo. Puedes visitar talleres y tiendas.',
          links: []
        }
      },
      {
        time: '16:35',
        title: 'Tren Amberes - Ámsterdam',
        description: 'Traslado a Ámsterdam',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Antwerpen-Centraal → Amsterdam Zuid',
          notes: 'Tren directo. Llegada: 17:58. Duración: 1h 23min. Thalys o Intercity.',
          links: ['https://www.nsinternational.com']
        }
      },
      {
        time: '18:30',
        title: 'Check-in Mövenpick Amsterdam',
        description: 'Hotel Mövenpick Amsterdam City Centre',
        icon: '🏨',
        type: 'hotel',
        details: {
          address: 'Piet Heinkade 11, 1019 BR Ámsterdam',
          notes: 'Hotel moderno junto al río IJ. Excelente ubicación cerca de la estación central.',
          links: ['https://www.movenpick.com']
        }
      },
      {
        time: '20:00',
        title: 'Crucero Amsterdam Light Festival',
        description: 'Tour nocturno por canales iluminados',
        extendedDescription: 'El Amsterdam Light Festival es un espectáculo nocturno que transforma los canales en una galería de arte. En barco, navegarás bajo puentes adornados con instalaciones de luz artística contemporánea, luces de colores, proyecciones y esculturas luminosas. Las obras son creadas por artistas de todo el mundo y cambian cada temporada. El reflejo de las luces en el agua crea una atmósfera casi mágica. Es la manera más romántica y visual de descubrir Ámsterdam. Imprescindible reservar online con antelación.',
        icon: '🚢',
        type: 'activity',
        details: {
          address: 'Varios puntos de salida en centro',
          notes: 'Festival de arte lumínico en los canales (noviembre-enero). Reservar con anticipación. Precio: 20-30€.',
          links: ['https://www.amsterdamlightfestival.com']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401548/search_images/1cab1fa6975cfd06b0bf0a5b67c34995b88e3202.jpg', caption: 'Bote del crucero bajo un puente iluminado con instalación artística luminosa' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401549/search_images/8141798a67262c5614b38eed38998bd8c6bcdf0f.jpg', caption: 'Ambiente mágico del Light Festival con luces geométricas reflejadas en el agua' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401550/search_images/87698759c60dac05b0fb2116ac5fdcdd1387b33f.jpg', caption: 'Instalación de luz monumental en el canal durante el crucero nocturno' }
        ]
      },
      {
        time: '21:30',
        title: 'Proeflokaal Arendsnest',
        description: 'Bar especializado en cervezas artesanales holandesas',
        extendedDescription: 'Proeflokaal Arendsnest es el bar definitivo para los amantes de la cerveza artesanal holandesa. Es el único bar en Ámsterdam que sirve exclusivamente cervezas holandesas, con una carta rotativa de más de 100 variedades: desde IPAs modernas hasta cervezas tradicionales, rubias, negras, especiadas y experimentales de microbrewerías locales. La barra de madera maciza, los tiradores de cobre pulido, el menú gigante en pizarra y el ambiente acogedor te hacen sentir en un auténtico templo cervecero. El personal es experto y apasionado, te puede asesorar según tus preferencias (ligera, fuerte, afrutada, amarga). Recomendado para probar cervezas poco comunes que no encontrarás en ningún otro sitio y disfrutar de un ambiente relajado y local. Ideal para tapear y terminar la noche.',
        icon: '🍺',
        type: 'food',
        details: {
          address: 'Herengracht 90, 1015 BS Ámsterdam',
          notes: 'Único bar en Ámsterdam con solo cervezas holandesas (más de 100 variedades de microbrewerías locales). Personal experto, ambiente acogedor.',
          links: ['https://www.arendsnest.nl']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408319/search_images/0c740210f01a8ff108a39c3d25d5f1bf4b2bf7c4.jpg', caption: 'Barra de madera y tiradores de cerveza en el Arendsnest' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408318/search_images/6d20162f17570cc3311be101dd6543dcc439765a.jpg', caption: 'Menú de cervezas artesanas en pizarra gigante' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408319/search_images/dc64730493151d75f41e552ced5defb648c7a99e.jpg', caption: 'Ambiente y servicio característico de un bar de cervezas de referencia' }
        ]
      }
    ]
  },
  {
    date: '12 diciembre',
    day: 'Jueves',
    city: 'Ámsterdam',
    activities: [
      {
        time: '09:00',
        title: 'Desayuno en el hotel',
        description: 'Desayuno buffet incluido',
        icon: '☕',
        type: 'food',
        details: {
          address: 'Mövenpick Hotel',
          notes: 'Desayuno buffet incluido en la reserva. Prepárate para un día completo explorando molinos y el centro histórico.',
          links: []
        }
      },
      {
        time: '09:45',
        title: 'Tren a Zaanse Schans',
        description: 'Excursión a los molinos',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Amsterdam Centraal → Zaandijk Zaanse Schans',
          notes: 'Tren directo. Duración: 17 minutos. Salidas cada 15 minutos.',
          links: ['https://www.ns.nl']
        }
      },
      {
        time: '10:15',
        title: 'Zaanse Schans - Pueblo de molinos',
        description: 'Molinos de viento tradicionales',
        extendedDescription: 'Zaandse Schans es un museo al aire libre dedicado a la cultura tradicional holandesa. Visita auténticos molinos de viento de los siglos XVII-XVIII aún funcionales, casas de madera pintadas de verde y blanco típicas de la región Zaan, una fábrica de quesos artesanales donde ves el proceso en vivo, y una destilería de jengibre. Los molinos molían granos, accionaban aserraderos, producían aceite. Puedes entrar en algunas y aprender su funcionamiento. Es como viajar al pasado holandés. Perfecto para fotos, comprar queso holandés auténtico, y entender la historia de Holanda.',
        icon: '🎡',
        type: 'activity',
        details: {
          address: 'Schansend 7, 1509 AW Zaandam',
          notes: 'Pueblo-museo al aire libre con molinos funcionando, casas tradicionales, talleres de zuecos y queso. Entrada al recinto gratuita, molinos 5€ cada uno.',
          links: ['https://www.dezaanseschans.nl']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401549/search_images/042c145ea78b297668b0dd871d757387f447893c.jpg', caption: 'Molino tradicional holandés en Zaandse Schans junto al agua' }
        ]
      },
      {
        time: '13:25',
        title: 'Regreso a Ámsterdam',
        description: 'Tren Zaanse Schans - Ámsterdam',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Zaandijk Zaanse Schans → Amsterdam Centraal',
          notes: 'Trenes frecuentes de regreso.',
          links: []
        }
      },

      {
        time: '16:30',
        title: 'Barrio Jordaan',
        description: 'Barrio bohemio con canales pintorescos',
        extendedDescription: 'Tras visitar los molinos de Zaandse Schans, recorre el centro de Ámsterdam: la Plaza Dam, el Palacio Real, la Iglesia Nueva, el Rokin comercial. Luego dirígete al barrio Jordaan, el corazón bohemio de Ámsterdam: calles estrechas, galerías de arte, tiendas de diseño independiente, cafés acogedores, y canales laterales tranquilos. Es el barrio favorito de locales, lejos del bullicio de turistas. Prueba un "broodje" (sándwich holandés), toma una cerveza en un café tradicional, y observa a la gente desde una terraza. Ambiente auténtico y relajante.',
        icon: '🏘️',
        type: 'activity',
        details: {
          address: 'Jordaan, Ámsterdam',
          notes: 'Encantador barrio con galerías de arte, tiendas vintage, cafés acogedores y casas estrechas.',
          links: []
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401572/search_images/c73a2ba0c82cc6d940e9679f02c908174d09435c.jpg', caption: 'Canal tranquilo en Jordaan con arquitectura tradicional y botes' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401572/search_images/04f67e92b31d981ae989f3142ceb282c0e7c282d.jpg', caption: 'Puente sobre el canal de Jordaan en otoño, rodeado de árboles' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763401572/search_images/2a81130360200db4f5ad4f28aed56d53ced5a43b.jpg', caption: 'Flores silvestres y canales del barrio Jordaan de Ámsterdam' }
        ]
      },
      {
        time: '18:00',
        title: 'Café en brown café típico',
        description: 'Experiencia en café tradicional holandés',
        icon: '☕',
        type: 'food',
        details: {
          address: 'Jordaan (varios cafés)',
          notes: 'Los "brown cafés" son pubs tradicionales con ambiente acogedor. Recomendado: Café \'t Smalle.',
          links: []
        }
      },
      {
        time: '19:30',
        title: 'Tour Barrio Rojo',
        description: 'Exploración del De Wallen',
        icon: '🔴',
        type: 'activity',
        details: {
          address: 'De Wallen, Ámsterdam',
          notes: 'Histórico barrio con arquitectura medieval. Respetar las normas: no fotografiar las ventanas.',
          links: []
        }
      },
      {
        time: '21:00',
        title: 'Cena en \'t Zwaantje',
        description: 'Restaurante tradicional holandés',
        icon: '🍽️',
        type: 'food',
        details: {
          address: 'Berenstraat 12, 1016 GH Ámsterdam',
          notes: 'Auténtico restaurante holandés con especialidades locales. Reservar con anticipación.',
          links: []
        }
      },
      {
        time: '22:30',
        title: 'Visita a Coffeeshop Bulldog',
        description: 'Icónico coffeeshop de Ámsterdam',
        icon: '🌿',
        type: 'activity',
        details: {
          address: 'Oudezijds Voorburgwal 90, 1012 GG Ámsterdam',
          notes: 'El primer coffeeshop de Ámsterdam (1975). Ubicado en el Barrio Rojo.',
          links: ['https://www.bulldog.nl']
        }
      }
    ]
  },
  {
    date: '13 diciembre',
    day: 'Viernes',
    city: 'Ámsterdam',
    activities: [
      {
        time: '10:00',
        title: 'Ferry gratuito a NDSM Werf',
        description: 'Zona alternativa y artística',
        icon: '⛴️',
        type: 'transport',
        details: {
          address: 'Ferry desde Amsterdam Centraal',
          notes: 'Ferry gratuito cada 15 minutos. Duración: 15 minutos. NDSM es un antiguo astillero reconvertido en espacio cultural.',
          links: []
        }
      },
      {
        time: '10:30',
        title: 'NDSM Werf - Arte urbano y cultura alternativa',
        description: 'Antiguo astillero reconvertido en barrio creativo',
        extendedDescription: 'NDSM Werf es un antiguo astillero naval reconvertido en el barrio más alternativo y creativo de Ámsterdam. Aquí encontrarás murales gigantes de artistas urbanos internacionales, el STRAAT Museum (museo de arte callejero con exposiciones permanentes y temporales), estudios de artistas, galerías independientes, mercados vintage los fines de semana, food trucks y cafeterías con ambiente bohemio. El contraste entre la arquitectura industrial cruda y el arte vibrante crea una atmósfera única. Es el epicentro de la escena creativa jóven de Ámsterdam, lejos del turismo masivo. Perfecto para fotos urbanas, descubrir arte contemporáneo y sentir la energía emergente de la ciudad. El ferry gratuito desde Centraal es parte del encanto.',
        icon: '🎨',
        type: 'activity',
        details: {
          address: 'NDSM-Plein, 1033 WC Ámsterdam',
          notes: 'Espacio industrial alternativo con arte callejero, STRAAT Museum, mercados vintage los fines de semana y cafés hipster. Entrada a NDSM gratuita, museo: 17.50€.',
          links: ['https://www.ndsm.nl', 'https://www.straatmuseum.com']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408071/search_images/4141491b89ec4f770c72920f6b8d78c3c8074a49.jpg', caption: 'Puerta artística y grafitis en NDSM Werf' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408071/search_images/9c90cc09bb6fd924129d5fd1234171e3df7da6b2.jpg', caption: 'Interior del STRAAT Museum con murales y exposiciones temporales' }
        ]
      },
      {
        time: '11:30',
        title: 'A\'DAM Lookout',
        description: 'Mirador con vistas 360° y columpio sobre el abismo',
        extendedDescription: 'El A\'DAM Lookout es el mirador más famoso y emocionante de Ámsterdam, ubicado en el piso 22 de la iconica torre A\'DAM. Desde aquí tendrás vistas panorámicas de 360° de toda la ciudad, el puerto histórico, los canales, y el horizonte urban. El gran atractivo es el columpio "Over The Edge": un columpio suspendido sobre el vacío en el borde del edificio a 100 metros de altura, perfecto para quienes buscan emociones fuertes y fotos espectaculares (literalmente columpiándote sobre la ciudad). Hay también una terraza al aire libre, exposiciones interactivas sobre la historia de Ámsterdam, un bar en el piso superior y vistas nocturnas impresionantes. Ideal para atardecer o noche.',
        icon: '🌆',
        type: 'activity',
        details: {
          address: 'Overhoeksplein 5, 1031 KS Ámsterdam',
          notes: 'Torre de observación con terraza panorámica a 100m de altura y columpio "Over The Edge" en el piso 22. Entrada: 15€. Reservar online.',
          links: ['https://www.adamlookout.com']
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408092/search_images/91de6f92dbb172863dc44bcfed4420b16f00b694.jpg', caption: 'Panorámica desde el columpio sobre la ciudad en A\'DAM Lookout' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408091/search_images/692c6b3aba6f7f2396fc24587f54731ffa6aac3d.jpg', caption: 'Atardecer iluminando el edificio de A\'DAM Lookout' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408091/search_images/db020d0d3061c426fe48fb9edb7b327949496076.jpg', caption: 'Columpio \'Over The Edge\' suspendido sobre el skyline de Ámsterdam' }
        ]
      },
      {
        time: '13:00',
        title: 'Ferry de regreso y camino al mercado',
        description: 'Regreso al centro',
        icon: '⛴️',
        type: 'transport',
        details: {
          address: 'Ferry NDSM → Centraal',
          notes: 'Ferry gratuito de regreso. Luego tomar tranvía hacia Albert Cuyp.',
          links: []
        }
      },
      {
        time: '13:45',
        title: 'Mercado Albert Cuyp',
        description: 'Mercado callejero más grande y auténtico de Holanda',
        extendedDescription: 'El Mercado Albert Cuyp es el mercado al aire libre más famoso y concurrido de Ámsterdam, con más de 260 puestos que se extienden por casi un kilómetro. Aquí encontrarás desde flores frescas y tulipanes hasta stroopwafels recién hechos (galletas de caramelo calientes), quesos holandeses artesanales, arenques crudos, ropa, bolsos, recuerdos típicos y productos internacionales. El ambiente es bullicioso, colorido y auténticamente local: es donde los amsterdameses hacen sus compras diarias. Perfecto para empaparse del ambiente holandés, probar comida callejera deliciosa, comprar algún regalo único y observar la vida cotidiana de la ciudad. No te vayas sin probar poffertjes (mini crepes dulces) y un stroopwafel caliente.',
        icon: '🛒',
        type: 'activity',
        details: {
          address: 'Albert Cuypstraat, 1073 BD Ámsterdam',
          notes: 'Mercado diario con 260 puestos: comida, flores, ropa, quesos. Abierto lunes a sábado 9:00-17:00. Prueba stroopwafels frescos y poffertjes.',
          links: []
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408071/search_images/e28646ce2501c7d1b2cafdd79705c3514d0d878f.jpg', caption: 'Ambiente bullicioso y colorido del Albert Cuyp Market' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408071/search_images/5929202c43a831fdfd2eadbc6beb3d1432fb7a57.jpg', caption: 'Puestos y compradores en el mercado de Albert Cuyp, Ámsterdam' }
        ]
      },
      {
        time: '14:30',
        title: 'Almuerzo street food en el mercado',
        description: 'Especialidades holandesas',
        icon: '🍴',
        type: 'food',
        details: {
          address: 'Albert Cuypmarkt',
          notes: 'Prueba: stroopwafels recién hechos, arenque crudo (haring), kibbeling (pescado frito) y poffertjes.',
          links: []
        }
      },
      {
        time: '16:00',
        title: 'Bloemenmarkt - Mercado Flotante de Flores',
        description: 'Único mercado flotante de flores del mundo',
        extendedDescription: 'El Bloemenmarkt es el único mercado flotante de flores del mundo, ubicado en casas-barco históricas sobre el canal Singel desde 1862. Pasear entre los puestos es un festival de colores y aromas: tulipanes de todos los colores, bulbos de flores para plantar en casa, rosas, orquídeas, plantas exóticas, souvenirs de madera pintada (zuecos, molinos) y semillas. Es el lugar ideal para encontrar el regalo perfecto: bulbos de tulipán certificados para exportar, flores frescas, o simplemente disfrutar del ambiente floral holandés. La imagen de las casetas de flores flotantes con la arquitectura típica de Ámsterdam al fondo es icónica y perfecta para fotos. Abierto todos los días.',
        icon: '🌷',
        type: 'activity',
        details: {
          address: 'Singel, 1012 DH Ámsterdam',
          notes: 'Único mercado de flores flotante del mundo desde 1862. Compra bulbos de tulipán certificados para llevar a casa. Abierto todos los días 9:00-17:30.',
          links: []
        },
        images: [
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408091/search_images/47c2d02bdf9ba3720966effe6ab928dac1e012fe.jpg', caption: 'Puestos de flores flotantes sobre el canal en Bloemenmarkt' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408093/search_images/bd193c25288bc026b86c8e9c7c7355f68afcc37d.jpg', caption: 'Mercado de flores visto desde el canal y rodeado de arquitectura holandesa' },
          { url: 'https://pplx-res.cloudinary.com/image/upload/v1763408091/search_images/3d5ab62a1f8b67d6548ada037b56cf52d1e72fd2.jpg', caption: 'Variedad de tulipanes a la venta en Bloemenmarkt' }
        ]
      },
      {
        time: '17:00',
        title: 'Museumplein',
        description: 'Plaza de los museos',
        icon: '🏛️',
        type: 'activity',
        details: {
          address: 'Museumplein, 1071 DJ Ámsterdam',
          notes: 'Gran plaza con las letras "I Amsterdam", Rijksmuseum, Van Gogh Museum y Stedelijk. En diciembre hay pista de patinaje.',
          links: []
        }
      },
      {
        time: '17:30',
        title: 'Pista de hielo (opcional)',
        description: 'Patinaje sobre hielo en Museumplein',
        icon: '⛸️',
        type: 'activity',
        details: {
          address: 'Museumplein',
          notes: 'Pista temporal de invierno (noviembre-febrero). Alquiler de patines: 8€.',
          links: []
        }
      },
      {
        time: '19:30',
        title: 'Cena de despedida',
        description: 'Última cena en Ámsterdam',
        icon: '🍽️',
        type: 'food',
        details: {
          address: 'A elegir según preferencias',
          notes: 'Disfruta de una última cena especial. Opciones: cocina indonesa (herencia colonial), bitterballen o un buen restaurant junto al canal.',
          links: []
        }
      },
      {
        time: '21:30',
        title: 'Paseo nocturno por los canales',
        description: 'Última noche en Ámsterdam',
        icon: '🌙',
        type: 'activity',
        details: {
          address: 'Canales del centro',
          notes: 'Los canales iluminados de noche son mágicos. Perfecto para despedirse de la ciudad.',
          links: []
        }
      }
    ]
  },
  {
    date: '14 diciembre',
    day: 'Sábado',
    city: 'Ámsterdam',
    activities: [
      {
        time: '09:00',
        title: 'Desayuno y última mañana libre',
        description: 'Tiempo para compras de último momento',
        icon: '☕',
        type: 'food',
        details: {
          address: 'Mövenpick Hotel',
          notes: 'Desayuno final. Tiempo para pasear o comprar souvenirs.',
          links: []
        }
      },
      {
        time: '10:30',
        title: 'Check-out Mövenpick Amsterdam',
        description: 'Salida del hotel',
        icon: '🏨',
        type: 'hotel',
        details: {
          address: 'Mövenpick Hotel Amsterdam City Centre',
          notes: 'Check-out antes de las 11:00. Recoger equipaje.',
          links: []
        }
      },
      {
        time: '11:15',
        title: 'Traslado a Amsterdam Zuid',
        description: 'Camino a la estación',
        icon: '🚊',
        type: 'transport',
        details: {
          address: 'Hotel → Amsterdam Zuid station',
          notes: 'Tranvía o metro desde Centraal. Tiempo estimado: 15 minutos.',
          links: []
        }
      },
      {
        time: '12:03',
        title: 'Tren Ámsterdam - Bruselas',
        description: 'Regreso a Bruselas',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Amsterdam Zuid → Brussels Midi',
          notes: 'Tren directo. Duración: 2h 17min. Llegada: 14:20.',
          links: ['https://www.nsinternational.com']
        }
      },
      {
        time: '14:20',
        title: 'Llegada a Brussels Midi',
        description: 'Estación Bruselas Sur',
        icon: '🚆',
        type: 'transport',
        details: {
          address: 'Brussels Midi / Brussel Zuid',
          notes: 'Tiempo para tomar el autobús al aeropuerto.',
          links: []
        }
      },
      {
        time: '15:00',
        title: 'Autobús Midi - Charleroi Airport',
        description: 'Traslado al aeropuerto',
        icon: '🚌',
        type: 'transport',
        details: {
          address: 'Brussels Midi → Charleroi Airport',
          notes: 'Autobús directo. Duración: 1 hora. Llegar con tiempo suficiente para facturación.',
          links: []
        }
      },
      {
        time: '17:35',
        title: 'Vuelo Charleroi - Zaragoza',
        description: 'Regreso a casa',
        icon: '✈️',
        type: 'transport',
        details: {
          address: 'Brussels South Charleroi Airport',
          notes: 'Vuelo de regreso a Zaragoza. Facturación online recomendada.',
          links: []
        }
      },
      {
        time: '19:35',
        title: 'Llegada a Zaragoza',
        description: 'Fin del viaje',
        icon: '🏠',
        type: 'transport',
        details: {
          address: 'Aeropuerto de Zaragoza',
          notes: '¡Fin de una aventura increíble por Bélgica y Países Bajos!',
          links: []
        }
      }
    ]
  }
];

// Estado de la aplicación
let completedActivities = [];
let currentFilter = 'all';

// Iconos por tipo de actividad
const activityTypeColors = {
  transport: '#1FB8CD',
  hotel: '#FFC185',
  activity: '#B4413C',
  food: '#5D878F',
  suggestion: '#D2BA4C'
};

// Renderizar timeline
function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  
  const filteredData = itineraryData.filter(day => {
    if (currentFilter === 'all') return true;
    return day.city === currentFilter;
  });
  
  filteredData.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    dayCard.dataset.city = day.city;
    
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerHTML = `
      <h2 class="day-title">${day.day}, ${day.date}</h2>
      <span class="city-badge">
        <i class="fas fa-map-marker-alt"></i>
        ${day.city}
      </span>
    `;
    
    const activities = document.createElement('div');
    activities.className = 'activities';
    
    day.activities.forEach((activity, index) => {
      const activityId = `${day.date}-${index}`;
      const isCompleted = completedActivities.includes(activityId);
      
      const activityItem = document.createElement('div');
      activityItem.className = `activity-item ${isCompleted ? 'completed' : ''}`;
      activityItem.dataset.activityId = activityId;
      
      activityItem.innerHTML = `
        <div class="activity-icon">${activity.icon}</div>
        <div class="activity-content">
          <div class="activity-time">${activity.time}</div>
          <div class="activity-title">${activity.title}</div>
          <div class="activity-description">${activity.description}</div>
        </div>
        <div class="activity-check" onclick="toggleActivity('${activityId}', event)">
          ${isCompleted ? '<i class="fas fa-check"></i>' : ''}
        </div>
      `;
      
      activityItem.addEventListener('click', (e) => {
        if (!e.target.closest('.activity-check')) {
          showModal(activity, day);
        }
      });
      
      activities.appendChild(activityItem);
    });
    
    dayCard.appendChild(dayHeader);
    dayCard.appendChild(activities);
    timeline.appendChild(dayCard);
  });
}

// Mostrar modal con detalles
function showModal(activity, day) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalTime = document.getElementById('modalTime');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = activity.title;
  modalTime.innerHTML = `<i class="fas fa-clock"></i> ${activity.time} | ${day.day}, ${day.date}`;
  
  let detailsHTML = `
    <div class="modal-section">
      <h3><i class="fas fa-info-circle"></i> Descripción</h3>
      <p>${activity.description}</p>
    </div>
  `;
  
  if (activity.extendedDescription) {
    detailsHTML += `
      <div class="modal-section">
        <h3><i class="fas fa-book-open"></i> Qué vas a ver</h3>
        <p>${activity.extendedDescription}</p>
      </div>
    `;
  }
  
  if (activity.images && activity.images.length > 0) {
    detailsHTML += `
      <div class="modal-section">
        <h3><i class="fas fa-camera"></i> Galería de fotos</h3>
        <div class="photo-gallery">
    `;
    activity.images.forEach(image => {
      detailsHTML += `
        <div class="photo-item">
          <img src="${image.url}" alt="${image.caption}" loading="lazy">
          <p class="photo-caption">${image.caption}</p>
        </div>
      `;
    });
    detailsHTML += `
        </div>
      </div>
    `;
  }
  
  if (activity.details) {
    if (activity.details.address) {
      detailsHTML += `
        <div class="modal-section">
          <h3><i class="fas fa-map-marker-alt"></i> Dirección</h3>
          <p>${activity.details.address}</p>
        </div>
      `;
    }
    
    if (activity.details.notes) {
      detailsHTML += `
        <div class="modal-section">
          <h3><i class="fas fa-clipboard"></i> Notas importantes</h3>
          <p>${activity.details.notes}</p>
        </div>
      `;
    }
    
    if (activity.details.links && activity.details.links.length > 0) {
      detailsHTML += `
        <div class="modal-section">
          <h3><i class="fas fa-link"></i> Enlaces útiles</h3>
      `;
      activity.details.links.forEach(link => {
        detailsHTML += `<p><a href="${link}" target="_blank">${link}</a></p>`;
      });
      detailsHTML += `</div>`;
    }
  }
  
  detailsHTML += `
    <div class="modal-section">
      <span class="tag">${activity.type === 'transport' ? 'Transporte' : 
                         activity.type === 'hotel' ? 'Hotel' :
                         activity.type === 'activity' ? 'Actividad' :
                         activity.type === 'food' ? 'Gastronomía' : 'Sugerencia'}</span>
      <span class="tag">${day.city}</span>
    </div>
  `;
  
  modalBody.innerHTML = detailsHTML;
  modal.classList.add('active');
}

// Cerrar modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

// Marcar/desmarcar actividad como completada
function toggleActivity(activityId, event) {
  event.stopPropagation();
  
  const index = completedActivities.indexOf(activityId);
  if (index > -1) {
    completedActivities.splice(index, 1);
  } else {
    completedActivities.push(activityId);
  }
  
  renderTimeline();
}

// Filtrar por ciudad
function filterByCity(filter) {
  currentFilter = filter;
  
  // Actualizar botones activos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  renderTimeline();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
  
  // Filtros
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = btn.dataset.filter;
      currentFilter = filter;
      
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      renderTimeline();
    });
  });
  
  // Cerrar modal
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
      closeModal();
    }
  });
});

// Hacer disponibles funciones globalmente
window.toggleActivity = toggleActivity;
window.showModal = showModal;
window.closeModal = closeModal;

// ====================================
// FUNCIONALIDADES MEJORADAS V2.0
// ====================================

function updateCountdown(){const e=new Date("2025-12-07T00:00:00"),t=new Date,n=e-t,o=document.getElementById("countdown");o&&(n>0?(o.textContent=`⏰ Faltan ${Math.floor(n/864e5)} días y ${Math.floor(n%864e5/36e5)} horas para el viaje`):o.textContent="🎉 ¡El viaje está en marcha!")}function updateStats(){const e=document.querySelectorAll(".activity").length,t=document.querySelectorAll(".activity.completed").length,n=e>0?Math.round(t/e*100):0,o=document.getElementById("totalActivities"),c=document.getElementById("completedActivities"),i=document.getElementById("progressFill"),a=document.getElementById("progressPercent");o&&(o.textContent=e),c&&(c.textContent=t),i&&(i.style.width=n+"%"),a&&(a.textContent=n+"%"),localStorage.setItem("itineraryProgress",JSON.stringify({completed:t,total:e,percentage:n}))}function exportToPDF(){window.print()}function shareItinerary(){const e={title:"Mi Itinerario por Europa 2025",text:"Mira mi itinerario de viaje por Bruselas, Gante, Brujas, Amberes y Ámsterdam",url:window.location.href};navigator.share?navigator.share(e).catch(e=>console.log("Error:",e)):window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`,"_blank")}function resetProgress(){confirm("¿Estás seguro de que quieres reiniciar el progreso?")&&(document.querySelectorAll(".activity-checkbox").forEach(e=>{e.checked=!1}),document.querySelectorAll(".activity").forEach(e=>{e.classList.remove("completed")}),updateStats())}function setupSearch(){const e=document.getElementById("searchInput");e&&e.addEventListener("input",e=>{const t=e.target.value.toLowerCase();document.querySelectorAll(".activity").forEach(e=>{const n=(e.querySelector("h3")?.textContent.toLowerCase()||"")+(e.querySelector(".activity-description")?.textContent.toLowerCase()||"");e.style.display=n.includes(t)?"block":"none"})})}function setupFilters(){document.querySelectorAll(".chip").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".chip").forEach(e=>e.classList.remove("active")),e.classList.add("active");const t=e.dataset.filter;document.querySelectorAll(".activity").forEach(e=>{e.style.display="all"===t||e.dataset.type===t?"block":"none"})})})}function setupDayToggles(){document.querySelectorAll(".day-header").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active"),e.nextElementSibling?.classList.toggle("active")})})}function setupActivityCheckboxes(){document.querySelectorAll(".activity-checkbox").forEach(e=>{e.addEventListener("change",t=>{const n=t.target.closest(".activity");n?.classList.toggle("completed",t.target.checked),updateStats()})})}function renderItinerary(){const e=document.getElementById("timeline");e&&(e.innerHTML=itineraryData.map((e,t)=>`<div class="day-card" style="animation-delay:${.1*t}s"><div class="day-header ${0===t?"active":""}"><div class="day-info"><h2>📅 ${e.date} - ${e.day}</h2><div class="day-subtitle">📍 ${e.city}</div></div><div class="toggle-icon">▼</div></div><div class="day-content ${0===t?"active":""}"><div class="activities">${e.activities.map((n,o)=>`<div class="activity" data-type="${n.type||"other"}"><div class="activity-header"><div class="activity-title"><span class="activity-icon">${n.icon||"📌"}</span><h3>${n.title}</h3></div><span class="activity-time">${n.time}</span></div><div class="activity-description">${n.description}</div>${n.details?`<div class="activity-details">${n.details.address?`<div class="detail-item"><span>📍</span><span>${n.details.address}</span></div>`:""}${n.details.notes?`<div class="detail-item"><span>📝</span><span>${n.details.notes}</span></div>`:""}${n.coordinates?`<div class="map-container"><iframe src="https://maps.google.com/maps?q=${n.coordinates.lat},${n.coordinates.lng}&z=15&output=embed" loading="lazy" allowfullscreen></iframe></div><div class="map-buttons"><button class="btn-map" onclick="window.open('https://www.google.com/maps/search/?api=1&query=${n.coordinates.lat},${n.coordinates.lng}','_blank')">🗺️ Abrir en Google Maps</button>${o>0&&e.activities[o-1].coordinates?`<button class="btn-map secondary" onclick="window.open('https://www.google.com/maps/dir/${e.activities[o-1].coordinates.lat},${e.activities[o-1].coordinates.lng}/${n.coordinates.lat},${n.coordinates.lng}','_blank')">🚶 Cómo llegar desde anterior</button>`:""}</div>`:""}${n.gallery?.length?`<div class="gallery">${n.gallery.map(e=>`<img src="${e}" alt="${n.title}" loading="lazy">`).join("")}</div>`:""}</div>`:""}< class="checkbox-container"><input type="checkbox" class="activity-checkbox" id="activity-${t}-${o}"><label for="activity-${t}-${o}">Marcar como completada</label></div></div>`).join("")}</div></div></div>`).join(""),setupDayToggles(),setupActivityCheckboxes(),updateStats())}"undefined"!=typeof document&&document.addEventListener("DOMContentLoaded",()=>{updateCountdown(),setInterval(updateCountdown,6e4),renderItinerary(),setupSearch(),setupFilters()});
