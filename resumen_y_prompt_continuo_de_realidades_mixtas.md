Actúa como un desarrollador web experto (utiliza la habilidad global disenio-web) en Frontend (HTML5, CSS3, JavaScript ES6) y diseño de experiencias interactivas para arte multimedial.


Necesito crear una aplicación web de presentación de diapositivas (al estilo Reveal.js o Impress.js) basada en el texto "Introducción a la Realidad Aumentada y las Realidades Mixtas" de Emiliano Causa. La interfaz debe tener una estética oscura, minimalista y de alto contraste (estilo museo/galería de artes electrónicas).

### Requisitos Técnicos y de Estructura:

1. **Gestión de Imágenes Locales e Hipervínculos:**
   - En la misma carpeta del proyecto estarán las 22 imágenes nombradas estrictamente como:
     `figura1.jpg`, `figura2.jpg`, `figura3.jpg`, ..., `figura22.jpg`.
   - Cada referencia artística debe incluir botones o hipervínculos interactivos hacia los videos y sitios web oficiales de las obras documentadas.

2. **Estructura Modular por Diapositivas (con explicaciones teóricas en párrafos):**

   * **Diapositiva 1: Portada**
     - Título: INTRODUCCIÓN A LA REALIDAD AUMENTADA Y LAS REALIDADES MIXTAS
     - Subtítulo: Un recorrido desde el arte
     - Autor del texto: Emiliano Causa (Laboratorio emmeLab, UNLP)

   * **Diapositiva 2: Concepto de Realidad Aumentada (RA)**
     - Explicación teórica: Se denomina Realidad Aumentada a aquella situación en la que un entorno físico o real es "aumentado" mediante la superposición de elementos virtuales que se integran perceptivamente en la escena. Para lograr esta simulación verosímil y efectiva, es indispensable que los objetos sintéticos mantengan una rigurosa correspondencia con la perspectiva, el punto de fuga, la iluminación y el encuadre con el que el usuario o interactor observa el entorno real a través de un dispositivo.
     - Caso de estudio: *Golden Calf* (Jeffrey Shaw). En esta obra, el interactor examina un pedestal físico a través de una pantalla portable. En ella aparece un becerro de oro virtual alineado perfectamente en perspectiva sobre el pedestal, en una cita bíblica e irónica sobre la adoración tecnológica.
     - Referencia gráfica: `figura1.jpg` y `figura2.jpg`.
     - Enlaces de la obra:
       - Video: https://www.youtube.com/watch?v=paaacEIF6wU
       - Web: https://www.jeffreyshawcompendium.com/portfolio/golden-calf/

   * **Diapositiva 3: Realidad Virtual (RV) y el Par Físico/Virtual**
     - Explicación teórica: La Realidad Virtual busca la supresión total de la percepción del entorno físico mediante dispositivos de representación (pantallas HMD, auriculares, sistemas CAVE) para reemplazarlo por un mundo completamente sintético. Apoyándose en la teoría de Pierre Lévy, el texto desmitifica la oposición coloquial entre "virtual" y "real": lo virtual no se opone a lo real, sino a lo actual (lo presente). Por ende, tanto lo físico como lo virtual son dimensiones de lo real, desplazando el eje conceptual hacia la dicotomía *Entorno Físico vs. Entorno Virtual*.
     - Referencia gráfica: `figura5.jpg` (HMD HTC Vive - https://www.vive.com).

   * **Diapositiva 4: El Continuo de las Realidades Mixtas**
     - Explicación teórica: Basado en la taxonomía canónica de Paul Milgram et al. (1994), el Continuo de las Realidades Mixtas establece un gradiente de posibilidades que va desde los *Entornos Físicos* puros en el extremo izquierdo hasta los *Entornos Virtuales* (Realidad Virtual) en el extremo derecho. En el espacio intermedio convergen la Realidad Aumentada y la Virtualidad Aumentada. Este continuo demuestra que el grado de hibridación depende de cuál de los dos entornos predomina como marco contenedor de la experiencia.
     - Referencia gráfica: `figura3.jpg` (Esquema del Continuo) y `figura4.jpg` (*Augmented Sculpture* - Pablo Valbuena).
     - Enlaces de la obra:
       - Video: https://www.youtube.com/watch?v=KHWaH78Yt8Y
       - Web: http://www.pablovalbuena.com/work/augmented-sculpture-series/

   * **Diapositiva 5: Tipologías de RA - Basada en Anteojos (HMD / See Through)**
     - Explicación teórica: Fue la primera línea de desarrollo para RA. Utiliza dispositivos montados en la cabeza (*See Through Displays*) que permiten ver el entorno físico directamente o mediante cámaras (passthrough), superponiendo capas virtuales. Funcionan mediante algoritmos de visión artificial que analizan la imagen del entorno real, reconociendo patrones visuales bitonales (marcadores) para calcular la geometría de la escena e insertar el objeto sintético de forma verosímil.
     - Casos de arte y enlaces:
       - *The Artvertiser* (Julian Oliver) - Lentes modificados que detectan y reemplazan la publicidad de la vía pública por obras de arte. -> `figura6.jpg`, `figura7.jpg`, `figura8.jpg`.
         - Video: https://vimeo.com/9291451#at=3
         - Web: https://theartvertiser.com
       - *Hidden Worlds of Noise and Voice* (Levin & Lieberman) - Anteojos que transforman las emisiones de voz de los espectadores en geometrías tangibles visibles en el espacio. -> `figura9.jpg`.
         - Video: https://vimeo.com/17229647
         - Web: http://www.flong.com/projects/hwnv

   * **Diapositiva 6: Tipologías de RA - Basada en Pantallas/Monitores**
     - Explicación teórica: La masificación de dispositivos móviles (smartphones y tablets) democratizó el acceso a la Realidad Aumentada. Estos equipos reunifican en un solo soporte portable y de bajo costo todos los componentes necesarios: cámara, pantalla táctil, procesador gráfico y sensores de orientación. Actúan como una "ventana mágica" que el usuario sostiene frente al entorno físico para revelar la capa sintética superpuesta.
     - Casos de arte y enlaces:
       - *Mirages et Miracles* (Adrian M & Claire B) - Dispositivos móviles que revelan relatos poéticos y animaciones sintéticas sobre piedras y dibujos físicos. -> `figura10.jpg`.
         - Video 1: https://www.youtube.com/watch?v=KnUkws_zNxg
         - Video 2: https://www.youtube.com/watch?v=2OrWfrF03PE
         - Web: https://www.am-cb.net/projets/mirages-miracles
       - *Frenchising Mona Lisa* (Amir Baradaran) - Aplicación que, al apuntar a la Gioconda, despliega una performance virtual del personaje envolviéndose en la bandera francesa. -> `figura11.jpg`.
         - Video: https://vimeo.com/19395837
         - Web: http://amirbaradaran.com/ab_futarism_monalisa.php

   * **Diapositiva 7: Tipologías de RA - Basada en Video-Mapping (Proyección)**
     - Explicación teórica: A diferencia de los anteojos y pantallas que proponen una vivencia individual o restringida, el video-mapping permite experiencias colectivas de Realidad Aumentada. Consiste en proyectar luz sobre estructuras físicas tridimensionales, haciendo coincidir exactamente la geometría de los fotogramas digitales con los volúmenes reales. Esto genera ilusiones ópticas volumétricas, dinámicas y compartidas por todo el público sin necesidad de utilizar pantallas mediadoras.
     - Casos de arte y enlaces:
       - *Augmented Sculpture* (Pablo Valbuena) - Proyección de líneas de luz sobre estructuras geométricas de madera blanca. -> `figura12.jpg`.
         - Web: http://www.pablovalbuena.com/augmented/augmented-sculpture/
       - *Omote* (Asai et al.) - Sistema de proyección dinámico con tracking en tiempo real que transforma el rostro de una performer en movimiento. -> `figura13.jpg`.
         - Video: https://www.youtube.com/watch?v=eVNDYgMrvUU
         - Web: https://www.nobumichiasai.com/post/138919147877/omote-real-time-face-tracking-projection
       - *Box* (Bot Dolly) - Brazos robóticos industriales que mueven paneles físicos en perfecta sincronía con proyecciones y una cámara móvil. -> `figura14.jpg`.
         - Video: https://www.youtube.com/watch?v=IX6JcybgDFo
         - Web: https://gmunk.com/BOX

   * **Diapositiva 8: Tipologías de RA - Geolocalizada (Intervención del Espacio)**
     - Explicación teórica: Modalidad que ancla los elementos virtuales a coordenadas geográficas precisas (vía GPS) en lugar de patrones visuales. Al asociar la información digital con un lugar físico específico, las obras se transforman en intervenciones *site-specific* virtuales. Esta vertiente genera intensos debates sobre la soberanía territorial y la privacidad del espacio público y privado, demostrando cómo lo virtual puede intervenir políticamente un espacio real sin requerir autorización institucional.
     - Casos de arte y enlaces:
       - *Infiltrating the Oval Office & Pentagon*, *MoMA AR*, *Manifest.AR* (Sander Veenhof) - Intervenciones virtuales no autorizadas en edificios gubernamentales, en el museo MoMA de Nueva York y en el pabellón de la Bienal de Venecia. -> `figura15.jpg`, `figura16.jpg`, `figura17.jpg`.
         - Videos: https://www.youtube.com/watch?v=wyEy2DLu7Wk | https://www.youtube.com/watch?v=b9T2LVM7ynM | https://vimeo.com/26573455
         - Webs: https://www.layar.com/news/blog/tags/oval-office/ | http://www.sndrv.nl/moma/ | http://sndrv.nl/stop/
       - *Red Libre - Red Visible* (Clara Boj y Diego Díaz) - Visualización tridimensional en RA del flujo de datos e información que transita por las redes Wi-Fi urbanas. -> `figura18.jpg`.
         - Video: https://www.youtube.com/watch?v=KJDxbzJAlaO
         - Web: http://www.banquete.org/banquete05/visualizacion.php?id=73
       - *All Hail Damien Hirst!* (Tamiko Thiel) - Satírica intervención geolocalizada en el Tate Modern que hace llover monedas virtuales sobre la figura del cotizado artista. -> `figura19.jpg`.
         - Video: https://www.youtube.com/watch?v=On417tdUxFA
         - Web: http://www.allhaildamienhirst.com/

   * **Diapositiva 9: Virtualidad Aumentada (VA)**
     - Explicación teórica: En la Virtualidad Aumentada ocurre una inversión conceptual respecto de la RA: el marco o contenedor principal de la experiencia es un *entorno virtual* (un espacio digital tridimensional o sintético), y lo que se suma o introduce en él son *elementos u objetos físicos* reales (como las manos del usuario o interfaces tangibles). Los elementos del mundo físico ingresan al entorno sintético para modificarlo, manipularlo o habitarlo.
     - Casos de arte y enlaces:
       - *Delicate Boundaries* (Chris Sugrue) - Organismos virtuales dentro de un monitor que "se escapan" e infestan la piel de la mano física cuando el espectador toca la pantalla. -> `figura20.jpg`.
         - Video: https://vimeo.com/1007230
         - Web: http://csugrue.com/delicate-boundaries/
       - *ReacTable* (Sergi Jordà et al.) - Mesa de síntesis sonora interactiva donde objetos físicos de acrílico con marcadores bitonales controlan módulos de sonido virtuales. -> `figura21.jpg`.
         - Video: https://www.youtube.com/watch?v=Mgy1S8qymx0
         - Web: http://reactable.com/
       - *UNMAKEABLELOVE* (Sarah Kenderdine & Jeffrey Shaw) - Habitáculo con un entorno virtual oscuro poblado por seres sintéticos que los espectadores iluminan usando linternas físicas. -> `figura22.jpg`.
         - Video: https://www.youtube.com/watch?time_continue=233&v=fOVoCfyLmWw
         - Web: http://unmakeablelove.org/

   * **Diapositiva 10: Conclusión**
     - Explicación teórica: La hibridación entre "bits y átomos" planteada por Nicholas Negroponte evidencia cómo la cultura digital ha atravesado la realidad física. Las entidades virtuales han dejado de estar confinadas en el aislamiento de la Realidad Virtual para pasar a habitar e intervenir nuestro entorno cotidiano. Las Realidades Mixtas otorgan al arte contemporáneo un campo fértil para problematizar la territorialidad, la soberanía del espacio y el ilusionismo tecno-poético, haciendo que la representación digital adquiera una presencia más real que nunca.

3. **Funcionalidades de Navegación e Interacción:**
   - Controles por teclado: Teclas de flecha `Izquierda` / `Derecha` o `Espacio` para cambiar de diapositiva.
   - Indicador de progreso (Barra de progreso inferior o número de slide `[ 3 / 10 ]`).
   - Botones o hipervínculos interactivos integrados en cada ficha artística que abran el video o la web en una nueva pestaña (`target="_blank"`).
   - Layout responsive tipo Grid/Flexbox: Columna izquierda con el texto explicativo y enlaces; columna derecha con el visor interactivo de la figura/imagen.
   - Modo de pantalla completa (botón o tecla `F`).